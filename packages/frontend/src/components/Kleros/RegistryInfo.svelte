<script>
	import { convertToIpfsGatewayLink } from '$lib/utils/ipfs-utils';
	export let registry = {
		address: '0x2F19F817BBF800B487b7F2E51f24aD5Ea0222463',
		tcrTitle: 'Authentic NFT Collection Registry',
		tcrDescription: 'A list of authentic NFT collections',
		fileURI: 'ipfs://QmQyEgs7r3TnBZtQaRENjfBVPCJsPWXAj3JrN8dCbsyHjQ/policy.pdf',
		version: 2
	};
</script>

<!-- TODO update chainId from registry? -->
<a
	href="https://curate.kleros.io/tcr/{registry.address}?chainId=100"
	rel="external noopener"
	target="_blank">{registry.tcrTitle}</a
>
<p>{registry.tcrDescription}</p>
<a href={convertToIpfsGatewayLink(registry.fileURI)} rel="external noopener" target="_blank"
	>Policy, version {registry.version}</a
>
