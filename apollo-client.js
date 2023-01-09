import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

const httpLink = createHttpLink({
  uri: 'https://streetfabric.eu.saleor.cloud/graphql/',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  const token = sessionStorage.getItem('token');
  // const bearerToken = '8EkfqmCxHIQs1uo0uWPJwX4BAZRItn';
  const bearerToken = '2EsfqxCxHIQs1ro0uWPJ1X4B2ZRatn';
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : `Bearer ${bearerToken}`,
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions.exception.code) {
        case 'ExpiredSignatureError': {
          localStorage.setItem('needRefresh', 'true');
        }
      }
    }
  }
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache(),
});

export default client;
