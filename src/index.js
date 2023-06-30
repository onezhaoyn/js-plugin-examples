import React from "react";
import ReactDOM from "react-dom";
// should import all plugins before any logic
import "./plugin1";
import "antd/dist/antd.css";
import Menu from "./Menu";
import ProfileForm from "./ProfileForm";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Menu />
      <br />
      <br />
      <ProfileForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
