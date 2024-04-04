// src/components/Button.test.js
import { render, fireEvent, test } from "vitest";
import Button from "./Button";

test("Button component renders correctly", () => {
  const { getByText } = render(<Button>Hello</Button>);
  expect(getByText("Hello")).toBeInTheDocument();
});

test("Button onClick event works", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(getByText("Click me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
