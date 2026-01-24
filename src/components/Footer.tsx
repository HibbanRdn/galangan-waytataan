import { MapPin, Phone, Mail, Facebook, Instagram, Ship } from "lucide-react";

export function Footer() {

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
        {/* Grid Layout 3 Kolom */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* KOLOM 1: Brand & Identitas */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-[var(--brass-accent)] rounded-lg">
                <Ship className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl" style={{ fontWeight: 700 }}>Mustika Asih</h3>
                <p className="text-[var(--brass-accent)] text-sm">Galangan Kapal</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Dirintis oleh Bapak Zainudin sejak 1999 dan resmi berdiri pada 2002. Galangan kapal lokal yang mengutamakan kualitas konstruksi dengan dedikasi dan keahlian tangan pertama.
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

          {/* KOLOM 2: Kontak Info */}
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
                <p className="text-white/90">+62 813-6901-3310</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--brass-accent)] flex-shrink-0" />
                <p className="text-white/90">info@mustikaasih.id</p>
              </div>
            </div>
          </div>

          {/* KOLOM 3: Peta Lokasi (Menggantikan Navigasi) */}
          <div className="flex flex-col h-full">
            <h4 className="text-lg mb-6" style={{ fontWeight: 700 }}>Lokasi Workshop</h4>
            <div className="flex-grow w-full h-full min-h-[200px] rounded-lg overflow-hidden border-2 border-white/10 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.570238382038!2d105.24909297593175!3d-5.4819534944978185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40d969b38a5891%3A0xa36a9e31cd5d8cdb!2sGalangan%20Mustika%20Asih!5e0!3m2!1sid!2sid!4v1769257718567!5m2!1sid!2sid" 
                className="w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Mustika Asih"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Divider & Bottom Bar */}
        <div className="w-full h-px bg-white/10 mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Mustika Asih Shipbuilders. Hak cipta dilindungi.</p>
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