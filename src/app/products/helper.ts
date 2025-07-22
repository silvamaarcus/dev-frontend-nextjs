import { CreateProductRequest, Product } from "../types/product";

const STORAGE_KEY = 'custom_products';

export const localStorageProducts = {
  get: (): Product[] => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  save: (productData: CreateProductRequest): Product => {
    const products = localStorageProducts.get();
    const newProduct: Product = {
      ...productData,
      id: Math.max(0, ...products.map(p => p.id)) + 1,
      rating: {
        rate: 0,
        count: 0
      }
    };
    products.push(newProduct);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return newProduct;
  }
};

