import React, { useState } from "react";

const UserRow = (props) => {
  const [showGames, setShowGames] = useState(true);

  const toggleGames = (e) => {
    e.preventDefault();
    setShowGames(!showGames);
  };

  const games = showGames ? "0" : "*";

  return (
    <li>
      Username {props.user.userName} played {games} games{" "}
      {showGames ? (
        <button onClick={toggleGames}>Hide the Number of Games Played</button>
      ) : (
        <button onClick={toggleGames}>Show the Number of Games Played</button>
      )}
    </li>
  );
};

export default UserRow;
