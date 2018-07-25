import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

class Form extends React.Component {
  render() {
    return (
      <div>
        <h3>Click Button</h3>
        <input type="submit" />
      </div>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1> Welcome to my app!</h1>
      </div>
    );
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello {this.props.name} </h1>
        <Form />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome name="React" />, rootElement);
