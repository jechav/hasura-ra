import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  FormDataConsumer,
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
        <TextInput
          source="email"
          type="email"
          formClassName={classes.inlineBlock}
        />
        <FormDataConsumer formClassName={classes.inlineBlock}>
          {({ formData, ...rest }) => (
            <TextInput
              variant="outlined"
              source="username"
              value={formData.email}
              helperText="Username is populated from email"
            />
          )}
        </FormDataConsumer>
        <TextInput source="first_name" formClassName={classes.inlineBlock} />
        <TextInput source="last_name" formClassName={classes.inlineBlock} />
      </SimpleForm>
    </Create>
  );
};

export default UserCreate;
