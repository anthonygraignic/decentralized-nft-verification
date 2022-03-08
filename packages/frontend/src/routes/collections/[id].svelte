<script context="module">
	import apolloClient from '$lib/apollo-client';
	import { GET_COLLECTION } from '$lib/kleros-curated/queries';
	import { convertLitemToCollection } from '$lib/utils/litem';

	const client = apolloClient;
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ params }) {
		try {
			const klerosCuratedCollection = await client.query({
				variables: { id: params.id },
				query: GET_COLLECTION
			});

			const collection = convertLitemToCollection(klerosCuratedCollection.data.litem);

			return {
				status: klerosCuratedCollection.networkStatus,
				props: {
					collection
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
	import Request from '../../components/Kleros/Request.svelte';
	import AddressLinkWrapper from '../../components/Blockchain/AddressLinkWrapper.svelte';

	export let collection;
</script>

<main class="container mx-4">
	<div class="grid sm:grid-cols-2 grid-cols-1">
		<div class="flex justify-center">
			<img src={collection.thumbnail} alt="{collection.name} logo" />
		</div>
		<div class="flex flex-col items-end space-y-2">
			<h1>{collection.name}</h1>

			<p>Status: <b>{collection.status}</b></p>

			<p class="break-words text-right">
				Contract Address:
				<AddressLinkWrapper address={collection.address}>{collection.address}</AddressLinkWrapper>
			</p>

			<a href={collection.proof}>Proof of Authenticity</a>

			<h2>Requests</h2>
			{#each collection.requests as request}
				<Request {request} />
			{/each}
		</div>
	</div>
</main>
