import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log("Get State Step 1");
  return { orders: state.orders };
};

class DisplayOrders1 extends Component {
  state = {};

  state = { orders: [] };

  constructor(currentState) {
    super();
    this.state.orders = currentState.orders;

    console.log("Order List @ Display Order : " + JSON.stringify(this.state.orders));
  }

  render() {
    return (
      <div>
        <h4>Display Orders</h4>
      </div>
    );
  }
}

const DisplayOrders = connect(mapStateToProps)(DisplayOrders1);

export default DisplayOrders;
