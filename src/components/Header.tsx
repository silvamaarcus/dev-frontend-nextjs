"use client"

import { Button } from "@/components/ui/button";
import { Plus, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderComponent = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <header className="bg-card/50 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold hover:opacity-75 transition-colors">
              <ShoppingBag className="h-6 w-6" />
              NextStore
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/"
                className={`hover:text-primary transition-colors ${
                  isActive("/")
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                Produtos
              </Link>
            </nav>

            <Button asChild size="sm" className="gap-2">
              <Link href="/products/new">
                <Plus className="h-4 w-4" />
                Novo Produto
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};
