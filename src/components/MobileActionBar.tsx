import { useEffect, useState } from 'react';
import { business } from '../data/business';
import { Icon } from './ui/Icon';

/**
 * Acceso rápido a llamada y WhatsApp en móvil. Aparece una vez que el
 * visitante ha pasado el hero, para no competir con los botones principales.
 */
export function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(0.875rem+env(safe-area-inset-bottom))] transition-[transform,opacity] duration-500 ease-[var(--ease-out-soft)] lg:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-forest-900/10 bg-sand-50/90 p-1.5 shadow-[var(--shadow-lift)] backdrop-blur-xl">
        <a
          href={business.telHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-forest-800 px-4 py-3 text-[0.875rem] font-semibold text-sand-50 transition-colors duration-300 hover:bg-forest-700"
        >
          <Icon name="phone" size={17} />
          Llamar
        </a>
        <a
          href={business.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-jade-600 px-4 py-3 text-[0.875rem] font-semibold text-white transition-colors duration-300 hover:bg-jade-500"
        >
          <Icon name="whatsapp" size={17} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
