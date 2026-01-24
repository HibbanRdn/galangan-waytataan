import { MessageCircle, Anchor, Waves, Ship } from "lucide-react";

export function HeroSection() {
  
  // Fungsi handler untuk klik tombol WhatsApp
  const handleConsultation = () => {
    const phoneNumber = "6281369013310"; // Nomor tujuan (format 62)
    
    // Pesan Template Khusus Konsultasi (Revisi Nama Brand)
    const message = "Halo Mustika Asih, saya ingin berkonsultasi mengenai pembuatan kapal kayu. Mohon informasi lebih lanjut.";
    
    // Membuat URL WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1762139304314-07405b934bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBib2F0JTIwc3Vuc2V0JTIwb2NlYW58ZW58MXx8fHwxNzY4MjA5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Kapal kayu membelah ombak saat matahari terbenam"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ocean-deep)]/60 via-[var(--ocean-deep)]/40 to-[var(--ocean-indigo)]/80"></div>
        
        {/* Subtle water ripple effect overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
             style={{
               backgroundImage: `repeating-linear-gradient(
                 0deg,
                 transparent,
                 transparent 2px,
                 rgba(255,255,255,0.05) 2px,
                 rgba(255,255,255,0.05) 4px
               )`
             }}>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl text-center">
          
          {/* Maritime Icons Badge */}
          <div className="inline-flex items-center justify-center gap-4 px-6 py-3 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full group hover:bg-white/15 transition-colors duration-300">
            {/* Ikon 1: Jangkar (Aksen Kuningan) */}
            <Anchor className="w-5 h-5 text-[var(--brass-accent)]" />
            
            {/* Ikon 2: Kapal (Putih Utama) */}
            <Ship className="w-6 h-6 text-white/90" />
            
            {/* Ikon 3: Ombak (Aksen Halus) */}
            <Waves className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 text-white" style={{ fontWeight: 700, lineHeight: 1.1 }}>
            Galangan Kapal Kayu,
            <br />
            <span className="text-[var(--brass-accent)]">Mustika Asih</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto" style={{ fontWeight: 500 }}>
            Spesialis Konstruksi Kapal & Perahu Nelayan Profesional
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-white/70 mb-12 max-w-2xl mx-auto">
            Berpengalaman dalam memproduksi kapal berkualitas. 
            Kami menjamin ketahanan konstruksi, presisi pengerjaan, dan penggunaan material kayu terbaik untuk kebutuhan operasional laut Anda.
          </p>

          {/* CTA Button with Wood & Brass Styling */}
          <button 
            onClick={handleConsultation} // Menggunakan handler baru
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, var(--teak-wood) 0%, var(--teak-light) 100%)',
              border: '2px solid var(--brass-accent)',
              boxShadow: '0 4px 20px rgba(184, 134, 11, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Brass trim effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{
                   background: 'linear-gradient(135deg, transparent 0%, rgba(184, 134, 11, 0.2) 50%, transparent 100%)'
                 }}>
            </div>
            
            <MessageCircle className="w-6 h-6 text-white relative z-10" />
            <span className="text-lg text-white relative z-10" style={{ fontWeight: 600, letterSpacing: '0.5px' }}>
              Konsultasi via WhatsApp
            </span>
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/50 text-xs tracking-widest">SCROLL</span>
          </div>
        </div>
      </div>
    </section>
  );
}