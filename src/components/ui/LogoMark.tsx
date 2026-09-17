import { useId } from 'react';

type LogoMarkProps = {
  /**
   * `true` dibuja el sello completo, con «VETERINARIA ACEVEDO» rodeando la
   * pata. Por debajo de unos 90 px ese texto deja de leerse, así que en la
   * barra de navegación conviene `false`.
   */
  withText?: boolean;
  className?: string;
};

/**
 * Logotipo de la clínica, redibujado en vector a partir del original.
 * El tubo del estetoscopio traza el contorno de la almohadilla, igual que en
 * la marca real. Al ser vectorial se ve nítido en cualquier tamaño.
 *
 * Toma el color del texto que lo contiene (`currentColor`), de modo que sirve
 * tanto en azul sobre fondo claro como en blanco sobre fondo oscuro.
 */
export function LogoMark({ withText = true, className = '' }: LogoMarkProps) {
  const arcId = `arco-${useId().replace(/:/g, '')}`;

  return (
    <svg
      /* Sin el texto se recorta al anillo interior, para que la pata llene el
         encuadre sin tener que reescalarla. */
      viewBox={withText ? '0 0 200 200' : '40 40 120 120'}
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {withText ? (
        <>
          <defs>
            <path id={arcId} d="M 32.3 124.6 A 72 72 0 1 1 167.7 124.6" fill="none" />
          </defs>
          <circle cx="100" cy="100" r="92" strokeWidth="6" />
          <text
            fontFamily="'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"
            fontSize="14.2"
            fontWeight="700"
            letterSpacing="0.3"
            fill="currentColor"
            stroke="none"
          >
            <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
              VETERINARIA ACEVEDO
            </textPath>
          </text>
        </>
      ) : null}

      <circle cx="100" cy="100" r="56" strokeWidth="7" />

      <g>
        {/* Dedos */}
        <g fill="currentColor" stroke="none">
          <ellipse cx="75.6" cy="80.2" rx="8.7" ry="12.8" transform="rotate(-30 75.6 80.2)" />
          <ellipse cx="90.9" cy="67" rx="8.9" ry="14.2" transform="rotate(-10 90.9 67)" />
          <ellipse cx="109.1" cy="67" rx="8.9" ry="14.2" transform="rotate(10 109.1 67)" />
          <ellipse cx="124.4" cy="80.2" rx="8.7" ry="12.8" transform="rotate(30 124.4 80.2)" />
        </g>

        {/* Estetoscopio: su tubo dibuja el contorno de la almohadilla */}
        <g strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M92.9 89C84 95 73 103 72 112 71 122 77 130 85 127 91 125 96 124 100 121 104 124 109 125 115 127 123 130 129 122 128 112 127 103 116 95 107.1 88" />
          <path d="M100 126C103 140 112 150 122 148 130 146 135.5 140 135.5 135" />
        </g>
        <g fill="currentColor" stroke="none">
          <circle cx="92.9" cy="89" r="4.8" />
          <circle cx="107.1" cy="88" r="4.8" />
        </g>
        <circle cx="135.5" cy="129.5" r="5.6" strokeWidth="4.2" />
      </g>
    </svg>
  );
}
