import Masonry from "react-responsive-masonry";
import { Hammer } from "lucide-react";

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const processImages: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1738965742812-bc1f957c01e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwcGxhbmtzJTIwdGV4dHVyZXxlbnwxfHx8fDE3NjgyMDk0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Pemilihan Kayu",
    description: "Menggunakan kayu jati dan ulin kualitas terbaik"
  },
  {
    url: "https://images.unsplash.com/photo-1601391548091-de4ff62ee29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kJTIwcGxhbmluZyUyMHdvb2R8ZW58MXx8fHwxNzY4MjA5NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Penyerutan Manual",
    description: "Pembentukan presisi menggunakan alat tradisional"
  },
  {
    url: "https://images.unsplash.com/photo-1709070234293-ddfcf3b37a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBib2F0JTIwZGV0YWlsJTIwam9pbmVyeXxlbnwxfHx8fDE3NjgyMDk0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Teknik Sambungan",
    description: "Konstruksi sambungan pasak yang kokoh dan rapi"
  },
  {
    url: "https://images.unsplash.com/photo-1586064957227-11d763b135a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwYnVpbGRpbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjgyMDg3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Perakitan Lambung",
    description: "Pembangunan kerangka dan dinding kapal"
  },
  {
    url: "https://images.unsplash.com/photo-1722411927625-0e478acf502b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdHNtYW4lMjB3b29kd29ya2luZyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2ODIwOTQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Pengerjaan Detail",
    description: "Diselesaikan oleh tenaga ahli berpengalaman"
  },
  {
    url: "https://images.unsplash.com/photo-1683612881120-d8b7321aaa2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwbGF1bmNoJTIwd2F0ZXJ8ZW58MXx8fHwxNzY4MjAxMDU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Peluncuran",
    description: "Kapal siap diserahkan dan berlayar"
  }
];

export function ProcessGallery() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-b from-[var(--ocean-deep)] to-[var(--ocean-indigo)]">
      {/* Subtle rope pattern background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
          )`
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-[var(--brass-accent)]/20 backdrop-blur-sm border border-[var(--brass-accent)]/30 rounded-full">
            <Hammer className="w-4 h-4 text-[var(--brass-accent)]" />
            <span className="text-[var(--brass-accent)] text-sm tracking-wide uppercase">Alur Produksi</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4" style={{ fontWeight: 700 }}>
            Dari Kayu Menjadi Kapal
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Lihat tahapan pengerjaan kami dalam mengubah bahan baku kayu menjadi kapal yang layak laut melalui keahlian teknis dan standar kualitas tinggi.
          </p>
          <div className="w-24 h-1 bg-[var(--brass-accent)] mx-auto mt-6"></div>
        </div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="1.5rem">
          {processImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-2xl cursor-pointer"
              style={{
                border: '3px solid transparent',
                background: 'linear-gradient(var(--ocean-deep), var(--ocean-deep)) padding-box, linear-gradient(135deg, var(--brass-accent), var(--teak-wood)) border-box',
                transition: 'all 0.5s ease'
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ocean-deep)] via-[var(--ocean-deep)]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Rope border effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       boxShadow: 'inset 0 0 0 4px rgba(184, 134, 11, 0.4), inset 0 0 0 8px rgba(30, 58, 95, 0.6)'
                     }}>
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="relative">
                  {/* Number badge */}
                  <div className="absolute -top-8 left-0 w-12 h-12 flex items-center justify-center bg-[var(--brass-accent)] text-white rounded-full border-4 border-[var(--ocean-deep)]"
                       style={{ fontWeight: 700, fontSize: '1.25rem' }}>
                    {index + 1}
                  </div>
                  
                  <div className="pl-16">
                    <h3 className="text-xl text-white mb-1" style={{ fontWeight: 700 }}>
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-[var(--brass-accent)] border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </Masonry>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-white/60 text-sm mb-4 uppercase tracking-widest">
            Setiap kapal dikerjakan dengan standar keahlian profesional
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-16 h-px bg-[var(--brass-accent)]"></div>
            <div className="w-2 h-2 bg-[var(--brass-accent)] rounded-full"></div>
            <div className="w-16 h-px bg-[var(--brass-accent)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}