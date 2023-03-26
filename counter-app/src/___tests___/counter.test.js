import { fireEvent, render, screen } from '@testing-library/react';
import Counter from "../Component/Counter"


describe("Test The Counter App" , ()=>{
    it("Counter Should Render With Out Any Error" , ()=>{
        render(<Counter/>)

        const text = screen.getByTestId("counter")
        const button = screen.getByTestId("add-btn")

        expect(text).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    it("It should Have Initial Value 0", ()=>{
        render(<Counter/>)
        const text = screen.getByTestId("counter")
        expect(text).toHaveTextContent("Counter --- 0")
    })

    it("On Clicking The Count Button count should Increase By 5" , ()=>{
        render(<Counter/>)
        const text = screen.getByTestId("counter")
        expect(text).toHaveTextContent("Counter --- 0")

        const addBtn = screen.getByTestId("add-btn");
        fireEvent.click(addBtn);

        expect(text).toHaveTextContent("Counter --- 5")

        //if we want add button should click once again simply copy that thing and past it again

        fireEvent.click(addBtn)
        expect(text).toHaveTextContent("Counter --- 10")
    })

    it("On CLicking on Reduce Button Counter should reduce by 5", ()=>{
        render(<Counter/>)
        const text = screen.getByTestId("counter")
        const reduce = screen.getByTestId("reduce-btn")
        fireEvent.click(reduce)
        expect(text).toHaveTextContent("Counter --- -5")
    })
    
})