"use client";

import { CreateProductRequest, Product } from "@/app/types/product";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
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
import { useEffect, useState } from "react";
import Image from "next/image";
import { Info } from "lucide-react";

interface ProductFormProps {
  product?: Product;
  title: string;
  onSubmit: (data: CreateProductRequest) => Promise<void>;
}

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

export default function ProductForm({
  product,
  title,
  onSubmit,
}: ProductFormProps) {
  const [imagePreview, setImagePreview] = useState<string>("");

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

  const watchedImage = watch("image");

  useEffect(() => {
    if (watchedImage) {
      setImagePreview(watchedImage);
    }
  }, [watchedImage]);

  const handleFormSubmit = async (data: CreateProductRequest) => {
    await onSubmit(data);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-muted-foreground">
          Preencha as informações do produto. Você pode editar essas informações
          mais tarde.
        </p>
      </div>

      <div className="mt-2 flex max-w-fit items-center gap-2 rounded-lg bg-yellow-100 py-1 text-yellow-900">
        <Info className="ml-2 h-5 w-5" />
        <span className="mr-2 text-sm font-medium">
          É possível visualizar em tempo real a criação do card para o produto.
        </span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2">
        <Card className="flex h-full flex-col">
          <CardHeader>Informações do Produto</CardHeader>
          <CardContent className="flex-1">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="flex h-full flex-col gap-6"
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
                      <SelectItem
                        key={`select-category-${category}`}
                        value={category}
                      >
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
                  rows={10}
                  maxLength={500}
                  {...register("description", {
                    required: "Descrição é obrigatória.",
                    maxLength: {
                      value: 500,
                      message: "A descrição deve ter no máximo 500 caracteres",
                    },
                  })}
                  placeholder="Descreva o produto..."
                  className={errors.description ? "border-destructive" : ""}
                />
                <div className="text-muted-foreground text-sm">
                  {watch("description")?.length || 0}/500 caracteres
                </div>
                {errors.description && (
                  <p className="text-destructive text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="mt-auto w-full cursor-pointer">
                Salvar
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="flex h-full flex-col border-4 border-neutral-900">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-4">
              {imagePreview ? (
                <div className="bg-muted/30 relative aspect-square h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="h-full w-full object-cover p-4"
                    onError={() => setImagePreview("")}
                    unoptimized
                  />
                </div>
              ) : (
                <div className="flex aspect-square items-center justify-center rounded-lg bg-neutral-200">
                  <p className="text-muted-foreground">Imagem aparecerá aqui</p>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-semibold">
                  {watch("title") || "Nome do produto"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {watch("category") || "Categoria"}
                </p>
                <p className="text-primary text-lg font-bold">
                  R${watch("price") || "0.00"}
                </p>
                <p className="text-muted-foreground text-sm break-words">
                  {watch("description") || "Descrição do produto"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
