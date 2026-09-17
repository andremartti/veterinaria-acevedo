import { business, navLinks } from '../data/business';
import { Icon } from './ui/Icon';
import { Logo } from './ui/Logo';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="grain relative isolate overflow-hidden bg-navy-900 text-mist-200/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-brand-700/12 blur-3xl"
      />

      {/* El relleno inferior extra evita que la barra de acciones fija en
          móvil se superponga a los últimos enlaces. */}
      <div className="container-page pt-16 pb-28 sm:pt-20 lg:pb-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Marca */}
          <div className="md:col-span-5 lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed">
              {business.legalName}. Atención veterinaria y cuidado integral de mascotas en{' '}
              {business.address.locality}, {business.address.country}.
            </p>

            <a
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 px-4 py-2.5 text-[0.875rem] font-medium text-cream-50 transition-colors duration-300 hover:border-brand-400/50 hover:bg-white/5"
            >
              <Icon name="instagram" size={17} className="text-brand-300" />
              {business.instagram.handle}
            </a>
          </div>

          {/* Navegación */}
          <nav aria-label="Enlaces del pie de página" className="md:col-span-3 lg:col-span-3 lg:col-start-6">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-brand-300 uppercase">
              Navegación
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] transition-colors duration-300 hover:text-cream-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="md:col-span-4 lg:col-span-4">
            <h2 className="text-[0.6875rem] font-bold tracking-[0.18em] text-brand-300 uppercase">
              Datos de contacto
            </h2>
            <ul className="mt-5 space-y-4 text-[0.9375rem]">
              <li className="flex items-start gap-3">
                <Icon name="pin" size={18} className="mt-0.5 shrink-0 text-brand-300/70" />
                <a
                  href={business.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition-colors duration-300 hover:text-cream-50"
                >
                  {business.address.venue}
                  <span className="block">{business.address.city}</span>
                  <span className="block">{business.address.country}</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="phone" size={18} className="shrink-0 text-brand-300/70" />
                <a
                  href={business.telHref}
                  className="transition-colors duration-300 hover:text-cream-50"
                >
                  {business.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="whatsapp" size={18} className="shrink-0 text-brand-300/70" />
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-cream-50"
                >
                  Escribir por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem]">
            © {currentYear} {business.name}. Todos los derechos reservados.
          </p>
          <a
            href="#inicio"
            className="inline-flex items-center gap-2 text-[0.8125rem] font-medium text-cream-50/80 transition-colors duration-300 hover:text-cream-50"
          >
            Volver arriba
            <Icon
              name="arrowUpRight"
              size={15}
              className="transition-transform duration-300 ease-[var(--ease-out-soft)] motion-safe:hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
