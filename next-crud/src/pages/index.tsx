import Tabela from "../components/Tabela";
import Layout from "../components/Layout";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { 
    cliente, 
    clientes, 
    selecionarCliente, 
    excluirCliente, 
    guardarCliente, 
    novoCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex items-center justify-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Registro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" 
              onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={guardarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  );
}
