<script>
	import { fade } from 'svelte/transition';
	import CollectionCard from '../CollectionCard.svelte';

	export let results;
	export let loading = false;
</script>

{#if loading}
	<div class="flex items-center justify-center mx-4 my-2">
		<svg
			class="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-black"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg>
		<p>Searching...</p>
	</div>
{:else if results}
	<!--  -->
	{#if results.length > 0}
		<div class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-4" in:fade>
			{#each results as collection}
				<CollectionCard {collection} />
			{/each}
		</div>
	{:else}
		<p in:fade>No results</p>
	{/if}
{/if}
