import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";


class CoreApp extends Component {
  state = {};


  render() {
    return (
      <div>
        <h1>Welcome to my first page</h1>
        
          <HeaderComponent />
          <BodyComponent />
          <FooterComponent />
        </div>
    );
  }
}

export default CoreApp;
