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

  <img width="1366" height="719" alt="image" src="https://github.com/user-attachments/assets/63cb3638-7a94-4b3d-ba44-942dce5769bb" />


El backend y la base de datos se encuentran definidos a nivel de diseño, pero no se implementan completamente en esta versión.

## Estructura de pantallas del prototipo:

- **Inicio (`/`):**
  - Presentación e información de Fit Access.
  - Imagen ilustrativa.
  - Botón para ir al módulo de socios.
  - Sección con características principales y estadísticas de ejemplo.
 
    <img width="1366" height="717" alt="image" src="https://github.com/user-attachments/assets/bc42dd49-6388-4d1e-8f70-66bfafe0f513" />


- **Socios (`/socios`):**
  - Tabla con nombre, teléfono y estado de membresía.
  - Distintivos visuales para estados (Activo / Inactivo / Suspendido).
  - Enlace para ver el detalle de cada socio.

    <img width="1366" height="719" alt="image" src="https://github.com/user-attachments/assets/5a16779a-42e6-4448-b076-08cc096787a6" />


- **Detalle de socio (`/socios/[id]`):**
  - Avatar con iniciales del socio.
  - Datos básicos (nombre, teléfono).
  - Estado de la membresía.
  - Tarjetas informativas pensadas para futuras funcionalidades (próximos pasos, notas, etc.).

    <img width="1366" height="716" alt="image" src="https://github.com/user-attachments/assets/ae6653ce-47c8-4043-af1a-2e9c71107e8c" />


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
