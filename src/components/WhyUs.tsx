import { advantages, business } from '../data/business';
import { Button } from './ui/Button';
import { Icon } from './ui/Icon';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

export function WhyUs() {
  return (
    <section
      aria-labelledby="porque-titulo"
      className="grain relative isolate overflow-hidden bg-forest-900 py-24 sm:py-28 lg:py-36"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 size-[32rem] rounded-full bg-jade-600/20 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 size-[28rem] rounded-full bg-forest-600/30 blur-3xl" />
      </div>

      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              id="porque-titulo"
              eyebrow="Por qué elegirnos"
              title="Confianza construida en cada visita"
              lead="Un lugar donde tu mascota recibe atención con calma y donde tú encuentras respuestas claras."
              tone="dark"
            />

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#contacto" variant="onDark" size="lg" icon="calendar">
                  Agendar consulta
                </Button>
                <Button href={business.whatsappHref} variant="onDarkGhost" size="lg" icon="whatsapp">
                  WhatsApp
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {advantages.map((advantage, index) => (
                <Reveal as="li" key={advantage.title} delay={index * 110}>
                  <div className="group/row flex items-start gap-5 py-7 sm:gap-7 sm:py-8">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/8 text-jade-300 ring-1 ring-white/12 transition-colors duration-500 ease-[var(--ease-out-soft)] group-hover/row:bg-jade-500 group-hover/row:text-forest-950 group-hover/row:ring-jade-400/40 sm:size-14">
                      <Icon name={advantage.icon} size={24} />
                    </span>
                    <div>
                      <h3 className="text-[1.1875rem] font-semibold text-sand-50 sm:text-xl">
                        {advantage.title}
                      </h3>
                      <p className="mt-2.5 max-w-lg text-[0.9375rem] leading-relaxed text-mint-200/75">
                        {advantage.description}
                      </p>
                    </div>
                    <span
                      aria-hidden="true"
                      className="font-display ml-auto hidden self-center text-[1.75rem] leading-none font-semibold text-white/12 transition-colors duration-500 ease-[var(--ease-out-soft)] group-hover/row:text-jade-300/50 sm:block"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
