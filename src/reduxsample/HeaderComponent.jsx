import React, { Component } from "react";

import { connect } from "react-redux";
import { addItemTitle } from "./redux/actions/quantityactions";

const mapDispatchToProps = dispatch => {
  console.log(" mapDispatchToProps : called ");
  return {
    handleItemTitle: itemTitle => dispatch(addItemTitle(itemTitle))
  };
};

class HeaderComponent1 extends Component {
  localstate = { itemTitle: "" };

  handleAddQuantity = event => {
    console.log(" 1. Current Item Title @ button event : " + this.localstate);

    this.props.handleItemTitle({ itemTitle: this.localstate.itemTitle });
  };

  handleItemTitle = event => {
    this.localstate.itemTitle = event.target.value;
  };

  render() {
    return (
      <div>
        <p>Header component</p>
        Item Title :<input type="text" onChange={this.handleItemTitle} />
        <button onClick={this.handleAddQuantity}> + Add Quantity </button>
      </div>
    );
  }
}

const HeaderComponent = connect(
  null,
  mapDispatchToProps
)(HeaderComponent1);

export default HeaderComponent;
