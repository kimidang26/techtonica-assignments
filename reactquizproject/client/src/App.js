import React from "react";
import './App.css';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);



  
  return (
    <div className="App">
      <header className="App-header">
       
        <p>{!data ? "Loading..." : data.results.reduce((prev, current) => prev + " , " + current.question )}</p>
      </header>
    </div>
  );
}

export default App;
