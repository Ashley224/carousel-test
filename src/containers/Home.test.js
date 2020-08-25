import React from "react";
import Home from "./Home";
import Carousel from "./Carousel";
import { shallow } from "enzyme";
describe("Home", () => {
  it("renders header", () => {
    const wrapper = shallow(<Home />);
    const heading = (
      <h1 className="col-sm-6 col-10 offset-1 ml-sm-3 mt-3 mb-3 headings">
        Carousel Test
      </h1>
    );
    expect(wrapper.contains(heading)).toEqual(true);
  });
  it("renders Carousel Component", () => {
    const wrapper = shallow(<Home />);
    const carouselComponent = <Carousel />;
    expect(wrapper.contains(carouselComponent)).toEqual(true);
  });
});
