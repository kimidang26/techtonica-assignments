import {render, screen, cleanup } from "@testing-library/react";
import DeleteUser from "../components/DeleteUser";

afterEach(() => {
    cleanup();
});

describe ("Delete Users", ()=> {
    test("Delete users renders", ()=> {
        render(<DeleteUser />)
    });
});