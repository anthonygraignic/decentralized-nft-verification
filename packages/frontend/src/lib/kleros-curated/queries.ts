import { gql } from '@apollo/client/core';

// Using keyword search rather for simplicity's sake
export const COLLECTIONS = gql`
	query searchCollections($search: String) {
		litems(
			where: { registry: "0x2f19f817bbf800b487b7f2e51f24ad5ea0222463", keywords_contains: $search }
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
