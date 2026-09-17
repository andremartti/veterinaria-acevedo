import { services } from '../data/business';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function Services() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className="bg-mint-50 py-24 sm:py-28 lg:py-36"
    >
      <div className="container-page">
        <SectionHeading
          id="servicios-titulo"
          eyebrow="Servicios"
          title="Atención veterinaria pensada en cada etapa"
          lead="Acompañamos la salud de tu mascota con un enfoque integral y cercano, adaptado a lo que cada familia necesita."
          align="center"
        />

        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90} className="h-full">
              <article className="group/card relative h-full overflow-hidden rounded-[1.5rem] border border-forest-900/8 bg-white p-7 transition-[transform,box-shadow,border-color] duration-500 ease-[var(--ease-out-soft)] hover:border-jade-400/45 hover:shadow-[var(--shadow-lift)] motion-safe:hover:-translate-y-1.5">
                {/* Halo que aparece suavemente al pasar el cursor */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-mint-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100"
                />

                <span className="relative grid size-13 place-items-center rounded-[1.1rem] bg-mint-100 text-forest-800 transition-colors duration-500 ease-[var(--ease-out-soft)] group-hover/card:bg-forest-800 group-hover/card:text-mint-100">
                  <Icon name={service.icon} size={24} />
                </span>

                <h3 className="relative mt-6 text-[1.1875rem] leading-snug font-semibold text-forest-900">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mt-12 flex flex-col items-center gap-5 rounded-[1.5rem] border border-forest-900/8 bg-white/70 px-6 py-8 text-center sm:mt-14 sm:flex-row sm:justify-between sm:gap-8 sm:px-9 sm:text-left">
            <p className="max-w-xl text-[0.9375rem] leading-relaxed text-ink-soft">
              Estas son categorías generales de atención.{' '}
              <span className="font-semibold text-forest-900">
                Escríbenos para confirmar los servicios disponibles
              </span>{' '}
              y resolver cualquier duda sobre tu mascota.
            </p>
            <Button href="#contacto" variant="primary" size="md" icon="arrowRight" iconAfter animateIcon>
              Contactar
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
