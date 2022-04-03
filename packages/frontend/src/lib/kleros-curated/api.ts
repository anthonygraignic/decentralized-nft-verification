import { extractRegistryInfo } from '$lib/mapper/litem';
import { convertToIpfsGatewayLink } from '$lib/utils/ipfs-utils';
import type { ApolloClient, ApolloQueryResult } from '@apollo/client';
import { COLLECTIONS, COLLECTIONS_BY_CONTRACT_ADDRESS, GET_COLLECTION } from './queries';

/**
 * Search either by collection name or contract address
 * @param client
 * @param searchText
 * @returns
 */
export async function searchCollection(
	client: ApolloClient<unknown>,
	searchText: string
): Promise<ApolloQueryResult<any>> {
	if (searchText.startsWith('0x') || searchText.startsWith('0X')) {
		// Search by contract address
		return client.query({
			variables: { contractAddress: searchText.toLowerCase() },
			query: COLLECTIONS_BY_CONTRACT_ADDRESS
		});
	} else {
		// Search by name
		return client.query({
			variables: { search: searchText },
			query: COLLECTIONS
		});
	}
}

/**
 * Get collection by subgraph id
 * @param client
 * @param id
 * @returns
 */
export async function getCollectionById(
	client: ApolloClient<unknown>,
	id: string
): Promise<ApolloQueryResult<any>> {
	return client.query({
		variables: { id },
		query: GET_COLLECTION
	});
}

/**
 * Get files stored on IPFS
 * @param {*} fetch
 * @param {*} litem
 * @returns registry & evidences
 */
export async function getFilesfromIpfs(fetch, litem) {
	if (litem) {
		let registry = {};
		const evidenceFiles = [];
		for (const request of litem.requests) {
			if (
				Object.keys(registry).length === 0 &&
				registry.constructor === Object &&
				request.metaEvidence
			) {
				const metaEvidenceRequest = await fetch(convertToIpfsGatewayLink(request.metaEvidence.URI));
				const metaEvidence = await metaEvidenceRequest.json();
				registry = extractRegistryInfo(metaEvidence);
			}

			const evidenceFilesForRequest = [];
			if (request.evidences) {
				for (const evidence of request.evidences) {
					const evidenceRequest = await fetch(convertToIpfsGatewayLink(evidence.URI));
					const evidenceFile = await evidenceRequest.json();
					// only JSON is supported rn, files might be in PDF later.
					evidenceFilesForRequest.push(evidenceFile);
				}
			}
			evidenceFiles.push(evidenceFilesForRequest);
		}
		return { registry, evidenceFiles };
	}
}

export async function getConsolidatedLitem(fetch, client: ApolloClient<unknown>, id: string) {
	// TODO
}
