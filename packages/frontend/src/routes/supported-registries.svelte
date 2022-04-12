<script>
	import { registries } from '$lib/utils/blockchain-utils';

	import SupportedRegistry from '../components/SupportedRegistry.svelte';
</script>

<main>
	<h1>List of supported registries</h1>
	<p>Finds all the supported registries that are aggregated by VerificationDAO.</p>
	<div class="registries">
		{#each registries as registry}
			<SupportedRegistry {registry} />
		{/each}
	</div>
</main>

<style lang="postcss">
	main {
		@apply container px-5;
	}

	h1 {
		@apply mb-4;
	}

	.registries {
		@apply grid grid-flow-row md:grid-cols-4 grid-cols-1 gap-2 m-2;
	}
</style>
