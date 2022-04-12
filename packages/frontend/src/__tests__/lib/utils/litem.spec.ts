import {
	convertLitemToCollection,
	getPolicyVersionFromUri,
	isCollectionStatusRegistered
} from '$lib/mapper/litem';

describe('litem-mapper', function () {
	describe('convertLitemToCollection', function () {
		it('convertLitemToCollection rejected collection', async () => {
			// Arrange
			const litem = {
				id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c',
				itemID: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004',
				data: '/ipfs/QmZLzPJXp4ZQxJwaqBNgG2c48tehuYuBnUDrNSwnkKu2br/item.json',
				keywords:
					'0xd5994f15be9987104d9821aa99d1c97227c7c08c | Woman #5625 | Yam Karkai | 0xe785E82358879F061BC3dcAC6f0444462D4b5330 | 5625 | 1',
				status: 'Absent',
				numberOfRequests: '1',
				props: [
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c@Attribution',
						label: 'Attribution',
						value: null
					},
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c@Author',
						label: 'Author',
						value: 'Yam Karkai'
					},
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c@Chain ID',
						label: 'Chain ID',
						value: '1'
					},
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c@Collection',
						label: 'Collection',
						value: '0xe785E82358879F061BC3dcAC6f0444462D4b5330'
					},
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c@Name',
						label: 'Name',
						value: 'Woman #5625'
					},
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c@Proof',
						label: 'Proof',
						value: null
					},
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c@Thumbnail',
						label: 'Thumbnail',
						value: '/ipfs/QmSvj2kxcpJwdoky1xqjg76Jtd2hHzZWWefds6s5Ebxokc/woman5625.webp'
					},
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c@Token ID',
						label: 'Token ID',
						value: '5625'
					}
				],
				requests: [
					{
						id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c-0',
						submissionTime: '1645189090',
						resolved: true,
						challenger: '0xdd999be32f28064952f4f00c37fd1d66fe21ee87',
						requestType: 'RegistrationRequested',
						disputed: true,
						disputeID: '15',
						arbitrator: '0x9c1da9a04925bdfdedf0f6421bc7eea8305f9002',
						arbitratorExtraData:
							'0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003',
						disputeOutcome: 'Reject',
						rounds: [
							{
								id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c-0-0',
								rulingTime: '0',
								ruling: 'None',
								creationTime: '1645189090',
								contributions: [
									{
										id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c-0-0-0',
										contributor: '0x5dce0b2f2bc6a806ad1ee43bcee0edd86877025c',
										withdrawable: false,
										side: '1'
									},
									{
										id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c-0-0-1',
										contributor: '0xdd999be32f28064952f4f00c37fd1d66fe21ee87',
										withdrawable: false,
										side: '2'
									}
								],
								numberOfContributions: '2',
								amountPaidRequester: '50700000000000000000',
								amountPaidChallenger: '20700000000000000000',
								hasPaidRequester: true,
								hasPaidChallenger: true,
								feeRewards: '0',
								appealPeriodStart: '0',
								appealPeriodEnd: '0',
								appealed: false
							},
							{
								id: '0x103687f65ac3d908557a30e4aaa5c3a06f24477845eb9ec674b83e821b416004@0xd5994f15be9987104d9821aa99d1c97227c7c08c-0-1',
								rulingTime: '0',
								ruling: 'None',
								creationTime: '1645472035',
								contributions: [],
								numberOfContributions: '0',
								amountPaidRequester: '0',
								amountPaidChallenger: '0',
								hasPaidRequester: false,
								hasPaidChallenger: false,
								feeRewards: '0',
								appealPeriodStart: '0',
								appealPeriodEnd: '0',
								appealed: false
							}
						],
						metaEvidence: {
							id: '0xd5994f15be9987104d9821aa99d1c97227c7c08c-7',
							URI: '/ipfs/QmUiUrVELUYkMnAPfXUE5oqGd43kLNZ58EHvNofwgT27hm/kmanr-reg-meta-evidence.json'
						}
					}
				],
				disputed: false,
				latestChallenger: '0xdd999be32f28064952f4f00c37fd1d66fe21ee87'
			};
			// Act
			const result = convertLitemToCollection(litem);
			// Assert
			expect(result).toBeDefined();
			// Props
			expect(result.name).toBe('Woman #5625');
			expect(result.address).toBe('0xe785E82358879F061BC3dcAC6f0444462D4b5330');
			expect(result.chainId).toBe('1');
			expect(result.author).toBe('Yam Karkai');
			expect(result.attribution).toBeNull();
			expect(result.proof).toBeUndefined();
			expect(result.thumbnail).toBe(
				'https://ipfs.kleros.io/ipfs/QmSvj2kxcpJwdoky1xqjg76Jtd2hHzZWWefds6s5Ebxokc/woman5625.webp'
			);
		});
	});

	describe('isCollectionStatusRegistered', function () {
		it('isCollectionStatusRegistered yes', async () => {
			// Arrange
			// Act
			const result = isCollectionStatusRegistered('Registered');
			// Assert
			expect(result).toBeTruthy();
		});
		it('isCollectionStatusRegistered no', async () => {
			// Arrange
			// Act
			const result = isCollectionStatusRegistered('Nope');
			// Assert
			expect(result).toBeFalsy();
		});
	});

	describe('getPolicyVersionFromUri', function () {
		it('getPolicyVersionFromUri 3', async () => {
			// Arrange
			const fileURI = '/ipfs/QmQCQ943e6NzmGJQj1uc74zS53fesdMVkFKgjtzzh1fDej/policy0.3.pdf';
			// Act
			const result = getPolicyVersionFromUri(fileURI);
			// Assert
			expect(result).toEqual('0.3');
		});
		it('getPolicyVersionFromUri unknown', async () => {
			// Arrange
			const fileURI = '/ipfs/QmQCQ943e6NzmGJQj1uc74zS53fesdMVkFKgjtzzh1fDej/policy.pdf';
			// Act
			const result = getPolicyVersionFromUri(fileURI);
			// Assert
			expect(result).toEqual('0');
		});
		it('getPolicyVersionFromUri unknown', async () => {
			// Arrange
			const fileURI = '/ipfs/QmQCQ943e6NzmGJQj1uc74zS53fesdMVkFKgjtzzh1fDej/d.jpg';
			// Act
			const result = getPolicyVersionFromUri(fileURI);
			// Assert
			expect(result).toEqual('???');
		});
	});
});

export {};
