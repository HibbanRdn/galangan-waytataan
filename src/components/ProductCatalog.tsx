import { Ruler, Anchor, TreePine, Users, FileText } from "lucide-react";

// Interface tetap sama seperti aslinya
export interface BoatSpec {
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

// Props tetap sama
interface CatalogProps {
  onSelectBoat: (boat: BoatSpec) => void;
}

// Data diperbarui: 5 Varian Alat Tangkap
// Info Lebar digabung ke dalam 'length' agar tidak merubah struktur data
const boats: BoatSpec[] = [
  {
    name: "Kapal Jaring Insang",
    type: "Gill Net Specialist",
    image: "https://images.unsplash.com/photo-1769253916683-04f6d391d77e?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dirancang khusus untuk operasional Gill Net. Ikan (tuna kecil, tongkol, kakap) ditangkap dengan cara terjerat pada insangnya.",
    specs: {
      length: "7.5-10m x 3-5m", // Format: Panjang x Lebar
      capacity: "2 - 3 Ton",
      wood: "Ulin & Jati",
      crew: "3-4 orang"
    }
  },
  {
    name: "Kapal Jaring Tarik",
    type: "Pukat Cincin / Pantai",
    image: "https://images.unsplash.com/photo-1769253917152-524b38a9b448?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Memiliki dek luas untuk menarik jaring (Pukat Pantai/Cincin Kecil) baik secara manual maupun menggunakan mesin gardan.",
    specs: {
      length: "7.5-10m x 3-5m",
      capacity: "3 - 4 Ton",
      wood: "Ulin & Meranti",
      crew: "4-6 orang"
    }
  },
  {
    name: "Kapal Bagan",
    type: "Jaring Angkat (Lift Net)",
    image: "https://images.unsplash.com/photo-1769253917152-524b38a9b448?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Dilengkapi struktur untuk lampu penarik perhatian ikan (teri, cumi). Jaring dioperasikan dengan diangkat dari bawah kapal.",
    specs: {
      length: "7.5-10m x 3-5m",
      capacity: "1.5 - 2 Ton",
      wood: "Jati & Mahoni",
      crew: "2-3 orang"
    }
  },
  {
    name: "Kapal Bubu",
    type: "Trap Setter",
    image: "https://images.unsplash.com/photo-1769253916683-04f6d391d77e?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Kapal pembawa perangkap (bambu/kawat) yang ramah lingkungan. Spesialis menangkap kepiting, rajungan, dan lobster.",
    specs: {
      length: "7.5-10m x 3-5m",
      capacity: "2 - 3 Ton",
      wood: "Ulin & Jati",
      crew: "2-3 orang"
    }
  }
];

export function ProductCatalog({ onSelectBoat }: CatalogProps) {
  return (
    <section id="fleet" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--seafoam-white)]">
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
            Dimensi standar kapal kami adalah <strong>Panjang 7.5-10m</strong> dan <strong>Lebar 3-5m</strong>. 
            Silakan pilih varian berdasarkan kebutuhan operasional alat tangkap Anda.
          </p>
          <div className="w-24 h-1 bg-[var(--teak-wood)] mx-auto mt-6"></div>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      {/* Label 'Panjang' tetap, tapi isinya mencakup Lebar */}
                      <div className="text-xs text-[var(--ocean-indigo)]/60 uppercase tracking-wide mb-0.5">Dimensi (P x L)</div>
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
                  onClick={() => onSelectBoat(boat)} 
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
            Mulai dari kapal nelayan hingga berbagai macam, kami siap mewujudkan kebutuhan Anda.
          </p>
          <button 
            // Tetap menggunakan inline function agar tidak mengubah struktur kode (menambah function baru)
            // Hanya mengubah URL copywriting-nya
            onClick={() => window.open('https://wa.me/6281369013310?text=Halo%20Mustika%20Asih%2C%20saya%20tertarik%20untuk%20mendiskusikan%20pembuatan%20kapal%20dengan%20spesifikasi%20khusus%20(Custom%20Order).%20Mohon%20infonya.', '_blank')}
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