import { MessageCircle, Anchor } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Replace YOUR_WHATSAPP_NUMBER with actual number (format: country code + number without + or -)
    // Example: 6281234567890 for +62 812-3456-7890
    window.open('https://wa.me/YOUR_WHATSAPP_NUMBER?text=Hello!%20I%27m%20interested%20in%20learning%20more%20about%20your%20wooden%20vessels.', '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Tooltip */}
      <div 
        className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-white rounded-lg shadow-lg border-2 border-[var(--brass-accent)] whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <p className="text-sm text-[var(--ocean-deep)]" style={{ fontWeight: 600 }}>
          Chat with us on WhatsApp
        </p>
        {/* Arrow pointing down */}
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-2 border-b-2 border-[var(--brass-accent)] transform rotate-45"></div>
      </div>

      {/* Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        style={{
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          border: '3px solid var(--brass-accent)',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(184, 134, 11, 0.4)'
        }}
        aria-label="Contact via WhatsApp"
      >
        {/* Pulse animation ring */}
        <div 
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            background: 'var(--brass-accent)',
            opacity: 0.2,
            animationDuration: '2s'
          }}
        />

        {/* Icon container with anchor decoration */}
        <div className="relative">
          <MessageCircle className="w-8 h-8 text-white relative z-10" strokeWidth={2.5} />
          
          {/* Small anchor icon that appears on hover */}
          <div className={`absolute -top-2 -right-2 w-5 h-5 bg-[var(--brass-accent)] rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
          }`}>
            <Anchor className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Rotating border effect on hover */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
             style={{
               background: `conic-gradient(from 0deg, transparent 0deg, var(--brass-accent) 90deg, transparent 180deg)`,
               animation: 'spin 3s linear infinite',
               padding: '3px',
               WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
               WebkitMaskComposite: 'xor',
               maskComposite: 'exclude'
             }}>
        </div>
      </button>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
