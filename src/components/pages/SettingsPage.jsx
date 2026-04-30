import { useContext } from "react";
import { SpanishWordleContext } from "../contexts/SpanishWordleContext";

import DifficultySelector from "../game/DifficultySelector";

import GuessesSelector from "../game/GuessesSelector";

export default function SettingsPage() {
  const {difficulty, setDifficulty, colorBlind, setColorBlind, maxGuesses, setMaxGuesses} = useContext(SpanishWordleContext);

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Ajustes / Settings</h1>

      <hr style={{margin: "1rem"}} />

      <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />

      <hr style = {{ margin: "1rem"}} />

      {/*color blind mode*/}

      <div role = "group" aria-labelledby = "colorblind-label">
      <p id = "colorblind-label"> Color blind mode / Modo daltónico:</p>

      <button
        onClick={() => setColorBlind(!colorBlind)}
        aria-pressed = {colorBlind}

        style={{
          padding: "10px 20px",
          backgroundColor: colorBlind ? "blue" : "white",
          color: colorBlind ? "white" : "black",
          border: "2px solid blue",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: "bold"
        }}

      >

        {colorBlind ? "On" : "Off"}

      </button>
      <p style = {{ color: "black", fontSize: "1rem" }}> Replaces the green/yellow with blue/orange </p>
      </div>

      <hr style={{ margin: "1rem"}} />

      <GuessesSelector maxGuesses = {maxGuesses} setMaxGuesses = {setMaxGuesses} />

      <hr style={{margin: "1rem"}} />

      {/*settings summary*/}
      <p style={{marginTop: "1rem", color: "black"}}>
        Difficulty: <strong>{difficulty === "easy" ? "Fácil" : "Difícil"}</strong> &nbsp;|&nbsp;
        Color blind: <strong>{colorBlind ? "On" : "Off"}</strong> &nbsp;|&nbsp;
        Guesses: <strong>{maxGuesses}</strong>
      </p>
    </div>
  )
}