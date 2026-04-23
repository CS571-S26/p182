import {createContext, useState} from "react";

export const SpanishWordleContext = createContext();

const easyWords = ["PERRO", "PLAYA", "CASA", "LIBRO", "AMIGO", "FELIZ", "CLIMA"];
const hardWords = ["BRUJA", "BRUMA", "CRUDO", "BARCO", "AGRIA", "HORNO"];

export default function SpanishWordleProvider({children}) {

    const [difficulty, setDifficulty] = useState("easy");

    const getWord = () => {
        const wordList = difficulty === "easy" ? easyWords : hardWords;
        const randomIndex = Math.floor(Math.random() * wordList.length);
        
        return wordList[randomIndex];
    };

    return (
        <SpanishWordleContext.Provider value={{ difficulty, setDifficulty, getWord }}>
            {children}
        </SpanishWordleContext.Provider>
    );
}