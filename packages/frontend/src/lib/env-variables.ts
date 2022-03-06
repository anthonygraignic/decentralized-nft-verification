// WORKAROUND FOR DEPLOYMENT
export const vars = {
	DEV: import.meta.env.DEV,
	PROD: import.meta.env.PROD,
	KLEROS_CURATEDLIST_SUBGRAPH_URL: import.meta.env.VITE_KLEROS_CURATEDLIST_SUBGRAPH_URL || '/api'
};
