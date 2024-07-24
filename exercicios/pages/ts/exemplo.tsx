import Pessoa from "../../components/Pessoa";

export default function exemploTs() {
  return (
    <div>
      <Pessoa nome="Diogo" idade={22}/>
      <Pessoa nome="Maria"/>
    </div>
  )
}