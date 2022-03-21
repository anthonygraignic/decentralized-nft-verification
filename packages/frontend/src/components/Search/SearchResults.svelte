<script>
	import { fade } from 'svelte/transition';
	import CollectionCard from '../CollectionCard.svelte';

	export let results;
	export let loading = false;
</script>

<div class="grid grid-flow-row sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-4" in:fade>
	{#if loading}
		{#each Array.from(Array(6).keys()) as item}
			<CollectionCard collection={{ id: '', status: '' }} loading={true} />
		{/each}
	{:else if results}
		<!--  -->
		{#if results.length > 0}
			{#each results as collection}
				<CollectionCard {collection} />
			{/each}
		{:else}
			<p in:fade class="sm:col-span-2 lg:col-span-3">No results</p>
		{/if}
	{/if}
</div>
