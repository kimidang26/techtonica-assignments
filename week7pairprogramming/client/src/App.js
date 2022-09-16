
import './App.css';
import Students from './components/students';

function App() {
  return (
    <div className="App">
      <h1>Hello Kamily</h1>
      <Students school={"Hackbright"}/>
      <Students school={"Techtonica"}/>
    </div>
  );
}

export default App;
