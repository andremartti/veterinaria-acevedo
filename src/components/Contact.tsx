import { business } from '../data/business';
import { Button } from './ui/Button';
import { Icon, type IconName } from './ui/Icon';
import { Reveal } from './ui/Reveal';

type ContactItem = {
  icon: IconName;
  label: string;
  value: string;
  detail?: string;
  href?: string;
};

const contactItems: ContactItem[] = [
  {
    icon: 'phone',
    label: 'Teléfono',
    value: business.phone.display,
    detail: 'Llamadas y WhatsApp',
    href: business.telHref,
  },
  {
    icon: 'instagram',
    label: 'Instagram',
    value: business.instagram.handle,
    detail: 'Novedades de la clínica',
    href: business.instagram.url,
  },
  {
    icon: 'pin',
    label: 'Ubicación',
    value: business.address.venue,
    detail: `${business.address.locality}, ${business.address.country}`,
    href: business.maps.directionsUrl,
  },
];

export function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="bg-mist-50 py-24 sm:py-28 lg:py-32"
    >
      <div className="container-page">
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-[2rem] bg-navy-900 px-7 py-12 shadow-[var(--shadow-deep)] sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-32 -left-24 size-[30rem] rounded-full bg-brand-600/25 blur-3xl" />
              <div className="absolute -right-24 -bottom-40 size-[26rem] rounded-full bg-brand-400/12 blur-3xl" />
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
              {/* ── Llamado a la acción ────────────────────────────────── */}
              <div>
                <p className="flex items-center gap-2.5 text-[0.6875rem] font-bold tracking-[0.18em] text-brand-300 uppercase">
                  <span aria-hidden="true" className="h-px w-6 bg-brand-300/50" />
                  Contacto
                </p>

                <h2
                  id="contacto-titulo"
                  className="mt-4 text-[clamp(1.85rem,4.4vw,2.85rem)] leading-[1.12] font-semibold text-cream-50"
                >
                  ¿Necesitas atención para tu mascota?
                </h2>

                <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-mist-200/80">
                  Contáctanos para conocer disponibilidad y agendar una consulta.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href={business.telHref} variant="onDark" size="lg" icon="phone">
                    Llamar ahora
                  </Button>
                  <Button href={business.whatsappHref} variant="accent" size="lg" icon="whatsapp">
                    WhatsApp
                  </Button>
                  <Button
                    href={business.instagram.url}
                    variant="onDarkGhost"
                    size="lg"
                    icon="instagram"
                    aria-label={`Instagram: ${business.instagram.handle}`}
                  >
                    Instagram
                  </Button>
                </div>
              </div>

              {/* ── Datos de contacto ──────────────────────────────────── */}
              <div className="min-w-0 rounded-[1.5rem] border border-white/12 bg-white/5 p-5 backdrop-blur-sm sm:p-8">
                <ul className="divide-y divide-white/10">
                  {contactItems.map((item) => {
                    const isExternal = item.href ? /^https?:/.test(item.href) : false;
                    const content = (
                      <>
                        <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white/10 text-brand-300 ring-1 ring-white/12 transition-colors duration-400 ease-[var(--ease-out-soft)] group-hover/item:bg-brand-500 group-hover/item:text-navy-950 sm:size-11">
                          <Icon name={item.icon} size={20} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[0.6875rem] font-bold tracking-[0.16em] text-mist-200/75 uppercase">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-[0.9375rem] font-medium break-words text-cream-50 sm:text-[1.0625rem]">
                            {item.value}
                          </span>
                          {item.detail ? (
                            <span className="mt-0.5 block text-[0.8125rem] text-mist-200/75">
                              {item.detail}
                            </span>
                          ) : null}
                        </span>
                        {item.href ? (
                          <Icon
                            name="arrowUpRight"
                            size={18}
                            className="mt-1 shrink-0 self-start text-white/25 transition-[color,transform] duration-400 ease-[var(--ease-out-soft)] group-hover/item:text-brand-300 motion-safe:group-hover/item:-translate-y-0.5"
                          />
                        ) : null}
                      </>
                    );

                    return (
                      <li key={item.label} className="first:pt-0 last:pb-0">
                        {item.href ? (
                          <a
                            href={item.href}
                            {...(isExternal
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : null)}
                            className="group/item -mx-2 flex items-start gap-3.5 rounded-2xl px-2 py-5 transition-colors duration-300 hover:bg-white/5 sm:gap-4"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-start gap-3.5 py-5 sm:gap-4">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
