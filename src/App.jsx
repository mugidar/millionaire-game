import { useState } from "react";
import "./App.scss";

function App() {
  const [questionNumber, setQuestionNumber] = useState(3);

  const moneyPyramid = [
    { number: 1, amount: 5 },
    { number: 2, amount: 50 },
    { number: 3, amount: 400 },
    { number: 4, amount: 5000 },
    { number: 5, amount: 10000 }
  ];
  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          question and answers
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.reverse().map((item) => (
            <li
              key={item.number}
              className={item.number === questionNumber ? "active" : ""}
            >
              <span className="moneyListItemNumber">{item.number}</span>
              <span className="moneyListItemAmount">${item.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
