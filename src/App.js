import React from "react";
import "./App.css";
import UserForm from "./componentes/UserForm";
import GlobalProvider from "./componentes/contexts/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <UserForm />
      </GlobalProvider>
    </div>
  );
}

export default App;
