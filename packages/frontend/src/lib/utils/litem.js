// TODO migrate to TS

import { vars } from '$lib/env-variables';
import { CHALLENGE_PERIOD_IN_SECONDS, timestampinSecondsToDate } from './date-utils';

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
		if (proofProp.value.startsWith('/ipfs')) {
			proof = vars.IPFS_GATEWAY_URL + proofProp.value;
		} else {
			proof = proofProp.value;
		}
	}
	let thumbnail;
	const thumbnailProp = litem.props.find((element) => element.label === 'Thumbnail');
	if (thumbnailProp && thumbnailProp.value) {
		if (thumbnailProp.value.startsWith('/ipfs')) {
			thumbnail = vars.IPFS_GATEWAY_URL + thumbnailProp.value;
		} else {
			thumbnail = thumbnailProp.value;
		}
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


/**
 * Check if the status of a collection is Registered.
 * Either because there were no challenge during the allocated period or because the court decided so.
 * @param {*} status
 * @returns
 */
export function isCollectionStatusRegistered(status) {
	return status === 'RegistrationRequested';
	// return status === 'Registered' || status === 'ClearingRequested';
}
