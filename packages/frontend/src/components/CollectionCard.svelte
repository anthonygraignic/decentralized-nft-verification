<script>
	export let collection;
</script>

<a href="/collections/{collection.id}" sveltekit:prefetch>
	<dl>
		<dt>Name</dt>
		<dd>{collection.name || ''}</dd>
		<dt>NFT Contract Address</dt>
		<dd>{collection.address || ''}</dd>
		<dt>Date of Verification</dt>
		{#if collection.verifiedDate}
			<dd>{collection.verifiedDate.toLocaleString()}</dd>
		{/if}
	</dl>
</a>

<style lang="postcss">
	dt {
		@apply text-sm;
	}
	dd {
		@apply font-bold break-all;
	}

	a {
		@apply bg-white text-black rounded-lg py-5 px-2;
		text-decoration: none;
	}
	a:hover,
	a:focus {
		@apply bg-vblue-ligther ring-2 ring-white;
	}
</style>
