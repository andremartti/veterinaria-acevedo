import { business, photos } from '../data/business';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';
import { Photo } from './ui/Photo';
import { Stars } from './ui/Stars';

const ratingLabel = business.reviews.rating.toFixed(1);

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-sand-50">
      {/* Atmósfera de fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-mint-200/55 blur-3xl motion-safe:animate-float-slow" />
        <div
          className="absolute -right-40 top-24 size-[30rem] rounded-full bg-jade-300/25 blur-3xl motion-safe:animate-float-slow"
          style={{ animationDelay: '-6s' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-sand-100/70" />
      </div>

      <div className="container-page pt-[calc(var(--nav-h)+2.5rem)] pb-20 sm:pt-[calc(var(--nav-h)+4rem)] lg:pb-28 xl:pt-[calc(var(--nav-h)+5.5rem)]">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* ── Columna de contenido ───────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6">
            <p
              className="animate-fade-up inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-forest-900/10 bg-white/70 py-2 pr-4 pl-2.5 text-[0.8125rem] font-semibold text-forest-800 shadow-[var(--shadow-soft)] backdrop-blur-sm"
              style={{ '--reveal-delay': '0ms' } as React.CSSProperties}
            >
              <span className="grid size-6 place-items-center rounded-full bg-forest-800 text-mint-100">
                <Icon name="paw" size={13} />
              </span>
              <span className="whitespace-nowrap">{business.name}</span>
              <span aria-hidden="true" className="hidden text-sand-300 sm:inline">
                ·
              </span>
              <span className="font-medium whitespace-nowrap text-ink-muted">
                {business.address.locality}, Honduras
              </span>
            </p>

            <h1
              className="animate-fade-up mt-7 text-[clamp(2.35rem,6vw,4.15rem)] leading-[1.06] font-semibold text-forest-900"
              style={{ '--reveal-delay': '90ms' } as React.CSSProperties}
            >
              Cuidamos a quienes forman parte de tu familia.
            </h1>

            <p
              className="animate-fade-up mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft sm:text-lg"
              style={{ '--reveal-delay': '180ms' } as React.CSSProperties}
            >
              Atención veterinaria con dedicación, confianza y cariño para el bienestar de tus
              mascotas.
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ '--reveal-delay': '260ms' } as React.CSSProperties}
            >
              <Button href="#contacto" variant="primary" size="lg" icon="calendar">
                Agendar consulta
              </Button>
              <Button
                href={business.maps.directionsUrl}
                variant="outline"
                size="lg"
                icon="directions"
              >
                Cómo llegar
              </Button>
            </div>

            {/* Indicador de confianza */}
            <div
              className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-forest-900/10 pt-7"
              style={{ '--reveal-delay': '340ms' } as React.CSSProperties}
            >
              <div className="flex items-center gap-2.5">
                <Stars rating={business.reviews.rating} size={17} />
                <span className="sr-only">
                  Calificación de {ratingLabel} sobre 5 en Google
                </span>
                <span aria-hidden="true" className="text-[0.9375rem] font-bold text-forest-900">
                  {ratingLabel}
                </span>
              </div>
              <p className="text-[0.9375rem] text-ink-muted">
                en Google ·{' '}
                <span className="font-medium text-ink-soft">
                  {business.reviews.count} opiniones
                </span>
              </p>
            </div>
          </div>

          {/* ── Composición visual ─────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div
              className="animate-fade-up relative mx-auto max-w-[34rem] lg:max-w-none"
              style={{ '--reveal-delay': '220ms' } as React.CSSProperties}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-deep)] sm:aspect-[5/5] lg:aspect-[4/4.6]">
                <Photo photo={photos.hero} tone="deep" seed={0} priority />

                {/* Velo superior: asegura el contraste de la etiqueta */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-forest-950/55 to-transparent"
                />

                <p className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 text-[0.75rem] font-semibold tracking-[0.1em] text-mint-100 uppercase ring-1 ring-white/20 backdrop-blur-md sm:top-7 sm:left-7">
                  <Icon name="stethoscope" size={14} />
                  Perros y gatos
                </p>
              </div>

              {/* Tarjeta flotante: ubicación */}
              <div className="absolute -top-5 right-4 hidden items-center gap-3 rounded-2xl border border-forest-900/8 bg-white/95 px-4 py-3 shadow-[var(--shadow-lift)] backdrop-blur-sm sm:flex lg:-right-5">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-mint-100 text-forest-800">
                  <Icon name="pin" size={18} />
                </span>
                <span className="text-[0.8125rem] leading-tight">
                  <span className="block font-semibold text-forest-900">Gastro Plaza</span>
                  <span className="text-ink-muted">Puma El Sauce</span>
                </span>
              </div>

              {/* Tarjeta flotante: reseñas */}
              <div className="absolute -bottom-5 left-4 flex items-center gap-3.5 rounded-2xl border border-forest-900/8 bg-white/95 px-4 py-3.5 shadow-[var(--shadow-lift)] backdrop-blur-sm sm:px-5 lg:-left-6">
                <span className="font-display text-[1.75rem] leading-none font-semibold text-forest-900">
                  {ratingLabel}
                </span>
                <span className="h-9 w-px bg-sand-200" aria-hidden="true" />
                <span className="leading-tight">
                  <Stars rating={business.reviews.rating} size={13} />
                  <span className="mt-1 block text-[0.75rem] font-medium text-ink-muted">
                    {business.reviews.count} opiniones en Google
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
