<script>
	import { isCollectionStatusRegistered } from '$lib/mapper/litem';
	import { shortenAddress } from '$lib/utils/blockchain-utils';

	export let collection;
	export let loading = false;
</script>

<a
	href="/collections/{collection.id}"
	sveltekit:prefetch
	class:a--loading={loading}
	class:card--loading={loading}
>
	<dl>
		<dt class:dt--loading={loading}>Name</dt>
		<dd>{collection.name || ''}</dd>
		<dt class:dt--loading={loading}>NFT Contract Address</dt>
		<dd>{shortenAddress(collection.address)}</dd>
		{#if isCollectionStatusRegistered(collection.status)}
			<dt>Date of Verification</dt>
			{#if collection.verifiedDate}
				<dd>{collection.verifiedDate.toLocaleString()}</dd>
			{/if}
		{:else}
			<p class:p--loading={loading}>Verification failed ❌️</p>
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
	.dt--loading {
		@apply rounded bg-vblue-light mb-2 text-transparent;
	}
	.p--loading {
		@apply rounded bg-vblue-light h-10 mb-2 text-transparent;
	}
	.card--loading {
		@apply animate-pulse rounded w-full h-full bg-vblue-ligther;
	}
</style>
