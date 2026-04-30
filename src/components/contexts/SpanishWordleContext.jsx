import {createContext, useState} from "react";

export const SpanishWordleContext = createContext();

const easyWords = ["PERRO", "PLAYA", "CASAS", "LIBRO", "AMIGO", "FELIZ", "CLIMA", "FUEGO"];
const hardWords = ["BRUJA", "BRUMA", "CRUDO", "BARCO", "AGRIA", "HORNO"];

export default function SpanishWordleProvider({children}) {

    const [difficulty, setDifficulty] = useState("easy");

    //setting colorblind or guesses
    const [colorBlind, setColorBlind] = useState(false);
    const [maxGuesses, setMaxGuesses] = useState(6);

    const getWord = () => {
        const wordList = difficulty === "easy" ? easyWords : hardWords;
        const randomIndex = Math.floor(Math.random() * wordList.length);
        
        return wordList[randomIndex];
    };

    return (
        <SpanishWordleContext.Provider value={{difficulty, setDifficulty, getWord, colorBlind, setColorBlind, maxGuesses, setMaxGuesses}}>
            {children}
        </SpanishWordleContext.Provider>
    );
}