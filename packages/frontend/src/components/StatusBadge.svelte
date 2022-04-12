<script>
	import { isCollectionStatusRegistered } from '$lib/mapper/litem';

	export let status;
</script>

{#if isCollectionStatusRegistered(status)}
	<div class="flex justify-center bg-vblue-ligther px-3 mx-auto mt-5 ring-2 ring-vblue rounded-2xl">
		<p class="text-vblue font-bold text-lg">NFT Collection Verified</p>
	</div>
{:else}
	<div class="flex justify-center bg-red-200 px-3 mx-auto mt-5 ring-2 ring-red-700 rounded-2xl">
		<p class="text-red-500 font-bold text-lg">Not verified</p>
	</div>
{/if}
