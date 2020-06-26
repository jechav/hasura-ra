import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import ApolloClient from 'apollo-boost';
import buildHasuraProvider from 'ra-data-hasura-graphql';
import userCrud from "./views/users";
import config from './config';


class App extends Component {
    constructor() {
        super();
        this.state = { dataProvider: null };
    }
    componentDidMount() {
      const client = new ApolloClient({
        uri: config.HASURA_GRAPH_URL,
        headers: {
          'x-hasura-admin-secret': config.HASURA_ADMIN_SECRET,
          // 'Authorization': `Bearer xxxx`,
        }
      });
        buildHasuraProvider({ client })
        .then(dataProvider => this.setState({ dataProvider })).catch(console.error);
    }

    render() {
        const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        }

        return (
            <Admin dataProvider={dataProvider}>
              { /* <Resource name="hosts" /> */ }
              <Resource name="user" {...userCrud} />
            </Admin>
        );
    }
}

export default App;
