import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";
import Menus from "./components/Menus";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav />
        <Menus />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
