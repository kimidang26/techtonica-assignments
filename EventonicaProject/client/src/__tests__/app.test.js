import {render, screen, cleanup } from "@testing-library/react";
import Footer from "../components/footer.jsx";
import Events from "../components/Events.jsx";
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

describe("App", ()=> {
    test("renders App component", () => {
        render(<App />)
    });
});


test("renders Event title", ()=> {
    render(<Events />);
    expect(screen.getByPlaceholderText(1))
});


//unitest for javascript not react
// test('testing ', () => {
//     expect(true).toBe(true);
// })