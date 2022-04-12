<script>
	export let datetime;
	export let collectionVerified;
</script>

<li>
	<span class="item" class:item--notverified={!collectionVerified}>
		<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="5" cy="5" r="5" fill={collectionVerified ? '#0848F7' : '#f70808'} />
		</svg>
	</span>
	<time datetime={datetime.toISOString()}>
		{datetime.toLocaleDateString()}
		<em>{datetime.toLocaleTimeString()}</em>
	</time>
	<slot />
</li>

<style lang="postcss">
	li {
		@apply mb-10 ml-6;
	}
	.item {
		@apply flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full;
	}
	.item--notverified {
		@apply bg-red-200;
	}

	time {
		@apply block mb-1 text-sm font-normal leading-none;
	}
	em {
		@apply text-xs;
	}
</style>
