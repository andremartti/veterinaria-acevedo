import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon, type IconName } from './Icon';

type Variant =
  | 'primary'
  | 'accent'
  | 'outline'
  | 'ghost'
  | 'ghostOnDark'
  | 'onDark'
  | 'onDarkGhost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group/btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold ' +
  'tracking-[-0.01em] whitespace-nowrap transition-[background-color,color,box-shadow,transform,border-color] ' +
  'duration-300 ease-[var(--ease-out-soft)] select-none ' +
  'active:translate-y-0 active:duration-75 motion-safe:hover:-translate-y-0.5';

const variants: Record<Variant, string> = {
  /* Los estados de hover oscurecen el fondo: así el texto blanco conserva
     siempre contraste suficiente. */
  primary:
    'bg-brand-600 text-white shadow-[var(--shadow-soft)] hover:bg-brand-700 hover:shadow-[var(--shadow-lift)]',
  accent:
    'bg-brand-500 text-white shadow-[var(--shadow-soft)] hover:bg-brand-600 hover:shadow-[var(--shadow-lift)]',
  outline:
    'border border-navy-900/15 bg-white/80 text-navy-900 backdrop-blur-sm hover:border-navy-900/30 hover:bg-white hover:shadow-[var(--shadow-soft)]',
  ghost: 'text-navy-800 hover:bg-navy-900/6',
  ghostOnDark: 'text-mist-100 hover:bg-white/10',
  onDark:
    'bg-cream-50 text-navy-900 shadow-[var(--shadow-soft)] hover:bg-white hover:shadow-[var(--shadow-lift)]',
  onDarkGhost:
    'border border-white/30 text-cream-50 hover:border-white/60 hover:bg-white/10',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-[0.8125rem]',
  md: 'h-12 px-5.5 text-[0.9375rem]',
  lg: 'h-14 px-7 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  /** Coloca el icono después del texto (por defecto va antes). */
  iconAfter?: boolean;
  /** Desplaza ligeramente el icono al pasar el cursor (flechas). */
  animateIcon?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsAnchor): React.JSX.Element;
export function Button(props: ButtonAsButton): React.JSX.Element;
export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter = false,
  animateIcon = false,
  children,
  className = '',
  ...rest
}: ButtonAsAnchor | ButtonAsButton) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  const glyph = icon ? (
    <Icon
      name={icon}
      size={size === 'sm' ? 16 : 18}
      className={
        animateIcon
          ? 'shrink-0 transition-transform duration-300 ease-[var(--ease-out-soft)] motion-safe:group-hover/btn:translate-x-0.5'
          : 'shrink-0'
      }
    />
  ) : null;

  const content = (
    <>
      {!iconAfter && glyph}
      <span>{children}</span>
      {iconAfter && glyph}
    </>
  );

  if (typeof rest.href === 'string') {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal = /^https?:/.test(anchorProps.href ?? '');
    return (
      <a
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} type={buttonProps.type ?? 'button'} {...buttonProps}>
      {content}
    </button>
  );
}
