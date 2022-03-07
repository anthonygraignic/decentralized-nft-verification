<script>
	export let error;
</script>

{#if error}
	<div class="bg-white my-4 rounded-lg">
		<p class="py-8 text-center text-red-600 text-sm"><em>{error}</em></p>
		<slot name="error" />
	</div>
{:else}
	<slot />
{/if}
