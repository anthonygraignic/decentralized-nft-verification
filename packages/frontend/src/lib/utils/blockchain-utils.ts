import { vars } from '$lib/env-variables';

// Only Ethereum is allowed on Curated registry
export const chains = [
	{ id: '1', name: 'Ethereum', symbol: 'ETH' }
	// { id: '100', name: 'xDAI' },
	// { id: '137', name: 'Polygon' }
];

// TODO Get this from reg JSON file
export const registries = [
	{
		id: 'eip155:100:0x2F19F817BBF800B487b7F2E51f24aD5Ea0222463',
		name: 'Authentic NFT Collection',
		description: 'A list of authentic NFT collections',
		address: '0x2F19F817BBF800B487b7F2E51f24aD5Ea0222463',
		klerosLink:
			'https://curate.kleros.io/tcr/0x2F19F817BBF800B487b7F2E51f24aD5Ea0222463?chainId=100',
		sourceLink: 'https://gitlab.com/mizu_eth/nft-registries',
		policyLink: '/ipfs/QmQCQ943e6NzmGJQj1uc74zS53fesdMVkFKgjtzzh1fDej/policy.pdf',
		submissionDeposit: 36.9,
		challengePeriodDuration: 108, // in hours
		columns: [
			{
				label: 'Thumbnail',
				description: 'A thumbnail representative of the collection',
				type: 'image',
				isIdentifier: false
			},
			{
				label: 'Name',
				description: 'Official name of the collection',
				type: 'text',
				isIdentifier: true
			},
			{
				label: 'Author',
				description: "Author's name if relevant",
				type: 'text',
				isIdentifier: true
			},
			{
				label: 'Collection',
				description: "The collection's address",
				type: 'address',
				isIdentifier: true
			},
			{
				label: 'Chain ID',
				description: 'The ID of the chain on which the collection resides',
				type: 'number',
				isIdentifier: true
			},
			{
				label: 'Webpage',
				description: "The collection's canonical webpage",
				type: 'link',
				isIdentifier: false
			},
			{
				label: 'Proof',
				description: 'Optional proof of authenticity',
				type: 'file',
				allowedFileTypes: 'pdf txt'
			},
			{
				label: 'Attribution',
				description: 'Optional attribution',
				type: 'long text'
			}
		]
	},
	{
		id: 'eip155:100:0xD5994f15BE9987104D9821AA99d1C97227c7C08c',
		name: 'Authentic NFTs',
		address: '0xD5994f15BE9987104D9821AA99d1C97227c7C08c',
		klerosLink:
			'https://curate.kleros.io/tcr/0xD5994f15BE9987104D9821AA99d1C97227c7C08c?chainId=100',
		sourceLink: 'https://gitlab.com/mizu_eth/nft-registries'
	}
];

export function getChainNameFromId(chainId: number): string {
	// For more chainIDs see https://github.com/DefiLlama/chainlist/blob/main/components/chains.js
	switch (chainId) {
		case 1:
			return 'Ethereum';
		case 100:
			return 'Gnosis Chain (formerly xDai)';
		case 137:
			return 'Polygon';

		// Testnets
		case 4:
			return 'Rinkeby (Testnet)';
		case 42:
			return 'Kovan (Testnet)';
		case 80001:
			return 'Mumbai (Polygon Testnet)';
	}
	return 'Unknown';
}
export function getChainNameFromIdStr(chainId: string): string {
	return getChainNameFromId(parseInt(chainId, 10));
}

export function getChainSymbolFromId(chainId: number): string {
	// For more chainIDs see https://github.com/DefiLlama/chainlist/blob/main/components/chains.js
	switch (chainId) {
		case 1:
			return 'ETH';
		case 100:
			return 'xDAI';
		case 137:
			return 'MATIC';

		// Testnets
		case 4:
			return 'RIN';
		case 42:
			return 'KOV';
		case 80001:
			return 'MATIC';
	}
	return '?????';
}
export function getChainSymbolFromIdStr(chainId: string): string {
	return getChainSymbolFromId(parseInt(chainId, 10));
}

export function getChainFromRegistryId(id: string): string {
	return id.split(':')[1];
}

export function isChainIdSupported(supportedChainId: number, chainId: number): boolean {
	// if (vars.DEV) {
	// 	throw new Error(`Unsupported chain: ${chainId}`);
	// }
	return supportedChainId === chainId;
}
