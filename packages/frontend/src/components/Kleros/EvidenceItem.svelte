<script>
	export let evidence;
</script>

<div class="ml-6">
    <details class="text-justify my-2">
        <summary>Evidence: <span class="font-bold">{evidence.content.title}</span></summary>
        <p class="break-before-auto ml-4">{@html evidence.content.description}</p>
    </details>
</div>
