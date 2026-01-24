import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  Ruler,
  Wind,
  Ship,
  Hammer,
  Download,
  Phone
} from "lucide-react";

// ============================================================================
// TYPES (Tidak ada perubahan)
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
// HELPER COMPONENTS (Tidak ada perubahan)
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

  // Extended boat data (Tidak ada perubahan)
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

      {/* Header Navigation (Tidak ada perubahan) */}
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

      {/* Main Content (Tidak ada perubahan signifikan) */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-grow">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column - Gallery & Description */}
          <div className="lg:col-span-7 flex flex-col gap-8">

            {/* Image Gallery */}
            <div className="flex flex-col gap-4">

              {/* Main Image */}
              <div className="relative aspect-video bg-[var(--ocean-deep)] rounded-lg overflow-hidden border border-[var(--border)] shadow-sm group">

                {/* Grid Pattern Overlay */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none z-10"
                  style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    backgroundPosition: '-1px -1px'
                  }}
                />

                {/* Image */}
                <img
                  src={extendedData.images[activeImage]}
                  alt={`${boat.name} - View ${activeImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Label */}
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

              {/* Tab Headers */}
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

                    {/* Active Indicator */}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--brass-accent)]" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
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
      {/* FOOTER - BAGIAN YANG DIUBAH */}
      {/* ================================================================== */}
      <footer className="relative bg-gradient-to-b from-[var(--ocean-deep)] to-[var(--ocean-indigo)] border-t border-white/10 py-12 mt-8 text-white/80 overflow-hidden">
  
  {/* === 1. LAYER PATTERN === */}
  {/* Pattern diagonal samar seperti di ProcessGallery */}
  <div 
    className="absolute inset-0 opacity-5 pointer-events-none"
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

  {/* === 2. LAYER KONTEN === */}
  {/* Note: Class 'relative z-10' penting agar teks tidak tertutup pattern */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
    
    {/* Bagian Logo */}
    <div className="flex justify-center gap-6 mb-6 mt-4 opacity-50">
      <img 
        src="/favicon-16x16.png" 
        alt="Logo Phinisi Boat Builder" 
        className="h-12 w-auto object-contain invert brightness-0" 
      />
    </div>

    <p className="text-sm text-white/70">
      &copy; {new Date().getFullYear()} Phinisi Boat Builder Indonesia. All rights reserved.
    </p>

    <div className="flex justify-center gap-6 mt-4 text-xs font-bold text-white tracking-wider uppercase">
      <a href="#" className="hover:text-[var(--brass-accent)] transition-colors">Privacy Policy</a>
      <a href="#" className="hover:text-[var(--brass-accent)] transition-colors">Terms of Service</a>
      <a href="#" className="hover:text-[var(--brass-accent)] transition-colors">Contact</a>
    </div>
  </div>
</footer>
      {/* ================================================================== */}

    </div>
  );
}

// ============================================================================
// DEMO WRAPPER (Tidak ada perubahan)
// ============================================================================
// ... (kode demo wrapper sama seperti sebelumnya)
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