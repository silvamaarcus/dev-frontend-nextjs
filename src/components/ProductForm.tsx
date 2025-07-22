"use client";

import { Product } from "@/app/types/product";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

interface ProductFormProps {
  product?: Product;
  // onSubmit: (data: CreateProductRequest) => Promise<void>;
  // isLoading?: boolean;
  title: string;
}

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function ProductForm({ product, title }: ProductFormProps) {
  return (
    <div className="w-full">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">
          Preencha as informações do produto
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>Informações do Produto</CardHeader>
          <CardContent>
            <form
              onSubmit={() => {
                console.log("Enviou dados!!");
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="title">Nome do Produto</Label>
                <Input id="title" placeholder="Digite o nome do produto" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Preço</Label>
                <Input id="price" type="number" placeholder="10,00" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Nome do Produto</Label>
                <Input id="title" placeholder="Digite o nome do produto" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Select
                // value={watch("category")}
                // onValueChange={(value) => setValue("category", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="urlImage">URL da Imagem</Label>
                <Input
                  id="urlImage"
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="urlImage">Descrição</Label>
                <Textarea id="description" rows={4} />
              </div>

              <Button type="submit" className="w-full">
                Salvar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
