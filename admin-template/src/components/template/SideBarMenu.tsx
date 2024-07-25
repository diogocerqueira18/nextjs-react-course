import MenuItem from "./MenuItem";
  import { AdjustmentsIcon, BellIcon, HomeIcon, LogoutIcon } from "../icons";
import Logo from "./Logo";
import useAuth from "@/data/hook/useAuth";

export default function SideBarMenu() {
  const { logout } = useAuth()

  return (
    <aside className={`
      flex flex-col
      bg-gray-200 text-gray-700
      dark:bg-gray-900 
    `}>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20 
      `}>
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" text="Início" icon={HomeIcon} />
        <MenuItem url="/adjustments" text="Ajustes" icon={AdjustmentsIcon} />
        <MenuItem url="/notifications" text="Notificações" icon={BellIcon} />
      </ul>
      <ul>
        <MenuItem 
          text="Sair" icon={LogoutIcon} 
          onClick={logout}
          className={`
            text-red-600 dark:text-red-400
            hover:bg-red-400 hover:text-white
            dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  )
}