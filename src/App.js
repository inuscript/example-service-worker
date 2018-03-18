import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Child from "./Child.jsx";
import styled, { keyframes } from "styled-components";

console.log("cachebuster:8");

const animation = keyframes`
  from {
    opacity 0;
  }
  to {
    opacity 1;
  }
`;

const Modal = styled.div`
  z-index: 100;
  width: 100%;
  height: 3em;
  line-height: 3em;
  position: fixed;
  top: 0;
  background: #f44292;
  color: white;
  cursor: pointer;
  animation: ${animation} 1s linear;
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
  onClick = () => {
    window.location.reload();
  };
  render() {
    if (!this.state.show) {
      return null;
    }
    return (
      <Modal onClick={this.onClick}>
        <span> New Content Available!please reload </span>{" "}
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
          <h1 className="App-title">
            {" "}
            Welcome Service Worker Reload sample{" "}
          </h1>{" "}
        </header>{" "}
        <p className="App-intro">
          To get started, edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <Child />
      </div>
    );
  }
}

export default App;
