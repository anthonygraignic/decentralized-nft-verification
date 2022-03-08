<script>
	import { vars } from '$lib/env-variables';

	export let address;
</script>

<a href="{vars.EXPLORER_URL}/address/{address}" rel="external noopener" target="_blank">
	<slot />
</a>

<style lang="postcss">
	a {
		text-decoration: underline;
	}
</style>
