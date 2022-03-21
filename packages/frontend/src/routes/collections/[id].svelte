<script context="module">
	import apolloClient from '$lib/apollo-client';
	import { GET_COLLECTION } from '$lib/kleros-curated/queries';
	import { convertLitemToCollection, getEvidencefromIpfs } from '$lib/utils/litem';

	const client = apolloClient;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		try {
			// Get collection from Kleros Curated subgraph
			const klerosCuratedCollection = await client.query({
				variables: { id: params.id },
				query: GET_COLLECTION
			});

			// Get evidences from IPFS
			const { registry } = await getEvidencefromIpfs(fetch, klerosCuratedCollection.data.litem);
			registry.address = klerosCuratedCollection.data.litem.registryAddress;

			// Build to View object
			const collection = convertLitemToCollection(klerosCuratedCollection.data.litem);

			return {
				status: klerosCuratedCollection.networkStatus,
				props: {
					collection,
					registry
				}
			};
		} catch (err) {
			return {
				error: err
			};
		}
	}
</script>

<script>
	import { getChainNameFromIdStr } from '$lib/utils/blockchain-utils';
	import { isCollectionStatusRegistered } from '$lib/utils/litem';
	import AddressLinkWrapper from '../../components/Blockchain/AddressLinkWrapper.svelte';
	import StatusBadge from '../../components/StatusBadge.svelte';
	import SubmissionTimeline from '../../components/Kleros/SubmissionTimeline.svelte';
	import RegistryInfo from '../../components/Kleros/RegistryInfo.svelte';

	export let collection;
	export let registry;
</script>

<main class="grid grid-cols-1 justify-items-center">
	<div class="flex flex-col justify-center px-4">
		<img src={collection.thumbnail} alt="{collection.name} logo" class="max-h-36 mx-auto" />
		<h1 class="text-center" class:text-red-500={!isCollectionStatusRegistered(collection.status)}>
			{collection.name}
		</h1>
		<StatusBadge status={collection.status} />
		<dl>
			<dt>NFT Contract Address</dt>
			<dd class="break-words">
				<AddressLinkWrapper address={collection.address}>{collection.address}</AddressLinkWrapper>
			</dd>
			<dt>Created by</dt>
			<dd>{collection.author}</dd>
			<dt>Proof</dt>
			<dd>
				{#if collection.proof}
					<a href={collection.proof} rel="external noopener" target="_blank">View proof on IPFS</a>
				{:else}
					No proof submitted.
				{/if}
			</dd>

			<dt>Blockchain</dt>
			<dd>
				{getChainNameFromIdStr(collection.chainId)}
			</dd>

			<dt>Verification Registry</dt>
			<dd>
				<RegistryInfo {registry} />
			</dd>
		</dl>
	</div>
	<div class="flex flex-col items-center justify-items-center space-y-7 mb-10">
		<hr class="mt-5 w-full border-t border-vgray-light" />
		<h2>Submission details</h2>

		<!-- <p>Type: <em>...</em></p>
			<h2>Audit/Security</h2>
			<p>0 vulnerabilities</p>
			<p>Metadata: <b>on-chain</b></p>
			<p>Media stored on: <b>IPFS</b></p> -->
		<div class="px-4">
			<SubmissionTimeline {collection} />
		</div>

		<!-- <h2>Community info</h2>
			<p>Carbon compensation ?</p> -->
	</div>
</main>

<style lang="postcss">
	dt {
		@apply mt-5;
	}
	dd {
		@apply font-bold;
	}
</style>
