<script>
	export let searchText = undefined;

	const MIN_INPUT_LENGTH = 2;
	const MAX_INPUT_LENGTH = 42; // ETH address

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function doSearch() {
		if (searchText && searchText.length >= MIN_INPUT_LENGTH) {
			return dispatch('search', searchText);
		} else {
			return dispatch('clear');
		}
	}
</script>

<form on:submit|preventDefault={doSearch}>
	<div class="search__bar">
		<div class="search_input">
			<label for="search">NFT Name or Contract Address</label>
			<input
				type="text"
				id="search"
				minlength={MIN_INPUT_LENGTH}
				maxlength={MAX_INPUT_LENGTH}
				bind:value={searchText}
				placeholder="NFT Name or Contract Address"
			/>
		</div>
		<span class="search__action">
			<button on:click={doSearch}>
				<svg
					width="25"
					height="26"
					viewBox="0 0 25 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle
						cx="9.75736"
						cy="9.75735"
						r="8.47792"
						transform="rotate(-45 9.75736 9.75735)"
						stroke="#5280FF"
						stroke-width="2.5"
					/>
					<rect
						x="14.3918"
						y="17.3516"
						width="3.64507"
						height="11.3492"
						transform="rotate(-45 14.3918 17.3516)"
						fill="#5280FF"
					/>
				</svg>
			</button>
			<!-- {:else}
			<svg
			width="16"
			height="17"
			viewBox="0 0 16 17"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			>
			<rect y="3" width="3" height="18.2668" transform="rotate(-45 0 3)" fill="#5280ff" />
			<rect
					x="12.9165"
					y="0.999996"
					width="3"
					height="18.2668"
					transform="rotate(45 12.9165 0.999996)"
					fill="#5280ff"
					/>
				</svg>
				{/if} -->
		</span>
	</div>
</form>

<style lang="postcss">
	.search__bar {
		@apply relative flex flex-wrap items-stretch mt-3 justify-items-center;
	}
	.search_input {
		@apply w-full;
	}
	label {
		@apply sr-only;
	}
	input {
		@apply placeholder-vblue-light text-vblue rounded-lg w-full py-2 px-2 border border-white focus:outline-none focus:ring;
	}
	.search__action {
		@apply z-10 h-full absolute right-0 pr-2 py-2 w-8;
	}
</style>
