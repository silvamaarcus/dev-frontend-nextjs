import ProductForm from "@/components/ProductForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateProduct() {
  return (
    <>
      <Button
        variant="ghost"
        className="my-4 transition-colors hover:opacity-75"
      >
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para produtos
        </Link>
      </Button>

      <ProductForm title="Criar Novo Produto" />
    </>
  );
}
