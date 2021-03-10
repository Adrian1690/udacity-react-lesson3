import React, { useState } from "react";
import PropTypes from "prop-types";

const UserRow = (props) => {
  const [showGames, setShowGames] = useState(true);

  const toggleGames = (e) => {
    e.preventDefault();
    setShowGames(!showGames);
  };

  const games = showGames ? props.user.gamesPlayed : "*";

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

UserRow.propTypes = {
  user: PropTypes.object
};

export default UserRow;
