import useAppdata from "@/data/hook/useAppData"
import ButtonChangeTheme from "./ButtonChangeTheme"
import Title from "./Title"
import UserAvatar from "./UserAvatar"

interface TopBarProps {
  title: string
  subtitle: string
}

export default function TopBar(props: TopBarProps) {
  const {theme = 'light', changeTheme = () => {}} = useAppdata() || {}

  return (
    <div className="flex">
      <Title title={props.title} subtitle={props.subtitle}/>
      <div className={`flex flex-grow justify-end items-center`}>
        <ButtonChangeTheme theme={theme} changeTheme={changeTheme} />
        <UserAvatar className="ml-3"/>
      </div>
    </div>
  )
}