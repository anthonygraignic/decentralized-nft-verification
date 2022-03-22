import { getChainNameFromIdStr } from '$lib/utils/blockchain-utils';

describe('date-utils', function () {
	describe('getChainNameFromIdStr', function () {
		test.each([['1', 'Ethereum'], ['256', 'xDAI']])(
			'Get chain name for each ID',
			(chainId: string, expectedChainName: string) => {
				expect(getChainNameFromIdStr(chainId)).toBe(expectedChainName);
			}
		);
	});
});

export {};
