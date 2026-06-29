'use client';

import { useState } from 'react';
import type { Product } from '@/types/product';
import ProductCard from '@/components/product/ProductCard';

interface CatalogSectionProps {
  products: Product[];
  categories: string[];
}

export default function CatalogSection({ products, categories }: CatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <section id="katalog" className="py-20 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Katalog Produk
          </div>
          <h2 className="font-display font-extrabold text-navy-900 text-3xl sm:text-4xl mb-4">
            Temukan Part yang Anda Butuhkan
          </h2>
          <p className="text-steel-500 max-w-xl mx-auto text-base leading-relaxed">
            Jelajahi katalog sparepart kami. Klik tombol <strong>Tanya Harga</strong> untuk langsung bernegosiasi via WhatsApp.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            id="filter-all"
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeCategory === null
                ? 'bg-navy-900 text-white border-navy-900 shadow-md'
                : 'bg-white text-steel-600 border-steel-200 hover:border-orange-400 hover:text-orange-600'
            }`}
          >
            Semua
            <span className="ml-1.5 text-xs opacity-60">({products.length})</span>
          </button>

          {categories.map((cat) => {
            const count = products.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white border-orange-500 shadow-md'
                    : 'bg-white text-steel-600 border-steel-200 hover:border-orange-400 hover:text-orange-600'
                }`}
              >
                {cat}
                <span className="ml-1.5 text-xs opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-steel-400 text-lg">Tidak ada produk ditemukan.</p>
          </div>
        )}
      </div>
    </section>
  );
}
