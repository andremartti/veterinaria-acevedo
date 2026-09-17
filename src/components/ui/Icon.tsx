import type { SVGProps } from 'react';

/**
 * Set de iconos propio: trazo uniforme de 1.6, extremos redondeados y una
 * rejilla común de 24×24, para que todos los iconos del sitio se vean como
 * una sola familia. No requiere librerías externas.
 */

type IconDefinition = {
  /** Los iconos de relleno no llevan trazo (marcas de terceros, estrellas…). */
  filled?: boolean;
  paths: React.ReactNode;
};

const icons = {
  stethoscope: {
    paths: (
      <>
        <path d="M6 2.5v5.6a4 4 0 0 0 8 0V2.5" />
        <path d="M4.3 2.5h3.4M12.3 2.5h3.4" />
        <path d="M10 12.1v2.6a5 5 0 0 0 10 0v-1.4" />
        <circle cx="20" cy="10.9" r="2.2" />
      </>
    ),
  },
  shield: {
    paths: (
      <>
        <path d="M12 2.7 4.8 5.6v5.2c0 4.5 2.9 8.5 7.2 9.9 4.3-1.4 7.2-5.4 7.2-9.9V5.6L12 2.7Z" />
        <path d="m9.1 11.9 2.1 2.1 3.7-4" />
      </>
    ),
  },
  heart: {
    paths: (
      <path d="M12 20.4 5.4 14a4.6 4.6 0 0 1 0-6.6 4.8 4.8 0 0 1 6.6 0 4.8 4.8 0 0 1 6.6 0 4.6 4.6 0 0 1 0 6.6L12 20.4Z" />
    ),
  },
  chat: {
    paths: (
      <>
        <path d="M20.5 11.6c0 4.3-3.8 7.8-8.5 7.8a9.5 9.5 0 0 1-2.9-.45L4 20.5l1.35-4.2a7.4 7.4 0 0 1-1.35-4.7c0-4.3 3.8-7.8 8.5-7.8s8 3.5 8 7.8Z" />
        <path d="M9 11.6h.01M12 11.6h.01M15 11.6h.01" />
      </>
    ),
  },
  paw: {
    filled: true,
    paths: (
      <>
        <ellipse cx="6.1" cy="10.6" rx="2.15" ry="2.85" transform="rotate(-22 6.1 10.6)" />
        <ellipse cx="10.4" cy="7.5" rx="2.25" ry="3.05" transform="rotate(-7 10.4 7.5)" />
        <ellipse cx="15.2" cy="7.9" rx="2.25" ry="3.05" transform="rotate(12 15.2 7.9)" />
        <ellipse cx="19.2" cy="11.3" rx="2.15" ry="2.85" transform="rotate(27 19.2 11.3)" />
        <path d="M12.3 12.4c2.75 0 5.3 2 5.8 4.45.5 2.45-1.1 4.35-3.55 4.35-.95 0-1.55-.2-2.25-.42a2.6 2.6 0 0 0-2 0c-.7.22-1.3.42-2.25.42-2.45 0-4.05-1.9-3.55-4.35.5-2.45 3.05-4.45 5.8-4.45Z" />
      </>
    ),
  },
  pin: {
    paths: (
      <>
        <path d="M12 21.4c3.9-4 6.6-7.3 6.6-10.7a6.6 6.6 0 1 0-13.2 0c0 3.4 2.7 6.7 6.6 10.7Z" />
        <circle cx="12" cy="10.5" r="2.5" />
      </>
    ),
  },
  phone: {
    paths: (
      <path d="M6.3 3h2.9l1.5 3.7-1.9 1.4a11.4 11.4 0 0 0 5.2 5.2l1.4-1.9 3.7 1.5v2.9a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.3 5.2 2 2 0 0 1 6.3 3Z" />
    ),
  },
  clock: {
    paths: (
      <>
        <circle cx="12" cy="12" r="8.6" />
        <path d="M12 7.3V12l3.2 1.9" />
      </>
    ),
  },
  calendar: {
    paths: (
      <>
        <rect x="3.6" y="5.2" width="16.8" height="15.2" rx="3" />
        <path d="M3.6 10h16.8M8.3 3v4.2M15.7 3v4.2" />
      </>
    ),
  },
  star: {
    filled: true,
    paths: (
      <path d="m12 2.6 2.86 5.8 6.4.93-4.63 4.52 1.09 6.38L12 17.22l-5.72 3.01 1.09-6.38L2.74 9.33l6.4-.93L12 2.6Z" />
    ),
  },
  instagram: {
    paths: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" />
        <circle cx="12" cy="12" r="4.1" />
        <path d="M17.1 7h.01" />
      </>
    ),
  },
  whatsapp: {
    filled: true,
    paths: (
      <>
        <path d="M12.04 2.2c-5.42 0-9.83 4.4-9.83 9.83 0 1.73.45 3.42 1.31 4.91L2.1 21.8l4.99-1.31a9.82 9.82 0 0 0 4.95 1.33h.01c5.42 0 9.83-4.41 9.83-9.83a9.77 9.77 0 0 0-2.88-6.95 9.74 9.74 0 0 0-6.95-2.84Zm0 17.99h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.09.81.82-3.01-.19-.31a8.13 8.13 0 0 1-1.25-4.34c0-4.5 3.67-8.17 8.18-8.17a8.16 8.16 0 0 1 8.17 8.18c0 4.5-3.67 8.16-8.17 8.16Z" />
        <path d="M16.53 14.29c-.25-.12-1.46-.72-1.68-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.04-.39-1.99-1.23-.73-.66-1.23-1.46-1.38-1.71-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1.01 2.55c.12.16 1.74 2.65 4.2 3.72.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.16-.47-.28Z" />
      </>
    ),
  },
  arrowRight: {
    paths: <path d="M4.8 12h14.4m-5.6-5.8 5.8 5.8-5.8 5.8" />,
  },
  arrowUpRight: {
    paths: <path d="M7.2 16.8 16.8 7.2M8.6 7.2h8.2v8.2" />,
  },
  directions: {
    paths: <path d="M20.6 3.4 3.9 10.2c-.7.3-.7 1.3.03 1.55l6.4 2.05 2.05 6.4c.25.73 1.25.73 1.55.03L20.6 3.4Z" />,
  },
  menu: {
    paths: <path d="M3.6 7.2h16.8M3.6 12h16.8M3.6 16.8h16.8" />,
  },
  close: {
    paths: <path d="M6 6l12 12M18 6 6 18" />,
  },
  check: {
    paths: <path d="m4.8 12.6 4.6 4.6L19.2 7.4" />,
  },
  mapExpand: {
    paths: (
      <>
        <path d="M3.4 8.6V4.9a1.5 1.5 0 0 1 1.5-1.5h3.7M15.4 3.4h3.7a1.5 1.5 0 0 1 1.5 1.5v3.7M20.6 15.4v3.7a1.5 1.5 0 0 1-1.5 1.5h-3.7M8.6 20.6H4.9a1.5 1.5 0 0 1-1.5-1.5v-3.7" />
      </>
    ),
  },
} satisfies Record<string, IconDefinition>;

export type IconName = keyof typeof icons;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  /** Tamaño en píxeles. Por defecto hereda `1em` del texto contenedor. */
  size?: number | string;
};

export function Icon({ name, size = '1em', ...props }: IconProps) {
  const icon: IconDefinition = icons[name];

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      fill={icon.filled ? 'currentColor' : 'none'}
      stroke={icon.filled ? 'none' : 'currentColor'}
      strokeWidth={icon.filled ? undefined : 1.6}
      strokeLinecap={icon.filled ? undefined : 'round'}
      strokeLinejoin={icon.filled ? undefined : 'round'}
      {...props}
    >
      {icon.paths}
    </svg>
  );
}
