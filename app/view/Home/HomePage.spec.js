/** @jsx jsx */
import { jsx } from "@emotion/core";
import { shallow } from "enzyme";
import Home from "./HomePage";

const wrapper = shallow(<Home />);

describe("Home component", () => {
  it("should render properly", () => {
    expect(wrapper).toHaveLength(1);
  });
});
