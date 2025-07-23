"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { CreateProductRequest } from "@/app/types/product";
import { useMemo } from "react";
import { PRODUCT_CATEGORIES } from "@/app/constants/products";

interface ProductFormFieldsProps {
  onSubmit: (data: CreateProductRequest) => Promise<void>;
  isEditing: boolean;
}

export default function ProductFormFields({
  onSubmit,
  isEditing,
}: ProductFormFieldsProps) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useFormContext<CreateProductRequest>();

  const categoryOptions = useMemo(() => {
    return PRODUCT_CATEGORIES.map((cat) => ({ value: cat, label: cat }));
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
          <p className="text-destructive text-sm">{errors.title.message}</p>
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
            valueAsNumber: true,
            min: { value: 0.01, message: "O preço deve ser maior que zero." },
          })}
          placeholder="0.00"
          className={errors.price ? "border-destructive" : ""}
        />
        {errors.price && (
          <p className="text-destructive text-sm">{errors.price.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Categoria</Label>
        <Controller
          control={control}
          name="category"
          rules={{ required: "Categoria é obrigatória." }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger
                className={errors.category ? "border-destructive" : ""}
              >
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((option) => (
                  <SelectItem
                    key={`select-category-${option.value}`}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.category && (
          <p className="text-destructive text-sm">{errors.category.message}</p>
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
          <p className="text-destructive text-sm">{errors.image.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descrição</Label>
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
        {isEditing ? "Salvar Alterações" : "Criar Produto"}
      </Button>
    </form>
  );
}
