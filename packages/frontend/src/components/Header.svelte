<script>
	export let bg = null;
</script>

<header class:bg--white={bg === 'white'}>
	<a href="/">
		{#if bg === 'white'}
			<img src="/logo-blue.svg" alt="" />
		{:else}
			<img src="/logo.svg" alt="" />
		{/if}
		<p>Verification DAO (alpha)</p>
	</a>
</header>

<style lang="postcss">
	header {
		@apply p-5 bg-vblue text-white;
	}
	a {
		@apply flex md:justify-center justify-end items-center decoration-transparent;
	}
	.bg--white {
		@apply bg-white text-black;
	}
	p {
		@apply text-4xl font-bold mx-4 md:flex hidden;
	}
</style>
