import { Compass, Waves, Anchor } from "lucide-react";

export function HeritageSection() {
  return (
    <section id="heritage" className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background with wood texture overlay */}
      <div className="absolute inset-0 bg-[var(--ocean-indigo)]">
        {/* Subtle nautical blueprint pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Decorative compass rose in corner */}
      <div className="absolute top-12 right-12 opacity-5">
        <Compass className="w-64 h-64 text-white" strokeWidth={0.5} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-[var(--brass-accent)]/20 backdrop-blur-sm border border-[var(--brass-accent)]/30 rounded-full">
            <Waves className="w-4 h-4 text-[var(--brass-accent)]" />
            <span className="text-[var(--brass-accent)] text-sm tracking-wide uppercase">Warisan & Dedikasi</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4" style={{ fontWeight: 700 }}>
            Keahlian Tangan Pertama
          </h2>
          <div className="w-24 h-1 bg-[var(--brass-accent)] mx-auto"></div>
        </div>

        {/* Split Screen Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg border-4 border-[var(--brass-accent)]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1769253916683-04f6d391d77e?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pengrajin senior bekerja dengan kayu"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Wood grain overlay */}
              <div className="absolute inset-0 mix-blend-overlay opacity-20"
                   style={{
                     backgroundImage: `url('https://images.unsplash.com/photo-1738965742812-bc1f957c01e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwcGxhbmtzJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjgyMDk0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
                     backgroundSize: 'cover'
                   }}>
              </div>
            </div>
            
            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-[var(--brass-accent)]"></div>
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-[var(--brass-accent)]"></div>
          </div>

          {/* Text Side */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-3 bg-[var(--brass-accent)]/10 rounded-lg border border-[var(--brass-accent)]/30">
                <Anchor className="w-6 h-6 text-[var(--brass-accent)]" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
                  Perintisan Pak Zainudin
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Dimulai dari perintisan usaha pada tahun <strong>1999</strong> dan diresmikan pada <strong>2002</strong>, 
                  galangan ini dibangun di atas pondasi kerja keras <strong>Bapak Zainudin</strong>. 
                  Hingga hari ini, beliau masih turun tangan langsung mengelola operasional, 
                  memastikan visi dan kualitas yang sama seperti saat pertama kali didirikan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 p-3 bg-[var(--brass-accent)]/10 rounded-lg border border-[var(--brass-accent)]/30">
                <Waves className="w-6 h-6 text-[var(--brass-accent)]" />
              </div>
              <div>
                <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 600 }}>
                  Standar "Mustika Asih"
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Pengalaman lebih dari dua dekade Pak Zainudin menghasilkan desain lambung yang presisi. 
                  Konstruksi kami dirancang untuk stabilitas maksimal di perairan, menggabungkan 
                  teknik tradisional yang teruji waktu dengan kebutuhan pelayaran modern.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl text-[var(--brass-accent)] mb-1" style={{ fontWeight: 700 }}>25+</div>
                  <div className="text-white/60 text-sm">Tahun Berkarya</div>
                </div>
                <div>
                  <div className="text-3xl text-[var(--brass-accent)] mb-1" style={{ fontWeight: 700 }}>250+</div>
                  <div className="text-white/60 text-sm">Kapal Dibuat</div>
                </div>
                <div>
                  <div className="text-3xl text-[var(--brass-accent)] mb-1" style={{ fontWeight: 700 }}>100%</div>
                  <div className="text-white/60 text-sm">Supervisi Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}