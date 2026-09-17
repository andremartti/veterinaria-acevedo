import { useCallback, useEffect, useRef, useState } from 'react';
import { business, navLinks } from '../data/business';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';
import { Logo } from './ui/Logo';

/** Barra de navegación fija, con menú desplegable en móvil y sección activa. */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#inicio');
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  /* Sombra y fondo sólido en cuanto la página se desplaza */
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
        isScrolled || isOpen
          ? 'border-b border-forest-900/8 bg-sand-50/85 shadow-[0_1px_24px_-12px_rgb(20_32_27/0.35)] backdrop-blur-xl'
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
            <Logo />
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
                      isActive ? 'text-forest-900' : 'text-ink-soft hover:text-forest-900'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-center bg-jade-600 transition-transform duration-400 ease-[var(--ease-out-soft)] ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
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
              <Button href={business.telHref} variant="ghost" size="sm" icon="phone">
                {business.phone.display}
              </Button>
            </span>
            <span className="hidden sm:contents">
              <Button href="#contacto" variant="primary" size="sm">
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
              className="relative grid size-11 place-items-center rounded-full border border-forest-900/12 bg-white/70 text-forest-900 transition-colors duration-300 hover:bg-white lg:hidden"
            >
              <Icon
                name={isOpen ? 'close' : 'menu'}
                size={20}
                className="transition-transform duration-300 ease-[var(--ease-out-soft)]"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Panel desplegable — móvil */}
      <div
        id="menu-movil"
        ref={panelRef}
        inert={!isOpen}
        className={`overflow-hidden border-t border-forest-900/8 bg-sand-50 transition-[max-height,opacity] duration-500 ease-[var(--ease-out-soft)] lg:hidden ${
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
                  className={`flex items-center justify-between border-b border-forest-900/8 py-4 font-display text-xl font-semibold text-forest-900 transition-all duration-500 ease-[var(--ease-out-soft)] ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                >
                  {link.label}
                  <Icon name="arrowUpRight" size={18} className="text-jade-600" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3">
            <Button href="#contacto" onClick={close} variant="primary" size="lg" icon="calendar">
              Agendar consulta
            </Button>
            <Button href={business.telHref} variant="outline" size="lg" icon="phone">
              Llamar: {business.phone.display}
            </Button>
          </div>

          <p className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-ink-muted">
            <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-jade-600" />
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
