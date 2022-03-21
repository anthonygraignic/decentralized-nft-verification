// TODO migrate to TS

import { CHALLENGE_PERIOD_IN_SECONDS, timestampinSecondsToDate } from './date-utils';
import { convertToIpfsGatewayLink } from './ipfs-utils';

// TODO improve search loops
export function convertLitemToCollection(litem) {
	console.log(litem);

	const name = litem.props.find((element) => element.label === 'Name')?.value;
	const address = litem.props.find((element) => element.label === 'Collection')?.value;
	const chainId = litem.props.find((element) => element.label === 'Chain ID')?.value;

	const author = litem.props.find((element) => element.label === 'Author')?.value;
	const attribution = litem.props.find((element) => element.label === 'Attribution')?.value;

	// TODO handle errors
	// convert bad formatted IPFS link
	let proof;
	const proofProp = litem.props.find((element) => element.label === 'Proof');
	if (proofProp && proofProp.value) {
		proof = convertToIpfsGatewayLink(proofProp.value);
	}
	let thumbnail;
	const thumbnailProp = litem.props.find((element) => element.label === 'Thumbnail');
	if (thumbnailProp && thumbnailProp.value) {
		thumbnail = convertToIpfsGatewayLink(thumbnailProp.value);
	}
	const verifiedRequest = litem.requests.find(
		(element) => element.requestType === 'RegistrationRequested'
	);

	return {
		id: litem.id,
		status: litem.status,
		chainId,
		name,
		address,
		author,
		attribution,
		proof,
		thumbnail,
		verifiedDate: timestampinSecondsToDate(
			parseInt(verifiedRequest.submissionTime) + CHALLENGE_PERIOD_IN_SECONDS
		),
		requests: litem.requests
	};
}

export async function getEvidencefromIpfs(fetch, litem) {
	if (litem) {
		let registry = {};
		for (const request of litem.requests) {
			console.log(request);

			if (request.metaEvidence) {
				const metaEvidenceRequest = await fetch(convertToIpfsGatewayLink(request.metaEvidence.URI));
				const metaEvidence = await metaEvidenceRequest.json();
				console.log(metaEvidence);
				registry = extractRegistryInfo(metaEvidence);
			}

			for (const round of request.rounds) {
				if (round.metaEvidence) {
					const metaEvidenceRequest = await fetch(convertToIpfsGatewayLink(round.metaEvidence.URI));
					const metaEvidence = await metaEvidenceRequest.json();
					console.log(metaEvidence);
				}
			}
		}
		return { registry, evidence: '' };
	}
}

/**
 * Extract Registry information from metaevidence JSON file
 * @param {*} metaEvidence
 * @returns
 */
export function extractRegistryInfo(metaEvidence) {
	return {
		tcrTitle: metaEvidence.metadata.tcrTitle,
		tcrDescription: metaEvidence.metadata.tcrDescription,
		logo: metaEvidence.metadata.logoURI,
		fileURI: metaEvidence.fileURI,
		version: getPolicyVersionFromUri(metaEvidence.fileURI)
	};
}

/**
 * Extract the policy version from its URI containing its file's name e.g. policy0.3.pdf
 * @param {string} fileURI
 * @returns
 */
export function getPolicyVersionFromUri(fileURI) {
	const policyVersion = fileURI.split('/')[3].split('.pdf')[0].replace('policy', '');
	if (policyVersion === '') {
		return '0';
	} else {
		return policyVersion || '???';
	}
}

/**
 * Check if the status of a collection is Registered.
 * Either because there were no challenge during the allocated period or because the court decided so.
 * @param {*} status
 * @returns
 */
export function isCollectionStatusRegistered(status) {
	return status === 'Registered' || status === 'ClearingRequested';
}
