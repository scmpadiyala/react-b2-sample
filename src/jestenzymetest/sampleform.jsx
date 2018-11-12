import React, { Component } from "react";

class SampleForm extends Component {
  state = { isSelected: true };

  handleChange = e => {
    // e.preventDefault();
    console.log("Handle change called " + e.target.checked);

    this.setState({ isSelected: e.target.checked });
  };

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.isSelected}
            onChange={this.handleChange}
          />{" "}
          Gender
        </label>
      </div>
    );
  }
}

export default SampleForm;
