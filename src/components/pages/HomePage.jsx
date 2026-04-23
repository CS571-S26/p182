import { useNavigate } from "react-router"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '80px', fontFamily: 'sans-serif' }}>
      <h1> Wordle en Espanol </h1>
      <p> Adivina la palabra de 5 letras en 6 intentos. </p>
      <p> Learn Spanish through Wordle! A popular daily puzzle. </p>
      
      
      

      <button
        onClick={() => navigate("/game")}

        style={{
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