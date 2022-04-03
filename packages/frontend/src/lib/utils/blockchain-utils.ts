export function getChainNameFromId(chainId: number): string {
	// For more chainIDs see https://github.com/DefiLlama/chainlist/blob/main/components/chains.js
	switch (chainId) {
		case 0x1:
			return 'Ethereum';
		case 0x100:
			return 'xDAI';
		case 137:
			return 'Polygon';

		// Testnets
		case 0x3:
			return 'Ropsten (Testnet)';
		case 0x4:
			return 'Rinkeby (Testnet)';
		case 0x5:
			return 'Goerli (Testnet)';
		case 0x13881:
			return 'Mumbai (Polygon Testnet)';
	}
}
export function getChainNameFromIdStr(chainId: string): string {
	return getChainNameFromId(parseInt(chainId, 10));
}

export function shortenAddress(address: string): string {
	if (!address) return '';

	return `${address.slice(0, 6)}..${address.slice(-4)}`;
}
