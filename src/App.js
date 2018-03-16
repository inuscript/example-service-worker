import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./Child.jsx";
import styled from "styled-components";

const Modal = styled.div`
  z-index: 100;
  width: 100%;
  height: 1.5em;
  position: fixed;
  top: 0;
  background: red;
  color: white;
  cursor: pointer;
`;

class ModalMessage extends Component {
  state = {
    show: false
  };
  componentDidMount() {
    window.addEventListener("newContentAvailable", () => {
      this.setState({
        show: true
      });
    });
  }
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <Modal>
        <a href="/">New Content Available! please reload</a>
      </Modal>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModalMessage />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Service Worker Reload sample</h1>
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
