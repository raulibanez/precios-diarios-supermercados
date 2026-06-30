(function () {
  "use strict";

  const MESES = {
    es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  };

  let lang = localStorage.getItem("lang") || (navigator.language || "es").slice(0, 2);
  if (lang !== "es" && lang !== "en") lang = "es";

  /* Devuelve el valor en el idioma actual: acepta string u objeto {es,en}. */
  function t(val) {
    if (val == null) return "";
    if (typeof val === "object") return val[lang] || val.es || val.en || "";
    return val;
  }

  function ui(key) {
    return I18N[lang][key];
  }

  function fmtFecha(iso) {
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d)) return iso;
    return d.getDate() + " " + MESES[lang][d.getMonth()] + " " + d.getFullYear();
  }

  function diasDesde(iso) {
    const d = new Date(iso + "T00:00:00");
    return Math.floor((new Date() - d) / 86400000);
  }

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }

  function setText(id, text) {
    const node = document.getElementById(id);
    if (node) node.textContent = text;
  }

  function badge(estado) {
    return '<span class="badge ' + estado + '">' + ui("estados")[estado] + "</span>";
  }

  function render() {
    document.documentElement.lang = lang;

    /* Nav / botones de idioma */
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    /* Fondo del hero según idioma (capa clara para legibilidad del texto) */
    const hero = document.querySelector(".hero");
    if (hero) {
      const img = lang === "en" ? "background-EN.png" : "background-ES.png";
      // Velo blanco anclado en PÍXELES desde la derecha: la imagen (apaisada,
      // ~790px de ancho a la altura del hero) queda visible junto al borde
      // derecho y su borde izquierdo siempre cae bajo la zona blanca, sea cual
      // sea el ancho de la ventana. Más un fundido inferior para el corte.
      const fadeX =
        "linear-gradient(to left," +
        " rgba(255,255,255,0) 0px," +
        " rgba(255,255,255,0) 210px," +
        " rgba(255,255,255,0.18) 430px," +
        " rgba(255,255,255,0.72) 660px," +
        " rgba(255,255,255,0.97) 820px," +
        " #ffffff 920px)";
      const fadeY =
        "linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(255,255,255,0.85) 100%)";
      hero.style.backgroundImage = fadeX + ", " + fadeY + ", url('" + img + "')";
    }

    /* Marca */
    setText("brand", ui("brand"));

    /* Hero */
    setText("eyebrow", ui("eyebrow"));
    document.getElementById("hero-title").innerHTML = t(PROYECTO.titulo).replace(", ", ",<br>");
    setText("hero-lead", t(PROYECTO.lema));
    setText("hero-byline", PROYECTO.autor + " · " + t(PROYECTO.lugar));
    setText("cta-timeline", ui("ctaTimeline"));
    const pet = document.getElementById("peticion-link");
    pet.href = PROYECTO.peticion;
    pet.textContent = ui("ctaPeticion");

    /* Stats */
    const sinRespuesta = ACCIONES.filter((a) => a.estado === "sin_respuesta").length;
    const dias = diasDesde(PROYECTO.inicio);
    const anios = (dias / 365).toFixed(1);
    const statsBox = document.getElementById("stats");
    statsBox.innerHTML = "";
    const stats = [
      { num: dias.toLocaleString(lang === "es" ? "es-ES" : "en-GB"), label: ui("statDias") + " (" + anios + " " + ui("statAnios") + ")", cls: "" },
      { num: ACCIONES.length, label: ui("statAcciones"), cls: "accent" },
      { num: sinRespuesta, label: ui("statSinRespuesta"), cls: "danger" },
      { num: PROXIMOS.length, label: ui("statProximos"), cls: "accent" },
    ];
    stats.forEach((s) => {
      const c = el("div", "stat");
      c.appendChild(el("div", "num " + s.cls, String(s.num)));
      c.appendChild(el("div", "label", s.label));
      statsBox.appendChild(c);
    });

    /* Propuesta + beneficios */
    setText("propuesta-titulo", ui("propuestaTitulo"));
    setText("propuesta-texto", ui("propuestaTexto"));
    const benBox = document.getElementById("benefits");
    benBox.innerHTML = "";
    BENEFICIOS.forEach((b) => benBox.appendChild(el("li", "", t(b))));

    /* Cronología */
    setText("cronologia-titulo", ui("cronologiaTitulo"));
    setText("cronologia-sub", ui("cronologiaSub"));
    const tl = document.getElementById("timeline");
    tl.innerHTML = "";
    ACCIONES.forEach((a) => {
      const li = el("li", "tl-item " + a.estado);
      li.appendChild(el("div", "tl-date", fmtFecha(a.fecha) + "  ·  " + badge(a.estado)));
      li.appendChild(el("div", "tl-title", t(a.titulo)));
      if (a.destinatario) li.appendChild(el("div", "tl-dest", t(a.destinatario)));
      li.appendChild(el("p", "tl-summary", t(a.resumen)));
      if (a.enlace) {
        const links = el("div", "tl-links");
        const ext = el("a");
        ext.href = a.enlace;
        ext.target = "_blank";
        ext.rel = "noopener";
        ext.textContent = ui("verEnlace");
        links.appendChild(ext);
        li.appendChild(links);
      }
      tl.appendChild(li);
    });

    /* Tabla de contactos */
    setText("contactos-titulo", ui("contactosTitulo"));
    setText("contactos-sub", ui("contactosSub"));
    setText("th-fecha", ui("thFecha"));
    setText("th-dest", ui("thDestinatario"));
    setText("th-canal", ui("thCanal"));
    setText("th-estado", ui("thEstado"));
    const tbody = document.getElementById("contacts-body");
    tbody.innerHTML = "";
    ACCIONES.forEach((a) => {
      const tr = el("tr");
      tr.appendChild(el("td", "", fmtFecha(a.fecha)));
      tr.appendChild(el("td", "cell-dest", t(a.destinatario)));
      tr.appendChild(el("td", "", t(a.canal)));
      tr.appendChild(el("td", "", badge(a.estado)));
      tbody.appendChild(tr);
    });

    /* Próximos pasos */
    setText("proximos-titulo", ui("proximosTitulo"));
    setText("proximos-sub", ui("proximosSub"));
    const cards = document.getElementById("next-cards");
    cards.innerHTML = "";
    PROXIMOS.forEach((p) => {
      const c = el("div", "card");
      c.appendChild(el("h3", "", t(p.nombre)));
      c.appendChild(el("div", "role", t(p.cargo) + " · " + t(p.institucion)));
      c.appendChild(el("p", "notes", t(p.notas)));
      const meta = el("div", "meta");
      meta.appendChild(el("span", "country", t(p.pais)));
      meta.appendChild(el("span", "", badge(p.estado)));
      c.appendChild(meta);
      cards.appendChild(c);
    });

    /* Footer */
    setText("footer-quote", ui("footerQuote"));
    setText(
      "footer-meta",
      ui("brand") + " · " + ui("actualizado") + " " + fmtFecha(new Date().toISOString().slice(0, 10)) + " · " + PROYECTO.autor
    );
  }

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      localStorage.setItem("lang", lang);
      render();
    });
  });

  render();
})();
