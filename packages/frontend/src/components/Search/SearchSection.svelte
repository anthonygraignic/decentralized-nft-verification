<script>
	import apolloClient from '$lib/apollo-client';
	import { gql } from '@apollo/client/core';

	const client = apolloClient;

	import SearchBar from './SearchBar.svelte';
	import SearchResults from './SearchResults.svelte';

	let searchText;
	let loading = false;
	let results;

	// Using keyword search rather for simplicity's sake
	const COLLECTIONS = gql`
		query searchCollections($search: String) {
			litems(
				where: {
					registry: "0x2f19f817bbf800b487b7f2e51f24ad5ea0222463"
					keywords_contains: $search
				}
			) {
				id
				itemID
				data
				keywords
				status
				numberOfRequests
				data
				props {
					id
					label
					value
				}
				requests {
					id
					submissionTime
					resolved
					challenger
					requestType
				}
			}
		}
	`;

	async function search() {
		loading = true;
		const klerosCuratedListResults = await client.query({
			variables: { search: searchText },
			query: COLLECTIONS
		});
		loading = klerosCuratedListResults.loading;

		results = klerosCuratedListResults.data.litems.map((litem) => {
			if (!(litem.props && litem.requests)) {
				//TODO Error
				return {};
			}

			const name = litem.props.find((element) => element.label === 'Name');
			const address = litem.props.find((element) => element.label === 'Collection');

			const verifiedRequest = litem.requests.find(
				(element) => element.requestType === 'RegistrationRequested'
			);

			return {
				name: name?.value,
				address: address?.value,
				verifiedDate: new Date(verifiedRequest.submissionTime * 1000)
			};
		});
	}
</script>

<!-- Make a store for last searches & make an autocomplete search bar -->
<SearchBar bind:searchText on:search={() => search()} />
<SearchResults {results} {loading} />
