import React, { useState } from "react";


function UserNum(props) {
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const [userGuess, setUserGuess] = useState("");

  console.log(props);

  function checkWinner() {
    console.log(userGuess);
    // increment
    // setCounter(counter + 1);

    let guess = Number(userGuess);
    if (guess === props.correctNumber) {
      setMessage("You are correct");
    } else if (guess > props.correctNumber) {
      setMessage("You are too high");
    } else if (guess < props.correctNumber) {
      setMessage("You are too low");
    }
    setCounter(counter + 1);
  }
  const startGame = () => {
    setCounter(0);
    setUserGuess("");
    setMessage("");
  };

  // const startGame = () => {
  //   setCounter(0);
  //   setMessage("");
  //   setUserGuess("")

  // };

  return (
    <div className="UserNum">
      <h2>
        {props.name} Please pick a number between 1- {props.max}
      </h2>
      <input
        type="text"
        onChange={(event) => setUserGuess(event.target.value)}
        value={userGuess}
      />
      <button onClick={checkWinner}>Submit</button>
      <p>{message}</p>

      <p>Your Attempts: {counter} </p>
      <button onClick={startGame}>Reset</button> 
    
    </div>
  );
}

export default UserNum;
