<script>
	export let id = 'toggle-example';
	export let label = 'Upload file';
	export let helpText = undefined;
	export let accept = '*';

	export let files;
</script>

<label for={id}>
	{label}
</label>
<input aria-describedby="{id}_help" {id} bind:files type="file" {accept} />
{#if helpText}
	<div class="help" id="{id}_help">
		{helpText}
	</div>
{/if}

<style lang="postcss">
	label {
		@apply block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300;
	}
	input {
		@apply block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400;
	}
	.help {
		@apply mt-1 text-sm text-gray-500 dark:text-gray-300;
	}
</style>
