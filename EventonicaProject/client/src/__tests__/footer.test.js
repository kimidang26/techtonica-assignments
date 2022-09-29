import {render, screen, cleanup } from "@testing-library/react";
import Footer from "../components/footer.jsx";
import App from "../App.js"

//will avoid errors because we are rendering the screen
afterEach(() => {
    cleanup();
});

describe("Footer", ()=> {
    test("renders Footer component", () => {
        render(<Footer />)
    });
});

