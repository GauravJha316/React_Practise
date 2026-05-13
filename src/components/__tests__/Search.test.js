import { render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with Search", async () => {
    
    await act(async () => render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
));
    const searchBtn= screen.getAllByRole("button", {name: "search"});
    expect(searchBtn).toBeInTheDocument();

});