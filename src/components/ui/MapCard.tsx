import { useState } from 'react';
import { business } from '../../data/business';
import { Icon } from './Icon';

/** Mapa estilizado que se dibuja mientras el visitante no pide el mapa real. */
function StylizedMap() {
  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      role="presentation"
      aria-hidden="true"
    >
      <rect width="800" height="600" fill="#dde9f6" />

      {/* Manzanas */}
      <g fill="#bdd6ef">
        <rect x="40" y="40" width="220" height="140" rx="10" />
        <rect x="300" y="40" width="170" height="140" rx="10" />
        <rect x="510" y="40" width="250" height="90" rx="10" />
        <rect x="40" y="230" width="160" height="150" rx="10" />
        <rect x="560" y="230" width="200" height="150" rx="10" />
        <rect x="40" y="430" width="240" height="130" rx="10" />
        <rect x="330" y="430" width="180" height="130" rx="10" />
        <rect x="560" y="430" width="200" height="130" rx="10" />
      </g>

      {/* Zona destacada */}
      <path
        d="M512 176c68-26 132-8 156 40 24 48-6 104-70 118-64 14-128-10-146-58-18-48 6-82 60-100Z"
        fill="#93bde6"
      />

      {/* Vías */}
      <g stroke="#fdfcf9" fill="none" strokeLinecap="round">
        <path d="M0 205h800" strokeWidth="26" />
        <path d="M0 405h800" strokeWidth="18" />
        <path d="M280 0v600" strokeWidth="22" />
        <path d="M535 0v600" strokeWidth="16" />
        <path d="M0 520 240 380l180 60 200-160 180 40" strokeWidth="14" />
      </g>
      <g stroke="#c9c4b6" fill="none" strokeWidth="1.2" opacity="0.6">
        <path d="M0 205h800M280 0v600" />
      </g>

      {/* Marcador de la clínica */}
      <g transform="translate(400 300)">
        <circle r="74" fill="#185fa5" opacity="0.12" />
        <circle r="46" fill="#185fa5" opacity="0.18" />
        <circle r="26" fill="#042c53" />
        <g transform="translate(-9 -9) scale(0.75)" fill="#e5f0fb">
          <ellipse cx="6.1" cy="10.6" rx="2.15" ry="2.85" transform="rotate(-22 6.1 10.6)" />
          <ellipse cx="10.4" cy="7.5" rx="2.25" ry="3.05" transform="rotate(-7 10.4 7.5)" />
          <ellipse cx="15.2" cy="7.9" rx="2.25" ry="3.05" transform="rotate(12 15.2 7.9)" />
          <ellipse cx="19.2" cy="11.3" rx="2.15" ry="2.85" transform="rotate(27 19.2 11.3)" />
          <path d="M12.3 12.4c2.75 0 5.3 2 5.8 4.45.5 2.45-1.1 4.35-3.55 4.35-.95 0-1.55-.2-2.25-.42a2.6 2.6 0 0 0-2 0c-.7.22-1.3.42-2.25.42-2.45 0-4.05-1.9-3.55-4.35.5-2.45 3.05-4.45 5.8-4.45Z" />
        </g>
      </g>
    </svg>
  );
}

/**
 * Tarjeta de mapa. El mapa de Google se carga únicamente cuando el visitante
 * lo solicita: así la página abre más rápido y no se cargan recursos de
 * terceros sin necesidad.
 */
export function MapCard() {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[2rem] border border-navy-900/8 bg-mist-50 shadow-[var(--shadow-lift)] lg:min-h-[32rem]">
      {showEmbed ? (
        <iframe
          title={`Mapa de ubicación de ${business.name}`}
          src={business.maps.embedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0"
        />
      ) : (
        <>
          <StylizedMap />

          <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 bg-gradient-to-t from-navy-950/20 via-transparent to-transparent px-6 pb-7 text-center sm:pb-9">
            <div className="hidden rounded-2xl border border-navy-900/8 bg-white/95 px-5 py-4 shadow-[var(--shadow-lift)] sm:block">
              <p className="font-display text-[1.0625rem] font-semibold text-navy-900">
                {business.address.venue}
              </p>
              <p className="mt-1 text-[0.8125rem] text-ink-muted">
                {business.address.locality}, {business.address.country}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowEmbed(true)}
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-600 px-5 py-3 text-[0.875rem] font-semibold text-white shadow-[var(--shadow-lift)] transition-[background-color,transform] duration-300 ease-[var(--ease-out-soft)] hover:bg-brand-700 motion-safe:hover:-translate-y-0.5"
            >
              <Icon name="mapExpand" size={17} />
              Ver mapa interactivo
            </button>
          </div>
        </>
      )}
    </div>
  );
}
