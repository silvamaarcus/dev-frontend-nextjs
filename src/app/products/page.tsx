"use client";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { toast } from "sonner";
import { Product } from "../types/product";
import { api } from "../services/api";
import { useState, useEffect } from "react";
import { localStorageProducts } from "./helper";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);


  useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const apiData = await api.getProducts();
      // Carregar produtos do localStorage
      const localData = localStorageProducts.get();
      const allProducts = [...apiData, ...localData];
      
      setProducts(allProducts);
      setFilteredProducts(allProducts);
      
      const uniqueCategories = Array.from(
        new Set(allProducts.map(product => product.category))
      );
      setCategories(uniqueCategories);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar produtos");
    } finally {
      setLoading(false);
    }
  };

  fetchProducts();
}, []);


  // Filtrar produtos baseado na busca e categoria
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory,
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  const handleDelete = async (id: number) => {
    try {
      await api.deleteProduct(id);
      // Atualizar o estado local removendo o produto
      setProducts((prev) => prev.filter((product) => product.id !== id));
      toast("Produto deletado com sucesso!", {
        description: "O produto foi removido da lista.",
        richColors: true,
      });
    } catch (error) {
      toast("Erro ao deletar produto", {
        description: "Não foi possível deletar o produto.",
        richColors: true,
      });
      console.error("Erro ao deletar produto:", error);
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-lg">Carregando produtos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg text-red-500">Erro: {error}</div>
      </div>
    );
  }

  return (
    <section className="bg-background text-foreground min-h-screen p-6">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Nossos Produtos</h1>
        <p className="text-muted-foreground">
          Descubra nossa coleção cuidadosamente selecionada para você. Busque
          por produtos específicos e encontre o que mais combina com seu estilo
          e necessidades.
        </p>
      </div>

      {/* Filtros */}
      <div className="mb-8 space-y-4 md:flex md:items-center md:gap-4 md:space-y-0">
        <div className="relative max-w-md flex-1">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
          <Input
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[200px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {(searchTerm || selectedCategory) && (
          <Button variant="outline" onClick={clearFilters}>
            Limpar Filtros
          </Button>
        )}
      </div>

      {/* Resultados */}
      <div className="mb-4">
        <p className="text-muted-foreground">
          Mostrando {filteredProducts.length} de {products.length} produtos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && !loading && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground text-lg">
            Nenhum produto encontrado com os filtros aplicados.
          </p>
        </div>
      )}
    </section>
  );
}
