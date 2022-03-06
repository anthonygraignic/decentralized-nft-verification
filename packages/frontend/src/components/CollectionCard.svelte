<script>
	export let collection;
</script>

<div class="rounded-lg bg-white text-black py-5 px-2">
	<dl>
		<dt>Name</dt>
		<dd>{collection.name}</dd>
		<dt>NFT Contract Address</dt>
		<dd>{collection.address}</dd>
		<dt>Date of Verification</dt>
		{#if collection.verifiedDate}
			<dd>{collection.verifiedDate.toLocaleString()}</dd>
		{/if}
	</dl>
</div>

<style lang="postcss">
	dt {
		@apply text-sm;
	}
	dd {
		@apply font-bold break-all;
	}
</style>
