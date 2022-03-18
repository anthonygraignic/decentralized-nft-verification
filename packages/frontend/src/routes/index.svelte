<script>
	import SearchSection from '../components/Search/SearchSection.svelte';
</script>

<main class="container px-5 mx-auto bg-cover md:bg-contain bg-left-top md:bg-top bg-no-repeat">
	<h1>Verified NFT Search</h1>
	<h2>Search</h2>

	<SearchSection />
</main>

<style lang="postcss">
	main {
		background-image: url('/bg.png');
		min-height: 70vh;
	}
</style>
