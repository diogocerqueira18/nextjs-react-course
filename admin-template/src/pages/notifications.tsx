import Layout from "@/components/template/Layout";
import useAuth from "@/data/hook/useAuth";

export default function Notifications() {
  const { user } = useAuth()
  console.log(user)
  return (
    
    <Layout title="Notificações" 
      subtitle="Aqui você irá gerenciar as suas notificações">
        <h1>Notificações</h1>
    </Layout>
  );
}
