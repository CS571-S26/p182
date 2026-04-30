export default function DifficultySelector({difficulty, setDifficulty}) {

  return (
    
    <div role = "group" aria-labelledby = "difficulty-label">
      <p id = "difficulty-label">Select your difficulty / Selecciona tu dificultad:</p>

        <button
          onClick={() => setDifficulty("easy")}
          
          aria-pressed = {difficulty === "easy"}
          
          style = {{
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
            onClick = {() => setDifficulty("hard")}

            aria-pressed = {difficulty === "hard"}

            style = {{
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
  )
}