import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PT. Duta Laserindo Metal | Distributor Sparepart Alat Berat & Mesin Industri",
    template: "%s | PT. Duta Laserindo Metal",
  },
  description:
    "Distributor dan supplier sparepart alat berat terpercaya: Komatsu, Caterpillar, Hitachi, Volvo, dan merek terkemuka lainnya. Garansi keaslian, harga kompetitif, pengiriman cepat ke seluruh Indonesia.",
  keywords: [
    "sparepart alat berat",
    "sparepart excavator",
    "komatsu",
    "caterpillar",
    "hitachi",
    "hydraulic pump",
    "undercarriage",
    "distributor spare part",
    "mesin industri",
  ],
  authors: [{ name: "Budi Santoso", url: "/" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "PT. Duta Laserindo Metal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${sora.variable} scroll-smooth`}
    >
      <body className="font-sans bg-steel-50 text-steel-800 antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
