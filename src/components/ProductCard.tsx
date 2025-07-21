import { Edit, Star, Trash2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Product } from "@/app/types/product";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  onDelete?: (id: number) => void;
}

export const ProductCard = ({ product, onDelete }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL", 
    }).format(price);
  };

  // Truncar o título do produto
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Card className="group from-card to-card/90 border-border/50 overflow-hidden bg-gradient-to-br transition-all duration-300 hover:shadow-lg">
      <div className="bg-muted/30 relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          fill
          alt={product.title}
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <div className="text-muted-foreground flex items-center gap-1 text-sm">
            <Star className="h-3 w-3 fill-current text-yellow-500" />
            <span>{product.rating.rate}</span>
            <span className="text-xs">({product.rating.count})</span>
          </div>
        </div>

        <h3 className="text-foreground mb-2 leading-tight font-medium">
          {truncateText(product.title, 50)}
        </h3>

        <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
          {truncateText(product.description, 80)}
        </p>

        <div className="text-primary text-xl font-bold">
          {formatPrice(product.price)}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={`/products/${product.id}`}>Ver Detalhes</Link>
        </Button>

        <Button asChild variant="outline" size="sm">
          <Link href={`/products/${product.id}/edit`}>
            <Edit className="h-4 w-4" />
          </Link>
        </Button>

        {onDelete && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(product.id)}
            className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
