import Questionaire from './components/Questionaire';
import React, {useState, useEffect} from "react";
import './App.css';


function App(props) {

  const [data, setData] = React.useState(null);
  const [questions,setQuestions] = useState([]);
  const[currentQuestion, setCurrentQuestion]= useState(undefined);

  // const [isDone, setIsDone]= React.useState(false);
  
  // function userIsDone(){
  //   // setIsDone(true)  
  //   //no return = undefined
  //   console.log("userisdone has run")
  //   return 123; 
  // }


  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
      setQuestions(data.results)
      setCurrentQuestion(data.results[0])
    });
  }, []);

// if (!data){
//   return "Loading..."
// } 

const handleAnswer = (answer) =>{
  //check for the answer
  //show another question
  //change score if correct
};

  return questions.length > 0 ? (
    <div className="container">
        <Questionaire data={currentQuestion} handleAnswer = {handleAnswer}/>
    </div>
      ) : (
        <h2 className="text-2xl text-white font-bold">Loading...</h2>
      
  );
}

export default App;