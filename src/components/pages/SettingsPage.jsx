import { useContext } from "react";
import { SpanishWordleContext } from "../contexts/SpanishWordleContext";

export default function SettingsPage() {
  const { difficulty, setDifficulty } = useContext(SpanishWordleContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Ajustes / Settings</h1>
      <p>Select your difficulty:</p>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setDifficulty("easy")}
          
          style={{
            marginRight: "1rem",
            padding: "10px 20px",
            backgroundColor: difficulty === "easy" ? "green" : "white",
            color: difficulty === "easy" ? "white" : "black",
            border: "2px solid green",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Fácil / Easy
        </button>

        <button
          onClick={() => setDifficulty("hard")}
          style={{
            padding: "10px 20px",
            backgroundColor: difficulty === "hard" ? "red" : "white",
            color: difficulty === "hard" ? "white" : "black",
            border: "2px solid red",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Difícil / Hard
        </button>
      </div>

      <p style={{ marginTop: "1rem"}}>
        Current difficulty: <strong> {difficulty === "easy" ? "Fácil" : "Difícil"} </strong>
      </p>
    </div>
  )
}