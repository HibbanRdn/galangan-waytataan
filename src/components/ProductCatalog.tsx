import { Ruler, Anchor, TreePine, Users, FileText } from "lucide-react";

interface BoatSpec {
  name: string;
  type: string;
  image: string;
  description: string;
  specs: {
    length: string;
    capacity: string;
    wood: string;
    crew: string;
  };
}

const boats: BoatSpec[] = [
  {
    name: "Jukung Tradisional",
    type: "Perahu Bercadik",
    image: "https://images.unsplash.com/photo-1729335854526-96955515cae8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGZpc2hpbmclMjBib2F0fGVufDF8fHx8MTc2ODIwMTAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Kapal nelayan lincah untuk perairan pesisir. Dilengkapi dengan sistem penyeimbang cadik tradisional.",
    specs: {
      length: "6-8 meter",
      capacity: "500 kg",
      wood: "Jati & Mahoni",
      crew: "2-3 orang"
    }
  },
  {
    name: "Kapal Motor",
    type: "Kapal Nelayan Bermotor",
    image: "https://images.unsplash.com/photo-1504979128236-23f86972356c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBib2F0JTIwY29uc3RydWN0aW9ufGVufDF8fHx8MTc2ODIwODcyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Kapal motor tangguh untuk laut dalam dan transportasi antar pulau dengan konstruksi lambung yang diperkuat.",
    specs: {
      length: "12-15 meter",
      capacity: "3 ton",
      wood: "Ulin & Jati",
      crew: "4-6 orang"
    }
  },
  {
    name: "Perahu Layar",
    type: "Perahu Layar Tradisional",
    image: "https://images.unsplash.com/photo-1586064957227-11d763b135a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYnVpbGRpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjgyMDg3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Kapal layar klasik yang menggabungkan desain warisan budaya dengan kemampuan navigasi modern.",
    specs: {
      length: "10-12 meter",
      capacity: "1.5 ton",
      wood: "Jati",
      crew: "3-4 orang"
    }
  },
  {
    name: "Kapal Kargo",
    type: "Kapal Angkut Barang",
    image: "https://images.unsplash.com/photo-1762139304314-07405b934bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBib2F0JTIwc3Vuc2V0JTIwb2NlYW58ZW58MXx8fHwxNzY4MjA5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Kapal kargo tugas berat untuk transportasi komersial dengan ruang muat (palka) yang luas.",
    specs: {
      length: "18-22 meter",
      capacity: "8 ton",
      wood: "Ulin & Meranti",
      crew: "6-8 orang"
    }
  }
];

export function ProductCatalog() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--seafoam-white)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-[var(--ocean-indigo)]/10 backdrop-blur-sm border border-[var(--ocean-indigo)]/20 rounded-full">
            <Anchor className="w-4 h-4 text-[var(--ocean-indigo)]" />
            <span className="text-[var(--ocean-indigo)] text-sm tracking-wide uppercase">Armada Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--ocean-deep)] mb-4" style={{ fontWeight: 700 }}>
            Spesifikasi Kapal
          </h2>
          <p className="text-lg text-[var(--ocean-indigo)]/70 max-w-2xl mx-auto">
            Setiap kapal dibuat berdasarkan pesanan. Spesifikasi teknis dapat disesuaikan dengan kebutuhan operasional Anda.
          </p>
          <div className="w-24 h-1 bg-[var(--teak-wood)] mx-auto mt-6"></div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {boats.map((boat, index) => (
            <div 
              key={index}
              className="group relative bg-white border-2 border-[var(--ocean-indigo)]/10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Technical Drawing Border Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: `
                       linear-gradient(to right, var(--brass-accent) 2px, transparent 2px) 0 0,
                       linear-gradient(to right, var(--brass-accent) 2px, transparent 2px) 0 100%,
                       linear-gradient(to left, var(--brass-accent) 2px, transparent 2px) 100% 0,
                       linear-gradient(to left, var(--brass-accent) 2px, transparent 2px) 100% 100%,
                       linear-gradient(to bottom, var(--brass-accent) 2px, transparent 2px) 0 0,
                       linear-gradient(to bottom, var(--brass-accent) 2px, transparent 2px) 100% 0,
                       linear-gradient(to top, var(--brass-accent) 2px, transparent 2px) 0 100%,
                       linear-gradient(to top, var(--brass-accent) 2px, transparent 2px) 100% 100%
                     `,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: '20px 20px'
                   }}>
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-[var(--ocean-indigo)]">
                <img
                  src={boat.image}
                  alt={boat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)]/80 to-transparent"></div>
                
                {/* Boat Type Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-[var(--brass-accent)] text-white text-xs uppercase tracking-wider rounded"
                     style={{ fontWeight: 600 }}>
                  {boat.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl text-[var(--ocean-deep)] mb-2" style={{ fontWeight: 700 }}>
                  {boat.name}
                </h3>
                <p className="text-[var(--ocean-indigo)]/70 mb-6 leading-relaxed">
                  {boat.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[var(--seafoam-white)] rounded-lg border border-[var(--ocean-indigo)]/10">
                  <div className="flex items-start gap-2">
                    <Ruler className="w-5 h-5 text-[var(--teak-wood)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-[var(--ocean-indigo)]/60 uppercase tracking-wide mb-0.5">Panjang</div>
                      <div className="text-sm text-[var(--ocean-deep)]" style={{ fontWeight: 600 }}>{boat.specs.length}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Anchor className="w-5 h-5 text-[var(--teak-wood)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-[var(--ocean-indigo)]/60 uppercase tracking-wide mb-0.5">Kapasitas</div>
                      <div className="text-sm text-[var(--ocean-deep)]" style={{ fontWeight: 600 }}>{boat.specs.capacity}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <TreePine className="w-5 h-5 text-[var(--teak-wood)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-[var(--ocean-indigo)]/60 uppercase tracking-wide mb-0.5">Jenis Kayu</div>
                      <div className="text-sm text-[var(--ocean-deep)]" style={{ fontWeight: 600 }}>{boat.specs.wood}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-[var(--teak-wood)] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-[var(--ocean-indigo)]/60 uppercase tracking-wide mb-0.5">Kru</div>
                      <div className="text-sm text-[var(--ocean-deep)]" style={{ fontWeight: 600 }}>{boat.specs.crew}</div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--ocean-indigo)] text-white rounded-lg hover:bg-[var(--ocean-deep)] transition-colors duration-300 border-2 border-transparent hover:border-[var(--brass-accent)]"
                  style={{ fontWeight: 600 }}
                >
                  <FileText className="w-5 h-5" />
                  <span>Lihat Detail Teknis</span>
                </button>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--brass-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--brass-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Custom Order CTA */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-[var(--ocean-indigo)] to-[var(--ocean-deep)] rounded-lg shadow-xl">
          <h3 className="text-2xl text-white mb-3" style={{ fontWeight: 700 }}>
            Butuh Kapal Khusus?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Kami melayani pembuatan desain khusus sesuai spesifikasi Anda. 
            Mulai dari kapal nelayan hingga kapal pesiar, kami siap mewujudkan kebutuhan Anda.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--brass-accent)] text-white rounded-lg hover:bg-[var(--brass-dark)] transition-colors duration-300 shadow-lg"
            style={{ fontWeight: 600 }}
          >
            <span>Diskusikan Proyek Anda</span>
          </button>
        </div>
      </div>
    </section>
  );
}