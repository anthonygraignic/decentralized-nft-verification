<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import '../app.css';
</script>

<div class="wrapper">
	<Header />
	<slot />
	<Footer />
</div>

<style lang="postcss">
	.wrapper {
		@apply min-h-screen bg-vblue text-white;
	}
</style>
