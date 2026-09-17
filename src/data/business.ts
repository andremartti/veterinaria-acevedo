/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  VETERINARIA ACEVEDO — Información del negocio
 * ─────────────────────────────────────────────────────────────────────────────
 *  Este es el ÚNICO archivo que necesitas editar para actualizar los datos que
 *  aparecen en todo el sitio web: teléfono, dirección, redes sociales,
 *  servicios, horarios, fotografías y textos principales.
 *
 *  Todo lo que está marcado con  // ✏️ EDITABLE  puede cambiarse libremente.
 *  Los cambios se reflejan automáticamente en todas las secciones.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { IconName } from '../components/ui/Icon';

/* ── Teléfono ───────────────────────────────────────────────────────────────
 * `display`  → cómo se muestra al visitante.
 * `dial`     → formato internacional para los enlaces `tel:` (sin espacios).
 * `whatsapp` → sólo dígitos, con código de país, para los enlaces de WhatsApp.
 *              Honduras usa el código de país +504 y números de 8 dígitos.
 * ------------------------------------------------------------------------- */
const phone = {
  display: '3168-7926', // ✏️ EDITABLE
  dial: '+50431687926', // ✏️ EDITABLE
  whatsapp: '50431687926', // ✏️ EDITABLE
} as const;

/* ── Mensaje precargado de WhatsApp ─────────────────────────────────────── */
const whatsappMessage =
  'Hola, me gustaría agendar una consulta para mi mascota en Veterinaria Acevedo.'; // ✏️ EDITABLE

export type Service = {
  icon: IconName;
  title: string;
  description: string;
};

export type Advantage = {
  icon: IconName;
  title: string;
  description: string;
};

export const business = {
  /* ── Identidad ─────────────────────────────────────────────────────────── */
  name: 'Veterinaria Acevedo', // ✏️ EDITABLE
  legalName: 'Clínica Veterinaria Acevedo', // ✏️ EDITABLE
  shortName: 'Acevedo',
  tagline: 'Clínica veterinaria en Tegucigalpa', // ✏️ EDITABLE

  /* ── Contacto ──────────────────────────────────────────────────────────── */
  phone,
  telHref: `tel:${phone.dial}`,
  whatsappHref: `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,

  /* ── Redes sociales ────────────────────────────────────────────────────────
   * Perfil de Instagram del negocio. Para cambiarlo basta con actualizar
   * `handle` y `url` (deben coincidir entre sí).
   * ----------------------------------------------------------------------- */
  instagram: {
    handle: '@veterinaria.acevedo.hn', // ✏️ EDITABLE
    url: 'https://www.instagram.com/veterinaria.acevedo.hn/', // ✏️ EDITABLE
  },

  /* ── Ubicación ─────────────────────────────────────────────────────────── */
  address: {
    venue: 'Puma El Sauce, Gastro Plaza', // ✏️ EDITABLE
    city: '11101 Tegucigalpa, Francisco Morazán', // ✏️ EDITABLE
    country: 'Honduras', // ✏️ EDITABLE
    /** Dirección completa en una sola línea (datos estructurados y enlaces). */
    full: 'Puma El Sauce, Gastro Plaza, 11101 Tegucigalpa, Francisco Morazán, Honduras',
    locality: 'Tegucigalpa',
    region: 'Francisco Morazán',
    postalCode: '11101',
    countryCode: 'HN',
  },

  /* ── Google Maps ───────────────────────────────────────────────────────────
   * `placeUrl`      → ficha del negocio en Google (botón «Ver en Google»).
   * `directionsUrl` → abre la navegación paso a paso (botón «Cómo llegar»).
   * `embedUrl`      → mapa interactivo incrustado; se carga sólo cuando el
   *                   visitante lo solicita, para no afectar la velocidad.
   * ----------------------------------------------------------------------- */
  maps: {
    placeUrl:
      'https://www.google.com/maps/place/Veterinaria+Acevedo/data=!4m2!3m1!1s0x0:0xb64fcff11b42e83e', // ✏️ EDITABLE
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Veterinaria+Acevedo%2C+Gastro+Plaza%2C+Tegucigalpa%2C+Honduras', // ✏️ EDITABLE
    embedUrl:
      'https://maps.google.com/maps?q=Veterinaria%20Acevedo%2C%20Gastro%20Plaza%2C%20Tegucigalpa&z=16&output=embed', // ✏️ EDITABLE
  },

  /* ── Reseñas de Google ─────────────────────────────────────────────────────
   * Actualiza estos valores cuando cambie la calificación en Google.
   * ----------------------------------------------------------------------- */
  reviews: {
    rating: 5.0, // ✏️ EDITABLE
    count: 6, // ✏️ EDITABLE
    url: 'https://www.google.com/maps/place/Veterinaria+Acevedo/data=!4m2!3m1!1s0x0:0xb64fcff11b42e83e',
  },

  /* ── Horarios (opcional) ───────────────────────────────────────────────────
   * Cuando la clínica confirme sus horarios, escríbelos aquí y aparecerán
   * automáticamente en la sección de Ubicación y en el pie de página.
   * Ejemplo:
   *   hours: [
   *     { days: 'Lunes a viernes', time: '8:00 a. m. – 5:00 p. m.' },
   *     { days: 'Sábado',          time: '8:00 a. m. – 12:00 m.' },
   *   ],
   * ----------------------------------------------------------------------- */
  hours: [] as { days: string; time: string }[], // ✏️ EDITABLE

  /* ── SEO ───────────────────────────────────────────────────────────────── */
  seo: {
    title: 'Veterinaria Acevedo | Clínica Veterinaria en Tegucigalpa',
    description:
      'Veterinaria Acevedo en Tegucigalpa, Honduras. Atención veterinaria y cuidado para tus mascotas en Puma El Sauce, Gastro Plaza.',
    /** Cambia esto por el dominio real cuando el sitio se publique. */
    siteUrl: 'https://veterinariaacevedo.hn', // ✏️ EDITABLE
  },
} as const;

/* ── Navegación ─────────────────────────────────────────────────────────────
 * Cada entrada enlaza con el `id` de una sección de la página.
 * ------------------------------------------------------------------------- */
export const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
] as const;

/* ── Servicios ──────────────────────────────────────────────────────────────
 * ⚠️  Estas son categorías generales de atención veterinaria, pensadas como
 *     punto de partida. Sustitúyelas por los servicios reales de la clínica.
 *
 *     Para añadir un servicio, copia un bloque completo y edítalo:
 *       { icon: 'stethoscope', title: 'Nombre', description: 'Descripción.' }
 *
 *     Iconos disponibles: 'stethoscope' | 'shield' | 'heart' | 'chat' |
 *     'paw' | 'pin' | 'phone' | 'clock'
 * ------------------------------------------------------------------------- */
export const services: Service[] = [
  {
    icon: 'stethoscope',
    title: 'Consulta veterinaria',
    description:
      'Atención personalizada para perros y gatos, con tiempo para escuchar y revisar con calma a cada paciente.',
  },
  {
    icon: 'shield',
    title: 'Medicina preventiva',
    description:
      'Acompañamiento para mantener la salud de tu mascota y anticiparse a los problemas antes de que aparezcan.',
  },
  {
    icon: 'heart',
    title: 'Bienestar y cuidado',
    description:
      'Un enfoque integral que toma en cuenta la alimentación, el comportamiento y la calidad de vida de tu mascota.',
  },
  {
    icon: 'chat',
    title: 'Orientación para propietarios',
    description:
      'Resolvemos tus dudas y te explicamos cada paso, para que tomes decisiones informadas sobre tu mascota.',
  },
];

/* ── Por qué elegirnos ─────────────────────────────────────────────────────── */
export const advantages: Advantage[] = [
  {
    icon: 'heart',
    title: 'Atención cercana',
    description:
      'Un trato pensado tanto para las mascotas como para sus familias, en un ambiente tranquilo y de confianza.',
  },
  {
    icon: 'paw',
    title: 'Enfoque en bienestar',
    description:
      'Priorizamos el cuidado y el bienestar de los animales en cada consulta y en cada recomendación.',
  },
  {
    icon: 'pin',
    title: 'Ubicación accesible',
    description:
      'Estamos en Gastro Plaza, Puma El Sauce, Tegucigalpa, con fácil acceso y referencia sencilla de encontrar.',
  },
];

/* ── Fotografías ────────────────────────────────────────────────────────────
 * El sitio funciona sin fotografías: mientras `src` esté vacío se muestra una
 * composición gráfica diseñada con los colores de la marca.
 *
 * PARA USAR LAS FOTOS REALES DE LA CLÍNICA:
 *   1. Copia las imágenes dentro de la carpeta `public/images/`.
 *   2. Escribe la ruta en `src`, por ejemplo: src: '/images/fachada.jpg'.
 *   3. Ajusta el texto `alt` describiendo lo que aparece en la foto
 *      (importante para accesibilidad y para Google).
 *
 * Recomendación: fotografías horizontales de al menos 1600 px de ancho para
 * el hero, y cuadradas de 1000 px para el resto.
 * ------------------------------------------------------------------------- */
export type Photo = {
  /** Ruta de la imagen dentro de `public/`. Vacío = se usa la ilustración. */
  src: string;
  /** Descripción de la imagen para lectores de pantalla y buscadores. */
  alt: string;
};

export const photos = {
  hero: {
    src: '', // ✏️ EDITABLE — ej. '/images/hero.jpg'
    alt: `Mascota atendida en ${business.name}, ${business.address.locality}`,
  },
  aboutMain: {
    src: '', // ✏️ EDITABLE — ej. '/images/clinica.jpg'
    alt: `Interior de ${business.name}`,
  },
  aboutSecondary: {
    src: '', // ✏️ EDITABLE — ej. '/images/consulta.jpg'
    alt: 'Momento de consulta veterinaria',
  },
} satisfies Record<string, Photo>;
