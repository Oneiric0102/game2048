import "./App.css";
import Header from "./component/Header";
import AboveGame from "./component/AboveGame";
import Game from "./component/Game";
import { useEffect, useState } from "react";
import useLocalStorageNumber from "./hook/useLocalStorageNumber";
import { getInitialTileList } from "./util/tile";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber("bestScore", 0);
  const [tileList, setTileList] = useState(getInitialTileList);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
      console.log(`bestScore : ${bestScore}`);
    }
  });
  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />
      <AboveGame setScore={setScore} setTileList={setTileList} />
      <Game setScore={setScore} tileList={tileList} setTileList={setTileList} />
    </div>
  );
}

export default App;
