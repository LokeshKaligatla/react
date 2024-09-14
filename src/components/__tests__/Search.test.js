import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import { act } from "react-dom/test-utils"
import MOCK_DATA from "../mocks/ResData.json"
import { BrowserRouter, json } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        },
    })
})

it("should render the body component with search button", async () => {
    await act(async () =>
    render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    ));


    const btn = screen.getByRole("button", {name:"Search"});

    const searchInput = screen.getByTestId(searchInput);

    fireEvent.change(searchInput,{target:{value:"burger"}})
    fireEvent.click(btn)

    //expect(btn).toBeInTheDocument();
    
    screen.getAllByTestId("rescard")

    expect(cards.length).toBe(2);

})