//import ReactTestUtils from "react-dom/test-utils";
import renderer from "react-test-renderer";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import React from "react";
import FooterComponent1 from "./FooterComponent";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

//http://airbnb.io/enzyme/docs/api/shallow.html

describe("<FooterComponent1 >", () => {
  // default rendring test

  it("renders without crashing - FooterComponent", () => {
    const div = document.createElement("div");
    ReactDOM.render(<FooterComponent1 />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // No. of HTML elements existance testing
  it("renders an p", () => {
    const wrapper = shallow(<FooterComponent1 />);

    // console.log("test" + wrapper.find("p"));
    expect(wrapper.find("p").length).toEqual(1); //.to.have.lengthOf(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  // HTML existance testing

  it("renders an p", () => {
    const wrapper = shallow(<FooterComponent1 />);

    const expectedHTML = "<p>Footer component </p>";

    const realOutput = wrapper.find("div").html();

    console.log(realOutput);

    expect(realOutput.indexOf(expectedHTML) > -1).toEqual(true);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<FooterComponent1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
