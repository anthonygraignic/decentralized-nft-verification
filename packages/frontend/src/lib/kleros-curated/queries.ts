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
