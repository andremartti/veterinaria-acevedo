import { Icon } from './Icon';
import { business } from '../../data/business';

type LogoProps = {
  tone?: 'light' | 'dark';
  className?: string;
};

/**
 * Lockup de marca: símbolo + nombre en dos niveles.
 * `tone="dark"` se usa sobre fondos oscuros (pie de página, menú móvil).
 */
export function Logo({ tone = 'light', className = '' }: LogoProps) {
  const isDark = tone === 'dark';
  const [first, ...restName] = business.name.split(' ');

  return (
    <span className={`flex items-center gap-3 ${className}`.trim()}>
      <span
        aria-hidden="true"
        className={`grid size-11 shrink-0 place-items-center rounded-[0.9rem] bg-gradient-to-br shadow-[var(--shadow-soft)] ${
          isDark ? 'from-jade-500 to-jade-700 text-forest-950' : 'from-forest-700 to-forest-900 text-mint-100'
        }`}
      >
        <Icon name="paw" size={22} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.6rem] font-bold tracking-[0.22em] uppercase ${
            isDark ? 'text-jade-300' : 'text-jade-700'
          }`}
        >
          {first}
        </span>
        <span
          className={`font-display mt-1 text-[1.15rem] leading-none font-semibold tracking-[-0.02em] ${
            isDark ? 'text-sand-50' : 'text-forest-900'
          }`}
        >
          {restName.join(' ')}
        </span>
      </span>
    </span>
  );
}
