import React from "react";
import { shallow, mount } from "enzyme";
import Table from "../Table";
import UserDetails from '../UserDetails';

describe("Table", () => {
  const items = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male"
    },
    {
      name: "C-3PO",
      height: "167",
      mass: "75",
      hair_color: "n/a",
      skin_color: "gold",
      eye_color: "yellow",
      birth_year: "112BBY",
      gender: "n/a"
    }
  ];
  
  it("should render correctly ", () => {
    const wrapper = mount(<Table error={false} items={items} />);
    expect(wrapper.find(UserDetails)).toHaveLength(2);
  });
});
