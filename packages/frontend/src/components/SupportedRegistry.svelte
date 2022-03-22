<script>
	export let registry;
</script>

<h3 class="font-bold">{registry.name || 'Unknown registry name'}</h3>
<p class="break-all">{registry.address}</p>
<a href={registry.klerosLink} rel="external noopener" target="_blank">See on Kleros</a>
<a href={registry.sourceLink} rel="external noopener" target="_blank">Source code with policy</a>
