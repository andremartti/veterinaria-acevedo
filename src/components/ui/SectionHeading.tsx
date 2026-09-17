import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** `id` del encabezado, para enlazarlo con `aria-labelledby` de la sección. */
  id?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
};

/** Bloque de encabezado reutilizable: antetítulo, título y texto introductorio. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div
      className={`${isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`.trim()}
    >
      <Reveal>
        <p
          className={`flex items-center gap-2.5 text-[0.6875rem] font-bold tracking-[0.18em] uppercase ${
            isCentered ? 'justify-center' : ''
          } ${isDark ? 'text-brand-300' : 'text-brand-700'}`}
        >
          <span
            aria-hidden="true"
            className={`h-px w-6 ${isDark ? 'bg-brand-300/50' : 'bg-brand-700/35'}`}
          />
          {eyebrow}
          {isCentered ? (
            <span
              aria-hidden="true"
              className={`h-px w-6 ${isDark ? 'bg-brand-300/50' : 'bg-brand-700/35'}`}
            />
          ) : null}
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h2
          id={id}
          className={`mt-4 text-[clamp(1.85rem,4.4vw,3rem)] leading-[1.1] font-semibold ${
            isDark ? 'text-cream-50' : 'text-navy-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {lead ? (
        <Reveal delay={160}>
          <p
            className={`mt-5 text-[1.0625rem] leading-relaxed ${
              isDark ? 'text-mist-200/85' : 'text-ink-soft'
            }`}
          >
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
