import renderer from "react-test-renderer";
import Circle from "./Circle";

it("renders correctly", () => {
  const tree = renderer.create(<Circle />).toJSON();
  expect(tree).toMatchSnapshot();
});
