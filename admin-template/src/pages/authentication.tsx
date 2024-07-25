import AuthInput from "@/components/auth/AuthInput";
import { WarningIcon } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";
import { useState } from "react";

export default function Authentication() {

  const {register, login, loginGoogle} = useAuth()

  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  function showError(msg: string, timeSecs = 5) {
    setError(msg)
    setTimeout(() => setError(null), timeSecs * 1000)
  }

  async function submit() {
    try {
      if(mode === 'login') {
        await login(email, password);
      } else {
        await register(email, password);
      }
    } catch(e) {
      console.log(e);
      
      showError(e?.message ?? 'Erro desconhecido')
    }
    
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block w-1/2 lg:w-2/3">
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="Imagem da tela de autenticação" 
          className={`
            h-screen w-full https://picsum.photos/900/1000?random=1 
          `}
        />
      </div>
      <div className={`m-10 w-full md:w-1/2 lg:w-1/3`}>
        <h1 className={`
          text-3xl font-bold mb-5
        `}>
          {mode === 'login' ? "Entre com a Sua Conta" : "Registe-se na plataforma"}
        </h1>
        
        {error ? (
          <div className={`
            flex items-center 
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
          `}>
            {WarningIcon}
            <span className="ml-3">{error}</span>
          </div>  
        ) : false}
        
        <AuthInput 
          label="Email"
          value={email}
          type="email"
          valueChanged={setEmail}
          required
        />
        <AuthInput 
          label="Password"
          value={password}
          type="password"
          valueChanged={setPassword}
          required
        />

        <button onClick={submit} className={`
          w-full bg-indigo-500 hover:bg-indigo-400
          text-white rounded-lg px-4 py-3 mt-6
        `}>
          {mode === 'login' ? "Entrar" : "Criar Conta"}
        </button>
        
        <hr className="my-6 border-gray-300 w-full"/>

        <button onClick={loginGoogle} className={`
          w-full bg-red-500 hover:bg-red-400
          text-white rounded-lg px-4 py-3 
        `}>
          Entrar com Google
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Novo por aqui?
            <a onClick={() => setMode('register')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
            `}>
              Criar uma conta gratuitamente
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <a onClick={() => setMode('login')} className={`
              text-blue-500 hover:text-blue-700 font-semibold
              cursor-pointer
            `}>
              Entre com a sua conta
            </a>
          </p>
        )}

      </div>
    </div>
  )
}