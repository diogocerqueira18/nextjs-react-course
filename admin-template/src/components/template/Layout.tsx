import useAppdata from "@/data/hook/useAppData"
import Content from "./Content"
import SideBarMenu from "./SideBarMenu"
import TopBar from "./TopBar"
import forceAuth from "@/functions/ForceAuth"


interface LayoutProps {
  title: string
  subtitle: string
  children?: any
}

export default function Layout(props: LayoutProps) {
  const {theme, changeTheme} = useAppdata()
  
  return forceAuth(
    <div className={`${theme} flex h-screen w-screen`}>
      <SideBarMenu />
      <div className={`
        flex flex-col w-full p-7 
        bg-gray-300  dark:bg-gray-800
      `}>
        <TopBar title={props.title} subtitle={props.subtitle}/>
        <Content>
          {props.children}
        </Content>
      </div>
    </div>
  )
}