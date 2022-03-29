/// <reference types="@sveltejs/kit" />
/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_KLEROS_CURATEDLIST_SUBGRAPH_URL: string;
	VITE_IPFS_GATEWAY_URL: string;
	VITE_IPFS_NODE_URL: string;
	VITE_EXPLORER_URL: string;
}
