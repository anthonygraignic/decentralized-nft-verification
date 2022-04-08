import { vars } from '$lib/env-variables';

/**
 * Convert a Kleros IPFS link e.g. /ipfs/.../item.json to a HTTP URL with the env preferred gateway
 * @param klerosIpfsUri
 * @returns URL to the IPFS Gateway or the initial link if not recognized
 */
export function convertToIpfsGatewayLink(klerosIpfsUri: string): string {
	if (klerosIpfsUri.startsWith('/ipfs')) {
		return vars.IPFS_GATEWAY_URL + klerosIpfsUri;
	} else {
		return klerosIpfsUri;
	}
}

/**
 * Convert a ipfs://... URI to /ipfs/...
 * @param uri
 * @returns IPFS link /ipfs/ or the initial link if not recognized
 */
export function convertIpfsUritoPathLink(uri: string): string {
	// only handle uri for now (not gateway...)
	if (uri && uri.startsWith('ipfs://')) {
		return uri.replace('ipfs://', '/ipfs/');
	} else {
		return uri;
	}
}
