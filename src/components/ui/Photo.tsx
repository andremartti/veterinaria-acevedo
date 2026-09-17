import { useState } from 'react';
import { BrandPanel } from './BrandPanel';
import type { Photo as PhotoData } from '../../data/business';

type PhotoProps = {
  photo: PhotoData;
  /** Estilo del panel de marca que se muestra si aún no hay fotografía. */
  tone?: 'deep' | 'soft' | 'mint';
  seed?: 0 | 1 | 2;
  /** Motivo del panel de respaldo. */
  mark?: 'paw' | 'none';
  /** Carga inmediata: úsalo sólo en la imagen principal del hero. */
  priority?: boolean;
  className?: string;
};

/**
 * Muestra la fotografía indicada en `src/data/business.ts`. Mientras la clínica
 * no haya cargado sus propias imágenes —o si la ruta no existe— se muestra una
 * composición de marca, de modo que el sitio nunca queda con huecos rotos.
 */
export function Photo({
  photo,
  tone = 'deep',
  seed = 0,
  mark = 'paw',
  priority = false,
  className = '',
}: PhotoProps) {
  const [failed, setFailed] = useState(false);
  const showPanel = !photo.src || failed;

  if (showPanel) {
    return <BrandPanel tone={tone} seed={seed} mark={mark} className={className} />;
  }

  return (
    <img
      src={photo.src}
      alt={photo.alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`.trim()}
    />
  );
}
