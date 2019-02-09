import React, { Component } from "react";

class Login extends Component {
  state = { userName: "Sample user" };

  handleLogin = e => {
    console.log("Login called");
    this.props.history.push("/rdetails");
  };

  inputValueChange = event => {
    event.preventDefault();

    console.log("state user Name " + JSON.stringify(this.state));

    console.log("User Name : " + event.target.value);
    console.log("User Name : " + event.target.name);

    this.setState({ [event.target.name]: event.target.value });
  };

  loginSubmit = event => {
    console.log("Inside Submit");
    console.log(
      "User Name : " +
        this.state.userName +
        " : Password : " +
        this.state.upwd +
        " : Subject " +
        this.state.subject
    );
    this.props.history.push("/rdetails");
  };

  render() {
    return (
      <div>
        <h3> Signin to reasrach world </h3>
        <form onSubmit={this.loginSubmit}>
          User Name :{" "}
          <input type="text" name="userName" onChange={this.inputValueChange} />{" "}
          <br />
          Password :{" "}
          <input
            type="password"
            name="upwd"
            onChange={this.inputValueChange}
          />{" "}
          <br />
          Suject :{" "}
          <select name="subject" onChange={this.inputValueChange}>
            <option value="English"> English</option>
            <option value="Maths"> Maths</option>
            <option value="Physics"> Physics</option>
            <option value="SS"> SS</option>
            <option value="English"> Hindin</option>
          </select>{" "}
          <br />
          <input type="submit" value="LOGIN" />
        </form>
      </div>
    );
  }
}

export default Login;
