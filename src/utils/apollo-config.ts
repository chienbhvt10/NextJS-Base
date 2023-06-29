import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApiServerGrapqhlURL } from './config';

const client = new ApolloClient({
  uri: ApiServerGrapqhlURL,
  cache: new InMemoryCache(),
});

export default client;
