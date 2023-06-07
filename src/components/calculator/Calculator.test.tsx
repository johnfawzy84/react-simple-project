import { describe, test, expect } from "vitest";
import {fireEvent, render, screen} from '@testing-library/react';

import Calculator from "./Calculator";
describe ("Check availability of UI components", () => {
    test("Test Calculator arth. operation is available", () => {
        render(<Calculator/>);
        expect(screen.getByText(/\+/i)).toBeDefined();
        expect(screen.getByText(/\-/i)).toBeDefined();
        expect(screen.getByText(/\//i)).toBeDefined();
        expect(screen.getByText(/x/i)).toBeDefined();
    });
    test("Test Calculator numbers are available", () => {
        render(<Calculator/>);
        expect(screen.getByText(/1/i)).toBeDefined();
        expect(screen.getByText(/2/i)).toBeDefined();
        expect(screen.getByText(/3/i)).toBeDefined();
        expect(screen.getByText(/4/i)).toBeDefined();
        expect(screen.getByText(/5/i)).toBeDefined();
        expect(screen.getByText(/6/i)).toBeDefined();
        expect(screen.getByText(/7/i)).toBeDefined();
        expect(screen.getByText(/8/i)).toBeDefined();
        expect(screen.getByText(/9/i)).toBeDefined();
        //expect(screen.getByText(/0/i)).toBeDefined();
    });      
});
describe("Check Arth. Ops", ()=>{
    test("check + op",()=>{
        render(<Calculator/>);

        const number1 = screen.getByText(/1/i);
        const number9 = screen.getByText(/9/i);
        const sign_plus = screen.getByText(/\+/i);
        const sign_equal = screen.getByText(/\=/i);

        fireEvent.click(number1);
        fireEvent.click(number1);
        fireEvent.click(sign_plus);
        fireEvent.click(number9);
        fireEvent.click(number9);
        fireEvent.click(sign_equal);

        expect(screen.getAllByText(/110/i)).toBeDefined();
    })
})

