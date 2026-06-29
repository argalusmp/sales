import productsData from '@/data/products.json';
import type { Product } from '@/types/product';

const products = productsData as Product[];

/** Mengembalikan semua produk */
export function getAllProducts(): Product[] {
  return products;
}

/** Mencari produk berdasarkan slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Mengembalikan daftar kategori unik */
export function getCategories(): string[] {
  const cats = products.map((p) => p.category);
  return Array.from(new Set(cats));
}
