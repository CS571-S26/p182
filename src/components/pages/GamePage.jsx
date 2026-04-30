import {useState} from "react";
import { Row } from "react-bootstrap";
import {useContext} from "react";
import {SpanishWordleContext} from "../contexts/SpanishWordleContext";

import GuessGrid from "../game/GuessGrid";
import GameOverModal from "../game/GameOverModal";

export default function GamePage() {
  
  const {getWord, colorBlind, maxGuesses} = useContext(SpanishWordleContext);


  //now dyanmic for total guesses
  const total_guesses = maxGuesses;
  const length = 5;

  //const winning_word = "PERRO";
  const request_hint = "Es una animal muy popular! It is a very popular animal! It begins with a P!";
  //setting up the board
  
  const [guesses, setGuesses] = useState(Array.from({length: total_guesses}, () => Array(length).fill("")));

  //setting up the rows and managing the current row and column
  const [currentRow, setCurrentRow] = useState(0);
  const [currentColumn, setCurrentColumn] = useState(0);
  
  //setting up the colors for the boxes
  const [colors, setColors] = useState(Array.from({length: total_guesses}, () => Array(length).fill("white")));

  //animating the boxes
  const [animatedRows, setAnimatedRows] = useState([]);


  //grabbing word information from context
  //const {getWord} = useContext(SpanishWordleContext);

  const [winning_word, setWinningWord] = useState(() => getWord());


  //setting up the game over modal
  const [showModal, setShowModal] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const resetingGame = () => {
    //set everything back to the original state
    setGuesses(Array.from({length: total_guesses}, () => Array(length).fill("")));
    setCurrentRow(0);
    setCurrentColumn(0);

    //setting the colors back to white
    setColors(Array.from({length: total_guesses}, () => Array(length).fill("white")));

    //set rows
    setAnimatedRows([]);

    //grab new word 
    setWinningWord(getWord());

    //close the modal
    setShowModal(false);
    setGameWon(false);
  }



  const boxStyling = (rowIndex, colIndex) => ({
    display: "inline-block",
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    textAlign: "center",
    verticalAlign: "top",

    border: "2px solid gray",
    marginRight: "5px",
    fontWeight: 'bold',

    //grabbing background color
    backgroundColor: colors[rowIndex][colIndex],

    //if white then text is black, toherwise flipped
    color: colors[rowIndex][colIndex] === "white" ? "black" : "white",

    //setting animation
    animationDelay: `${colIndex * 0.25}s`,

  });


  //setting up for when a user enteres a key
  const handleKeyEnter = (userKey) => {
    const key = userKey.key.toUpperCase();

    //checking if the user has won
    if(userKey.key === "Enter" && currentColumn === length) {
      const currentGuess = guesses[currentRow].join("");
    
      //doing the coloring for the boxes
      const rowColors = insertColors(currentGuess);
      const newColors = colors.map(row => [...row]);
      newColors[currentRow] = rowColors;
      setColors(newColors);

      //once the user hits enter, we animate the row
      setAnimatedRows(prev => [...prev, currentRow]);
     

    //if the user has won, alert
    if (currentGuess === winning_word) {
      setTimeout(() => {
        //alert("Enhorabuena! You won!!! The word is " + winning_word + "!");
        //();
        setGameWon(true);
        setShowModal(true);

      }, 250);
      return;
    }

    //if the user has not won and used all guesses
    if (currentRow === total_guesses - 1) {
      setTimeout(() => {
        //alert("Game Over! La palaba era " + winning_word + "!");
        setGameWon(false);
        setShowModal(true);
        //resetingGame();

      }, 250);
      return;
    }

    setCurrentRow(currentRow + 1);
    setCurrentColumn(0);

    

    } else if (userKey.key === "Backspace" && currentColumn > 0) {
      //remove the letter
      const newGuesses = guesses.map(row => [...row]);
      //set the last letter to empty string
      newGuesses[currentRow][currentColumn - 1] = "";

      //update the state and move the column back
      setGuesses(newGuesses);
      setCurrentColumn(currentColumn - 1);

  } else if (/^[A-ZÑ]$/.test(key) && currentColumn < length && userKey.key !== "Enter" && userKey.key !== "Backspace") {

      //adding the user letter to hte board
      const newGuesses = guesses.map(row => [...row]);
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


  const insertColors = (guess) => {


    const correctColor = colorBlind ? "blue" : "green";
    const presentColor = colorBlind ? "orange" : "goldenrod";

    const result = Array(length).fill("gray");
    const winningWordArray = winning_word.split("");
    const guessArray = guess.split("");

    //first pass to check for correct letters in the correct position
    guessArray.forEach((letter, index) => {

      if (letter === winningWordArray[index]) {

        result[index] = correctColor;

        winningWordArray[index] = null;
        guessArray[index] = null;
      }
    });

    //second pass to check for correct letters in the wrong position
    guessArray.forEach((letter, index) => {

      if (letter === null) return;

      const winningIndex = winningWordArray.indexOf(letter);

      if (winningIndex !== -1) {
        result[index] = presentColor;
        winningWordArray[winningIndex] = null;
      }
    });

    return result;

  }


  return (

    
    <div style = {{textAlign: "center", marginTop: "30px", outline: "none"}} onKeyDown = {handleKeyEnter} tabIndex = "0" role = "application" aria-label = "Wordle game board, enter your guesses here with your keyboard.">



      <style>{`
        @keyframes flip {
          0%   { transform: scaleY(1); }
          50%  { transform: scaleY(0); }
          100% { transform: scaleY(1); }
        }
        .flip {
          animation: flip 0.5s ease forwards;
        }
      `}</style>

      <h1>Wordle en Espanol!</h1>
      <p>To begin! Enter a letter below! </p>
      <p>Para comenzar, entrar una letra en la caja!</p>

      <GuessGrid
        guesses={guesses}
        colors={colors}
        animatedRows={animatedRows}
      />

      <GameOverModal
        show={showModal}
        won={gameWon}
        winningWord={winning_word}
        onRestart={resetingGame}
      />



    </div>
  )
}
