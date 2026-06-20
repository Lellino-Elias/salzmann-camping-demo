import type { CampsiteConfig } from "../types";

/**
 * Campingplatz Rohrspitz Salzmann — Fußach am Bodensee (Rheindelta, Vorarlberg).
 * 100 % aus der eigenen Quelle (raw/digest) abgeleitet. Bilder provenienzgebunden,
 * je einmal verwendet. Durchgehend Du-Anrede. Original-Palette, heroVariant "center".
 */
const IMG = "/campsites/salzmann";

const salzmann: CampsiteConfig = {
  name: "Campingplatz Rohrspitz Salzmann",
  shortName: "Rohrspitz",
  slug: "salzmann",
  ort: "Fußach",
  region: "Vorarlberg",
  brandKind: "Camping am Bodensee",
  see: "Bodensee",
  regionLong: "Rheindelta · Bodensee · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Campen, wo das Rheindelta auf den Bodensee trifft",
  claimEmphasis: "auf den Bodensee",
  emailDetail: "eure Lage am Rohrspitz mitten im Naturschutzgebiet Rheindelta",
  intro:
    "Vom 1. April bis 15. Oktober findest du am Rohrspitz parzellierte Stellplätze in vielen Größen, einen hauseigenen Badestrand und die Ruhe des Naturschutzgebiets Rheindelta — direkt am Bodensee.",

  statement: {
    text: "Hier campst du am Herzen des Naturschutzgebiets Rheindelta — umgeben von 2000 Hektar Schilf, Auwald und Bodensee.",
    emphasis: "2000 Hektar",
  },

  pillars: [
    {
      title: "Direkt am Seedamm",
      text: "Parzellierte Plätze direkt hinterm Seedamm — der Bodensee und die Berge stets im Blick.",
      image: { src: `${IMG}/gallery-42587ec105.webp`, alt: "Campingplatz Rohrspitz am Seedamm mit Blick über den Bodensee" },
    },
    {
      title: "Hauseigener Badestrand",
      text: "Der hauseigene, renaturierte Badestrand am Bodensee liegt nur wenige Schritte vom Platz entfernt.",
      image: { src: `${IMG}/activity-dc9fd8444b.webp`, alt: "Renaturierter Badestrand am Bodensee beim Camping Rohrspitz" },
    },
    {
      title: "Mitten in der Natur",
      text: "Mitten im Naturschutzgebiet Rheindelta — Heimat von über 300 Vogelarten rund um den Platz.",
      image: { src: `${IMG}/gallery-4adf564edd.webp`, alt: "Wasservögel im Naturschutzgebiet Rheindelta am Rohrspitz" },
    },
  ],

  usps: [
    "Direkt am Bodensee",
    "Hauseigener Badestrand",
    "Stellplätze mit Strom",
    "Eigener Yachthafen",
    "Eco-Camping seit 2006",
    "Im Naturschutzgebiet",
  ],

  trust: {
    heading: "Naturnah, ruhig, direkt am Wasser",
    headingEmphasis: "direkt am Wasser",
    intro:
      "Seit Jahrzehnten führt Familie Salzmann den Platz am Rohrspitz — sanft im Umgang mit der Natur, ausgezeichnet mit Eco-Camping und mit kurzen Wegen zu Badestrand, Hafen und Restaurant.",
  },

  awards: [{ label: "Eco-Camping seit 2006" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-773211aa11.webp`, alt: "Luftaufnahme: Campingplatz Rohrspitz Salzmann mit Yachthafen am Bodensee" },
  },

  breather: {
    image: { src: `${IMG}/gallery-d243378d0f.webp`, alt: "Abendlicht über dem Yachthafen am Bodensee" },
    line: "Abendlicht über dem Bodensee, wenn der Hafen zur Ruhe kommt.",
  },

  camping: {
    heading: "Camping am Rohrspitz",
    intro:
      "Parzellierte Stellplätze mit Strom, ein sicheres Chipkarten-Zutrittssystem und alles für entspannte Tage — vom Badestrand bis zum Restaurant am See.",
    features: [
      {
        title: "Parzellierte Stellplätze",
        text: "Parzellierte Stellplätze in verschiedenen Größen, alle mit eigenem Stromanschluss am See.",
        image: { src: `${IMG}/gallery-77992a2890.webp`, alt: "Parzellierte Stellplätze am Rohrspitz mit Blick über den Bodensee" },
      },
      {
        title: "Eigener Yachthafen",
        text: "Direkt nebenan liegt der hauseigene Hafen am Bodensee — mit Liegeplätzen für Segel- und Motorboote.",
        image: { src: `${IMG}/gallery-a0c1898e0e.webp`, alt: "Yachthafen am Rohrspitz mit Segel- und Motorbooten" },
      },
      {
        title: "Restaurant SeeYou",
        text: "Im Restaurant SeeYou genießt du Küche und Getränke mit weitem Blick über den Bodensee.",
        image: { src: `${IMG}/gallery-cfdaf37cd4.webp`, alt: "Terrasse des Restaurant SeeYou am Rohrspitz" },
      },
      {
        title: "Kiosk zur Selbstbedienung",
        text: "Der Selbstbedienungs-Kiosk versorgt dich mit Snacks, Getränken und Kleinigkeiten für den Tag.",
        image: { src: `${IMG}/gallery-ae6b4d769e.webp`, alt: "Selbstbedienungs-Kiosk SeeYou am Rohrspitz" },
      },
      {
        title: "Schattige Seeterrasse",
        text: "Auf der schattigen Seeterrasse sitzt du im Grünen, mit dem Bodensee zum Greifen nah.",
        image: { src: `${IMG}/gallery-9dac7985c9.webp`, alt: "Beschirmte Seeterrasse mit Blick auf den Bodensee" },
      },
      {
        title: "Bootsplätze & Wassersport",
        text: "Ob Segeln, Motorboot oder einfach am Wasser sein — der Bodensee beginnt direkt am Platz.",
        image: { src: `${IMG}/gallery-20ced0468d.webp`, alt: "Boot am Steg im Hafen des Rohrspitz am Bodensee" },
      },
    ],
  },

  anreise: {
    heading: "Anreise zum Rohrspitz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Die Zufahrt ist nur über Höchst möglich — ab dem Kreisverkehr der Beschilderung „Rohrspitz“ bis an den See folgen.",
      },
      {
        title: "Aus der Schweiz",
        text: "Über die Grenzübergänge St. Margrethen oder Rheineck/Gaißau und dann der Beschilderung „Rohrspitz“ folgen.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Bodensee-Radwanderweg führt direkt an unserem Betrieb vorbei.",
      },
    ],
  },

  galerie: {
    heading: "Bilder vom Rohrspitz",
    headingEmphasis: "Rohrspitz",
    intro: "Schilf, Wasser und weiter Himmel — ein paar Eindrücke aus dem Naturschutzgebiet rund um den Platz.",
    tag: "April bis Oktober",
    moreCount: 16,
    images: [
      { src: `${IMG}/gallery-efc9d62c69.webp`, alt: "Libelle im Naturschutzgebiet Rheindelta am Rohrspitz" },
      { src: `${IMG}/gallery-d58c782a9e.webp`, alt: "Bemooster Baumstamm im Auwald am Rohrspitz" },
      { src: `${IMG}/activity-819940c37c.webp`, alt: "Strandgut am Bodenseeufer beim Rohrspitz" },
      { src: `${IMG}/gallery-e514a62993.webp`, alt: "Abendstimmung am Hafen mit Blick über den Bodensee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz",
    headingEmphasis: "deinen Stellplatz",
    intro: "Wähle Zeitraum und Stellplatz-Kategorie — Familie Salzmann bestätigt dir deine Verfügbarkeit am Rohrspitz.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatzpreise pro Nacht laut Preisliste — zzgl. € 9 je Erwachsene(r), € 5,50 je Kind (2–14 J.), Auto € 6,10, Strom € 5 und Ortstaxe € 2,60 pro Person. Bitte bei der Buchung bestätigen.",
    highlight: {
      title: "10 % ab 7 Nächten",
      text: "Bei längeren Aufenthalten erhältst du ab der siebten Nacht 10 % Ermäßigung.",
    },
    categories: [
      { id: "spartarif", label: "Kleines Zelt (Spartarif)", perNight: 16.1, perExtraGuest: 9 },
      { id: "standard", label: "Standard – Hauszelt / kleines Wohnmobil", perNight: 22.2, perExtraGuest: 9 },
      { id: "deluxe", label: "Deluxe – Wohnwagen / Wohnmobil", perNight: 27.8, perExtraGuest: 9 },
      { id: "superdeluxe", label: "Super Deluxe – Familienplatz ab 90 m²", perNight: 39.5, perExtraGuest: 9 },
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
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Hafen & Gastronomie", href: "#camping" },
    ]},
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default salzmann;
