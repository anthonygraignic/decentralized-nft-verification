<script>
	import apolloClient from '$lib/apollo-client';
	import { searchCollection } from '$lib/kleros-curated/api';
	import { convertLitemToCollection } from '$lib/mapper/litem';

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
			let klerosCuratedListResults = await searchCollection(client, searchText);

			loading = klerosCuratedListResults.loading;

			if (klerosCuratedListResults.data && klerosCuratedListResults.data.litems) {
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

<!-- TODO Make a store for last searches & make an autocomplete search bar -->
<SearchBar bind:searchText on:search={() => search()} on:clear={() => (results = [])} />
<ErrorComponent {error}>
	<SearchResults {results} {loading} />
</ErrorComponent>
