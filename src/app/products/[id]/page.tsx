"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { ArrowLeft, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedValue, setSelectedValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`,
        );

        if (!response.ok) {
          throw new Error("Produto não encontrado");
        }

        const productData = await response.json();
        setProduct(productData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Erro ao carregar produto",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  const addValue = () => {
    setSelectedValue((prev) => prev + 1);
  };

  const removeValue = () => {
    if (selectedValue > 0) {
      setSelectedValue((prev) => prev - 1);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="border-primary h-32 w-32 animate-spin rounded-full border-b-2"></div>
          <p className="text-muted-foreground mt-4">Carregando produto...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-destructive mb-4 text-2xl font-bold">
            {error || "Produto não encontrado"}
          </h2>
          <Button asChild>
            <Link href="/">Voltar para produtos</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Button
        variant="ghost"
        className="my-4 transition-colors hover:opacity-75"
      >
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Voltar para produtos
        </Link>
      </Button>

      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-18">
        <Carousel className="sm:m-12">
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index + 1}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="bg-muted relative flex h-full w-full items-center justify-center rounded-lg">
                      <Image
                        src={product.image}
                        alt={`${product.title} - Imagem ${index + 2}`}
                        fill
                        className="object-contain opacity-75"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="my-6 flex flex-col items-start justify-center gap-12 p-2 sm:my-12">
          <div className="space-y-6">
            <h3 className="text-foreground mb-2 text-4xl leading-tight font-bold">
              {product.title}
            </h3>
            <p className="text-primary text-xl font-bold">
              {formatPrice(product.price)}
            </p>
            <Badge variant="secondary" className="text-sm">
              {product.category}
            </Badge>
            <p className="text-muted-foreground text-sm">
              {product.description}
            </p>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center gap-2 rounded-md bg-neutral-100">
              <Button
                variant="ghost"
                className="cursor-pointer hover:bg-neutral-200"
                onClick={removeValue}
              >
                <Minus className="h-2 w-2" />
              </Button>
              <span>{selectedValue}</span>
              <Button
                variant="ghost"
                className="cursor-pointer hover:bg-neutral-200"
                onClick={addValue}
              >
                <Plus className="h-2 w-2" />
              </Button>
            </div>

            <Button>Adicionar ao carrinho</Button>
          </div>
          <div className="text-muted-foreground space-y-2 border-t pt-4 text-sm w-full">
            <p>✓ Entrega rápida disponível</p>
            <p>✓ Garantia de qualidade</p>
            <p>✓ Devolução em até 30 dias</p>
          </div>
        </div>
      </div>
    </div>
  );
}
