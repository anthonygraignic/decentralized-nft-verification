<script>
	export let datetime;
</script>

<li class="mb-10 ml-6">
	<span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full">
		<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="5" cy="5" r="5" fill="#0848F7" />
		</svg>
	</span>
	<time class="block mb-1 text-sm font-normal leading-none" datetime={datetime.toISOString()}>
		{datetime.toLocaleDateString()}
		<em class="text-xs">{datetime.toLocaleTimeString()}</em>
	</time>
	<slot />
</li>
