// https://thegraph.com/hosted-service/subgraph/eccentricexit/curate-xdai-ii?selected=playground

/** @type {import('./items').RequestHandler} */
export async function post({ request }) {
	const subgraphPlayground = {
		data: {
			litems: [
				{
					id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463',
					itemID: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b',
					data: '/ipfs/QmVDekEZhhQZz4B1VvvnnNrJXobzhhpyZTwTDgsuXA9c8x/item.json',
					keywords:
						'0x2f19f817bbf800b487b7f2e51f24ad5ea0222463 | Azuki | Azuki | 0xed5af388653567af2f388e6224dc7c4b3241c544 | 1',
					status: 'Registered',
					numberOfRequests: '1',
					props: [
						{
							id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463@Attribution',
							label: 'Attribution',
							value: null
						},
						{
							id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463@Author',
							label: 'Author',
							value: 'Azuki'
						},
						{
							id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463@Chain ID',
							label: 'Chain ID',
							value: '1'
						},
						{
							id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463@Collection',
							label: 'Collection',
							value: '0xed5af388653567af2f388e6224dc7c4b3241c544'
						},
						{
							id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463@Name',
							label: 'Name',
							value: 'Azuki'
						},
						{
							id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463@Proof',
							label: 'Proof',
							value: '/ipfs/QmUCqFurfVHz1emCsW6cpLoLbGK9pTEGcEmM5yjvDKnAk3/empty.txt'
						},
						{
							id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463@Thumbnail',
							label: 'Thumbnail',
							value: '/ipfs/QmPccsqKEvuaHMWbT5rtxGUhiovETV2nPVueggRAUCgLwN/azuki.webp'
						}
					],
					requests: [
						{
							id: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b@0x2f19f817bbf800b487b7f2e51f24ad5ea0222463-0',
							submissionTime: '1643745535',
							resolved: true,
							challenger: '0x0000000000000000000000000000000000000000',
							requestType: 'RegistrationRequested'
						}
					]
				}
			]
		}
	};
	const responseOrign = {
		data: {
			litems: [
				{
					itemID: '0xfa1b758fc25465ac8dc90ab7d4a070d342ae2d1173f627453a2ec297633e2259',
					status: 'Registered',
					data: '/ipfs/QmWnRZ8ShxidwWQPSPUAwhpEcPPcShru8kAAmQLNn6iqTY/item.json',
					props: [
						{
							value: null,
							type: 'text',
							label: 'Attribution',
							description: 'Optional attribution',
							isIdentifier: false,
							__typename: 'ItemProp'
						},
						{
							value: 'coolman coffeedan',
							type: 'text',
							label: 'Author',
							description: "Author's name if relevant",
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: '1',
							type: 'number',
							label: 'Chain ID',
							description: 'The chain ID of the network on which the collection resides',
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: '0xa5C0Bd78D1667c13BFB403E2a3336871396713c5',
							type: 'address',
							label: 'Collection',
							description: "The collection's address",
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: "Coolman's Universe",
							type: 'text',
							label: 'Name',
							description: 'Official name of the collection',
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: null,
							type: 'file',
							label: 'Proof',
							description: 'Optional proof of authenticity',
							isIdentifier: false,
							__typename: 'ItemProp'
						},
						{
							value: '/ipfs/QmdevPFdTDW3tG5ZwT3R3qKpLtogg6QawP4mRwEi5WeRPc/coolman-s-universe.webp',
							type: 'image',
							label: 'Thumbnail',
							description: 'A thumbnail representative of the collection',
							isIdentifier: false,
							__typename: 'ItemProp'
						}
					],
					requests: [
						{
							disputed: false,
							disputeID: '0',
							submissionTime: '1644579280',
							resolved: true,
							requester: '0xe7f13052fe2ba7d038dac18de5e730542e3979bc',
							challenger: '0x0000000000000000000000000000000000000000',
							resolutionTime: '1644968630',
							rounds: [
								{
									appealPeriodStart: '0',
									appealPeriodEnd: '0',
									ruling: 'None',
									hasPaidRequester: true,
									hasPaidChallenger: false,
									amountPaidRequester: '50700000000000000000',
									amountPaidChallenger: '0',
									__typename: 'LRound'
								}
							],
							__typename: 'LRequest'
						}
					],
					__typename: 'LItem'
				},
				{
					itemID: '0xdfffa618164c8c857238deb6e0c75ade8e1b6de62d22a83099d475393b20080a',
					status: 'Registered',
					data: '/ipfs/QmP2cL5TLhfj3Sn7pihWPmXhNNBniwuFgvW9A51GLtjQ4a/item.json',
					props: [
						{
							value: null,
							type: 'text',
							label: 'Attribution',
							description: 'Optional attribution',
							isIdentifier: false,
							__typename: 'ItemProp'
						},
						{
							value: 'SangSoo Jeong',
							type: 'text',
							label: 'Author',
							description: "Author's name if relevant",
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: '1',
							type: 'number',
							label: 'Chain ID',
							description: 'The chain ID of the network on which the collection resides',
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: '0x53019EFDdC747DFC13779768A2FCc23e6BD827e6',
							type: 'address',
							label: 'Collection',
							description: "The collection's address",
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: 'Armor girls',
							type: 'text',
							label: 'Name',
							description: 'Official name of the collection',
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: null,
							type: 'file',
							label: 'Proof',
							description: 'Optional proof of authenticity',
							isIdentifier: false,
							__typename: 'ItemProp'
						},
						{
							value: '/ipfs/Qmeuz5hp9w5rBiMx4yahMA49EykuH2uPG8ZmnnL5DWKXgq/armor.webp',
							type: 'image',
							label: 'Thumbnail',
							description: 'A thumbnail representative of the collection',
							isIdentifier: false,
							__typename: 'ItemProp'
						}
					],
					requests: [
						{
							disputed: false,
							disputeID: '0',
							submissionTime: '1644440765',
							resolved: true,
							requester: '0x7a070306e54b78cefa5b71f6a4ea4cda335b80ae',
							challenger: '0x0000000000000000000000000000000000000000',
							resolutionTime: '1644831830',
							rounds: [
								{
									appealPeriodStart: '0',
									appealPeriodEnd: '0',
									ruling: 'None',
									hasPaidRequester: true,
									hasPaidChallenger: false,
									amountPaidRequester: '50700000000000000000',
									amountPaidChallenger: '0',
									__typename: 'LRound'
								}
							],
							__typename: 'LRequest'
						}
					],
					__typename: 'LItem'
				},
				{
					itemID: '0xbf4ace103d2c43b6e0556216f25f95ce78fbb9ef405e2344587518156611781b',
					status: 'Registered',
					data: '/ipfs/QmVDekEZhhQZz4B1VvvnnNrJXobzhhpyZTwTDgsuXA9c8x/item.json',
					props: [
						{
							value: null,
							type: 'text',
							label: 'Attribution',
							description: 'Optional attribution',
							isIdentifier: false,
							__typename: 'ItemProp'
						},
						{
							value: 'Azuki',
							type: 'text',
							label: 'Author',
							description: "Author's name if relevant",
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: '1',
							type: 'number',
							label: 'Chain ID',
							description: 'The chain ID of the network on which the collection resides',
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: '0xed5af388653567af2f388e6224dc7c4b3241c544',
							type: 'address',
							label: 'Collection',
							description: "The collection's address",
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: 'Azuki',
							type: 'text',
							label: 'Name',
							description: 'Official name of the collection',
							isIdentifier: true,
							__typename: 'ItemProp'
						},
						{
							value: '/ipfs/QmUCqFurfVHz1emCsW6cpLoLbGK9pTEGcEmM5yjvDKnAk3/empty.txt',
							type: 'file',
							label: 'Proof',
							description: 'Optional proof of authenticity',
							isIdentifier: false,
							__typename: 'ItemProp'
						},
						{
							value: '/ipfs/QmPccsqKEvuaHMWbT5rtxGUhiovETV2nPVueggRAUCgLwN/azuki.webp',
							type: 'image',
							label: 'Thumbnail',
							description: 'A thumbnail representative of the collection',
							isIdentifier: false,
							__typename: 'ItemProp'
						}
					],
					requests: [
						{
							disputed: false,
							disputeID: '0',
							submissionTime: '1643745535',
							resolved: true,
							requester: '0xdd999be32f28064952f4f00c37fd1d66fe21ee87',
							challenger: '0x0000000000000000000000000000000000000000',
							resolutionTime: '1644140625',
							rounds: [
								{
									appealPeriodStart: '0',
									appealPeriodEnd: '0',
									ruling: 'None',
									hasPaidRequester: true,
									hasPaidChallenger: false,
									amountPaidRequester: '36900000000000000000',
									amountPaidChallenger: '0',
									__typename: 'LRound'
								}
							],
							__typename: 'LRequest'
						}
					],
					__typename: 'LItem'
				}
			]
		}
	};

	return {
		body: subgraphPlayground
	};
}
