<script>
	export let evidence;
</script>

<div>
	<details>
		<summary>Evidence: <b>{evidence.content.title}</b></summary>
		<p>{@html evidence.content.description}</p>
	</details>
</div>

<style lang="postcss">
	div {
		@apply ml-6;
	}
	details {
		@apply text-justify my-2;
	}
	p {
		@apply break-before-auto ml-4;
	}
</style>
