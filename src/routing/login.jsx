import React, { Component } from "react";

class Login extends Component {
  state = {};

  handleLogin = e => {
    console.log("Login called");
    this.props.history.push("/rdetails");
  };

  render() {
    return (
      <div>
        <h3> Signin to reasrach world </h3>
        User Name : <input type="text" /> <br />
        Password : <input type="password" /> <br />
        <button onClick={this.handleLogin}> Login</button>
      </div>
    );
  }
}

export default Login;
