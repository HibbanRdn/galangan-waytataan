import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle2, Ruler, Anchor, 
  Wind, Ship, Hammer, Download, Phone 
} from "lucide-react";

// --- Types ---
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

// --- Component ---
export function ProductDetail({ boat, onBack }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'dims' | 'perf' | 'const'>('dims');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data Dummy Diperluas
  const extendedData = {
    priceRange: "Rp 850jt - 1.5M (Estimasi)",
    images: [
      boat.image,
      "https://images.unsplash.com/photo-1544551763-46a8733bcc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    <div className="min-h-screen bg-[var(--seafoam-white)] text-[var(--foreground)] font-sans pb-12">
      
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Gallery & Description */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[4/3] bg-[var(--ocean-deep)] rounded-lg overflow-hidden border border-[var(--border)] shadow-sm group">
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
                    backgroundSize: '40px 40px', 
                    backgroundPosition: '-1px -1px'
                  }}
                />

                <img 
                  src={extendedData.images[activeImage]} 
                  alt={`${boat.name} - View ${activeImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Image Overlay Info */}
                <div className="absolute top-8 left-8">
                  <span className="bg-[var(--brass-accent)] text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-md">
                    Exterior View
                  </span>
                  <div className="mt-2 text-white font-mono text-xl tracking-widest drop-shadow-md">
                    FIG. {activeImage + 1}
                  </div>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {extendedData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-[4/3] rounded bg-slate-100 overflow-hidden border transition-all ${
                      activeImage === idx 
                        ? 'border-[var(--brass-accent)] ring-1 ring-[var(--brass-accent)] opacity-100' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <div className="absolute top-2 left-2 text-[10px] text-slate-500 font-mono">
                      Thumbnail {idx + 1}
                    </div>
                    <img 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl border border-[var(--border)] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Ship className="w-6 h-6 text-[var(--brass-accent)]" />
                <h3 className="text-xl font-bold text-[var(--ocean-deep)]">
                  Deskripsi Model
                </h3>
              </div>
              <p className="text-[var(--muted-foreground)] leading-relaxed text-base">
                {boat.description} Dibangun menggunakan teknik pasak kayu tradisional yang dipadukan dengan lem epoksi modern marine-grade, menjamin kekedapan air maksimal tanpa mengurangi fleksibilitas lambung saat memecah ombak.
              </p>
            </div>
          </div>

          {/* Right Column - Info & Actions */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Title & Price */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[var(--brass-accent)]" />
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

            {/* Technical Specs Tabs */}
            <div className="bg-white rounded-xl border border-[var(--border)] shadow-sm overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-[var(--border)]">
                {tabs.map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 px-2 text-xs font-bold uppercase tracking-wider transition-all relative flex flex-col items-center gap-2 ${
                      activeTab === tab.id 
                        ? 'text-[var(--brass-accent)] bg-white' 
                        : 'text-[var(--muted-foreground)] hover:bg-slate-50'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--brass-accent)]" />
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

            {/* Standard Equipment */}
            <div className="bg-[var(--ocean-deep)] rounded-xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
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

              <Anchor className="absolute -bottom-6 -right-6 w-40 h-40 text-white opacity-5 rotate-[-20deg]" />
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button 
                onClick={() => window.open('https://wa.me/6281234567890', '_blank')}
                className="w-full py-4 bg-[var(--brass-accent)] hover:bg-[var(--brass-dark)] text-white rounded-lg flex items-center justify-center gap-3 font-bold uppercase tracking-wider shadow-md transition-colors"
              >
                <Phone className="w-5 h-5" />
                Konsultasi & Penawaran
              </button>
              
              <button className="w-full py-4 bg-white border border-[var(--border)] text-[var(--ocean-deep)] rounded-lg flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-sm">
                <Download className="w-5 h-5" />
                Download GA Plan (PDF)
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

// --- Helper Component ---
function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-4 px-6 hover:bg-[var(--seafoam-white)] transition-colors">
      <span className="text-sm text-[var(--muted-foreground)]">{label}</span>
      <span className="text-sm font-mono font-bold text-[var(--ocean-deep)] text-right">{value}</span>
    </div>
  );
}

// --- Demo Wrapper ---
export default function App() {
  const [showDetail, setShowDetail] = useState(true);
  
  const sampleBoat: BoatSpec = {
    name: "Pinisi Nusantara 18M",
    type: "Kapal Phinisi Tradisional",
    image: "https://images.unsplash.com/photo-1544551763-46a8733bcc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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