import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Ruler,
  Wind,
  Ship,
  Hammer,
  Phone,
  MapPin,      // Ditambahkan untuk Footer
  Mail,        // Ditambahkan untuk Footer
  Facebook,    // Ditambahkan untuk Footer
  Instagram    // Ditambahkan untuk Footer
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

interface BoatSpec {
  name: string;
  type: string;
  image: string;
  description: string;
  specs: {
    length: string;
    capacity: string;
    crew: string;
    wood: string;
  };
}

interface ProductDetailProps {
  boat: BoatSpec;
  onBack: () => void;
}

// ============================================================================
// HELPER COMPONENTS
// ============================================================================

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-4 px-6 hover:bg-[var(--seafoam-white)] transition-colors">
      <span className="text-sm text-[var(--muted-foreground)]">{label}</span>
      <span className="text-sm font-mono font-bold text-[var(--ocean-deep)] text-right">
        {value}
      </span>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export function ProductDetail({ boat, onBack }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'dims' | 'perf' | 'const'>('dims');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extended boat data
  const extendedData = {
    priceRange: "Rp 180 - 250jt (Estimasi)",
    images: [
      boat.image,
      "https://images.unsplash.com/photo-1769253916668-376c8ee7c04c?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1769253916668-376c8ee7c04c?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    technical: {
      dimensions: {
        loa: boat.specs.length,
        beam: "4.20 Meter",
        draft: "1.50 Meter",
        tonnage: "28 GT",
      },
      performance: {
        engine: "Yanmar 6 Cylinder / Mitsubishi 190PK",
        maxSpeed: "12 - 14 Knot",
        fuelCapacity: "2000 Liter",
        range: "400 Nautical Miles",
      },
      construction: {
        hullMaterial: boat.specs.wood,
        deckMaterial: "Kayu Jati (Teak) Solid",
        frameMaterial: "Lababan / Merbau",
        buildTime: "3 - 4 Bulan",
      }
    },
    features: [
      `Kapasitas muatan hingga ${boat.specs.capacity}`,
      `Akomodasi kru untuk ${boat.specs.crew}`,
      "Sistem Navigasi GPS & Fishfinder Modern",
      "Tangki air tawar 1000L Integrasi",
      "Winch jangkar hidrolik Heavy Duty"
    ]
  };

  const tabs = [
    { id: 'dims' as const, label: 'Dimensi', icon: Ruler },
    { id: 'perf' as const, label: 'Performa', icon: Wind },
    { id: 'const' as const, label: 'Konstruksi', icon: Hammer },
  ];

  return (
    <div className="min-h-screen bg-[var(--seafoam-white)] text-[var(--foreground)] font-sans flex flex-col">

      {/* Header Navigation */}
      <div className="bg-white border-b border-[var(--border)] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">
              KEMBALI KE KATALOG
            </span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-grow">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column - Gallery & Description */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Image Gallery */}
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div className="relative aspect-video bg-[var(--ocean-deep)] rounded-lg overflow-hidden border border-[var(--border)] shadow-sm group">
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none z-10"
                  style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: '-1px -1px'
                  }}
                />
                <img
                  src={extendedData.images[activeImage]}
                  alt={`${boat.name} - View ${activeImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-[var(--brass-accent)] text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-md">
                    Exterior View
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {extendedData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      activeImage === idx
                        ? 'border-[var(--brass-accent)] opacity-100 ring-1 ring-[var(--brass-accent)]'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info & Actions */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Title & Price */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-lg bg-[var(--brass-accent)]" />
                <span className="text-xs font-bold text-[var(--brass-accent)] uppercase tracking-widest">
                  Ready to Build
                </span>
              </div>
              <h1 className="text-4xl font-bold text-[var(--ocean-deep)] mb-1">
                {boat.name}
              </h1>
              <p className="text-lg text-[var(--muted-foreground)] mb-6">
                {boat.type}
              </p>
              <div className="text-2xl sm:text-3xl font-bold text-[var(--brass-accent)]">
                {extendedData.priceRange}
              </div>
            </div>

            {/* Description Card */}
            <div className="bg-white rounded-lg border border-[var(--border)] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Ship className="w-6 h-6 text-[var(--brass-accent)]" />
                <h3 className="text-xl font-bold text-[var(--ocean-deep)]">
                  Deskripsi Model
                </h3>
              </div>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base text-justify">
                {boat.description} Dibangun menggunakan teknik pasak kayu tradisional yang dipadukan
                dengan lem epoksi modern marine-grade, menjamin kekedapan air maksimal tanpa mengurangi
                fleksibilitas lambung saat memecah ombak. Desain lunas (keel) yang panjang memberikan
                stabilitas arah yang sangat baik untuk pelayaran jarak jauh.
              </p>
            </div>

            {/* Technical Specs Tabs */}
            <div className="bg-white rounded-lg border border-[var(--border)] shadow-sm overflow-hidden">
              <div className="flex border-b border-[var(--border)] divide-x divide-[var(--border)]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-1 py-4 px-4 sm:px-6
                      text-xs font-bold uppercase tracking-wider
                      transition-all relative
                      flex flex-col items-center justify-center gap-3
                      ${activeTab === tab.id
                        ? 'text-[var(--brass-accent)] bg-white'
                        : 'text-[var(--muted-foreground)] hover:bg-gray-50'
                      }
                    `}
                  >
                    <tab.icon className={`w-5 h-5 mb-1 ${
                      activeTab === tab.id ? 'stroke-[2.5px]' : 'stroke-2'
                    }`} />
                    <span>{tab.label}</span>
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--brass-accent)]" />
                    )}
                  </button>
                ))}
              </div>
              <div className="divide-y divide-[var(--border)]">
                {activeTab === 'dims' && (
                  <>
                    <SpecRow label="Length Overall (LOA)" value={extendedData.technical.dimensions.loa} />
                    <SpecRow label="Beam (Lebar)" value={extendedData.technical.dimensions.beam} />
                    <SpecRow label="Draft (Sarat Air)" value={extendedData.technical.dimensions.draft} />
                    <SpecRow label="Gross Tonnage" value={extendedData.technical.dimensions.tonnage} />
                  </>
                )}
                {activeTab === 'perf' && (
                  <>
                    <SpecRow label="Mesin Utama" value={extendedData.technical.performance.engine} />
                    <SpecRow label="Kecepatan Max" value={extendedData.technical.performance.maxSpeed} />
                    <SpecRow label="Kapasitas BBM" value={extendedData.technical.performance.fuelCapacity} />
                    <SpecRow label="Jarak Jelajah" value={extendedData.technical.performance.range} />
                  </>
                )}
                {activeTab === 'const' && (
                  <>
                    <SpecRow label="Material Lambung" value={extendedData.technical.construction.hullMaterial} />
                    <SpecRow label="Material Dek" value={extendedData.technical.construction.deckMaterial} />
                    <SpecRow label="Estimasi Pengerjaan" value={extendedData.technical.construction.buildTime} />
                  </>
                )}
              </div>
            </div>

            {/* Standard Equipment Card */}
            <div className="bg-[var(--ocean-deep)] rounded-lg p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
              <h4 className="text-xs font-bold text-[var(--brass-accent)] uppercase tracking-widest mb-6 relative z-10">
                Standard Equipment
              </h4>
              <ul className="space-y-4 relative z-10">
                {extendedData.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/90">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brass-accent)] shrink-0" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2 mb-8">
              <button
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                className="w-full py-4 bg-[var(--brass-accent)] hover:bg-[var(--brass-dark)] text-white rounded-lg flex items-center justify-center gap-3 font-bold uppercase tracking-wider shadow-md transition-colors"
              >
                <Phone className="w-5 h-5" />
                Konsultasi & Penawaran
              </button>
              <p className="text-xs text-center text-[var(--muted-foreground)] mt-2">
                *Spesifikasi dapat disesuaikan dengan kebutuhan pemesan.
              </p>
            </div>

          </div>
        </div>
      </main>

      {/* ================================================================== */}
      {/* FOOTER BARU (Mustika Asih Style) */}
      {/* ================================================================== */}
      <footer className="relative bg-[var(--ocean-deep)] text-white overflow-hidden mt-12">
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
                {/* Logo Image */}
                <div>
                  <img 
                    src="/logo.png" 
                    alt="Logo Mustika Asih" 
                    className="w-10 h-10 object-contain" 
                  />
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

            {/* KOLOM 3: Peta Lokasi */}
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
    </div>
  );
}

// ============================================================================
// DEMO WRAPPER
// ============================================================================
export default function App() {
  const [showDetail, setShowDetail] = useState(true);

  const sampleBoat: BoatSpec = {
    name: "Pinisi Nusantara 18M",
    type: "Kapal Phinisi Tradisional",
    image: "https://images.unsplash.com/photo-1769253916668-376c8ee7c04c?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Kapal Phinisi 18 meter yang menggabungkan keindahan desain tradisional Bugis-Makassar dengan teknologi konstruksi modern.",
    specs: {
      length: "18.00 Meter",
      capacity: "25 Ton",
      crew: "8-10 Orang",
      wood: "Kayu Ulin (Ironwood)"
    }
  };

  if (!showDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--seafoam-white)]">
        <button
          onClick={() => setShowDetail(true)}
          className="px-6 py-3 bg-[var(--ocean-deep)] text-white rounded font-bold shadow hover:bg-[var(--ocean-indigo)]"
        >
          View Product
        </button>
      </div>
    );
  }

  return <ProductDetail boat={sampleBoat} onBack={() => setShowDetail(false)} />;
}