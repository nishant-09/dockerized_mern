import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backendResponse: ""
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await fetch("http://localhost:5014/", {
      method: "get"
    });
    const message = await response.json();
    this.setState({ backendResponse: message });
  };

  render() {
    const { backendResponse = "" } = this.state;

    return (
      <div className="App">
        <h1>Working 1234</h1>
        <h2>Backend Message is {backendResponse}</h2>
      </div>
    );
  }
}

export default App;
