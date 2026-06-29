import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-steel-50">
      <div className="text-center px-4">
        {/* Icon */}
        <div className="w-20 h-20 bg-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="font-display font-extrabold text-navy-900 text-3xl mb-3">
          Produk Tidak Ditemukan
        </h1>
        <p className="text-steel-500 text-base leading-relaxed mb-8 max-w-sm mx-auto">
          Produk yang Anda cari tidak tersedia atau mungkin telah dihapus dari katalog kami.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#katalog"
            className="flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Lihat Katalog
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-white border border-steel-200 hover:border-orange-400 text-steel-700 hover:text-orange-600 font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
