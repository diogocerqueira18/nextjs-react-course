import Filho from "./Filho";

export default function Pai(props) {

  function falarComigo(param1, param2, param3) {
    console.log(param1, param2, param3);
    console.log("Alguem falou comigo");
  }

  return (
    <div>
      <Filho function={falarComigo} />
    </div>
  )
}