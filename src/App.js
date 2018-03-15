import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./Child.jsx";
import { ToastContainer, toast } from "react-toastify";

class App extends Component {
  componentDidMount() {
    window.addEventListener("newContentAvailable", () => {
      toast("New Content Available! please reload");
    });
  }
  render() {
    return (
      <div className="App">
        <ToastContainer />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome tzzs React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Child />
      </div>
    );
  }
}

export default App;
