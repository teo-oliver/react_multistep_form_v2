import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = () => {
  return (
    <MuiThemeProvider>
      <>
        <AppBar title="Cool" />
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with furrther instractions</p>
        <br />
      </>
    </MuiThemeProvider>
  );
};

export default Success;
