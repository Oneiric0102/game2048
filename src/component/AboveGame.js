import React from "react";
import { getInitialTileList } from "../util/tile";

export default function AboveGame({ setScore, setTileList }) {
  const restartGame = () => {
    setTileList(getInitialTileList);
    setScore(0);
  };
  return (
    <div className="above-game">
      <p className="game-intro">
        Join the tiles, get to <strong>2048!</strong>
        <br />
      </p>
      <a className="restart-button" onClick={restartGame}>
        New Game
      </a>
    </div>
  );
}
