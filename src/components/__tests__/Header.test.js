import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import AppStore from "../../utils/AppStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("should my header with login button", () => {

    render(
        <BrowserRouter>
        <Provider store={AppStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
})

it("should my header with cart items 0", () => {

    render(
        <BrowserRouter>
        <Provider store={AppStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByText(/Cart/);

    expect(loginButton).toBeInTheDocument();
})

it("should my header with login/logout", () => {

    render(
        <BrowserRouter>
        <Provider store={AppStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logOutButton = screen.getByRole("button", {name: "Logout"});

    expect(logOutButton).toBeInTheDocument();
})