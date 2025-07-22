import ProductForm from "@/components/ProductForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateProduct() {
  return (
    <>
      <div className="my-4 flex items-center gap-2 transition-colors hover:opacity-75">
        <ArrowLeft className="h-4 w-4" />
        <Link href="/">Voltar para produtos</Link>
      </div>

      <ProductForm
        title="Criar Novo Produto
"
      />
    </>
  );
}
