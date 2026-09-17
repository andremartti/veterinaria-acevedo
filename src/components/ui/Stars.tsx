import { Icon } from './Icon';

type StarsProps = {
  /** Calificación de 0 a 5. Admite decimales (se rellena parcialmente). */
  rating: number;
  size?: number;
  className?: string;
  /** Color de las estrellas sin rellenar. */
  trackClassName?: string;
};

const STAR_COUNT = 5;

/** Fila de estrellas con relleno proporcional a la calificación. */
export function Stars({
  rating,
  size = 16,
  className = 'text-amber-500',
  trackClassName = 'text-cream-300',
}: StarsProps) {
  const percentage = Math.max(0, Math.min(1, rating / STAR_COUNT)) * 100;
  const row = (extra: string) =>
    Array.from({ length: STAR_COUNT }, (_, i) => (
      <Icon key={i} name="star" size={size} className={extra} />
    ));

  return (
    <span className="relative inline-flex" style={{ gap: size * 0.14 }}>
      <span className={`inline-flex ${trackClassName}`} style={{ gap: size * 0.14 }}>
        {row('shrink-0')}
      </span>
      <span
        className={`pointer-events-none absolute inset-0 inline-flex overflow-hidden ${className}`}
        style={{ width: `${percentage}%`, gap: size * 0.14 }}
      >
        {row('shrink-0')}
      </span>
    </span>
  );
}
