// WORKAROUND FOR DEPLOYMENT
export const vars = {
	DEV: import.meta.env.DEV,
	PROD: import.meta.env.PROD,
	KLEROS_CURATEDLIST_SUBGRAPH_URL: import.meta.env.VITE_KLEROS_CURATEDLIST_SUBGRAPH_URL || '/api',
	IPFS_GATEWAY_URL: import.meta.env.VITE_IPFS_GATEWAY_URL || 'https://ipfs.kleros.io',
	IPFS_NODE_URL: import.meta.env.VITE_IPFS_NODE_URL,
	IPFS_THE_GRAPH_NODE_URL: import.meta.env.VITE_IPFS_NODE_URL,
	EXPLORER_URL: import.meta.env.VITE_EXPLORER_URL || ''
};
