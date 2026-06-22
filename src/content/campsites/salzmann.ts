import type { CampsiteConfig } from "../types";

const IMG = "/campsites/salzmann";

const salzmann: CampsiteConfig = {
  name: "Camping Rohrspitz Salzmann",
  shortName: "Rohrspitz",
  slug: "salzmann",
  ort: "Fußach am Bodensee",
  region: "Vorarlberg",
  brandKind: "Camping am Bodensee",
  see: "Bodensee",
  regionLong: "Rheindelta · Bodensee · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Dein Stellplatz im Naturparadies am Bodensee",
  claimEmphasis: "am Bodensee",
  emailDetail: "eure Lage direkt am Bodensee mitten im Naturschutzgebiet Rheindelta",
  intro:
    "Vom 1. April bis 15. Oktober campst du am Rohrspitz, mitten im Naturschutzgebiet Rheindelta: parzellierte Stellplätze mit Strom, ein hauseigener Badestrand und der Bodensee gleich nebenan.",

  statement: {
    text: "Hier liegt dein Stellplatz zwischen 2000 Hektar Schilf, Auwald und dem offenen Wasser des Bodensees.",
    emphasis: "2000 Hektar",
  },

  pillars: [
    {
      title: "Eigener Badestrand",
      text: "Der hauseigene Kiesstrand liegt direkt am Platz, der Bodensee zum Baden gleich davor.",
      image: { src: `${IMG}/badestrand.webp`, alt: "Hauseigener Kiesstrand am Bodensee beim Camping Rohrspitz" },
    },
    {
      title: "Mitten im Rheindelta",
      text: "Rundherum 2000 Hektar Naturschutzgebiet mit Schilf, Auwald und seltenen Wasservögeln.",
      image: { src: `${IMG}/rheindelta-voegel.webp`, alt: "Wasservögel im Naturschutzgebiet Rheindelta am Rohrspitz" },
    },
    {
      title: "Eigener Hafen am See",
      text: "Der Hafen am Rohrspitz beheimatet 190 Boote, von der Fischergondel bis zum Motorboot.",
      image: { src: `${IMG}/hafen-boote.webp`, alt: "Hafen mit Segel- und Motorbooten am Rohrspitz" },
    },
  ],

  usps: [
    "Hauseigener Badestrand",
    "Stellplätze mit Strom",
    "Eco-Camping seit 2006",
    "Direkt am Bodensee-Radweg",
    "Hunde willkommen",
    "Eigener Hafen",
  ],

  trust: {
    heading: "Warum ausgerechnet der Rohrspitz?",
    headingEmphasis: "der Rohrspitz",
    intro:
      "Seit 2006 trägt der Platz die Eco-Camping-Auszeichnung: Solarwarmwasser, Mülltrennung und kurze Wege halten den Rohrspitz leise und sauber, mitten im Schutzgebiet am Bodensee.",
  },

  awards: [{ label: "Eco-Camping seit 2006" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/hero-areal.webp`, alt: "Luftaufnahme: Camping Rohrspitz Salzmann am Bodensee mit Hafen und Alpenblick" },
  },

  breather: {
    image: { src: `${IMG}/hafen-abend.webp`, alt: "Abendstimmung über dem Hafen am Rohrspitz" },
    line: "Wenn die Sonne hinter dem Bodensee versinkt.",
  },

  camping: {
    heading: "Dein Campingplatz am Rohrspitz",
    intro:
      "Parzellierte Stellplätze in vielen Größen, alle mit Stromanschluss, dazu ein sicheres Chipkarten-System und gepflegte Sanitärgebäude. Reserviert wird schon ab einer Nacht.",
    features: [
      {
        title: "Parzellierte Stellplätze",
        text: "Plätze in den verschiedensten Größen mit Stromanschluss, frei wählbar über das Online-Buchungssystem.",
        image: { src: `${IMG}/camping-stellplaetze.webp`, alt: "Parzellierte Stellplätze mit Wohnwagen am Rohrspitz" },
      },
      {
        title: "Camping und Hafen vereint",
        text: "Stellplätze, Marina und Kiosk liegen direkt nebeneinander am Wasser, alles bequem zu Fuß erreichbar.",
        image: { src: `${IMG}/areal-hafen-camping.webp`, alt: "Luftbild von Campingplatz und Hafen am Rohrspitz" },
      },
      {
        title: "Kiosk als Herzstück",
        text: "Am Kiosk SeeYou sind Rezeption und Treffpunkt vereint, mit großer Terrasse und Blick auf den Bodensee.",
        image: { src: `${IMG}/kiosk-terrasse-see.webp`, alt: "Terrasse des Kiosk SeeYou mit Blick auf den Bodensee" },
      },
      {
        title: "Gebäck und Snacks am Kiosk",
        text: "Gebäck, Snacks, Kaffee und Eis gibt es direkt am Kiosk, von früh bis zum Sonnenuntergang.",
        image: { src: `${IMG}/kiosk-gebaeck.webp`, alt: "Frisches Gebäck im Kiosk am Rohrspitz" },
      },
      {
        title: "Restaurant SeeYou am See",
        text: "Direkt am Platz serviert das Restaurant SeeYou Pizza und mediterrane Küche, der Saal bietet Seeblick.",
        image: { src: `${IMG}/restaurant-seeyou.webp`, alt: "Terrasse des Restaurant SeeYou am Rohrspitz" },
      },
      {
        title: "Spielplatz am Kiosk",
        text: "Gleich neben dem Kiosk klettern und rutschen die Kleinen, während die Großen die Terrasse genießen.",
        image: { src: `${IMG}/kiosk-spielplatz.webp`, alt: "Spielplatz neben dem Kiosk am Rohrspitz" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nur über Höchst",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Die Zufahrt erfolgt ausschließlich über die Gemeinde Höchst, dann der Beschilderung „Rohrspitz“ bis zum Parkplatz Salzmann folgen.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Bodensee-Radwanderweg führt direkt an unserem Betrieb vorbei.",
      },
      {
        title: "Öffentlich",
        text: "Mit öffentlichen Verkehrsmitteln ist der Platz nicht direkt erreichbar, nächste Haltestellen in Höchst und Fußach.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Rohrspitz",
    headingEmphasis: "Rohrspitz",
    intro: "Strandtage, Seeluft und lange Abende am Wasser, ein paar Eindrücke vom Naturparadies Rohrspitz.",
    tag: "April bis Oktober",
    moreCount: 18,
    images: [
      { src: `${IMG}/terrasse-blumen.webp`, alt: "Blühende Terrasse am Kiosk mit Bergblick" },
      { src: `${IMG}/natur-libelle.webp`, alt: "Libelle im Schilf des Rheindeltas" },
      { src: `${IMG}/strand-detail.webp`, alt: "Treibholz und Kiesel am Strand des Rohrspitz" },
      { src: `${IMG}/rohrspitz-luft.webp`, alt: "Luftbild des Rohrspitz mit Hafen und Strand am Bodensee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Rohrspitz",
    headingEmphasis: "am Rohrspitz",
    intro: "Wähle deine Stellplatz-Kategorie und deinen Zeitraum, wir bestätigen dir die Verfügbarkeit persönlich.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise pro Stellplatz und Nacht · zzgl. € 9,00 je Erwachsenem, € 5,50 je Kind, Ortstaxe € 2,60 p. P. · Strom € 5,00/Tag · 10 % ab 7 Nächten",
    highlight: {
      title: "10 % ab 7 Nächten",
      text: "Bei längeren Aufenthalten gibt es ab der siebten Nacht 10 % Ermäßigung.",
    },
    categories: [
      { id: "spar", label: "Spartarif · kleines Zelt", perNight: 16.1, perExtraGuest: 9 },
      { id: "standard", label: "Standard · Hauszelt/Wohnmobil", perNight: 22.2, perExtraGuest: 9 },
      { id: "deluxe", label: "Deluxe · Wohnwagen/Wohnmobil", perNight: 27.8, perExtraGuest: 9 },
      { id: "superdeluxe", label: "Super Deluxe · Familienplatz 90 m²", perNight: 39.5, perExtraGuest: 9 },
    ],
  },

  kontakt: {
    tel: "+43 5578 75708",
    telHref: "tel:+43557875708",
    mail: "rezeption@salzmann.at",
    facebook: "https://www.facebook.com/rohrspitzsalzmann/",
    adresse: "Rohr 1 · 6972 Fußach · Vorarlberg",
    coords: { lat: 47.4972, lng: 9.6308 },
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Kiosk", href: "#camping" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anfahrt",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default salzmann;
