import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types/product';
import Badge from '@/components/ui/Badge';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface ProductCardProps {
  product: Product;
}

const categoryColors: Record<string, string> = {
  Hydraulic:     'bg-blue-100 text-blue-700',
  Engine:        'bg-orange-100 text-orange-700',
  Undercarriage: 'bg-stone-100 text-stone-700',
  Electrical:    'bg-yellow-100 text-yellow-700',
};

export default function ProductCard({ product }: ProductCardProps) {
  const categoryClass = categoryColors[product.category] ?? 'bg-steel-100 text-steel-700';

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-steel-200 hover:border-orange-300 transition-all duration-300 flex flex-col">

      {/* Product Image */}
      <div className="relative h-48 bg-navy-900 overflow-hidden">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge overlay */}
        <div className="absolute top-3 left-3">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${categoryClass}`}>
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">

        {/* Part number */}
        <p className="font-mono text-xs text-steel-400 tracking-wider uppercase">
          {product.part_number}
        </p>

        {/* Name */}
        <h3 className="font-display font-bold text-navy-900 text-base leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-steel-500 text-sm leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Footer: status + actions */}
        <div className="flex flex-col gap-3 pt-1">
          <div className="flex items-center justify-between">
            <Badge status={product.status} />
          </div>

          <div className="grid grid-cols-2 gap-2">
            {/* Detail link */}
            <Link
              href={`/produk/${product.slug}`}
              className="flex items-center justify-center text-center text-sm font-medium text-navy-700 border border-navy-200 hover:border-orange-400 hover:text-orange-600 px-3 py-2 rounded-lg transition-colors"
            >
              Lihat Detail
            </Link>

            {/* WhatsApp CTA */}
            <a
              href={generateWhatsAppUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-sm font-semibold text-white bg-wa-500 hover:bg-wa-600 px-3 py-2 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Tanya Harga
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
