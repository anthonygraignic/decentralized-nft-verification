<script context="module">
	import apolloClient from '$lib/apollo-client';
	import { convertLitemToCollection } from '$lib/mapper/litem';
	import { getCollectionById, getFilesfromIpfs } from '$lib/kleros-curated/api';

	const client = apolloClient;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params, fetch }) {
		try {
			const klerosCuratedCollection = await getCollectionById(client, params.id);

			// Get files from IPFS
			const { registry, evidenceFiles } = await getFilesfromIpfs(
				fetch,
				klerosCuratedCollection.data.litem
			);
			// @ts-ignore
			registry.address = klerosCuratedCollection.data.litem.registryAddress;

			// Build to View object
			const collection = convertLitemToCollection(
				klerosCuratedCollection.data.litem,
				evidenceFiles
			);

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
	import { isCollectionStatusRegistered } from '$lib/mapper/litem';
	import AddressLinkWrapper from '../../components/Blockchain/AddressLinkWrapper.svelte';
	import StatusBadge from '../../components/StatusBadge.svelte';
	import SubmissionTimeline from '../../components/Kleros/SubmissionTimeline.svelte';
	import RegistryInfo from '../../components/Kleros/RegistryInfo.svelte';

	export let collection;
	export let registry;
</script>

<main>
	<div class="collection__info">
		<img src={collection.thumbnail} alt="{collection.name} logo" class="logo" />
		<h1 class:text-red-500={!isCollectionStatusRegistered(collection.status)}>
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
			{#if collection.tokenId}
				<dt>Token ID</dt>
				<dd>
					{collection.tokenId}
				</dd>
			{/if}
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
	<div class="collection__submission">
		<hr />
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
	main {
		@apply grid grid-cols-1 justify-items-center;
	}
	.collection__info {
		@apply flex flex-col justify-center px-4 max-w-3xl;
	}
	h1 {
		@apply text-center;
	}
	.logo {
		@apply max-h-36 mx-auto;
	}
	.collection__submission {
		@apply flex flex-col items-center justify-items-center space-y-7 mb-10 max-w-3xl;
	}
	hr {
		@apply mt-5 w-full border-t border-vgray-light;
	}
	dt {
		@apply mt-5;
	}
	dd {
		@apply font-bold;
	}
</style>
