<script>
	export let bg = null;
</script>

<header class="p-5 bg-vblue text-white" class:bg--white={bg === 'white'}>
	<a href="/" class="flex md:justify-center justify-end items-center decoration-transparent">
		{#if bg === 'white'}
			<img src="/logo-blue.svg" alt="" />
		{:else}
			<img src="/logo.svg" alt="" />
		{/if}
		<p class="text-4xl font-bold mx-4 md:flex hidden">Verification DAO (alpha)</p>
	</a>
</header>

<style lang="postcss">
	.bg--white {
		@apply bg-white text-black;
	}
</style>
