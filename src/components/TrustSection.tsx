import { business } from '../data/business';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { Stars } from './ui/Stars';

const ratingLabel = business.reviews.rating.toFixed(1);

/** Resumen de la valoración pública del negocio en Google. */
export function TrustSection() {
  return (
    <section aria-labelledby="opiniones-titulo" className="bg-sand-50 py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-forest-900/8 bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 -right-20 size-72 rounded-full bg-mint-100 blur-3xl"
            />

            <div className="relative flex flex-col gap-9 lg:flex-row lg:items-center lg:gap-12">
              {/* Calificación */}
              <div className="flex shrink-0 items-center gap-5">
                <p className="font-display text-[3.5rem] leading-none font-semibold text-forest-900 sm:text-[4.25rem]">
                  {ratingLabel}
                </p>
                <div>
                  <Stars rating={business.reviews.rating} size={19} />
                  <p className="mt-2 text-[0.875rem] font-medium text-ink-muted">
                    {business.reviews.count} opiniones
                    <span className="block sm:inline"> en Google</span>
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="hidden h-24 w-px shrink-0 bg-sand-200 lg:block"
              />

              <div className="min-w-0 flex-1">
                <h2
                  id="opiniones-titulo"
                  className="text-[clamp(1.4rem,2.6vw,1.9rem)] leading-snug font-semibold text-forest-900"
                >
                  Calificación de {ratingLabel} estrellas en Google
                </h2>
                <p className="mt-3 max-w-lg text-[0.9375rem] leading-relaxed text-ink-soft">
                  La valoración proviene del perfil público de {business.name} en Google. Puedes
                  leer las opiniones completas y dejar la tuya después de tu visita.
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  href={business.reviews.url}
                  variant="primary"
                  size="lg"
                  icon="arrowUpRight"
                  iconAfter
                  className="w-full sm:w-auto"
                >
                  Ver en Google
                </Button>
              </div>
            </div>

            <p className="relative mt-8 flex items-center gap-2 border-t border-sand-200 pt-6 text-[0.8125rem] text-ink-muted">
              <Icon name="star" size={14} className="shrink-0 text-amber-500" />
              Información tomada del perfil de Google del negocio.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
