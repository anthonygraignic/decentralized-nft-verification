import {
	getChainFromRegistryId,
	getChainNameFromIdStr,
	getChainSymbolFromIdStr
} from '$lib/utils/blockchain-utils';

describe('blockchain-utils', function () {
	describe('getChainNameFromIdStr', function () {
		test.each([
			['1', 'Ethereum'],
			['100', 'Gnosis Chain (formerly xDai)'],
			['9999', 'Unknown']
		])('Get chain name for each ID', (chainId: string, expectedChainName: string) => {
			expect(getChainNameFromIdStr(chainId)).toBe(expectedChainName);
		});
	});
	describe('getChainSymbolFromIdStr', function () {
		test.each([
			['1', 'ETH'],
			['100', 'xDAI'],
			['9999', '?????']
		])('Get chain symbol for each ID', (chainId: string, expectedChainName: string) => {
			expect(getChainSymbolFromIdStr(chainId)).toBe(expectedChainName);
		});
	});
	describe('getChainFromRegistryId', function () {
		it('getChainFromRegistryId xDai', async () => {
			// Arrange
			const id = 'eip155:100:0x2F19F817BBF800B487b7F2E51f24aD5Ea0222463';
			// Act
			const result = getChainFromRegistryId(id);
			// Assert
			expect(result).toBe('100');
		});
		it('getChainFromRegistryId undefined', async () => {
			// Arrange
			const id = 'bad input';
			// Act
			const result = getChainFromRegistryId(id);
			// Assert
			expect(result).toBeUndefined();
		});
	});
});
export {};
