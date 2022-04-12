<script>
	export let registry;
</script>

<h3>{registry.name || 'Unknown registry name'}</h3>
<p>{registry.address}</p>
<a href={registry.klerosLink} rel="external noopener" target="_blank">See on Kleros</a>
<a href={registry.sourceLink} rel="external noopener" target="_blank">Source code with policy</a>

<style lang="postcss">
	h3 {
		@apply font-bold;
	}
	p {
		@apply break-all;
	}
</style>
