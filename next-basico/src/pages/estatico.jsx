import { useEffect, useState } from "react"

export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico(props) {
  // const [aleatorio, setAleatorio] = useState(0)

  // useEffect(() => {
  //   setAleatorio(Math.random());
  // }, []);

  return (
    <div>
      <span>Aleatorio: {props.numero}</span>
    </div>
  )
}