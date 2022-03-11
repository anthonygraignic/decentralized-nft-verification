<script>
	export let status;
</script>

<div class="flex justify-center bg-vblue-ligther px-3 mx-auto mt-5 ring-2 ring-vblue rounded-2xl">
	{#if status === 'Registered'}
		<p class="text-vblue font-bold text-lg">NFT Collection Verified</p>
	{/if}
</div>
