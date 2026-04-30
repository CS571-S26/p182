import { useNavigate } from "react-router"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: "center", marginTop: "80px", fontFamily: "sans-serif", maxWidth: "600px", margin: "80px auto 0 auto"}}>
      <h1> Wordle en Espanol </h1>
      <p> Adivina la palabra de 5 letras en 6 intentos. </p>
      <p> Learn Spanish through Wordle! A popular daily puzzle. </p>
      
      <hr style = {{margin: "1rem"}} />

      <p>
        Spanish wordle is a game based on wordle but to specifically focus on all levels of learners! Anyone through the <strong> A1-A2 CEFR </strong> (Common European Framework of Reference) for Spanish should find the <strong>Easy </strong> difficulty the one for them!
      </p>
      
      <hr style = {{margin: "1rem"}} />

      <p>
      Feeling like you’re getting better? Try the <strong>Hard </strong> difficulty which includes more challenging words and less common vocabulary! Or even limit the number of <strong> guesses </strong> you have available!
      </p>

      <hr style = {{margin: "1rem"}} />

      <p>
       Click the button below to start playing!
      </p>

      <button
        onClick = {() => navigate("/game")}

        style = {{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "2px solid green",
          borderRadius: "4px",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
        
      > Jugar Aqui! </button>

    </div>
  )
}