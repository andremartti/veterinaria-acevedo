import { business } from '../data/business';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';
import { MapCard } from './ui/MapCard';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function Location() {
  const hasHours = business.hours.length > 0;

  return (
    <section
      id="ubicacion"
      aria-labelledby="ubicacion-titulo"
      className="bg-white py-24 sm:py-28 lg:py-36"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          {/* ── Datos de la ubicación ──────────────────────────────────── */}
          <div className="lg:col-span-5">
            <SectionHeading
              id="ubicacion-titulo"
              eyebrow="Ubicación"
              title="Visítanos"
              lead="Estamos en Gastro Plaza, dentro de Puma El Sauce, con una referencia fácil de encontrar en Tegucigalpa."
            />

            <Reveal delay={200}>
              <address className="mt-10 not-italic">
                <div className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-mint-100 text-forest-800">
                    <Icon name="pin" size={20} />
                  </span>
                  <div>
                    <p className="text-[0.6875rem] font-bold tracking-[0.16em] text-ink-muted uppercase">
                      Dirección
                    </p>
                    <p className="mt-1.5 text-[1.0625rem] leading-relaxed font-medium text-forest-900">
                      {business.address.venue}
                      <span className="block font-normal text-ink-soft">{business.address.city}</span>
                      <span className="block font-normal text-ink-soft">{business.address.country}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-4 border-t border-sand-200 pt-7">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-mint-100 text-forest-800">
                    <Icon name="phone" size={20} />
                  </span>
                  <div>
                    <p className="text-[0.6875rem] font-bold tracking-[0.16em] text-ink-muted uppercase">
                      Teléfono
                    </p>
                    <a
                      href={business.telHref}
                      className="mt-1.5 inline-block text-[1.0625rem] font-medium text-forest-900 transition-colors duration-300 hover:text-jade-600"
                    >
                      {business.phone.display}
                    </a>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-4 border-t border-sand-200 pt-7">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-mint-100 text-forest-800">
                    <Icon name="clock" size={20} />
                  </span>
                  <div>
                    <p className="text-[0.6875rem] font-bold tracking-[0.16em] text-ink-muted uppercase">
                      Horario
                    </p>
                    {hasHours ? (
                      <ul className="mt-1.5 space-y-1">
                        {business.hours.map((entry) => (
                          <li key={entry.days} className="text-[0.9375rem] text-ink-soft">
                            <span className="font-medium text-forest-900">{entry.days}:</span>{' '}
                            {entry.time}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-1.5 max-w-xs text-[0.9375rem] leading-relaxed text-ink-soft">
                        Comunícate por teléfono o WhatsApp para confirmar la disponibilidad de
                        atención.
                      </p>
                    )}
                  </div>
                </div>
              </address>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={business.maps.directionsUrl}
                  variant="primary"
                  size="lg"
                  icon="directions"
                >
                  Cómo llegar
                </Button>
                <Button href={business.telHref} variant="outline" size="lg" icon="phone">
                  Llamar: {business.phone.display}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ── Mapa ───────────────────────────────────────────────────── */}
          <Reveal delay={120} className="lg:col-span-7">
            <MapCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
