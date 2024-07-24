export default function Filho(props) {
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.function}>Falar com Pai #01</button>
      <button onClick={
        () => props.function("Passei no teste", "Uhuuuuu" , 10)
      }>
        Falar com Pai #02
      </button>
    </div> 
  )
}