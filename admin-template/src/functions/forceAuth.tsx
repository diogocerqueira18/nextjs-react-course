import Head from "next/head"
import Image from "next/image"
import loadingImg from '../../public/images/loading.gif'
import useAuth from "../data/hook/useAuth"
import router from "next/router"

export default function forceAuth(jsx) {

  const {user, loading} = useAuth()

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if(!document.cookie?.includes("admin-template-auth")) {
                  window.location.href = "/authentication"
                }
              `
            }}
          />
        </Head>
        {jsx}
      </>
    )
  }

  function renderLoading() {
    return (
      <div className={`
        flex justify-center items-center h-screen
      `}>
        <Image src={loadingImg} alt="loading gif"/>
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderLoading()
  } else {
    router.push("/authentication")
    return null
  }
}