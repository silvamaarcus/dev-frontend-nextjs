"use client";

import { useFormContext } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { CreateProductRequest } from "@/app/types/product";

export default function ProductPreviewCard() {
  const { watch, setValue } = useFormContext<CreateProductRequest>();
  const formValues = watch();

  const handleImageError = () => {
    setValue("image", "", { shouldValidate: true });
  };

  return (
    <Card className="flex h-full flex-col border-4 border-neutral-900">
      <CardHeader>
        <CardTitle>Preview</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-4">
          {formValues.image ? (
            <div className="bg-muted/30 relative aspect-square h-full w-full overflow-hidden rounded-lg">
              <Image
                src={formValues.image}
                alt="Preview"
                fill
                className="h-full w-full object-contain p-4"
                onError={handleImageError}
                unoptimized
              />
            </div>
          ) : (
            <div className="flex aspect-square items-center justify-center rounded-lg bg-neutral-200">
              <p className="text-muted-foreground">Imagem aparecerá aqui</p>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="font-semibold break-words">
              {formValues.title || "Nome do produto"}
            </h3>
            <p className="text-muted-foreground text-sm">
              {formValues.category || "Categoria"}
            </p>
            <p className="text-primary text-lg font-bold">
              R$ {formValues.price?.toFixed(2) || "0.00"}
            </p>
            <p className="text-muted-foreground text-sm break-words">
              {formValues.description || "Descrição do produto"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
