import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Table from "./components/Table";

describe("App", () => {
  it("renders Search Component ", () => {
    const wrapper = shallow(<App />);
    const heading = wrapper.find(".heading");
    expect(heading).toHaveLength(1);
    expect(wrapper.find(Table)).toHaveLength(1);
  });
});
