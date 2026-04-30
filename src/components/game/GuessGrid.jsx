import GuessRow from "./GuessRow"

export default function GuessGrid({guesses, colors, animatedRows}) {
  return (
    <div style={{ marginTop: "1rem" }}>
      {guesses.map((row, rowIndex) => (
        <GuessRow
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          
          colors={colors}
          animatedRows={animatedRows}
        />
      ))}
    </div>
  )
}