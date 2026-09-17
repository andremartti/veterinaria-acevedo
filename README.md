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

El sitio usa tres fotografías reales de la clínica:

| Dónde aparece | Archivo | Contenido |
| --- | --- | --- |
| Hero | `hero-consulta` | Consulta con un cachorro sobre la mesa |
| Nosotros (principal) | `revision-clinica` | Revisión de un perro en la clínica |
| Nosotros (retrato) | `veterinario-retrato` | Retrato del médico veterinario |

De cada una hay dos archivos en `public/images/`: `.webp` (más liviana, la que
usan casi todos los navegadores) y `.jpg` (respaldo). Se prepararon a partir de
los archivos tal como llegaron, que se conservan en la carpeta
`fotos-originales/` del proyecto —fuera de `public/`, así que no se publican—.
A la foto de la clínica se le recortó el marco azul y los rótulos que ya traía
impresos, para no duplicar la marca sobre el diseño del sitio.

**Para cambiar una fotografía:**

1. Copia la nueva imagen en `public/images/`.
2. En `photos`, dentro de `src/data/business.ts`, escribe su ruta en `src` y
   borra las líneas `webp`, `width` y `height` de esa foto (corresponden al
   archivo anterior).
3. Ajusta el texto `alt` describiendo lo que aparece en la imagen.

```ts
hero: {
  src: '/images/fachada.jpg',
  alt: 'Fachada de Veterinaria Acevedo en Gastro Plaza',
},
```

Si dejas `src` vacío —o si la ruta no existe— el sitio dibuja una composición
con los colores de la marca en lugar de mostrar una imagen rota.

---

## Antes de publicar

1. **Dominio.** Cambia `seo.siteUrl` en `src/data/business.ts` por el dominio
   definitivo. De ahí salen la etiqueta canónica, los datos de Open Graph y la
   dirección de la imagen para compartir en redes.
2. **Imagen para compartir.** `public/og-image.jpg` (1200×630) combina la
   fotografía del hero con los colores y la tipografía de la marca. Se puede
   reemplazar por otra imagen del mismo tamaño.

---

## Paleta de color

Los colores de la marca están definidos como variables en `src/index.css`
(bloque `@theme`). Cambiar un valor ahí actualiza todo el sitio.

| Token | Color | Uso |
| --- | --- | --- |
| `navy-900` | `#042C53` | Encabezado, pie de página, bloques oscuros |
| `brand-600` | `#185FA5` | Botones, enlaces y acentos |
| `brand-300` / `mist-300` | `#85B7EB` | Detalles sobre fondo oscuro, fondos suaves |
| `cream-100` | `#F1EFE8` | Fondo general de la página |
| `ink` | `#2C2C2A` | Texto principal |
| `ink-muted` | `#5F5E5A` | Texto secundario |

Los títulos usan el azul marino en lugar del azul principal porque sobre el
fondo claro ofrecen mucho más contraste (13:1 frente a 5,7:1); el azul principal
queda para botones, antetítulos, iconos y enlaces. Los estados de *hover* de los
botones **oscurecen** el fondo en vez de aclararlo, para que el texto blanco
nunca pierda legibilidad.

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
  lib/basePath.ts     resuelve las rutas si el sitio vive en una subcarpeta
vite.config.ts        incluye el plugin que genera el SEO desde business.ts
.github/workflows/
  deploy.yml          publica el sitio en GitHub Pages
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
- **Imágenes.** Cada fotografía se sirve en WebP con respaldo JPG, lleva `width`
  y `height` para que no haya saltos de maquetación, y sólo la del hero se carga
  de inmediato (además se precarga); las demás esperan a estar cerca de la
  pantalla.
- **Contraste verificado.** Se comprobó automáticamente el contraste de todo el
  texto del sitio contra su fondo real: todo cumple el nivel AA de la WCAG.
- **Funciona en subcarpeta.** Las rutas de imágenes, fuentes y recursos se
  resuelven a partir de la base del sitio, de modo que el mismo código sirve
  tanto en un dominio propio como en `usuario.github.io/repositorio/`.
