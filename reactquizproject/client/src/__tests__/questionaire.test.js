import { render, screen, cleanup} from '@testing-library/react';
import Questionaire from '../components/Questionaire';


afterEach(() => {
    cleanup();
});

test('should render component', () =>{
    render(<Questionaire data = {{
        question:"hello world", correct_answer: "right answer", answers: [1,2,3]
    }}/>)
    const questionElement = screen.getByTestId("list-element")
    expect(questionElement).toBeInTheDocument();
});

test('should render button', () =>{
    render(<Questionaire data = {{
        question:"hello world", correct_answer: "right answer", answers: [1,2,3,4]
    }}/>)
    const buttonElement = screen.getAllByRole('button')
    expect(buttonElement).toHaveLength(4);
});

test('should render extrabutton', () =>{
    render(<Questionaire showAnswers={true} data = {{
        question:"hello world", correct_answer: "right answer", answers: [1,2,3,4]
    }}/>)
    const buttonElement = screen.getAllByRole('button')
    expect(buttonElement).toHaveLength(5);
});


// javascript test example
// test ("my first test", () => {
//     expect(true).toBe(true);
// })

// test  (" math", () =>{
//     expect(1+1).toBe(2);
// })

// test("arrays", () => {
//     const arr = [1,2,3,4]
//     expect(arr).toEqual([1,2,3,4])
// })

