<script>
	import SearchSection from '../components/Search/SearchSection.svelte';
</script>

<main>
	<div class="titles">
		<h1>Verified NFT Search</h1>
		<h2>Search</h2>
	</div>
	<p>Decentralized NFT collection verification for collectors, creators and developers.</p>

	<SearchSection />
</main>

<style lang="postcss">
	main {
		@apply container px-5 mx-auto bg-cover md:bg-contain bg-left-top md:bg-top bg-no-repeat;
		background-image: url('/bg.png');
		min-height: 70vh;
	}
	.titles {
		@apply md:hidden;
	}
	p {
		@apply text-center hidden md:block;
	}
</style>
