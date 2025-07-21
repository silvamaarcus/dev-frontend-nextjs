import { redirect } from "next/navigation";

export default function Home() {
  // Redireciona o usuário para a rota /products
  redirect("/products");

  return null;
}
