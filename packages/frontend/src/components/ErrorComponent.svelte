<script>
	export let error;
</script>

{#if error}
	<div class="bg-white my-4 rounded-lg">
		{#if Object.keys(error).length > 0}
			<p>
				{#if error.code || error.reason?.code}
					Code: {error.code ?? error.reason?.code ?? ''}
					<br />
				{/if}
				Message: {error.message ??
					error.reason?.message ??
					error.reason?.data?.message ??
					'Unknown error, check console 👩‍💻️'}
			</p>
		{:else}
			<p><em>{error}</em></p>
		{/if}
		<slot name="error" />
	</div>
{:else}
	<slot />
{/if}

<style lang="postcss">
	p {
		@apply py-2 text-center text-red-600 text-sm;
	}
</style>
