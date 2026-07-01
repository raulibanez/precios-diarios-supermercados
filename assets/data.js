/*
 * Datos del proyecto (bilingüe ES/EN).
 *
 * Los campos de texto pueden ser:
 *   - una cadena simple (se usa igual en los dos idiomas), o
 *   - un objeto { es: "...", en: "..." } para traducir.
 *
 * Estados posibles:
 *   "denegado"      -> respondieron pero rechazaron / no viable
 *   "respondido"    -> hubo respuesta (acuse o contenido)
 *   "sin_respuesta" -> enviado, sin contestación
 *   "pendiente"     -> aún no contactado (solo en próximos pasos)
 */

const PROYECTO = {
  titulo: {
    es: "Precios diarios de los supermercados, abiertos a la ciudadanía",
    en: "Daily supermarket prices, open to citizens",
  },
  lema: {
    es: "Datos de precios de alimentación como infraestructura pública.",
    en: "Food price data as public infrastructure.",
  },
  autor: "Raúl Ibáñez Peral",
  lugar: { es: "Valladolid, España", en: "Valladolid, Spain" },
  // Fecha de la primera acción (inicio de la cuenta atrás del silencio)
  inicio: "2023-03-31",
  peticion:
    "https://datos.gob.es/es/solicitud-de-datos/precios-diarios-actualizados-de-los-supermercados",
};

/* Cronología de acciones realizadas (orden cronológico). */
const ACCIONES = [
  {
    fecha: "2023-03-31",
    titulo: {
      es: "Petición oficial de datos en datos.gob.es",
      en: "Official data request on datos.gob.es",
    },
    canal: { es: "Portal datos.gob.es", en: "datos.gob.es portal" },
    destinatario: {
      es: "Min. Transformación Digital / Consumo",
      en: "Ministry of Digital Transformation / Consumer Affairs",
    },
    estado: "denegado",
    resumen: {
      es: "Solicitud de publicación diaria de precios de supermercados con atributos detallados (producto, EAN, precio, IVA, descuento, etc.). Respondida como 'No viable': no entra en las competencias del Ministerio de Consumo. Me derivan al Observatorio de Precios del Ministerio de Agricultura.",
      en: "Request to publish daily supermarket prices with detailed attributes (product, EAN, price, VAT, discount, etc.). Answered as 'Not viable': outside the remit of the Ministry of Consumer Affairs. Redirected to the Price Observatory of the Ministry of Agriculture.",
    },
    enlace:
      "https://datos.gob.es/es/solicitud-de-datos/precios-diarios-actualizados-de-los-supermercados",
  },
  {
    fecha: "2024-02-14",
    titulo: {
      es: "Formulario de contacto al Ministerio de Agricultura",
      en: "Contact form to the Ministry of Agriculture",
    },
    canal: { es: "Formulario web MAPA", en: "MAPA web form" },
    destinatario: { es: "Min. de Agricultura (MAPA)", en: "Ministry of Agriculture (MAPA)" },
    estado: "respondido",
    resumen: {
      es: "Reenvío de la propuesta al MAPA a través del formulario de la Oficina de Información y Atención a la Ciudadanía.",
      en: "Forwarded the proposal to MAPA through the Citizen Information Office web form.",
    },
    enlace: "",
  },
  {
    fecha: "2024-02-15",
    titulo: {
      es: "Acuse de recibo del MAPA",
      en: "Acknowledgement from MAPA",
    },
    canal: "Email",
    destinatario: {
      es: "Oficina de Atención a la Ciudadanía (MAPA)",
      en: "Citizen Information Office (MAPA)",
    },
    estado: "respondido",
    resumen: {
      es: "Confirman tramitación de la consulta y anuncian respuesta. En la práctica, me orientan hacia el Observatorio de la Cadena Alimentaria.",
      en: "They confirm the query is being processed and promise a reply. In practice, they point me to the Food Chain Observatory.",
    },
    enlace: "",
  },
  {
    fecha: "2024-03-12",
    titulo: {
      es: "Email al Observatorio de la Cadena Alimentaria",
      en: "Email to the Food Chain Observatory",
    },
    canal: "Email",
    destinatario: {
      es: "Observatorio de la Cadena Alimentaria (MAPA)",
      en: "Food Chain Observatory (MAPA)",
    },
    estado: "sin_respuesta",
    resumen: {
      es: "Propuesta completa de plataforma pública de precios diarios. Nunca obtuve respuesta.",
      en: "Full proposal for a public daily-price platform. Never got a reply.",
    },
    enlace: "",
  },
  {
    fecha: "2024-06-14",
    titulo: {
      es: "Carta a Josep Borrell (Comisión Europea)",
      en: "Letter to Josep Borrell (European Commission)",
    },
    canal: "Email",
    destinatario: { es: "Josep Borrell — Gabinete", en: "Josep Borrell — Cabinet" },
    estado: "sin_respuesta",
    resumen: {
      es: "Llevo la propuesta a nivel europeo: arquitectura de datos común para todos los Estados miembros. Sin respuesta.",
      en: "Took the proposal to the European level: a common data architecture for all member states. No reply.",
    },
    enlace: "",
  },
  {
    fecha: "2025-11-27",
    titulo: {
      es: "Petición a la eurodiputada Anna Cavazzini",
      en: "Request to MEP Anna Cavazzini",
    },
    canal: "Email",
    destinatario: {
      es: "Anna Cavazzini (MEP, comisión IMCO)",
      en: "Anna Cavazzini (MEP, IMCO committee)",
    },
    estado: "sin_respuesta",
    resumen: {
      es: "Propuesta enmarcada en el Data Act (Art. 5) y la Open Data Directive. IMCO es la comisión competente en consumo y mercado interior. Sin respuesta.",
      en: "Proposal framed under the Data Act (Art. 5) and the Open Data Directive. IMCO is the competent committee on consumer and internal-market affairs. No reply.",
    },
    enlace: "",
  },
  {
    fecha: "2025-12-31",
    titulo: {
      es: "Seguimiento a Anna Cavazzini",
      en: "Follow-up to Anna Cavazzini",
    },
    canal: "Email",
    destinatario: "Anna Cavazzini (MEP)",
    estado: "sin_respuesta",
    resumen: {
      es: "Pregunto qué eurodiputado o institución sería más receptivo para impulsar la idea. Sin respuesta.",
      en: "Asked which MEP or institution would be most receptive to champion the idea. No reply.",
    },
    enlace: "",
  },
  {
    fecha: "2026-04-01",
    titulo: {
      es: "Tercer email a Cavazzini: rendición de cuentas",
      en: "Third email to Cavazzini: accountability",
    },
    canal: "Email",
    destinatario: "Anna Cavazzini (MEP)",
    estado: "sin_respuesta",
    resumen: {
      es: "\"Democratic Accountability Starts With Answering Emails\". Pido una sola frase de respuesta o que me indiquen a quién dirigirme. Sin respuesta.",
      en: "\"Democratic Accountability Starts With Answering Emails\". I ask for a single sentence in reply, or a pointer to who can help. No reply.",
    },
    enlace: "",
  },
  {
    fecha: "2026-06-30",
    titulo: {
      es: "Email a Laura Ballarín (coordinadora S&D en IMCO)",
      en: "Email to Laura Ballarín (S&D coordinator in IMCO)",
    },
    canal: "Email",
    destinatario: {
      es: "Laura Ballarín Cereza (MEP, S&D, España)",
      en: "Laura Ballarín Cereza (MEP, S&D, Spain)",
    },
    estado: "esperando",
    resumen: {
      es: "Cambio de estrategia: me dirijo a una eurodiputada española con poder de agenda en la comisión competente. Pido una acción concreta: que valore llevar la iniciativa a IMCO o que me indique el cauce. A la espera de respuesta.",
      en: "Strategy shift: reaching out to a Spanish MEP with agenda-setting power in the competent committee. I ask for one concrete action: to consider taking the initiative to IMCO or to point me to the right channel. Awaiting reply.",
    },
    enlace: "",
  },
  {
    fecha: "2026-07-01",
    titulo: {
      es: "Email a Agustín Reyna (director general de BEUC)",
      en: "Email to Agustín Reyna (Director General of BEUC)",
    },
    canal: "Email",
    destinatario: {
      es: "Agustín Reyna — BEUC (Organización Europea de Consumidores)",
      en: "Agustín Reyna — BEUC (The European Consumer Organisation)",
    },
    estado: "esperando",
    resumen: {
      es: "Abro un frente en paralelo: escribo al director general de BEUC, en castellano, presentando 'Precios Abiertos' como propuesta de política europea (no como queja individual). Pregunto si ven recorrido y si podrían apoyarlo, difundirlo o impulsarlo. A la espera de respuesta.",
      en: "Opening a parallel front: writing to BEUC's Director General, in Spanish, presenting 'Open Prices' as an EU policy proposal (not an individual complaint). I ask whether they see potential and could support, amplify or push it. Awaiting reply.",
    },
    enlace: "",
  },
];

/* Próximos objetivos a contactar en Europa (pipeline de outreach).
 * El primero es el siguiente paso recomendado. */
const PROXIMOS = [
  {
    nombre: "DG JUST — Consumers",
    cargo: {
      es: "Dirección General de Justicia y Consumidores",
      en: "Directorate-General for Justice and Consumers",
    },
    institucion: { es: "Comisión Europea", en: "European Commission" },
    pais: "UE",
    email: "just-consumers@ec.europa.eu",
    estado: "pendiente",
    notas: {
      es: "Responsable de política de consumo y de la Open Data Directive aplicada a consumo.",
      en: "Responsible for consumer policy and the Open Data Directive applied to consumers.",
    },
  },
  {
    nombre: "OCU — Organización de Consumidores y Usuarios",
    cargo: { es: "Asociación de consumidores", en: "Consumer association" },
    institucion: "OCU",
    pais: { es: "España", en: "Spain" },
    email: "ocu@ocu.org",
    estado: "pendiente",
    notas: {
      es: "Frente nacional. Ya publican comparativas de cestas; podrían amplificar.",
      en: "National front. They already publish basket comparisons; they could amplify.",
    },
  },
  {
    nombre: "FACUA — Consumidores en Acción",
    cargo: { es: "Asociación de consumidores", en: "Consumer association" },
    institucion: "FACUA",
    pais: { es: "España", en: "Spain" },
    email: "info@facua.org",
    estado: "pendiente",
    notas: {
      es: "Muy activos mediáticamente en precios de alimentación.",
      en: "Very active in the media on food prices.",
    },
  },
  {
    nombre: { es: "Eurostat — precios de consumo (HICP)", en: "Eurostat — consumer prices (HICP)" },
    cargo: { es: "Oficina estadística de la UE", en: "EU statistical office" },
    institucion: "Eurostat",
    pais: "UE",
    email: "estat-user-support@ec.europa.eu",
    estado: "pendiente",
    notas: {
      es: "Ángulo estadístico: datos granulares mejoran la medición de inflación y shrinkflation.",
      en: "Statistical angle: granular data improves measurement of inflation and shrinkflation.",
    },
  },
];

/* Beneficios destacados de la iniciativa. */
const BENEFICIOS = [
  {
    es: "Comparadores de precios para ahorrar en la cesta de la compra",
    en: "Price comparison tools to save on the weekly shop",
  },
  {
    es: "Alertas de precios bajos para familias vulnerables",
    en: "Low-price alerts for vulnerable families",
  },
  {
    es: "Histórico de precios para vigilar la inflación real",
    en: "Price history to monitor real inflation",
  },
  {
    es: "Detección de shrinkflation y descuentos ficticios",
    en: "Detection of shrinkflation and fake discounts",
  },
  {
    es: "Más competencia entre supermercados",
    en: "More competition between supermarkets",
  },
  {
    es: "Transparencia en la cadena de suministro",
    en: "Transparency in the supply chain",
  },
];

/* Cadenas de interfaz traducibles. */
const I18N = {
  es: {
    brand: "Precios abiertos",
    eyebrow: "Iniciativa ciudadana de datos abiertos",
    ctaTimeline: "Ver la cronología",
    ctaPeticion: "Petición original",
    propuestaTitulo: "La propuesta",
    propuestaTexto:
      "Publicar y actualizar a diario los precios de los productos de los supermercados y cadenas de alimentación en una plataforma abierta y accesible. Tratar el precio de la cesta de la compra como infraestructura pública, no como dato privado de las empresas.",
    cronologiaTitulo: "Cronología de acciones",
    cronologiaSub: "Cada paso dado, con su resultado. El silencio también se registra.",
    contactosTitulo: "Seguimiento de contactos",
    contactosSub: "Estado de cada interlocutor al que he escrito.",
    thFecha: "Fecha",
    thDestinatario: "Destinatario",
    thCanal: "Canal",
    thEstado: "Estado",
    proximosTitulo: "Próximos pasos · Europa",
    proximosSub:
      "Objetivos sugeridos para la siguiente ronda de correos, uno a uno, hasta que alguien lo recoja.",
    footerQuote:
      "\"La rendición de cuentas en una democracia empieza por contestar a los correos.\"",
    actualizado: "Actualizado el",
    statDias: "días desde la petición",
    statAnios: "años",
    statAcciones: "acciones registradas",
    statSinRespuesta: "sin respuesta",
    statProximos: "próximos objetivos",
    verEnlace: "Enlace",
    estados: {
      denegado: "Denegado",
      respondido: "Respondido",
      sin_respuesta: "Sin respuesta",
      esperando: "Esperando respuesta",
      pendiente: "Pendiente",
    },
  },
  en: {
    brand: "Open Prices",
    eyebrow: "Citizen open-data initiative",
    ctaTimeline: "See the timeline",
    ctaPeticion: "Original request",
    propuestaTitulo: "The proposal",
    propuestaTexto:
      "Publish and update daily the prices of products in supermarkets and food chains on an open, accessible platform. Treat the cost of the weekly shop as public infrastructure, not private corporate data.",
    cronologiaTitulo: "Timeline of actions",
    cronologiaSub: "Every step taken, with its outcome. Silence is recorded too.",
    contactosTitulo: "Contact tracking",
    contactosSub: "Status of every party I have written to.",
    thFecha: "Date",
    thDestinatario: "Recipient",
    thCanal: "Channel",
    thEstado: "Status",
    proximosTitulo: "Next steps · Europe",
    proximosSub:
      "Suggested targets for the next round of emails, one by one, until someone picks it up.",
    footerQuote:
      "\"Democratic accountability starts with answering emails.\"",
    actualizado: "Last updated",
    statDias: "days since the request",
    statAnios: "years",
    statAcciones: "actions logged",
    statSinRespuesta: "with no reply",
    statProximos: "next targets",
    verEnlace: "Link",
    estados: {
      denegado: "Denied",
      respondido: "Replied",
      sin_respuesta: "No reply",
      esperando: "Awaiting reply",
      pendiente: "Pending",
    },
  },
};
