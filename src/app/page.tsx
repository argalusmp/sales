import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import CatalogSection from '@/components/sections/CatalogSection';
import CTASection from '@/components/sections/CTASection';
import { getAllProducts, getCategories } from '@/lib/products';

export default function HomePage() {
  const products = getAllProducts();
  const categories = getCategories();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <CatalogSection products={products} categories={categories} />
      <CTASection />
    </>
  );
}
