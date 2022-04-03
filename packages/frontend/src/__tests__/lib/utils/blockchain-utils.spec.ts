import { getChainNameFromIdStr, shortenAddress } from '$lib/utils/blockchain-utils';

describe('date-utils', function () {
	describe('getChainNameFromIdStr', function () {
		test.each([
			['1', 'Ethereum'],
			['256', 'xDAI']
		])('Get chain name for each ID', (chainId: string, expectedChainName: string) => {
			expect(getChainNameFromIdStr(chainId)).toBe(expectedChainName);
		});
	});
	describe('shortenAddress', function () {
		it('shorten OS Address', () => {
			expect(shortenAddress('0x7f268357A8c2552623316e2562D90e642bB538E5')).toBe('0x7f26..38E5');
		});
		it('shorten empty Address', () => {
			expect(shortenAddress(undefined)).toBe('');
		});
	});
});

export {};
