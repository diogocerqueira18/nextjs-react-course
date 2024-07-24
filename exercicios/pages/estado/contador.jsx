import NumeroDisplay from "@/components/NumeroDisplay"
import { useState } from "react"

export default function contador() {
  const [numero, setNumero] = useState(0)

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>Contador</h1>
      <NumeroDisplay numero={numero} />
      <div>
        <button onClick={() => setNumero(numero-1)}>-</button>
        <button onClick={() => setNumero(numero+1)}>+</button>
      </div>
    </div>
  )
}