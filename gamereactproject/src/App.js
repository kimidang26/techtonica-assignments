import "./App.css";
import UserNum from "./component/UserNum";

// getData = (event) => {
//   console.log("Event:", event.target.value);
// };

// function createRandomNumber(props) {}

export default function App() {
  let computersNumber = Math.floor(Math.random() * 50 + 1);

  return (
    <div className="App">
      <h1>Guess My Number</h1>

      <UserNum
        correctNumber={computersNumber}
        name="Awesome Person"
        title={"boba junkie"}
        max="50"
      />
    </div>
  );
}
