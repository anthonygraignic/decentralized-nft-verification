<script>
	export let id = 'toggle-example';
	export let text;
	export let checked = false;
</script>

<label for={id}>
	<input type="checkbox" {id} name={id} bind:checked />
	<div class="box" />
	<span class="text">{text}</span>
</label>

<style lang="postcss">
	label {
		@apply flex relative mb-4 cursor-pointer;
	}
	input {
		@apply sr-only;
	}
	.box {
		@apply w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600;
	}
	.text {
		@apply ml-3 text-sm self-center font-medium text-gray-900 dark:text-gray-300;
	}
	.toggle-bg:after {
		content: '';
		@apply absolute top-0.5 left-0.5 bg-white border border-gray-300 rounded-full h-5 w-5 transition shadow-sm;
	}

	input:checked + .toggle-bg:after {
		transform: translateX(100%);
		@apply border-white;
	}

	input:checked + .toggle-bg {
		@apply bg-vblue border-vblue;
	}
</style>
