"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ViewProduct() {
  const [selectedValue, setSelectedValue] = useState<string>("1");

  useEffect(() => {
    const storedValue = localStorage.getItem("selectedValue");
    if (storedValue) {
      setSelectedValue(storedValue);
    }
  }, []);

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

          <div className="mt-12 flex items-center gap-8">
            <Select value={selectedValue} onValueChange={setSelectedValue}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Quantidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
              </SelectContent>
            </Select>
            <Button>Adicionar ao carrinho</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
