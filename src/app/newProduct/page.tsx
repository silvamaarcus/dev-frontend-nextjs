"use client";

import ProductForm from "@/components/ProductForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CreateProductRequest } from "../types/product";
import { api } from "../services/api";
import { localStorageProducts } from "../products/helper";
import { toast } from "sonner";

export default function CreateProduct() {
  const router = useRouter();

  const handleCreateProduct = async (data: CreateProductRequest) => {
    try {
      // Simula o POST na API
      await api.createProduct(data);      
      // Salva localmente
      const savedProduct = localStorageProducts.save(data);

      toast("Produto criado com sucesso!", {
        description: `Produto ${savedProduct.title} adicionado ao catálogo!`,
        richColors: true,
      });

      router.push("/");
    } catch (error) {
      toast.error("Parece que algo deu errado. Tente novamente mais tarde.", {
        richColors: true,
      });
      console.error("Erro ao criar produto:", error);
    }
  };

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

      <ProductForm title="Criar Novo Produto" onSubmit={handleCreateProduct} />
    </>
  );
}
