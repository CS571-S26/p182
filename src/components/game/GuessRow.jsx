import GuessBox from "./GuessBox"

export default function GuessRow({ row, rowIndex, colors, animatedRows }) {
  return (
    <div style={{ marginBottom: "5px" }}>

      {row.map((letter, colIndex) => (
        <GuessBox
          key={colIndex}
          letter={letter}

          backgroundColor={colors[rowIndex][colIndex]}
          textColor={colors[rowIndex][colIndex] === "white" ? "black" : "white"}
          animationDelay={`${colIndex * 0.25}s`}
          isFlipping={animatedRows.includes(rowIndex)}
        />
      ))}
      
    </div>
  )
}