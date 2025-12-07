# Fit Access: Sistema de Gestión de Socios para Gimnasios:

Fit Access es un prototipo de aplicación web pensado para gimnasios que necesitan llevar un control más ordenado de sus socios y sus membresías. El objetivo principal es demostrar el diseño de la solución, la arquitectura propuesta y un primer prototipo navegable (v0).

## Descripción general:

El sistema permite:

- Ver una página de inicio con la presentación de Fit Access.
- Consultar un listado de socios del gimnasio.
- Ver el detalle individual de cada socio, incluyendo sus datos básicos y el estado de su membresía.

Aunque en esta versión los datos son estáticos, la interfaz está diseñada para conectarse a un backend y una base de datos SQL definidos en el documento técnico y en el archivo `schema.sql`.

## Prototipo en línea:

Prototipo v0 desplegado:

> https://fit-access-sistema-de-gestion-de-so.vercel.app/


## Tecnologías utilizadas:

- **Framework:** Next.js (React) con TypeScript.
- **Estilos:** Tailwind CSS.
- **Iconos:** Lucide React.
- **Generación inicial de interfaz:** v0.

El backend y la base de datos se encuentran definidos a nivel de diseño, pero no se implementan completamente en esta versión.

## Estructura de pantallas del prototipo:

- **Inicio (`/`):**
  - Presentación e información de Fit Access.
  - Imagen ilustrativa.
  - Botón para ir al módulo de socios.
  - Sección con características principales y estadísticas de ejemplo.

- **Socios (`/socios`):**
  - Tabla con nombre, teléfono y estado de membresía.
  - Distintivos visuales para estados (Activo / Inactivo / Suspendido).
  - Enlace para ver el detalle de cada socio.

- **Detalle de socio (`/socios/[id]`):**
  - Avatar con iniciales del socio.
  - Datos básicos (nombre, teléfono).
  - Estado de la membresía.
  - Tarjetas informativas pensadas para futuras funcionalidades (próximos pasos, notas, etc.).

## Estructura del repositorio:

```text
app/
  page.tsx              # Página de inicio
  socios/
    page.tsx            # Listado de socios
    [id]/
      page.tsx          # Detalle de socio
public/
  gym-hero.jpg          # Imagen del gimnasio usada en Home
schema.sql              # Definición de la base de datos (SQL)
README.md               # Documentación del proyecto
Evaluación Final - Programación Web.pdf      #Documento técnico
