<script>
	import { chainId } from '$lib/wallet';
	import { getChainNameFromId, isChainIdSupported } from '$lib/utils/blockchain-utils';

	export let supportedChainId = 0;
	let isChainSupported = false;

	$: changeChain($chainId);

	function changeChain(chainId) {
		isChainSupported = false;
		try {
			isChainSupported = isChainIdSupported(supportedChainId, parseInt(chainId, 16));
		} catch (e) {
			isChainSupported = false;
			console.log(`Connected to ${chainId} with a supported chain: ${supportedChainId}`);
		}
	}
</script>

{#if !isChainSupported}
	<div class="not-supported">
		<h2>Unknown network / chain</h2>
		<p>
			Please change your network on MetaMask for:
			<br />
			<b>
				{getChainNameFromId(supportedChainId)}
			</b>
			<br />
			<em>You are on: {getChainNameFromId(parseInt($chainId, 16))}</em>
		</p>
	</div>
{:else}
	<slot />
{/if}

<style lang="postcss">
	.not-supported {
		@apply text-center py-8;
	}
	h2 {
		@apply text-red-500;
	}
	p {
		@apply text-center py-4;
	}
	em {
		@apply text-sm;
	}
</style>
