export default function GuessesSelector({maxGuesses, setMaxGuesses}) {

    return (
        <div role = "group" aria-labelledby = "guesses-label">

          {/* number of guesses */}
          <p id = "guesses-label"> Number of Guesses / Número de Conjeturas:</p>
          <div style = {{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {[4, 5, 6, 7, 8].map(num => (
              <button
                key = {num}

                onClick = {() => setMaxGuesses(num)}

                aria-pressed = {maxGuesses === num}
                aria-label = {`Set number of guesses to ${num}`}

                style = {{
                  padding: "10px 20px",
                  backgroundColor: maxGuesses === num ? "purple" : "white",
                  color: maxGuesses === num ? "white" : "black",
                  border: "2px solid purple",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}

              >
                {num}
              </button>
            ))}
          </div>
        </div>
    );
}