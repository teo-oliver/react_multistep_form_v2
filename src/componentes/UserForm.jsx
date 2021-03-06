import React, { useState, useContext } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { GlobalContext } from "./contexts/GlobalState";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const UserForm = () => {
  const { globalState, changeGlobalState, prevStep, nextStep } = useContext(
    GlobalContext
  );
  console.log(globalState);

  // const [state, setstate] = useState({
  //   step: 1,
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   ocupation: "",
  //   city: "",
  //   bio: ""
  // });

  //    Proceed to next step
  // const nextStep = () => {
  //   // const { step } = state;
  //   // setstate({ ...state, step: state.step + 1 });
  //   changeGlobalState({ ...globalState, step: globalState.step + 1 });
  // };

  //    Go back to prev step
  // const prevStep = () => {
  //   // const { step } = state;
  //   // setstate({ ...state, step: state.step - 1 });
  //   changeGlobalState({ ...globalState, step: globalState.step - 1 });
  // };

  //   Handle field change
  const handleChange = input => e => {
    changeGlobalState({ ...globalState, [input]: e.target.value });
    // setstate({ ...state, [input]: e.target.value });
  };

  // const { step } = state;
  // const { firstName, lastName, email, occupation, city, bio } = state;
  // const values = { firstName, lastName, email, occupation, city, bio };
  const { step } = globalState;
  const { firstName, lastName, email, occupation, city, bio } = globalState;
  const values = { firstName, lastName, email, occupation, city, bio };

  function renderQuestions(step) {
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
        );
      case 4:
        return <Success />;
    }
  }

  return (
    <>
      <MuiThemeProvider>
        {renderQuestions(step)}
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={e => nextStep(e)}
        />
        <br />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={e => prevStep(e)}
        />
      </MuiThemeProvider>
    </>
  );
};

const styles = {
  button: {
    margin: 15
  }
};

export default UserForm;
