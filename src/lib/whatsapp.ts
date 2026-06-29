import type { Product } from '@/types/product';

/** Ganti dengan nomor WhatsApp aktual (format: 628xxxxxxxxxx) */
const WHATSAPP_NUMBER = '6281279733385';

/**
 * Menghasilkan URL WhatsApp dengan template pesan dinamis
 * yang menyebutkan Nama Produk dan Part Number.
 */
export function generateWhatsAppUrl(product: Product): string {
  const message =
    `Halo, saya ingin menanyakan harga dan ketersediaan produk berikut:\n\n` +
    `🔧 *Nama Produk:* ${product.name}\n` +
    `📦 *Part Number:* ${product.part_number}\n\n` +
    `Mohon informasikan harga, ketersediaan stok, dan estimasi pengirimannya. Terima kasih.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Menghasilkan URL WhatsApp dengan pesan umum (untuk hero CTA / tombol umum).
 */
export function generateWhatsAppUrlGeneral(): string {
  const message =
    `Halo, saya ingin berkonsultasi mengenai kebutuhan sparepart alat berat / mesin industri saya. Bisa dibantu?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
