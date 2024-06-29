import React, { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

const App = () => {
  const [IsGameStarted, setIsGameStarted] = useState(false); //usestate diye state control kore

  const toogleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{IsGameStarted ? <GamePlay /> : <StartGame toggle={toogleGameplay} />}</>
  );
};

export default App;
