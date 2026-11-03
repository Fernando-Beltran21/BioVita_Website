# BioVita - Landing Page

Repositorio oficial de la landing page para **BioVita**, una bebida funcional lacto-fermentada (estilo Calpis) elaborada a partir del aprovechamiento de lactosuero dulce y pulpas de frutas naturales, desarrollada como proyecto en la UAA.

## Tecnologías
* **Framework:** React (Vite)
* **Estilos:** Tailwind CSS / CSS Modules
* **Control de versiones:** Git & GitHub

---

## Secciones de la Página ( Estructura HTML )

1. **Navbar (`<header>`):** Menú de navegación fijo con enlaces a las secciones y botón de contacto rápido.
2. **Hero (`<section id="hero">`):** Presentación visual de la botella de 350 ml, eslogan principal y botones de acción (CTA).
3. **Beneficios (`<section id="beneficios">`):** Tarjetas con los aportes nutricionales (probióticos, prebióticos, vitaminas, aminoácidos y bajo en azúcar).
4. **Sabores (`<section id="sabores">`):** Selector interactivo para explorar las presentaciones (Guayaba, Mango y Frutos Rojos) y su tabla nutrimental.
5. **Impacto Ambiental (`<section id="impacto">`):** Explicación visual de economía circular, rescate del lactosuero y alineación con los ODS (3, 9 y 12).
6. **Proceso (`<section id="proceso">`):** Línea de tiempo de los 4 pasos de elaboración (Recolección, Fermentación, Saborización y Envasado en frío).
7. **Puntos de Venta y Contacto (`<section id="encuentranos">`):** Mapa/listado de puntos de venta locales (gimnasios, cafeterías y tiendas en Aguascalientes) y formulario para pedidos o distribuidores.
8. **Nosotros, FAQ y Footer (`<section id="faq">` y `<footer>`):** Equipo multidisciplinario, preguntas frecuentes sobre el producto y enlaces a redes sociales (Instagram y TikTok).

---

## División del Trabajo

Para evitar conflictos en Git, el proyecto se divide en 4 módulos independientes:

### 1: Configuración Base, Navbar, Hero y Footer
* Inicialización del proyecto en React y configuración de estilos globales (colores y fuentes).
* Desarrollo de la barra de navegación responsiva (`Navbar.jsx`).
* Desarrollo de la portada principal (`Hero.jsx`) y el pie de página (`Footer.jsx`).

### 2: Producto Interactivo y Beneficios
* Desarrollo de la cuadrícula de propiedades nutricionales (`Benefits.jsx`).
* Desarrollo del catálogo interactivo de sabores (`Flavors.jsx`) usando `useState` para cambiar imágenes, colores e información según la fruta seleccionada.

### 3: Sustentabilidad y Proceso Biotecnológico
* Desarrollo de la sección de economía circular e impacto ambiental (`Impact.jsx`).
* Desarrollo de la línea de tiempo del proceso de elaboración (`Process.jsx`) y presentación breve del equipo (`About.jsx`).

### 4: Puntos de Venta, Contacto y FAQ
* Desarrollo de la sección de ubicaciones donde comprar la bebida (`Locations.jsx`).
* Desarrollo del formulario de contacto/pedidos (`Contact.jsx`) con enlace directo a WhatsApp o correo.
* Desarrollo del acordeón interactivo de preguntas frecuentes (`FAQ.jsx`).

---

## Instalación y ejecución local

1. Clonar el repositorio:
   `git clone <url-del-repositorio>`
2. Instalar dependencias:
   `npm install`
3. Iniciar servidor de desarrollo:
   `npm run dev`
