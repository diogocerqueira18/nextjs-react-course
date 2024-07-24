import { useState } from "react";

export default function mouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)


  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh"
  }

  function quandoMover(ev) {
    setX(ev.clientX)
    setY(ev.clientY)
    // console.log(ev.clientX, ev.clientY);
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}