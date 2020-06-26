import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  // FormDataConsumer,
  // DateInput,
  // PasswordInput,
  // SelectInput,
  // ReferenceArrayInput,
  // SelectArrayInput,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  inlineBlock: { display: "inline-flex", marginRight: "1rem" },
});

const UserCreate = (props) => {
  const classes = useStyles();

  return (
    <Create {...props}>
      <SimpleForm variant="outlined" margin="dense" warnWhenUnsavedChanges>
        <TextInput source="name" formClassName={classes.inlineBlock} />
        <TextInput source="description" formClassName={classes.inlineBlock} />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
