import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = () => {
  const [state, setstate] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    ocupation: "",
    city: "",
    bio: ""
  });

  //    Proceed to next step
  const nextStep = () => {
    // const { step } = state;
    setstate({ ...state, step: state.step + 1 });
  };

  //    Go back to prev step
  const prevStep = () => {
    // const { step } = state;
    setstate({ ...state, step: state.step - 1 });
  };

  //   Handle field change
  const handleChange = input => e => {
    setstate({ ...state, [input]: e.target.value });
  };

  const { step } = state;
  const { firstName, lastName, email, occupation, city, bio } = state;
  const values = { firstName, lastName, email, occupation, city, bio };
  console.log(values);

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

  return <div></div>;
};

export default UserForm;
