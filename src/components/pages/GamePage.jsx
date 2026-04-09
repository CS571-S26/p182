import {useState} from "react";
import { Row } from "react-bootstrap";

export default function GamePage() {

  const total_guesses = 6;
  const length = 5;

  const winning_word = "PERRO";
  const request_hint = "Es una animal muy popular! It is a very popular animal! It begins with a P!";
  //setting up the board
  const [guesses, setGuesses] = useState(Array.from({length: total_guesses}, () => Array(length).fill("")));

  //setting up the rows and managing the current row and column
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);


  const resetingGame = () => {
    //set everything back to the original state
    setGuesses(Array.from({length: total_guesses}, () => Array(length).fill("")));
    setCurrentRow(0);
    setCurrentColumn(0);
  }



  const boxStyling = {
    display: "inline-block",
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    textAlign: "center",
    verticalAlign: "top",

    border: "2px solid gray",
    marginRight: "5px",
    fontWeight: 'bold'
  }


  //setting up for when a user enteres a key
  const handleKeyEnter = (userKey) => {
    const key = userKey.key.toUpperCase();

    //checking if the user has won
    const currentGuess = guesses[currentRow].join("");

    //if the user has won, alert
    if (currentGuess === winning_word) {
      alert("Enhorabuena! You won!!! The word is " + winning_word + "!");
      resetingGame();
      return;
    }

    if (userKey.key === "Enter" && currentColumn === length) {
      //upon entering
      setCurrentRow(currentRow + 1);
      setCurrentColumn(0);

    } else if (userKey.key === "Backspace" && currentColumn > 0) {

      //remove the letter
      const newGuesses = [...guesses];
      //set the last letter to empty string
      newGuesses[currentRow][currentColumn - 1] = "";

      //update the state and move the column back
      setGuesses(newGuesses);
      setCurrentColumn(currentColumn - 1);

  } else if (key >= "A" && key <= "Z" && currentColumn < length && userKey.key !== "Enter" && userKey.key !== "Backspace") {

      //adding the user letter to hte board
      const newGuesses = [...guesses];
      newGuesses[currentRow][currentColumn] = key;

      //update the state and move the column forward
      setGuesses(newGuesses);
      setCurrentColumn(currentColumn + 1);

    //for when a person tries to enter a key that wont be valid
    } else if (userKey.key === "Enter") {
      alert("Tu necesitas 5 letras! You need 5 letters! ");

    } else if (userKey.key === "Backspace") {
      alert("No hay letras para borrar! There no letters to delete!");
    }

}

  return (
    <div style = {{textAlign: "center", marginTop: "30px", outline: "none"}} onKeyDown = {handleKeyEnter} tabIndex = "0">
      <h1>Wordle en Espanol!</h1>
      <p>To begin! Enter a letter below! </p>
      <p>Para comenzar, entrar una letra en la caja!</p>

      <div style = {{marginTop: "1rem"}}>
        
        {guesses.map((row, rowIndex) => (
          <div key = {rowIndex} style = {{marginBottom: "5px"}}>

            {row.map((letter, colIndex) => (
              <span key = {colIndex} style = {boxStyling}>
                {letter}
              </span>
            ))}

          </div>

        ))}

      </div>

      <button onClick={() => alert(request_hint)} style = {{ marginBottom: "1rem", marginTop: "1rem"}}>
        Hint!
      </button>



    </div>
  )
}
