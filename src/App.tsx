import { HeroSection } from "./components/HeroSection";
import { HeritageSection } from "./components/HeritageSection";
import { ProductCatalog } from "./components/ProductCatalog";
import { ProcessGallery } from "./components/ProcessGallery";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--seafoam-white)]">
      <HeroSection />
      <HeritageSection />
      <ProductCatalog />
      <ProcessGallery />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
