<script>
	import SupportedRegistry from '../components/SupportedRegistry.svelte';

	// TODO put it in a beautiful JSON file in Github
	export let supportedRegistries = [
		{
			name: 'Authentic NFTs',
			address: '0xD5994f15BE9987104D9821AA99d1C97227c7C08c',
			klerosLink:
				'https://curate.kleros.io/tcr/0xD5994f15BE9987104D9821AA99d1C97227c7C08c?chainId=100',
			sourceLink: 'https://gitlab.com/mizu_eth/nft-registries'
		},
		{
			name: 'Authentic NFT Collection',
			address: '0x2F19F817BBF800B487b7F2E51f24aD5Ea0222463',
			klerosLink:
				'https://curate.kleros.io/tcr/0x2F19F817BBF800B487b7F2E51f24aD5Ea0222463?chainId=100',
			sourceLink: 'https://gitlab.com/mizu_eth/nft-registries'
		}
	];
</script>

<main class="container px-5">
	<h1 class="mb-4">List of supported registries</h1>
	<p>Finds all the supported registries that are aggregated by VerificationDAO.</p>
	<div class="grid grid-flow-row md:grid-cols-4 grid-cols-1 gap-2 m-2">
		{#each supportedRegistries as registry}
			<SupportedRegistry {registry} />
		{/each}
	</div>
</main>
