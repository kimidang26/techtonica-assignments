import {render, screen, cleanup } from "@testing-library/react";
import Users from "../components/Users";

afterEach(() => {
    cleanup();
});


describe ("Users", ()=> {
    test("users renders", ()=> {
        render(<Users />)
    });
});

describe("Render users form", () =>{
        render(<Users />);
        expect(screen.getByText(/Add User/));
});