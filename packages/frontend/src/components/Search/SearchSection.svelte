<script>
	import SearchBar from './SearchBar.svelte';
	import SearchResults from './SearchResults.svelte';

	let results;
	let searchText;

	function search() {
		results = [
			{
				name: 'CLONE X - X TAKASHI MURAKAMI',
				address: '0xb794f5ea0ba39494ce839613fffba74279579268',
				verifiedDate: new Date()
			}
		];
	}
</script>

<!-- Make a store for last searches & make an autocomplete search bar -->
<SearchBar bind:searchText on:search={search} />
<SearchResults {results} />
