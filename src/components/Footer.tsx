import { MapPin, Phone, Mail, Facebook, Instagram, Ship } from "lucide-react";

export function Footer() {

  // Fungsi untuk menangani scroll halus
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Mencegah reload atau lompatan kasar

    if (id === 'top') {
      // Khusus untuk "Beranda" -> Scroll ke paling atas window
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Untuk section lain -> Cari elemen berdasarkan ID
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Scroll hingga bagian atas elemen berada di atas layar
        });
      }
    }
  };

  return (
    <footer className="relative bg-[var(--ocean-deep)] text-white overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)
          `
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* ... Bagian Logo & Tagline (TIDAK BERUBAH) ... */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-[var(--brass-accent)] rounded-lg">
                <Ship className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl" style={{ fontWeight: 700 }}>Way Tataan</h3>
                <p className="text-[var(--brass-accent)] text-sm">Galangan Kapal</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Memproduksi kapal layak laut sejak 1947. Tiga generasi pengalaman maritim yang memadukan tradisi lokal dengan inovasi konstruksi modern.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 bg-white/10 hover:bg-[var(--brass-accent)] rounded-lg transition-colors duration-300" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 hover:bg-[var(--brass-accent)] rounded-lg transition-colors duration-300" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* ... Bagian Contact Info (TIDAK BERUBAH) ... */}
          <div>
            <h4 className="text-lg mb-6" style={{ fontWeight: 700 }}>Hubungi Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--brass-accent)] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/90">Jl. Pantai Timur No. 45</p>
                  <p className="text-white/70">Way Tataan, Pesawaran</p>
                  <p className="text-white/70">Lampung 35452, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--brass-accent)] flex-shrink-0" />
                <p className="text-white/90">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--brass-accent)] flex-shrink-0" />
                <p className="text-white/90">info@waytataan-ships.id</p>
              </div>
            </div>
          </div>

          {/* Quick Links / Navigasi (DI SINI PERUBAHANNYA) */}
          <div>
            <h4 className="text-lg mb-6" style={{ fontWeight: 700 }}>Navigasi</h4>
            <nav className="space-y-3">
              {/* Beranda: Scroll ke paling atas ('top') */}
              <a 
                href="HeroSection.tsx" 
                onClick={(e) => handleScroll(e, 'top')}
                className="block text-white/70 hover:text-[var(--brass-accent)] transition-colors duration-300 cursor-pointer"
              >
                Beranda
              </a>
              
              {/* Link lain: Scroll ke ID section masing-masing */}
              <a 
                href="HeritageSection.tsx" 
                onClick={(e) => handleScroll(e, 'heritage')}
                className="block text-white/70 hover:text-[var(--brass-accent)] transition-colors duration-300 cursor-pointer"
              >
                Tentang Kami
              </a>
              
              <a 
                href="ProductCatalog.tsx" 
                onClick={(e) => handleScroll(e, 'fleet')}
                className="block text-white/70 hover:text-[var(--brass-accent)] transition-colors duration-300 cursor-pointer"
              >
                Armada Kami
              </a>
              
              <a 
                href="ProductCatalog.tsx" 
                onClick={(e) => handleScroll(e, 'process')}
                className="block text-white/70 hover:text-[var(--brass-accent)] transition-colors duration-300 cursor-pointer"
              >
                Proses Produksi
              </a>
              
              <a 
                href="WhatsAppButton.tsx" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="block text-white/70 hover:text-[var(--brass-accent)] transition-colors duration-300 cursor-pointer"
              >
                Kontak
              </a>
            </nav>
          </div>
        </div>

        {/* ... Sisa Footer (Divider & Bottom Bar) TIDAK BERUBAH ... */}
        <div className="w-full h-px bg-white/10 mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Way Tataan Shipbuilders. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[var(--brass-accent)] transition-colors duration-300">Kebijakan Privasi</a>
            <a href="#terms" className="hover:text-[var(--brass-accent)] transition-colors duration-300">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--brass-accent)] to-transparent"></div>
    </footer>
  );
}