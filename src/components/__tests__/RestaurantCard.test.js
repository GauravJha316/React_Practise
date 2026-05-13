import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Restaurantcard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"


it("should render Restaurant component with props data", ()=>{

    render(
        <RestaurantCard resData={MOCK_DATA}    />
    );

    const name=screen.getByText("Theobroma");
    expect (name).toBeInTheDocument();

})