export default function AboutSection() {
  const experiences = [
    { icon: '🏭', text: 'Lulusan Teknik Mesin dengan spesialisasi di bidang alat berat' },
    { icon: '🤝', text: 'Berpengalaman menangani proyek pertambangan, konstruksi, dan perkebunan' },
    { icon: '🔧', text: 'Konsultasi teknis gratis sebelum dan sesudah pembelian' },
    { icon: '📦', text: 'Jaringan stok luas: ready stock dan indent tersedia' },
  ];

  return (
    <section id="tentang" className="py-20 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Profile Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-orange-500/10 rounded-3xl" />
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-navy-900/10 rounded-3xl" />

              {/* Card */}
              <div className="relative bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full border border-steel-200">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>

                <div className="text-center mb-6">
                  <h2 className="font-display font-bold text-navy-900 text-xl">Fandu Marpaung</h2>
                  <p className="text-orange-500 font-semibold text-sm mt-1">Sales Engineer</p>
                  <p className="text-steel-500 text-sm">PT. Duta Laserindo Metal</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { value: '10+', label: 'Tahun' },
                    { value: '200+', label: 'Klien' },
                    { value: '5K+', label: 'Part No' },
                  ].map((s) => (
                    <div key={s.label} className="bg-steel-50 rounded-xl p-3 text-center">
                      <p className="font-display font-extrabold text-navy-800 text-lg leading-none">{s.value}</p>
                      <p className="text-steel-400 text-xs mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Contact info */}
                <div className="space-y-2.5">
                  {[
                    { icon: '📍', text: 'Jakarta Utara, Indonesia' },
                    { icon: '⏰', text: 'Senin–Sabtu, 08.00–17.00 WIB' },
                    { icon: '💬', text: 'Respons < 2 jam di jam kerja' },
                  ].map((info) => (
                    <div key={info.text} className="flex items-center gap-3 text-sm text-steel-600">
                      <span className="text-base">{info.icon}</span>
                      <span>{info.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Personal Branding
            </div>
            <h2 className="font-display font-extrabold text-navy-900 text-3xl sm:text-4xl leading-tight mb-5">
              Lebih dari Sekedar
              <br />
              <span className="text-orange-500">Penjual Sparepart</span>
            </h2>
            <p className="text-steel-600 text-base leading-relaxed mb-8">
              Saya adalah mitra teknis Anda. Dengan lebih dari satu dekade pengalaman di industri alat berat, saya tidak hanya menjual part — saya membantu Anda menemukan komponen yang <strong>tepat</strong>, dengan harga yang <strong>kompetitif</strong>, dalam waktu yang <strong>seefisien mungkin</strong>.
            </p>

            <div className="space-y-4">
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-steel-200 hover:border-orange-300 transition-colors">
                  <span className="text-2xl">{exp.icon}</span>
                  <p className="text-steel-700 text-sm leading-relaxed">{exp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
