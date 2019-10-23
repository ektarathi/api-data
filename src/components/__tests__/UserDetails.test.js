import React from "react";
import { shallow, mount } from "enzyme";
import UserDetails from '../UserDetails';

describe("UserDetails", () => {
  const item = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male"
    }
  ];
  
  it("should render user details correctly ", () => {
    const wrapper = mount(<UserDetails item={item} />);
    const tableClass = wrapper.find(".people_details");
    expect(tableClass).toHaveLength(1);
    const sectionContainer = wrapper.find(".section");
    expect(sectionContainer).toHaveLength(6);
  });
});
