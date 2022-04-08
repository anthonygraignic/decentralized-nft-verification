import { transformToGTCRItem } from '$lib/kleros-curated/gtcr-submission';
import { registries } from '$lib/utils/blockchain-utils';
import expectedItem from './item.json';

describe('collection-submit', function () {
	describe('transformToGTCR', function () {
		it('transformToGTCR valid', async () => {
			// Arrange
			const columns = registries[0].columns;
			const fields = {
				name: "Coolman's Universe",
				chainId: '1',
				address: '0xa5C0Bd78D1667c13BFB403E2a3336871396713c5',
				author: 'coolman coffeedan',
				thumbnail: '/ipfs/QmdevPFdTDW3tG5ZwT3R3qKpLtogg6QawP4mRwEi5WeRPc/coolman-s-universe.webp'
			};

			// Act
			const result = transformToGTCRItem(columns, fields);
			// Assert
			expect(result).toEqual(expectedItem);
		});
	});
});

export {};
