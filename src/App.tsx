import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { HeritageSection } from "./components/HeritageSection";
import { ProductCatalog } from "./components/ProductCatalog";
import { ProcessGallery } from "./components/ProcessGallery";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
// Pastikan komponen ini sudah dibuat (dari kode sebelumnya)
import { ProductDetail } from "./components/ProductDetail";

// Kita definisikan tipe data singkat agar TypeScript tidak error
interface Boat {
  name: string;
  type: string;
  image: string;
  description: string;
  // ... properti lain sesuai kebutuhan
}

export default function App() {
  // State untuk menyimpan kapal yang sedang dipilih
  // Jika null = tampilkan landing page. Jika ada data = tampilkan detail.
  const [selectedBoat, setSelectedBoat] = useState<Boat | null>(null);

  // Jika ada kapal yang dipilih, render Halaman Detail saja
  if (selectedBoat) {
    return (
      <div className="min-h-screen bg-[var(--seafoam-white)]">
        {/* Pass data kapal ke komponen detail, dan fungsi onBack untuk reset state */}
        <ProductDetail 
          boat={selectedBoat} 
          onBack={() => setSelectedBoat(null)} 
        />
        {/* Opsional: Tetap tampilkan WA Button di halaman detail */}
        <WhatsAppButton />
      </div>
    );
  }

  // Jika tidak ada kapal dipilih (null), render Halaman Utama (Landing Page)
  return (
    <div className="min-h-screen bg-[var(--seafoam-white)]">
      <HeroSection />
      
      <HeritageSection />

      
      
      {/* PENTING: Kita kirim fungsi 'setSelectedBoat' ke dalam Catalog 
        agar tombol di sana bisa mengubah state di sini.
      */}
      <ProductCatalog onSelectBoat={(boat: Boat) => setSelectedBoat(boat)} />
      
      <ProcessGallery />

      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}