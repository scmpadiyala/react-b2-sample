import React, { Component } from "react";

class ResearchHome extends Component {
  state = {
    researchStatus: "In Approval",
    analystRating: 0,
    customerRating: 0,
    avgRating: 0
  };

  constructor() {
    super();
    console.log("1. Constructor");
  }

  componentWillMount() {
    console.log("2. Component Will Mount");
  }

  componentDidMount() {
    console.log("4. Coponent did mount");
    this.setState({ researchStatus: "Work in progress" });
  }

  componentWillUpdate() {
    console.log("5. Component will update");
  }

  componentDidUpdate() {
    console.log("6. Component did update");
  }

  /*
   * Event Handling using arrow function (other way to is using bining)
   */
  handleProjStatus = e => {
    console.log("Project Status : " + e.target.value);
    this.setState({ researchStatus: e.target.value });
  };

  handleAnalystRating = event => {
    this.state.analystRating = event.target.value;
    console.log("Analyst Rating : " + this.state.analystRating);

    let tempAvgRating =
      (this.state.customerRating + this.state.analystRating) / 2;

    this.setState({ avgRating: tempAvgRating });
  };

  handleCustomerRating = event => {
    this.state.customerRating = event.target.value;
    console.log("Customer Rating : " + this.state.customerRating);

    let tempAvgRating =
      (this.state.customerRating + this.state.analystRating) / 2;

    this.setState({ avgRating: tempAvgRating });
  };

  render() {
    console.log("3. Component render : " + this.state.researchStatus);
    return (
      <div>
        <h3> Welcome to my research project {this.props.projName} </h3> <br />
        <b> {this.props.projName} </b> is a new project sponsered by Central
        Govt. of India. <br /> <br />
        Current status of this project is - <i>
          {" "}
          {this.state.researchStatus}
        </i>{" "}
        <br />
        <br /> <br />
        Project Status : <input
          type="text"
          onChange={this.handleProjStatus}
        />{" "}
        <br /> <br />
        <h4>Reaseach Rating : </h4>
        <br />
        Rating by Analyst :{" "}
        <input type="text" onChange={this.handleAnalystRating} /> <br />
        Rating by Customer :{" "}
        <input type="text" onChange={this.handleCustomerRating} /> <br />
        <br />{" "}
        <h4>Average Rating for the reasearch : {this.state.avgRating}</h4>
      </div>
    );
  }
}

export default ResearchHome;
