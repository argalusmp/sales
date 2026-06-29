const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Garansi Keaslian',
    desc: 'Semua produk bergaransi original OEM maupun reman berstandar pabrik. Sertifikat keaslian tersedia atas permintaan.',
    color: 'bg-blue-50 text-blue-600 border-blue-200',
    accent: 'bg-blue-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Harga Kompetitif & Nego',
    desc: 'Harga bersaing langsung dari distributor. Negosiasi harga untuk pembelian volume besar sangat terbuka.',
    color: 'bg-green-50 text-green-600 border-green-200',
    accent: 'bg-green-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Pengiriman Cepat',
    desc: 'Stok ready tersedia untuk part-part populer. Pengiriman ke seluruh Indonesia via ekspedisi terpercaya.',
    color: 'bg-orange-50 text-orange-600 border-orange-200',
    accent: 'bg-orange-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Konsultasi Teknis Gratis',
    desc: 'Bingung pilih part yang tepat? Konsultasikan kebutuhan Anda langsung dengan Sales Engineer berpengalaman kami.',
    color: 'bg-purple-50 text-purple-600 border-purple-200',
    accent: 'bg-purple-500',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: '20+ Merek Terkemuka',
    desc: 'Komatsu, Caterpillar, Hitachi, Volvo, Doosan, Case, JCB, Sumitomo, dan masih banyak lagi dari satu titik kontak.',
    color: 'bg-navy-50 text-navy-700 border-navy-200',
    accent: 'bg-navy-700',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Layanan Purna Jual',
    desc: 'Hubungi kami kapan saja jika ada kendala pasca pembelian. Kepuasan pelanggan adalah prioritas utama kami.',
    color: 'bg-rose-50 text-rose-600 border-rose-200',
    accent: 'bg-rose-500',
  },
];

export default function AdvantagesSection() {
  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Mengapa Kami?
          </div>
          <h2 className="font-display font-extrabold text-navy-900 text-3xl sm:text-4xl mb-4">
            Keunggulan yang Membedakan Kami
          </h2>
          <p className="text-steel-500 max-w-2xl mx-auto text-base leading-relaxed">
            Kami berkomitmen memberikan pengalaman belanja sparepart industri yang profesional, efisien, dan terpercaya.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${adv.color}`}
            >
              {/* Accent dot */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${adv.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${adv.color} mb-4`}>
                {adv.icon}
              </div>

              <h3 className="font-display font-bold text-navy-900 text-base mb-2">{adv.title}</h3>
              <p className="text-steel-600 text-sm leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
