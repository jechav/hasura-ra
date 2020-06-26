import React from 'react'
import ApolloClient from 'apollo-boost';
import buildHasuraProvider from 'ra-data-hasura-graphql';
import App from './App'
import config from './config';

export default async function getApp() {
  const client = new ApolloClient({
    uri: config.HASURA_GRAPH_URL,
    headers: {
      'x-hasura-admin-secret': config.HASURA_ADMIN_SECRET,
      // 'Authorization': `Bearer xxxx`,
    }
  });
  const provider = await buildHasuraProvider({ client})
  return () => (
    <App dataProvider={provider} />
  )
}
