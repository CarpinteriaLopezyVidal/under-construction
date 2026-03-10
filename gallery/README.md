# 📸 Carpeta de Imágenes — Galería

Esta carpeta contiene las imágenes que se muestran en la sección de galería de la web.

## Cómo añadir nuevas fotos

### Método rápido (desde GitHub)

1. Navega a esta carpeta en GitHub: `public/gallery/`
2. Haz clic en **"Add file" → "Upload files"**
3. Arrastra tus fotos (JPG, PNG o WebP)
4. Escribe un mensaje de commit descriptivo (ej: `Añadir fotos cocina proyecto Alicante`)
5. Haz clic en **"Commit changes"**

La web se actualizará automáticamente en pocos minutos gracias al flujo de despliegue automático (GitHub Actions).

---

### Imágenes actuales

Las fotos en esta carpeta (`public/gallery/`) se sirven directamente.
Para activar la optimización automática (WebP, lazy loading), coloca las fotos en `src/assets/gallery/` en su lugar y actualiza el componente `Gallery.astro`.

---

## Formato recomendado

| Aspecto | Recomendación |
|---------|--------------|
| **Formato** | JPG o WebP |
| **Resolución** | Mínimo 1200×800 px |
| **Tamaño** | Máximo 2 MB por imagen |
| **Nombre** | Sin espacios ni caracteres especiales (`cocina-moderna-1.jpg`) |
| **Contenido** | Fotos de trabajos terminados, procesos, materiales, instalaciones |

---

## Actualizar el listado en código

Cuando añadas una imagen nueva, actualiza el array `galleryImages` en:

```
src/components/Gallery.astro
```

Ejemplo:

```js
const galleryImages = [
  { src: '/gallery/nueva-foto.jpg', alt: 'Descripción del trabajo' },
  // ... resto de imágenes
];
```

---

## Imágenes de ejemplo actuales

- `1.jpg` — Trabajo de carpintería
- `2.jpg` — Proyecto personalizado
- `3.jpg` — Acabados en madera
- `4.jpg` — Instalación a medida
- `slide-one.jpg` — Imagen principal hero
- `slide-two.jpg` — Imagen secundaria

---

> 💡 **Consejo**: Las fotos de mejor calidad SEO incluyen trabajos terminados en contexto (instaladas en casa del cliente), proyectos de CNC con detalle, y cocinas completas.
