import Questionaire from './components/Questionaire';
import React, {useState, useEffect} from "react";
import './App.css';


function App(props) {

  const [data, setData] = React.useState(null);
  const [questions,setQuestions] = useState([]);
  const[currentIndex, setCurrentIndex]= useState(0);
  const [score,setScore] = useState(0);
  const [showAnswers, setShowAnswers] =useState(false);
 

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
  if (!showAnswers) { 
    // prevent double answers
    if (answer === questions[currentIndex].correct_answer) {
      //we want to increase score
      setScore(score+1);
      }
  }

  setShowAnswers(true)
  // const newIndex = currentIndex+1 
  // setCurrentIndex(newIndex);
 
};

const handleNextQuestion = () =>{
  setShowAnswers(false);

  setCurrentIndex(currentIndex + 1);
}

  return questions.length > 0 ? (
    <div className='container'>
    {currentIndex >= questions.length ? (
      <h1 className="text-3xl text-white font-bold">
        Game Ended ! Your score is: {score} 
      </h1>
    ) : (
        <Questionaire 
        data={questions[currentIndex]} 
        showAnswers={showAnswers}
        handleNextQuestion={handleNextQuestion}
        handleAnswer = {handleAnswer}/>
    )}  
    </div>
      ) : (
        <h2 className="text-2xl text-white font-bold">Loading...</h2>
      
  );
}

export default App;