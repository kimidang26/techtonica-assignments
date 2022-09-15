import Questionaire from './components/Questionaire';
import React, {useState, useEffect} from "react";
import './App.css';


function App(props) {

  const [data, setData] = React.useState(null);
  const [questions,setQuestions] = useState([]);
  const[currentIndex, setCurrentIndex]= useState(0);
  const [score,setScore] = useState(0);
  const [gameEnded, setGameEnded] =useState(false);

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
      
    });
  }, []);

// if (!data){
//   return "Loading..."
// } 

const handleAnswer = (answer) =>{
  const newIndex = currentIndex+1 
  setCurrentIndex(newIndex);

  if (answer === questions[currentIndex].correct_answer) {
    //we want to increase score
    setScore(score+1);
  }

  if(newIndex >= questions.length){
    setGameEnded(true);
  }
};

  return gameEnded? (
    <h1 className="text-3xl text-white font-bold">Your score was {score} </h1>
  ) : (
   questions.length > 0 ? (
    <div className="container">
        
        <Questionaire data={questions[currentIndex]} 
          handleAnswer = {handleAnswer}/>
          
    </div>
      ) : (
        <h2 className="text-2xl text-white font-bold">Loading...</h2>
      
  ));
}

export default App;