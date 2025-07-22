"use client";

import { CreateProductRequest, Product } from "@/app/types/product";
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
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateProductRequest>({
    defaultValues: {
      title: product?.title || "",
      price: product?.price || 0,
      description: product?.description || "",
      category: product?.category || "",
      image: product?.image || "",
    },
  });

  const handleFormSubmit = async (data: CreateProductRequest) => {
    console.log(data);
  };

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
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="title">Nome do Produto</Label>
                <Input
                  id="title"
                  {...register("title", { required: "Nome é obrigatório." })}
                  placeholder="Digite o nome do produto"
                  className={errors.title ? "border-destructive" : ""}
                />
                {errors.title && (
                  <p className="text-destructive text-sm">
                    {errors.title.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  {...register("price", {
                    required: "Preço é obrigatório",
                    min: { value: 0, message: "Preço deve ser positivo" },
                  })}
                  placeholder="0.00"
                  className={errors.price ? "border-destructive" : ""}
                />
                {errors.price && (
                  <p className="text-destructive text-sm">
                    {errors.price.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Select
                value={watch("category")}
                onValueChange={(value) => setValue("category", value)}
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
                {errors.category && (
                  <p className="text-destructive text-sm">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="urlImage">URL da Imagem</Label>
                <Input
                  id="urlImage"
                  {...register("image", {
                    required: "URL da imagem é obrigatória.",
                  })}
                  placeholder="https://exemplo.com/imagem.jpg"
                  className={errors.image ? "border-destructive" : ""}
                />
                {errors.image && (
                  <p className="text-destructive text-sm">
                    {errors.image.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="urlImage">Descrição</Label>
                <Textarea
                  id="description"
                  rows={4}
                  {...register("description", {
                    required: "Descrição é obrigatória.",
                  })}
                  placeholder="Descreva o produto..."
                  className={errors.description ? "border-destructive" : ""}
                />
                {errors.description && (
                  <p className="text-destructive text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full cursor-pointer">
                Salvar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
