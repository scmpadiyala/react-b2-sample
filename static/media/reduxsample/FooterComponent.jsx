import React, { Component } from "react";
import { deleteItem } from "./redux/actions/quantityactions";
import { connect } from "react-redux";

// const mapDispatchToProps = dispatch => {
//   console.log(" mapDispatchToProps : called ");
//   return {
//     handleReduceQuantity: index => dispatch(deleteItem(index))
//   };
// };

class FooterComponent1 extends Component {
  state = {};

  handleReduceQuantity = event => {
    console.log("reduce Qauntity called : event value : " + event.value);
    this.props.handleReduceQuantity({ index: 1 });
  };

  render() {
    return (
      <div>
        <p>Footer component </p>

        <button onClick={this.handleReduceQuantity}> - Reduce Quantity </button>
      </div>
    );
  }
}

// const FooterComponent = connect(
//   null,
//   mapDispatchToProps
// )(FooterComponent1);

// export default FooterComponent;

export default FooterComponent1;
