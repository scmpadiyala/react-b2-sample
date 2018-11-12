import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AboutUs from "./aboutus";
import Login from "./login";
import ResearchDetails from "./researchdetails";

class MyHome extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div>
          <h3>Research Home</h3>

          <Link to={"/aboutus"}> About Research || </Link>
          <Link to={"/login"}> Signin</Link>

          <Switch>
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/login" component={Login} />
            <Route path="/rdetails" component={ResearchDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MyHome;
