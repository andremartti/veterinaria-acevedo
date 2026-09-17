# Veterinaria Acevedo — Sitio web

Sitio web de **Veterinaria Acevedo**, clínica veterinaria ubicada en Puma El Sauce,
Gastro Plaza, Tegucigalpa, Francisco Morazán, Honduras.

Una sola página, en español, construida con React + TypeScript + Tailwind CSS
sobre Vite. Sin dependencias de terceros en tiempo de ejecución: los iconos, las
ilustraciones y las tipografías viven dentro del propio proyecto.

---

## Puesta en marcha

```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo (http://localhost:5173)
npm run build   # compilar para producción -> dist/
npm run preview # revisar la compilación de producción
```

El resultado de `npm run build` es la carpeta `dist/`: son archivos estáticos que
pueden subirse a cualquier alojamiento web (Netlify, Vercel, Cloudflare Pages,
Hostinger, cPanel…).

---

## Editar la información del negocio

**Todo el contenido editable está en un solo archivo:
[`src/data/business.ts`](src/data/business.ts).**

No hace falta tocar los componentes. Ahí se encuentran, marcados con `// ✏️ EDITABLE`:

| Qué se edita | Dónde |
| --- | --- |
| Teléfono, enlaces `tel:` y de WhatsApp | `phone`, `whatsappMessage` |
| Dirección completa | `address` |
| Instagram (usuario y enlace) | `instagram` |
| Enlaces de Google Maps | `maps` |
| Calificación y número de opiniones | `reviews` |
| Horarios de atención | `hours` |
| Tarjetas de servicios | `services` |
| Bloques de «Por qué elegirnos» | `advantages` |
| Fotografías | `photos` |
| Título y descripción para buscadores | `seo` |

### Horarios

`hours` está vacío a propósito, porque la clínica todavía no los ha publicado.
Mientras siga vacío, la sección **Ubicación** muestra una nota invitando a
consultar la disponibilidad por teléfono o WhatsApp. Al llenarlo:

```ts
hours: [
  { days: 'Lunes a viernes', time: '8:00 a. m. – 5:00 p. m.' },
  { days: 'Sábado',          time: '8:00 a. m. – 12:00 m.' },
],
```

…el horario aparece automáticamente, sin tocar nada más.

### Servicios

Las cuatro tarjetas actuales son **categorías generales** de atención
veterinaria, no un catálogo confirmado. Para sustituirlas por los servicios
reales, edita el arreglo `services`:

```ts
{
  icon: 'stethoscope',          // ver iconos disponibles en el comentario del archivo
  title: 'Nombre del servicio',
  description: 'Una o dos líneas describiéndolo.',
},
```

Se pueden añadir o quitar tarjetas libremente: la cuadrícula se reacomoda sola.

### Fotografías

El sitio **funciona sin fotografías**. Mientras `src` esté vacío se dibuja una
composición gráfica con los colores de la marca, así que nunca aparecen imágenes
rotas ni marcos vacíos.

Para usar las fotos reales de la clínica:

1. Copia las imágenes en `public/images/`.
2. Escribe la ruta y una descripción en `photos`, dentro de `src/data/business.ts`:

```ts
hero: {
  src: '/images/fachada.jpg',
  alt: 'Fachada de Veterinaria Acevedo en Gastro Plaza',
},
```

Recomendación: horizontal de 1600 px de ancho o más para el hero; cuadradas de
1000 px para el resto. Si una ruta no existe, el sitio vuelve a mostrar la
composición gráfica en lugar de romperse.

---

## Antes de publicar

1. **Dominio.** Cambia `seo.siteUrl` en `src/data/business.ts` por el dominio
   definitivo. De ahí salen la etiqueta canónica, los datos de Open Graph y la
   dirección de la imagen para compartir en redes.
2. **Instagram.** Verifica que `instagram.handle` y `instagram.url` correspondan
   al perfil vigente de la clínica.
3. **Imagen para compartir.** `public/og-image.jpg` (1200×630) se generó con los
   colores y la tipografía de la marca; puede reemplazarse por una fotografía
   real del mismo tamaño.

---

## Estructura

```
public/
  fonts/            Fraunces y Plus Jakarta Sans (alojadas en el sitio)
  images/           fotografías de la clínica (vacío por ahora)
  favicon.svg       ·  og-image.jpg  ·  robots.txt
src/
  data/business.ts  ← toda la información editable del negocio
  components/
    Navbar  Hero  About  Services  WhyUs  TrustSection
    Location  Contact  Footer  MobileActionBar
    ui/  Button · Icon · Logo · Photo · BrandPanel · MapCard
         SectionHeading · Stars · Reveal
  hooks/useReveal.ts  animaciones de entrada al hacer scroll
  index.css           paleta, tipografía y utilidades del sistema de diseño
vite.config.ts        incluye el plugin que genera el SEO desde business.ts
```

### Decisiones de implementación

- **Una sola fuente de datos.** Las etiquetas `<title>`, la meta descripción,
  Open Graph y los datos estructurados (`VeterinaryCare` de schema.org) se
  generan en tiempo de compilación a partir de `business.ts` mediante el plugin
  `seoTags` de `vite.config.ts`, para que nunca queden desincronizados.
- **Sólo datos verificables.** Los datos estructurados y los textos del sitio
  únicamente declaran información del perfil público del negocio: nombre,
  dirección, teléfono, Instagram y la calificación de Google (5.0 con 6
  opiniones). No se inventan servicios, horarios, personal ni reseñas.
- **Mapa bajo demanda.** La sección Ubicación muestra un mapa ilustrado y sólo
  carga el mapa de Google cuando el visitante pulsa «Ver mapa interactivo»: la
  página abre más rápido y no se cargan recursos de terceros sin necesidad.
- **Tipografías propias.** Fraunces y Plus Jakarta Sans se sirven desde el mismo
  sitio, con precarga, para evitar saltos de texto y peticiones externas.
- **Movimiento moderado.** Las animaciones de entrada usan un único
  `IntersectionObserver` y se desactivan por completo si el sistema tiene
  activada la preferencia «reducir movimiento».
