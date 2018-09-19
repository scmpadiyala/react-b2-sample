import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("map state to props called : " + state.itemTitles);
  return { itemTitles: state.itemTitles };
};

class BodyComponent1 extends Component {
  state = { itemTitles: [] };

  constructor(currentState) {
    super();
    console.log(
      " Body Component 1 : Current State : " + currentState.itemTitles
    );

    this.state.itemTitles = currentState.itemTitles;
  }

  componentWillUpdate() {
    console.log("component update");
  }

  render() {
    console.log("Welcome " + this.props.itemTitles.length);
    return (
      <div>
        <h2>Body Component</h2>

        <br />
        <h4> Current Quantity : </h4>

        <ul>
          {this.props.itemTitles.map(item => (
            <li> {item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const BodyComponent = connect(mapStateToProps)(BodyComponent1);

export default BodyComponent;
