import { useId } from 'react';

type Tone = 'deep' | 'soft' | 'mist';

type BrandPanelProps = {
  tone?: Tone;
  /** Cambia la composición para que dos paneles contiguos no se repitan. */
  seed?: 0 | 1 | 2;
  /** `'none'` deja sólo las ondas: útil para paneles secundarios. */
  mark?: 'paw' | 'none';
  className?: string;
};

type Palette = {
  from: string;
  via: string;
  to: string;
  glow: string;
  shade: string;
  mark: string;
  markOpacity: number;
  ring: string;
  ringOpacity: number;
};

const palettes: Record<Tone, Palette> = {
  deep: {
    from: '#042c53',
    via: '#0a4783',
    to: '#185fa5',
    glow: '#85b7eb',
    shade: '#021a33',
    mark: '#ffffff',
    markOpacity: 0.15,
    ring: '#ffffff',
    ringOpacity: 0.2,
  },
  mist: {
    from: '#a8c9ea',
    via: '#eaf2fb',
    to: '#7fb2e6',
    glow: '#ffffff',
    shade: '#0a4783',
    mark: '#042c53',
    markOpacity: 0.14,
    ring: '#042c53',
    ringOpacity: 0.18,
  },
  soft: {
    from: '#efece3',
    via: '#faf9f5',
    to: '#bcd8f2',
    glow: '#ffffff',
    shade: '#63615a',
    mark: '#185fa5',
    markOpacity: 0.15,
    ring: '#63615a',
    ringOpacity: 0.16,
  },
};

/**
 * Composiciones: el punto de interés (la huella) se mantiene dentro de la zona
 * segura del lienzo para que nunca se recorte, sea cual sea la proporción del
 * contenedor.
 */
const layouts = [
  { mark: { x: 132, y: 248, s: 22, r: -8 }, ring: { x: 616, y: 236 }, arc: 'M-40 742c210 96 402 74 578-64 176-138 244-292 302-470', blobs: [[168, 224, 250, 200] as const, [654, 796, 262, 226] as const] },
  { mark: { x: 258, y: 296, s: 19, r: 6 }, ring: { x: 176, y: 748 }, arc: 'M840 240C660 300 540 420 470 596c-70 176-96 290-96 424', blobs: [[636, 216, 236, 206] as const, [186, 812, 254, 214] as const] },
  { mark: { x: 152, y: 286, s: 20, r: -12 }, ring: { x: 622, y: 690 }, arc: 'M-40 306c196-84 388-52 546 86 158 138 236 292 294 452', blobs: [[262, 754, 262, 204] as const, [672, 228, 226, 196] as const] },
] as const;

/** Huella construida sobre la misma rejilla de 24 que los iconos del sitio. */
function PawMark({ fill, opacity }: { fill: string; opacity: number }) {
  return (
    <g fill={fill} opacity={opacity}>
      <ellipse cx="6.1" cy="10.6" rx="2.15" ry="2.85" transform="rotate(-22 6.1 10.6)" />
      <ellipse cx="10.4" cy="7.5" rx="2.25" ry="3.05" transform="rotate(-7 10.4 7.5)" />
      <ellipse cx="15.2" cy="7.9" rx="2.25" ry="3.05" transform="rotate(12 15.2 7.9)" />
      <ellipse cx="19.2" cy="11.3" rx="2.15" ry="2.85" transform="rotate(27 19.2 11.3)" />
      <path d="M12.3 12.4c2.75 0 5.3 2 5.8 4.45.5 2.45-1.1 4.35-3.55 4.35-.95 0-1.55-.2-2.25-.42a2.6 2.6 0 0 0-2 0c-.7.22-1.3.42-2.25.42-2.45 0-4.05-1.9-3.55-4.35.5-2.45 3.05-4.45 5.8-4.45Z" />
    </g>
  );
}

/**
 * Composición gráfica con los colores de la marca. Se usa como imagen de
 * respaldo mientras la clínica no haya cargado sus propias fotografías
 * (ver `photos` en `src/data/business.ts`).
 */
export function BrandPanel({
  tone = 'deep',
  seed = 0,
  mark = 'paw',
  className = '',
}: BrandPanelProps) {
  const uid = useId().replace(/:/g, '');
  const p = palettes[tone];
  const layout = layouts[seed];
  const isDeep = tone === 'deep';

  return (
    <svg
      viewBox="0 0 800 1000"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`.trim()}
      role="presentation"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${uid}-base`} x1="0" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor={p.from} />
          <stop offset="50%" stopColor={p.via} />
          <stop offset="100%" stopColor={p.to} />
        </linearGradient>
        <radialGradient id={`${uid}-glow`} cx="0.24" cy="0.16" r="0.8">
          <stop offset="0%" stopColor={p.glow} stopOpacity={isDeep ? 0.42 : 0.48} />
          <stop offset="100%" stopColor={p.glow} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${uid}-shade`} cx="0.88" cy="0.95" r="0.72">
          <stop offset="0%" stopColor={p.shade} stopOpacity={isDeep ? 0.55 : 0.22} />
          <stop offset="100%" stopColor={p.shade} stopOpacity="0" />
        </radialGradient>
        <filter id={`${uid}-blur`} x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur stdDeviation="80" />
        </filter>
        <filter id={`${uid}-grain`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed={seed + 4} />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="800" height="1000" fill={`url(#${uid}-base)`} />

      <g filter={`url(#${uid}-blur)`} opacity={isDeep ? 0.55 : 0.8}>
        <ellipse
          cx={layout.blobs[0][0]}
          cy={layout.blobs[0][1]}
          rx={layout.blobs[0][2]}
          ry={layout.blobs[0][3]}
          fill={p.glow}
          opacity="0.5"
        />
        <ellipse
          cx={layout.blobs[1][0]}
          cy={layout.blobs[1][1]}
          rx={layout.blobs[1][2]}
          ry={layout.blobs[1][3]}
          fill={p.from}
          opacity="0.55"
        />
      </g>

      <rect width="800" height="1000" fill={`url(#${uid}-glow)`} />
      <rect width="800" height="1000" fill={`url(#${uid}-shade)`} />

      {/* Ondas concéntricas y un trazo envolvente: evocan cuidado y cercanía */}
      <g fill="none" stroke={p.ring} opacity={p.ringOpacity}>
        <g strokeWidth="1.25">
          <circle cx={layout.ring.x} cy={layout.ring.y} r="118" />
          <circle cx={layout.ring.x} cy={layout.ring.y} r="186" />
          <circle cx={layout.ring.x} cy={layout.ring.y} r="264" />
          <circle cx={layout.ring.x} cy={layout.ring.y} r="352" />
        </g>
        <path d={layout.arc} strokeWidth="2" opacity="0.8" />
      </g>

      {mark === 'paw' ? (
        <g
          transform={`translate(${layout.mark.x} ${layout.mark.y}) scale(${layout.mark.s}) rotate(${layout.mark.r} 12 12)`}
        >
          <PawMark fill={p.mark} opacity={p.markOpacity} />
        </g>
      ) : null}

      <rect
        width="800"
        height="1000"
        filter={`url(#${uid}-grain)`}
        opacity={isDeep ? 0.16 : 0.09}
        style={{ mixBlendMode: 'overlay' }}
      />
    </svg>
  );
}
