import { LogoMark } from './LogoMark';
import { business } from '../../data/business';

type LogoProps = {
  tone?: 'light' | 'dark';
  /**
   * `lockup` combina el símbolo con el nombre en tipografía: se lee bien en
   * tamaños pequeños, como la barra de navegación.
   * `badge` muestra el sello completo de la clínica, con su texto circular.
   * Sólo conviene a partir de unos 80 px.
   */
  variant?: 'lockup' | 'badge';
  className?: string;
};

/** Marca de Veterinaria Acevedo. */
export function Logo({ tone = 'light', variant = 'lockup', className = '' }: LogoProps) {
  const isDark = tone === 'dark';
  const colorClass = isDark ? 'text-white' : 'text-brand-600';
  const [first, ...restName] = business.name.split(' ');

  if (variant === 'badge') {
    return (
      <LogoMark
        className={`size-24 shrink-0 transition-colors duration-500 ${colorClass} ${className}`.trim()}
      />
    );
  }

  return (
    <span className={`flex items-center gap-3 ${className}`.trim()}>
      <LogoMark
        withText={false}
        className={`size-11 shrink-0 transition-colors duration-500 ${colorClass}`}
      />
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
