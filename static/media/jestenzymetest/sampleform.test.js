import React from "react";
import { shallow } from "enzyme";
import SampleForm from "./sampleform";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("SampleForm changes the text after click", () => {
  // Render a checkbox with label in the document
  const sampleForm = shallow(<SampleForm />);

  console.log(" check : " + sampleForm.find("input").toString());

  sampleForm.find("input").value.toEqual(true);

  //expect(sampleForm.value).toEqual("Off");

  checkbox.find("input").simulate("change");

  // expect(checkbox.text()).toEqual("On");
});
