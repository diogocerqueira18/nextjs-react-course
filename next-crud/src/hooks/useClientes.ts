import { useEffect, useState } from "react"
import Cliente from "../core/Cliente"
import Colecaocliente from "../backend/db/ColecaoCliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes() {
  const repo: ClienteRepositorio = new Colecaocliente()

  const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])

  useEffect(obterTodos, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)      
      exibirTabela()
    })
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente)
    exibirFormulario()
  }

  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente)
    obterTodos()
  }

  async function guardarCliente(cliente: Cliente) {
    await repo.guardar(cliente)
    obterTodos()
  }

  function novoCliente() {
    setCliente(Cliente.vazio)
    exibirFormulario()
  }

  return {
    cliente,
    clientes,
    novoCliente,
    guardarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }
}