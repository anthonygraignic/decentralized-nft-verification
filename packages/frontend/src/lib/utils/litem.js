// TODO migrate to TS

import { vars } from '$lib/env-variables';
import { timestampinSecondsToDate } from './date-utils';

// TODO improve search loops
export function convertLitemToCollection(litem) {
	console.log(litem);

	const name = litem.props.find((element) => element.label === 'Name');
	const address = litem.props.find((element) => element.label === 'Collection');

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
		name: name?.value,
		address: address?.value,
		proof,
		thumbnail,
		verifiedDate: timestampinSecondsToDate(verifiedRequest.submissionTime),
		requests: litem.requests
	};
}
