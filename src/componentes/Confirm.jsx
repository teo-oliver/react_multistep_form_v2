import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = ({ values, prevStep, nextStep }) => {
  const continueNext = e => {
    e.preventDefault();
    // Process FORM e.g. send data to API, etc
    nextStep();
  };

  const { firstName, lastName, email, occupation, city, bio } = values;

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem primaryText="First Name" secondaryText={firstName} />
          <ListItem primaryText="Last Name" secondaryText={lastName} />
          <ListItem primaryText="Emai" secondaryText={email} />
          <ListItem primaryText="Occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
          <ListItem primaryText="Bio" secondaryText={bio} />
        </List>
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueNext}
        />
      </>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
