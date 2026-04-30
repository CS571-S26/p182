export default function GuessBox({letter, backgroundColor, textColor, animationDelay, isFlipping}) {

  const boxStyling = {
    display: "inline-block",
    width: "40px",
    height: "40px",
    lineHeight: "40px",
    textAlign: "center",
    verticalAlign: "top",
    border: "2px solid gray",
    marginRight: "5px",
    fontWeight: "bold",
    
    backgroundColor: backgroundColor,
    color: textColor,
    animationDelay: animationDelay,
  }

  return (
    <span className = {isFlipping ? "flip" : ""} style = {boxStyling}>
      {letter}
    </span>
  )
}