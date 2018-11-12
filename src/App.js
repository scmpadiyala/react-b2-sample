import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResearchHome from "./propstate/ResearchHome";
import MyHome from "./routing/researchHome";

class App extends Component {
  constructor() {
    super();
    //console.log("App component constructor called");
  }

  componentWillMount() {
    // console.log("componentWillMount - called");
  }

  componentDidMount() {
    //console.log("componentDidMount - called");
  }

  render() {
    //console.log("App component render called");
    return (
      <div>
        <h3> XYZ Reaseach</h3>
        <hr />
        {/* <ResearchHome projName="Ocean Waves" /> */}
        <MyHome />
      </div>
    );
  }
}

export default App;
