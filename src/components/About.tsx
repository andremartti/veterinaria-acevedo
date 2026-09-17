import { business, photos } from '../data/business';
import { Icon } from './ui/Icon';
import { Photo } from './ui/Photo';
import { Reveal } from './ui/Reveal';
import { SectionHeading } from './ui/SectionHeading';

const highlights = [
  'Atención para perros y gatos',
  'Cuidado integral de mascotas',
  'Explicaciones claras en cada paso',
];

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-titulo" className="bg-white py-24 sm:py-28 lg:py-36">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* ── Composición de imágenes ────────────────────────────────── */}
          <Reveal className="order-last lg:order-first">
            <div className="relative mb-14 sm:mb-16 lg:mb-20">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)] sm:aspect-[5/4.6] lg:aspect-[4/4.4]">
                <Photo photo={photos.aboutMain} tone="mint" seed={1} />
              </div>

              <div className="absolute right-3 -bottom-12 aspect-square w-36 overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-lift)] ring-8 ring-white sm:-right-5 sm:-bottom-14 sm:w-52">
                <Photo photo={photos.aboutSecondary} tone="deep" seed={2} mark="none" />
              </div>

              <div className="absolute -top-5 left-3 flex items-center gap-3 rounded-2xl border border-forest-900/8 bg-white px-4 py-3 shadow-[var(--shadow-lift)] sm:-left-6">
                <span className="grid size-9 place-items-center rounded-xl bg-forest-800 text-mint-100">
                  <Icon name="heart" size={18} />
                </span>
                <span className="text-[0.8125rem] leading-tight font-semibold text-forest-900">
                  Bienestar animal
                  <span className="block font-medium text-ink-muted">Atención cercana</span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── Texto ──────────────────────────────────────────────────── */}
          <div>
            <SectionHeading
              id="nosotros-titulo"
              eyebrow="Nosotros"
              title="El bienestar de tu mascota es nuestra prioridad"
              lead={
                <>
                  En {business.name} buscamos brindar una atención cercana y profesional, creando un
                  espacio donde las mascotas y sus familias se sientan acompañadas.
                </>
              }
            />

            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-ink-soft">
                Cada consulta comienza por escuchar. Conocer los hábitos, el carácter y la historia
                de cada mascota nos permite acompañar mejor a quienes la cuidan y tomar decisiones
                pensadas para su bienestar.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <ul className="mt-9 grid gap-3.5">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3.5">
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-mint-100 text-jade-700">
                      <Icon name="check" size={14} strokeWidth={2.4} />
                    </span>
                    <span className="text-[0.9375rem] font-medium text-forest-900">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-10 flex items-start gap-4 rounded-[1.25rem] border border-sand-200 bg-sand-50 p-5 sm:p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-jade-700 shadow-[var(--shadow-soft)]">
                  <Icon name="pin" size={19} />
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-ink-soft">
                  Nos encontrarás en{' '}
                  <span className="font-semibold text-forest-900">{business.address.venue}</span>,{' '}
                  {business.address.locality}. Escríbenos o llámanos para conocer la disponibilidad
                  de consultas.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
