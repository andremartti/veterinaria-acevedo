/**
 * Antepone la ruta base del sitio a una ruta de la carpeta `public/`.
 *
 * En un dominio propio la base es `/` y la ruta no cambia. Al publicar en una
 * subcarpeta —como hace GitHub Pages con `usuario.github.io/repositorio/`— se
 * añade ese prefijo, de modo que las imágenes sigan encontrándose.
 *
 * Las direcciones completas (`https://…`) y las rutas relativas se devuelven
 * tal cual.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/')) return path;
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path;
}
