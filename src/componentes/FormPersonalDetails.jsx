import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormPersonalDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const continueNext = e => {
    e.preventDefault();
    nextStep();
  };
  const back = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Enter Persoal Details" />
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={continueNext}
        />
        <br />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={back}
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

export default FormPersonalDetails;
