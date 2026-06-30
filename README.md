# Precios diarios de los supermercados · Seguimiento ciudadano

Panel público para hacer seguimiento de la iniciativa que pide **abrir los precios
diarios de los supermercados como datos públicos**, y de todas las acciones,
correos y respuestas (o silencios) obtenidos por el camino.

> "La rendición de cuentas democrática empieza por contestar a los correos."

## Qué es

Una web estática (sin dependencias ni build), **bilingüe ES/EN con selector de idioma**
y **tema claro de alto contraste**, que muestra:

- **Cronología** de cada acción realizada, con su estado (denegado / respondido / sin respuesta).
- **Tabla de contactos** con destinatario, canal y estado.
- **Próximos pasos**: pipeline de objetivos a contactar en Europa.
- Estadísticas automáticas (días desde la petición, nº sin respuesta, etc.).

## Privacidad

Los PDFs de los correos contienen tu **email personal, teléfono y empresa**, por lo que
**no se publican**: están excluidos en `.gitignore` y la web ya **no enlaza** a ellos.
En su lugar, cada acción muestra un resumen en texto. Si algún día quieres usar un PDF
como prueba, sube una versión censurada (sin datos personales) y enlázala manualmente.

## Estructura

```
.
├── index.html          # Estructura de la página
├── assets/
│   ├── styles.css      # Estilos (tema claro, alto contraste)
│   ├── app.js          # Renderizado + lógica de idioma (i18n)
│   └── data.js         # ← AQUÍ se editan los datos y traducciones
├── .gitignore          # Excluye los *.pdf de la publicación
├── *.pdf               # Tus correos (privados, solo en local)
└── README.md
```

## Idiomas

El contenido es bilingüe. En `assets/data.js`, cualquier campo de texto puede ser:

- una cadena simple (igual en ambos idiomas), o
- un objeto `{ es: "...", en: "..." }` para traducir.

Las etiquetas fijas de la interfaz están en el objeto `I18N` del mismo fichero.
El idioma elegido se recuerda en el navegador.

## Cómo actualizarlo

Todo el contenido vive en [`assets/data.js`](assets/data.js):

- **Añadir una acción**: copia un bloque dentro de `ACCIONES` y rellena
  `fecha`, `titulo`, `destinatario`, `estado` y `resumen` (en ES y EN).
- **Cambiar un estado**: edita el campo `estado`
  (`"denegado"`, `"respondido"`, `"sin_respuesta"`).
- **Sumar un objetivo**: añade un bloque a `PROXIMOS`. Cuando le escribas,
  cámbiale el estado y, si quieres dejar constancia, muévelo a `ACCIONES`.

No hay que tocar `app.js` ni `index.html` para el uso normal.

## Cómo verlo en local

Basta con abrir `index.html` en el navegador. Si los enlaces a los PDF no
abrieran por restricciones del navegador, sirve la carpeta con un servidor simple:

```bash
python -m http.server 8000
# luego abre http://localhost:8000
```

## Cómo publicarlo gratis (GitHub Pages)

1. Sube la carpeta a un repositorio de GitHub.
2. *Settings → Pages → Source: Deploy from a branch → `main` / `root`*.
3. En unos minutos tendrás una URL pública que podrás incluir en tus correos
   para que cualquiera vea el historial completo y el silencio recibido.

## Contexto legal que respalda la iniciativa

- **Open Data Directive** (UE 2019/1024): reutilización de información del sector público.
- **Data Act** (Reglamento UE 2023/2854), en particular el acceso y uso de datos.

---

Autor: **Raúl Ibáñez Peral** · Valladolid, España.
