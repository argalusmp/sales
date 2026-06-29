import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllProducts, getProductBySlug } from '@/lib/products';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import Badge from '@/components/ui/Badge';

type Params = { slug: string };

// ─── SSG: pre-render all product pages at build time ────────────────────────
export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

// ─── SEO: generate metadata per product ─────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Produk Tidak Ditemukan' };
  }

  return {
    title: `${product.name} | Part No. ${product.part_number}`,
    description: product.description,
    keywords: [product.name, product.part_number, product.category, 'sparepart alat berat'],
    openGraph: {
      title: `${product.name} | PT. Duta Laserindo Metal`,
      description: product.description,
      type: 'website',
    },
  };
}

// ─── Product Detail Page ─────────────────────────────────────────────────────
export default async function ProductDetailPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const waUrl = generateWhatsAppUrl(product);

  const categoryColors: Record<string, string> = {
    Hydraulic:     'bg-blue-100 text-blue-700',
    Engine:        'bg-orange-100 text-orange-700',
    Undercarriage: 'bg-stone-100 text-stone-700',
    Electrical:    'bg-yellow-100 text-yellow-700',
  };
  const categoryClass = categoryColors[product.category] ?? 'bg-steel-100 text-steel-700';

  return (
    <div className="bg-steel-50 min-h-screen">

      {/* Breadcrumb */}
      <div className="bg-white border-b border-steel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-steel-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-orange-500 transition-colors">Beranda</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/#katalog" className="hover:text-orange-500 transition-colors">Katalog</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-navy-800 font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Product Image */}
          <div className="sticky top-20">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-navy-900 shadow-xl">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Category overlay */}
              <div className="absolute top-4 left-4">
                <span className={`text-sm font-semibold px-3 py-1.5 rounded-full ${categoryClass}`}>
                  {product.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col gap-6">

            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Badge status={product.status} />
              </div>
              <p className="font-mono text-sm text-steel-400 tracking-widest uppercase mb-2">
                Part No. {product.part_number}
              </p>
              <h1 className="font-display font-extrabold text-navy-900 text-2xl sm:text-3xl leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-steel-200 p-6">
              <h2 className="font-semibold text-navy-800 text-sm uppercase tracking-wider mb-3">Deskripsi Produk</h2>
              <p className="text-steel-600 leading-relaxed text-base">{product.description}</p>
            </div>

            {/* Specifications Table */}
            <div className="bg-white rounded-2xl border border-steel-200 overflow-hidden">
              <div className="bg-navy-900 px-6 py-3">
                <h2 className="font-semibold text-white text-sm uppercase tracking-wider">
                  Spesifikasi Teknis
                </h2>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-steel-50'}>
                      <td className="px-6 py-3.5 text-steel-500 font-medium w-2/5 border-b border-steel-100">
                        {spec.label}
                      </td>
                      <td className="px-6 py-3.5 text-navy-800 font-semibold border-b border-steel-100">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* WhatsApp CTA — Prominent */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 text-center border border-navy-700">
              <p className="text-steel-300 text-sm mb-1">Minati produk ini?</p>
              <p className="text-white font-display font-bold text-lg mb-5">
                Tanya Harga &amp; Nego via WhatsApp
              </p>
              <a
                id={`wa-product-${product.id}`}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 bg-wa-500 hover:bg-wa-600 text-white font-bold text-base px-6 py-4 rounded-xl shadow-lg shadow-wa-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                Tanya Harga · {product.part_number}
              </a>
              <p className="text-steel-500 text-xs mt-3">
                Pesan WhatsApp akan otomatis menyebutkan nama produk &amp; part number
              </p>
            </div>

            {/* Back button */}
            <Link
              href="/#katalog"
              className="flex items-center gap-2 text-steel-500 hover:text-orange-500 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Katalog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
