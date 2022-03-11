<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import '../app.css';
</script>

<div class="min-h-screen bg-vblue text-white">
	<Header />
	<slot />
	<Footer />
</div>
