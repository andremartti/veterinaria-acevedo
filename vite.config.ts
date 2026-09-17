import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { business } from './src/data/business';

/**
 * Genera las etiquetas de SEO y los datos estructurados a partir de la
 * información del negocio, de modo que editar `src/data/business.ts` baste
 * para mantener todo sincronizado.
 */
function seoTags(): Plugin {
  const { seo, address, reviews, instagram, maps } = business;
  const ogImage = `${seo.siteUrl.replace(/\/$/, '')}/og-image.jpg`;

  /* Sólo se declaran datos verificables del perfil público del negocio. */
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: business.name,
    alternateName: business.legalName,
    description: seo.description,
    url: seo.siteUrl,
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

  return {
    name: 'veterinaria-seo-tags',
    transformIndexHtml(html) {
      return {
        html: html.replace('%SEO_TITLE%', seo.title),
        tags: [
          meta({ name: 'description', content: seo.description }),
          meta({ name: 'robots', content: 'index, follow' }),
          meta({ name: 'author', content: business.name }),
          {
            tag: 'link',
            attrs: { rel: 'canonical', href: seo.siteUrl },
            injectTo: 'head' as const,
          },

          meta({ property: 'og:type', content: 'website' }),
          meta({ property: 'og:site_name', content: business.name }),
          meta({ property: 'og:title', content: seo.title }),
          meta({ property: 'og:description', content: seo.description }),
          meta({ property: 'og:url', content: seo.siteUrl }),
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
  plugins: [react(), tailwindcss(), seoTags()],
  build: {
    target: 'es2020',
    cssMinify: 'lightningcss',
  },
});
