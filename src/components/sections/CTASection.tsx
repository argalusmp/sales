import { generateWhatsAppUrlGeneral } from '@/lib/whatsapp';

export default function CTASection() {
  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #F97316 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Headline */}
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
          Siap Membantu Anda
        </div>
        <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
          Tidak Menemukan Part
          <br />
          <span className="text-orange-400">yang Anda Cari?</span>
        </h2>
        <p className="text-steel-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Hubungi kami sekarang via WhatsApp. Kami akan membantu mencari komponen yang Anda butuhkan dari jaringan distributor kami yang luas di seluruh Indonesia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            id="cta-wa-btn"
            href={generateWhatsAppUrlGeneral()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-wa-500 hover:bg-wa-600 text-white font-bold text-base px-10 py-4 rounded-xl shadow-lg shadow-wa-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Hubungi via WhatsApp Sekarang
          </a>

          <a
            id="cta-catalog-btn"
            href="#katalog"
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Lihat Katalog Lengkap
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-10 text-steel-500 text-sm">
          Garansi respon cepat · Tidak ada biaya konsultasi · Pengiriman ke seluruh Indonesia
        </p>
      </div>
    </section>
  );
}
