import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./ayncaction";

const mapStateToProps = state => {
  console.log("map state to props called : " + state.payload);
  return { users: state.payload };
};

const mapDispatchToProps = dispatch => {
  console.log(" mapDispatchToProps : called ");
  return {
    fetchUsers1: () => dispatch(fetchUsers())

    // fetchUsers1: bindActionCreators(fetchUsers, dispatch)
  };
};

class AsyncComponent1 extends Component {
  state = { users: [] };

  constructor(currentState) {
    super();
    console.log(" Body Component 1 : Current State : " + currentState.users);

    this.state.user = currentState.users;
  }

  componentWillUpdate() {
    console.log("component update");
  }

  componentDidMount() {
    console.log("Post mount : ");
    // this.props.fetchUsers1();
  }

  getUsers = e => {
    console.log("Welcome to getUsers");
    this.props.fetchUsers1();
  };

  render() {
    console.log("Welcome " + this.props.users);
    return (
      <div>
        <h2>Body Component</h2>

        <br />
        <h4> Current Quantity : </h4>

        <ul>
          {this.props.users.map(user => (
            <li> {user.name}</li>
          ))}
        </ul>

        <button onClick={this.getUsers}> Get Users</button>
      </div>
    );
  }
}

const AyncComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(AsyncComponent1);

export default AyncComponent;
