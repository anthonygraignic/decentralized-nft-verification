<script>
	import apolloClient from '$lib/apollo-client';
	import { COLLECTIONS, COLLECTIONS_BY_CONTRACT_ADDRESS } from '$lib/kleros-curated/queries';
	import { convertLitemToCollection } from '$lib/utils/litem';

	import ErrorComponent from '../ErrorComponent.svelte';
	import SearchBar from './SearchBar.svelte';
	import SearchResults from './SearchResults.svelte';

	const client = apolloClient;

	let searchText;
	let loading = false;
	let error;
	let results;

	async function search() {
		loading = true;
		try {
			let klerosCuratedListResults = undefined;
			if (searchText.startsWith('0x') || searchText.startsWith('0X')) {
				// Search by contract address
				klerosCuratedListResults = await client.query({
					variables: { contractAddress: searchText.toLowerCase() },
					query: COLLECTIONS_BY_CONTRACT_ADDRESS
				});
			} else {
				// Search by name
				klerosCuratedListResults = await client.query({
					variables: { search: searchText },
					query: COLLECTIONS
				});
			}

			loading = klerosCuratedListResults.loading;

			if (klerosCuratedListResults.data) {
				if (klerosCuratedListResults.data.litems) {
					results = klerosCuratedListResults.data.litems.map((litem) => {
						if (!(litem.props && litem.requests)) {
							loading = false;
							error = 'Error on Kleros Curated list result';
						}

						return convertLitemToCollection(litem);
					});
				}

				if (klerosCuratedListResults.data.itemSearch) {
					results = klerosCuratedListResults.data.itemSearch.map((litem) => {
						if (!(litem.props && litem.requests)) {
							loading = false;
							error = 'Error on Kleros Curated list result';
						}

						return convertLitemToCollection(litem);
					});
				}
			} else {
				loading = false;
				error =
					JSON.stringify(klerosCuratedListResults.error) ||
					'Error getting data from Kleros Curated List subgraph';
			}
		} catch (err) {
			loading = false;
			error = JSON.stringify(err) || 'Error getting data from Kleros Curated List subgraph';
		}
	}
</script>

<!-- Make a store for last searches & make an autocomplete search bar -->
<SearchBar bind:searchText on:search={() => search()} on:clear={() => (results = [])} />
<ErrorComponent {error}>
	<SearchResults {results} {loading} />
</ErrorComponent>
