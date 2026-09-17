import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { business, photos } from './src/data/business';

/**
 * Subcarpeta desde la que se sirve el sitio. En un dominio propio es `/`;
 * GitHub Pages publica en `/nombre-del-repositorio/`, y el flujo de despliegue
 * (.github/workflows/deploy.yml) pasa ese valor en `BASE_PATH`.
 */
const basePath = `/${(process.env.BASE_PATH || '').replace(/^\/+|\/+$/g, '')}/`.replace(
  '//',
  '/',
);

/** Dirección pública definitiva. `SITE_URL` la sobrescribe al desplegar. */
const siteUrl = (process.env.SITE_URL || business.seo.siteUrl).replace(/\/$/, '');

/**
 * Genera las etiquetas de SEO y los datos estructurados a partir de la
 * información del negocio, de modo que editar `src/data/business.ts` baste
 * para mantener todo sincronizado.
 */
function seoTags(): Plugin {
  const { seo, address, reviews, instagram, maps } = business;
  const ogImage = `${siteUrl}/og-image.jpg`;

  /* Sólo se declaran datos verificables del perfil público del negocio. */
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: business.name,
    alternateName: business.legalName,
    description: seo.description,
    url: siteUrl,
    telephone: business.phone.dial,
    image: ogImage,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.venue,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.countryCode,
    },
    hasMap: maps.placeUrl,
    sameAs: [instagram.url, maps.placeUrl],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviews.rating,
      reviewCount: reviews.count,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const meta = (attrs: Record<string, string>) => ({
    tag: 'meta',
    attrs,
    injectTo: 'head' as const,
  });

  /* La foto del hero es el elemento más grande de la primera pantalla:
     precargarla mejora el tiempo de renderizado percibido. */
  const hero = photos.hero.webp || photos.hero.src;
  const heroPreload = hero ? basePath.replace(/\/$/, '') + hero : '';

  return {
    name: 'veterinaria-seo-tags',
    transformIndexHtml(html) {
      return {
        html: html.replace('%SEO_TITLE%', seo.title),
        tags: [
          ...(heroPreload
            ? [
                {
                  tag: 'link',
                  attrs: {
                    rel: 'preload',
                    as: 'image',
                    href: heroPreload,
                    type: heroPreload.endsWith('.webp') ? 'image/webp' : undefined,
                    fetchpriority: 'high',
                  },
                  injectTo: 'head' as const,
                },
              ]
            : []),
          meta({ name: 'description', content: seo.description }),
          meta({ name: 'robots', content: 'index, follow' }),
          meta({ name: 'author', content: business.name }),
          {
            tag: 'link',
            attrs: { rel: 'canonical', href: siteUrl },
            injectTo: 'head' as const,
          },

          meta({ property: 'og:type', content: 'website' }),
          meta({ property: 'og:site_name', content: business.name }),
          meta({ property: 'og:title', content: seo.title }),
          meta({ property: 'og:description', content: seo.description }),
          meta({ property: 'og:url', content: siteUrl }),
          meta({ property: 'og:locale', content: 'es_HN' }),
          meta({ property: 'og:image', content: ogImage }),
          meta({ property: 'og:image:width', content: '1200' }),
          meta({ property: 'og:image:height', content: '630' }),
          meta({
            property: 'og:image:alt',
            content: `${business.name} — ${business.tagline}`,
          }),

          meta({ name: 'twitter:card', content: 'summary_large_image' }),
          meta({ name: 'twitter:title', content: seo.title }),
          meta({ name: 'twitter:description', content: seo.description }),
          meta({ name: 'twitter:image', content: ogImage }),

          {
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: JSON.stringify(structuredData),
            injectTo: 'head' as const,
          },
        ],
      };
    },
  };
}

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), seoTags()],
  build: {
    target: 'es2020',
    cssMinify: 'lightningcss',
  },
});
