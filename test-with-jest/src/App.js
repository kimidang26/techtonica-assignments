import logo from './logo.svg';
import './App.css';
import List from './components/list';

function App() {

  const todos = [
    {id:1, title: "wash dishes", completed: false},
    {id:2, title: "walk Dog", completed: true},
    {id:3, title: "make dinner", completed: false},
  ]
  return (
    <div className="App">
      {todos.map((todo,index) => {
        return <List todo={todo} key={index} />
      })
        }
    </div>
  );
}

export default App;
