import { useState } from "react";
import Input from "./Input";
import Cliente from "../core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id
  const [nome, setNome] = useState(props.cliente?.nome ?? '')
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
  return (
    <div>
      {id ? (
        <Input 
          texto="Código" 
          valor={id} 
          somenteLeitura
          className="mb-4"
        />
      ) : false}
      <Input 
        texto="Nome"  
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      />
      <Input 
        texto="Idade" 
        tipo="number" 
        valor={idade}
        valorMudou={setIdade}
      />
      <div className="flex justify-end mt-3">
        <Botao cor="blue" className="mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
          {id ? "Alterar" : "Guardar" }</Botao>
        <Botao onClick={props.cancelado}>Cancelar</Botao>
      </div>
    </div>
    
  )
}