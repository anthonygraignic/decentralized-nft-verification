import { gql } from '@apollo/client/core';

// Cannot use itemSearch() as it needs an exact match as text
// Using keyword search rather for simplicity's sake

/**
 * Search collections by name using the `contain` function in a case insensitive way.
 */
export const COLLECTIONS = gql`
	query searchbyName($search: String) {
		litems(
			where: {
				registry_in: [
					"0x2f19f817bbf800b487b7f2e51f24ad5ea0222463"
					"0xd5994f15be9987104d9821aa99d1c97227c7c08c"
				]
				key0_contains_nocase: $search
			}
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
			key0
			key1
			key2
			key3
			key4
		}
	}
`;
/**
 * Search collections by contract address in a case insensitive way
 */
export const COLLECTIONS_BY_CONTRACT_ADDRESS = gql`
	query searchByContractAddress($contractAddress: String) {
		litems(
			where: {
				registry_in: [
					"0x2f19f817bbf800b487b7f2e51f24ad5ea0222463"
					"0xd5994f15be9987104d9821aa99d1c97227c7c08c"
				]
				key2_contains_nocase: $contractAddress
			}
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
			key0
			key1
			key2
			key3
			key4
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
			  resolutionTime
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
			  evidences {
				  evidenceGroupID
				number
				party
				URI
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
