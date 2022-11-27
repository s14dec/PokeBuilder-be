import React, { Component } from "react";
import ReactDOM from "react-dom";
import Builder from "./components/builder";
import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Builder />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
