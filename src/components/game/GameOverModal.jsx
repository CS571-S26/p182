export default function GameOverModal({show, won, winningWord, onRestart}) {

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>

      <div style={{
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "5px",
        textAlign: "center",
        minWidth: "250px"
      }}>

        <h2>{won ? "Enhorabuena!" : "Game Over! :("}</h2>

        <p>{won ? "You guessed the word!" : "Better luck next time!"}</p>
        <p>The word was: <strong>{winningWord}</strong> </p>

        <button
          onClick = {onRestart}

          style = {{
            marginTop: "1rem",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem"
          }}
        >
          Jugar de Nuevo
        </button>

      </div>
    </div>
  )
}