import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page",() =>{
    test("Should load contact us component", () => {
  render(<Contact />);
    //querying
  const heading = screen.getByRole("heading");
    //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Should load input name us component", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("name");

  expect(input).toBeInTheDocument();
});

test("Should load input name us component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  expect(inputBoxes.length).toBe(2);
});
})
