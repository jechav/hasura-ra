import React from "react";
import { Admin, Resource } from "react-admin";
import userCrud from "./views/users";
import hostCrud from "./views/hosts";
import layout from './layout/layout';

function App({ dataProvider }) {
  return (
    <Admin layout={layout} dataProvider={dataProvider}>
      { /* <Resource name="hosts" /> */ }
      <Resource name="user" {...userCrud} />
      <Resource name="host" {...hostCrud} />
    </Admin>
  );
};

export default App;
