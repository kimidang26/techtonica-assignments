import {render, screen, cleanup} from '@testing-library/react'
import List from '../components/list';
import renderer from "react-test-renderer";

afterEach(()=> {
    cleanup();
});

test('should render component', () => {
    const todo = {id:1, title: "wash dishes", completed: false}
    render(<List todo={todo}/>)
    const listElement = screen.getByTestId("list-element-1");
    expect(listElement).toBeInTheDocument();
})

test('should render text', () => {
    const todo = {id:1, title: "wash dishes", completed: false}
    render(<List todo={todo}/>)
    const listElement = screen.getByTestId("list-element-1");
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveTextContent("wash dishes");
})

test('should render text', () => {
    const todo = {id:1, title: "wash dishes", completed: false}
    render(<List todo={todo}/>)
    const listElement = screen.getByTestId("list-element-1");
    expect(listElement).toBeInTheDocument();
    expect(listElement).not.toContainHTML("strike");
})

// test('should render a complete element', () => {
//     const todo = {id:2, title: "walk Dog", completed: true}
//     render(<List todo={todo}/>)
//     const listElement = screen.getByTestId("list-element-2");
//     expect(listElement).toBeInTheDocument();
//     expect(listElement).toContainHTML("strike");
// })


describe('<List />', () => {
    it('matches the Snapshot', () => {
        const todo = {id:1, title: "wash dishes", completed: false}
        const tree =renderer.create(<List todo={todo} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})






// //unitest for JS-
// test('my first test', () => {
//     expect(true).toBe(true);
// })

// test ("math", () => {
//     expect(1 +1).toBe(2);
// })

// test("arrays" , ()=>{
//     const arr =[1,2,3,4]
//     expect(arr).toEqual([1,2,3,4]);
//     expect(arr).not.toBe([1,2,3,4])
// })