import { vars } from '$lib/env-variables';

export function convertToIpfsGatewayLink(klerosIpfsUri: string): string {
	if (klerosIpfsUri.startsWith('/ipfs')) {
		return vars.IPFS_GATEWAY_URL + klerosIpfsUri;
	} else {
		return klerosIpfsUri;
	}
}
