import React, { createContext, Children, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // get localstorage data
  // initialState will come from localstorage or api

  // from the api, map and build a object with all the values needed to render the question, then pass it to the globalState. From there, save the answers on the localstorage.

  // {
  //   step: localstorage || "",
  //   firstName: localstorage || "",
  //   lastName: localstorage || "",
  //   email: localstorage || "",
  //   ocupation: localstorage || "",
  //   city: localstorage || "",
  //   bio: localstorage || ""
  // }

  // improve this contextAPI using Reducers (useReducer() hook)

  const [globalState, setGlobalState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    ocupation: "",
    city: "",
    bio: ""
  });

  // recieves a object
  const changeGlobalState = data => {
    setGlobalState({
      ...globalState,
      ...data
    });
  };

  //    Proceed to next step
  const nextStep = e => {
    e.preventDefault();
    changeGlobalState({ ...globalState, step: globalState.step + 1 });
  };

  //    Go back to prev step
  const prevStep = e => {
    e.preventDefault();
    changeGlobalState({ ...globalState, step: globalState.step - 1 });
  };

  return (
    <GlobalContext.Provider
      value={{ globalState, changeGlobalState, prevStep, nextStep }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
