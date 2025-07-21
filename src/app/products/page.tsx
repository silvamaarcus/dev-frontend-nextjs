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

export default function ProductsPage() {
  return (
    <section className="bg-background text-foreground min-h-screen">
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
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          {/* <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent> */}
        </Select>

        {/* {(searchTerm || selectedCategory) && (
          <Button variant="outline" onClick={clearFilters}>
            Limpar Filtros
          </Button>
        )} */}
      </div>
    </section>
  );
}
