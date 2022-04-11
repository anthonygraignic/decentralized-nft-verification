import { convertIpfsUritoPathLink } from '$lib/utils/ipfs-utils';

// This sounds like a bad idea, should rely on the Kleros UI or our own registry ?
// TODO check version of policy before submitting and alert use if not up-to-date
export function transformToGTCRItem(columns, fields) {
	return {
		columns,
		values: {
			Thumbnail: convertIpfsUritoPathLink(fields.thumbnail),
			Name: fields.name,
			Author: fields.author,
			Collection: fields.address,
			// "Token ID":''
			'Chain ID': fields.chainId,
			Webpage: fields.website || '',
			Proof: convertIpfsUritoPathLink(fields.proof) || '',
			Attribution: fields.attribution || ''
		}
	};
}
