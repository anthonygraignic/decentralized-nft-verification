<script>
	import apolloClient from '$lib/apollo-client';
	import { COLLECTIONS } from '$lib/kleros-curated/queries';
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
			const klerosCuratedListResults = await client.query({
				variables: { search: searchText },
				query: COLLECTIONS
			});
			loading = klerosCuratedListResults.loading;

			if (klerosCuratedListResults.data) {
				results = klerosCuratedListResults.data.litems.map((litem) => {
					if (!(litem.props && litem.requests)) {
						loading = false;
						error = 'Error on Kleros Curated list result';
					}

					return convertLitemToCollection(litem);
				});
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
<SearchBar bind:searchText on:search={() => search()} />
<ErrorComponent {error}>
	<SearchResults {results} {loading} />
</ErrorComponent>
