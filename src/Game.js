import React from "react";

const Game = (props) => {
  const {
    value1,
    value2,
    value3,
    proposedAnswer,
    numCorrect,
    numQuestions
  } = props.data;
  return (
    <div className="game">
      <h2>Mental Math</h2>
      <div className="equation">
        <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
      </div>
      <button onClick={() => props.evaluate(true)}>True</button>
      <button onClick={() => props.evaluate(false)}>False</button>
      <p className="text">
        Your Score: {numCorrect}/{numQuestions}
      </p>
    </div>
  );
};

export default Game;
