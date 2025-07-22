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

export default function ViewProduct() {
  const [selectedValue, setSelectedValue] = useState(0);

  const addValue = () => {
    setSelectedValue((prev) => prev + 1);
  };

  const removeValue = () => {
    if (selectedValue > 0) {
      setSelectedValue((prev) => prev - 1);
    }
  };

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
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="my-6 flex flex-col items-start justify-center gap-12 p-2 sm:my-12">
          <div className="space-y-6">
            <h3 className="text-foreground mb-2 text-4xl leading-tight font-bold">
              Nome do Produto
            </h3>
            <p className="text-primary text-xl font-bold">R$ 99,90</p>
            <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
              Categoria do Produto
            </p>
            <p className="text-muted-foreground text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolore repudiandae deserunt architecto saepe voluptatibus, dicta
              eos iusto esse tenetur? Ipsam adipisci corporis quasi labore aut
              minus iusto modi incidunt.
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
        </div>
      </div>
    </div>
  );
}
