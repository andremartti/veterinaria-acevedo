import type { ElementType, ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Retraso en milisegundos, para escalonar grupos de tarjetas. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/** Envoltorio que anima la entrada de su contenido al hacer scroll. */
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }: RevealProps) {
  return (
    <Tag
      className={`reveal ${className}`.trim()}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
