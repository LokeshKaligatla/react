import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

// describe used to block the components in single block. wecan have multiple describes to block the more components like contact, home, about etc...
describe("contact page components testing", () => {

    test("should loadcontact us component", () => {

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    });
    
    
    test("should load button inside component", () => {
    
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    
    });
    
    // we can write "it" in case of "test" also
    it("Should load 2 input boxes in the component", () =>{
    
        render(<Contact />);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
       // console.log(inputBoxes[0]);
    
       expect(inputBoxes.length).toBe(2)
    });

})

