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
        className={`grid size-11 shrink-0 place-items-center rounded-[0.9rem] bg-gradient-to-br shadow-[var(--shadow-soft)] transition-colors duration-500 ${
          isDark ? 'from-brand-400 to-brand-600 text-navy-950' : 'from-navy-700 to-navy-900 text-mist-100'
        }`}
      >
        <Icon name="paw" size={22} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.6rem] font-bold tracking-[0.22em] uppercase transition-colors duration-500 ${
            isDark ? 'text-brand-300' : 'text-brand-700'
          }`}
        >
          {first}
        </span>
        <span
          className={`font-display mt-1 text-[1.15rem] leading-none font-semibold tracking-[-0.02em] transition-colors duration-500 ${
            isDark ? 'text-cream-50' : 'text-navy-900'
          }`}
        >
          {restName.join(' ')}
        </span>
      </span>
    </span>
  );
}
