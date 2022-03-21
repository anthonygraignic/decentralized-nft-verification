import { gql } from '@apollo/client/core';


// Cannot use itemSearch() as it needs an exact match as text
// Using keyword search rather for simplicity's sake

export const COLLECTIONS = gql`
	query searchCollections($search: String) {
		litems(
			where: { registry_in: ["0x2f19f817bbf800b487b7f2e51f24ad5ea0222463","0xd5994f15be9987104d9821aa99d1c97227c7c08c"], keywords_contains: $search }
		) {
			id
			itemID
			data
			keywords
			status
			numberOfRequests
			data
			props {
				id
				label
				value
			}
			requests {
				id
				submissionTime
				resolved
				challenger
				requester
				requestType
			}
		}
	}
`;
// TODO Use where condition in LItems which won't search across all Kleros curated list
// But keywords is case sensitive so use itemSearch seems a better option for now
export const COLLECTIONS_BY_CONTRACT_ADDRESS = gql`
	query searchByContractAddress($contractAddress: String) {
		itemSearch(text: $contractAddress) {
			id
			itemID
			data
			keywords
			status
			numberOfRequests
			data
			props {
				id
				label
				value
			}
			requests {
				id
				submissionTime
				resolved
				challenger
				requester
				requestType
			}
		}
	}
`;

// collection -> requests -> rounds -> evidences JSON files

export const GET_COLLECTION = gql`
	query getCollection($id: String) {
		litem(id: $id) {
			id
			itemID
			data
			keywords
			status
			numberOfRequests
			data
			registryAddress
			props {
				id
				label
				value
			}
			requests(orderBy: submissionTime, orderDirection: desc) {
				id
				submissionTime
				resolved
				challenger
				requester
				requestType
				disputed
				disputeID
				arbitrator
				arbitratorExtraData
				disputeOutcome
				rounds {
					id
					rulingTime
					ruling
					creationTime
					contributions {
						id
						contributor
						withdrawable
						side
					}
					numberOfContributions
					amountPaidRequester
					amountPaidChallenger
					hasPaidRequester
					hasPaidChallenger
					feeRewards
					appealPeriodStart
					appealPeriodEnd
					appealed
				}
				metaEvidence {
					id
					URI
				}
			}
			disputed
			latestChallenger
		}
	}
`;