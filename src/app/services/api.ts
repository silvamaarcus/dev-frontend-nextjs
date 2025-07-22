import { CreateProductRequest, Product } from "../types/product";

const BASE_URL = "https://fakestoreapi.com";

export const api = {
  // GET /products – listar produtos
  getProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },

  // GET /products/:id – visualizar detalhes
  getProduct: async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error("Failed to fetch product");
    return response.json();
  },

  // POST /products – criar produto
  createProduct: async (product: CreateProductRequest): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Failed to create product");
    return response.json();
  },

  // DELETE /products/:id – deletar produto
  deleteProduct: async (id: number): Promise<void> => {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete product");
  },
};
