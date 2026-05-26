# Portafolio — Yerson Rojas Vilca

Portafolio web personal desarrollado con HTML, CSS y JavaScript vanilla, desplegado con Docker y NGINX.

## Tecnologías

- **Frontend:** HTML5, CSS3, JavaScript (ES6)
- **Servidor:** NGINX Alpine
- **Contenedor:** Docker + Docker Compose
- **Tipografía:** DM Sans + Space Mono (Google Fonts)
- **Iconos:** Font Awesome 6

## Estructura del proyecto

```
portafolio/
├── index.html
├── 404.html
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   ├── img/
│   │   ├── yo.png
│   │   └── certificados/
│   └── pdf/certificados/
├── docker/
│   ├── Dockerfile
│   └── nginx.conf
├── docker-compose.yml
└── README.md
```

## Cómo levantar el proyecto

### Con Docker (recomendado)

```bash
docker compose up --build
```

Luego abrir: [http://localhost:8080](http://localhost:8080)

### Sin Docker (desarrollo local)

Abrir `index.html` directamente en el navegador, o usar cualquier servidor local:

```bash
# Con Python
python -m http.server 8080

# Con Node
npx serve .
```

## Funcionalidades

- Navbar sticky con scroll spy
- Scroll suave entre secciones
- Botón "volver arriba"
- Galería de certificados con filtros por categoría
- Menú responsive (hamburguesa)
- Animaciones al scroll con IntersectionObserver
- 20 certificados con enlaces a PDF
- Footer con redes sociales

## Autor

**Yerson Rojas Vilca**  
Ingeniería de Sistemas — UNHEVAL  
[zyersonrojasvilca7z@gmail.com](mailto:zyersonrojasvilca7z@gmail.com)
