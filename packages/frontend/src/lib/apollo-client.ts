import { HttpLink, InMemoryCache, ApolloClient } from '@apollo/client/core';
import { vars } from './env-variables';

const link = new HttpLink({
	uri: vars.KLEROS_CURATEDLIST_SUBGRAPH_URL
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	link,
	cache
});

export default apolloClient;
