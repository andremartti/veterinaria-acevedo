import { useCallback, useEffect, useRef, useState } from 'react';
import { business, navLinks } from '../data/business';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';
import { Logo } from './ui/Logo';

/**
 * Barra de navegación fija. Sobre el hero es transparente; al desplazarse (o al
 * abrir el menú) se vuelve azul marino, el color de encabezado de la marca.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#inicio');
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setIsOpen(false), []);
  const isSolid = isScrolled || isOpen;

  /* Fondo sólido en cuanto la página se desplaza */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Resalta el enlace de la sección que se está viendo */
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Cierra el menú con Escape y bloquea el scroll del fondo mientras está abierto */
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        toggleRef.current?.focus();
      }
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, close]);

  /* Cierra el menú al volver a tamaño escritorio */
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, [close]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ease-[var(--ease-out-soft)] ${
        isSolid
          ? 'border-b border-white/10 bg-navy-900/95 shadow-[0_2px_28px_-12px_rgb(2_26_51/0.7)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Navegación principal" className="container-page">
        <div className="flex h-[var(--nav-h)] items-center justify-between gap-6">
          <a
            href="#inicio"
            className="-m-2 rounded-2xl p-2 transition-opacity duration-300 hover:opacity-80"
            aria-label={`${business.name} — Ir al inicio`}
          >
            <Logo tone={isSolid ? 'dark' : 'light'} />
          </a>

          {/* Enlaces — escritorio */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-full px-4 py-2.5 text-[0.9375rem] font-medium transition-colors duration-300 ${
                      isSolid
                        ? isActive
                          ? 'text-white'
                          : 'text-mist-200/85 hover:text-white'
                        : isActive
                          ? 'text-navy-900'
                          : 'text-ink-soft hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-center transition-transform duration-400 ease-[var(--ease-out-soft)] ${
                        isSolid ? 'bg-brand-300' : 'bg-brand-600'
                      } ${isActive ? 'scale-x-100' : 'scale-x-0'}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {/* Los envoltorios controlan la visibilidad: aplicar `hidden` al
                propio botón chocaría con su `display` base. */}
            <span className="hidden md:contents lg:hidden xl:contents">
              <Button
                href={business.telHref}
                variant={isSolid ? 'ghostOnDark' : 'ghost'}
                size="sm"
                icon="phone"
              >
                {business.phone.display}
              </Button>
            </span>
            <span className="hidden sm:contents">
              <Button href="#contacto" variant={isSolid ? 'onDark' : 'primary'} size="sm">
                Agendar consulta
              </Button>
            </span>

            {/* Botón hamburguesa — móvil */}
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="menu-movil"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              className={`grid size-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden ${
                isSolid
                  ? 'border-white/25 bg-white/10 text-white hover:bg-white/20'
                  : 'border-navy-900/12 bg-white/70 text-navy-900 hover:bg-white'
              }`}
            >
              <Icon name={isOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Panel desplegable — móvil */}
      <div
        id="menu-movil"
        inert={!isOpen}
        className={`overflow-hidden border-t border-white/10 bg-navy-900 transition-[max-height,opacity] duration-500 ease-[var(--ease-out-soft)] lg:hidden ${
          isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page py-6">
          <ul className="flex flex-col">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  style={{ transitionDelay: isOpen ? `${80 + index * 45}ms` : '0ms' }}
                  className={`font-display flex items-center justify-between border-b border-white/10 py-4 text-xl font-semibold text-white transition-all duration-500 ease-[var(--ease-out-soft)] ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                >
                  {link.label}
                  <Icon name="arrowUpRight" size={18} className="text-brand-300" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3">
            <Button href="#contacto" onClick={close} variant="onDark" size="lg" icon="calendar">
              Agendar consulta
            </Button>
            <Button href={business.telHref} variant="onDarkGhost" size="lg" icon="phone">
              Llamar: {business.phone.display}
            </Button>
          </div>

          <p className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-mist-200/80">
            <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand-300" />
            <span>
              {business.address.venue}
              <br />
              {business.address.city}
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
