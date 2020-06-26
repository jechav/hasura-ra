import React from "react";
import {
  List,
  Datagrid,
  TextField,
  // FunctionField,
} from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
    </Datagrid>
  </List>
);

export default UserList;
