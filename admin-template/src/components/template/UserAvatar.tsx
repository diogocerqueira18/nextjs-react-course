import useAuth from "@/data/hook/useAuth";
import Link from "next/link";

interface UserAvatarProps {
  className: string
}

export default function UserAvatar(props: UserAvatarProps) {
  const { user } = useAuth()
  return (
    <Link href="/profile" className={props.className}>
      <img src={user?.imageUrl ?? "/images/avatar.svg"} 
        alt="imagem do user" 
        className="h-10 w-10 rounded-full cursor-pointer"
      />
    </Link>

  )
}