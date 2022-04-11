import { convertIpfsUritoPathLink, convertToIpfsGatewayLink } from '$lib/utils/ipfs-utils';

describe('ipfs-utils', function () {
	describe('convertToIpfsGatewayLink', function () {
		it('convertToIpfsGatewayLink Kleros IPFS Uri', async () => {
			// Arrange
			const link = '/ipfs/QmZrxDL25SmdnU8Pz1ETQy2CVQqvtUTUn89QTwbBBCWaMY/item.json';
			// Act
			const result = convertToIpfsGatewayLink(link);
			// Assert
			expect(result).toBe(
				'https://ipfs.kleros.io/ipfs/QmZrxDL25SmdnU8Pz1ETQy2CVQqvtUTUn89QTwbBBCWaMY/item.json'
			);
		});
		it('convertToIpfsGatewayLink other Uri', async () => {
			// Arrange
			const link = 'https://example.com/item.json';
			// Act
			const result = convertToIpfsGatewayLink(link);
			// Assert
			expect(result).toBe('https://example.com/item.json');
		});
	});
	describe('convertIpfsUritoPathLink', function () {
		it('convertIpfsUritoPathLink IPFS Uri', async () => {
			// Arrange
			const link = 'ipfs://QmZrxDL25SmdnU8Pz1ETQy2CVQqvtUTUn89QTwbBBCWaMY/item.json';
			// Act
			const result = convertIpfsUritoPathLink(link);
			// Assert
			expect(result).toBe('/ipfs/QmZrxDL25SmdnU8Pz1ETQy2CVQqvtUTUn89QTwbBBCWaMY/item.json');
		});
		it('convertIpfsUritoPathLink other Uri', async () => {
			// Arrange
			const link = 'https://example.com/item.json';
			// Act
			const result = convertIpfsUritoPathLink(link);
			// Assert
			expect(result).toBe('https://example.com/item.json');
		});
		it('convertIpfsUritoPathLink null', async () => {
			// Arrange
			const link = undefined;
			// Act
			const result = convertIpfsUritoPathLink(link);
			// Assert
			expect(result).toBeUndefined();
		});
	});
});

export {};
