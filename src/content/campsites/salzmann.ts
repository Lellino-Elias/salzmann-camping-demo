import type { CampsiteConfig } from "../types";

const IMG = "/campsites/salzmann";

const salzmann: CampsiteConfig = {
  name: "Campingplatz Rohrspitz Salzmann",
  shortName: "Rohrspitz",
  slug: "salzmann",
  ort: "Fußach am Bodensee",
  region: "Vorarlberg",
  brandKind: "Camping am Bodensee",
  see: "Bodensee",
  regionLong: "Rheindelta · Bodensee · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Urlaub mit der Natur am Bodensee",
  claimEmphasis: "mit der Natur",
  emailDetail: "euer hauseigener Badestrand am Bodensee",
  intro:
    "Vom 1. April bis 15. Oktober findest du am Rohrspitz parzellierte Stellplätze, einen hauseigenen Badestrand und einen eigenen Hafen — mitten im Naturschutzgebiet Rheindelta direkt am Bodensee.",

  statement: {
    text: "Hier liegt dein Stellplatz mitten im Naturschutzgebiet Rheindelta — und der Bodensee beginnt gleich nebenan.",
    emphasis: "mitten im Naturschutzgebiet Rheindelta",
  },

  pillars: [
    {
      title: "Hauseigener Badestrand",
      text: "Der hauseigene Badestrand liegt direkt am Bodensee — Kiesstrand, Seeluft und viel Platz zum Baden.",
      image: { src: `${IMG}/activity-dc9fd8444b.webp`, alt: "Hauseigener Badestrand am Bodensee beim Rohrspitz" },
    },
    {
      title: "Mitten im Rheindelta",
      text: "Mitten im Naturschutzgebiet Rheindelta — 2000 Hektar Schilf, Auwald und seltene Wasservögel.",
      image: { src: `${IMG}/gallery-d901e1b2cb.webp`, alt: "Schwanenfamilie auf der Wiese im Naturschutzgebiet Rheindelta" },
    },
    {
      title: "Parzellierte Stellplätze",
      text: "Parzellierte Stellplätze in vielen Größen, alle mit Stromanschluss und kurzen Wegen zum Wasser.",
      image: { src: `${IMG}/gallery-773211aa11.webp`, alt: "Luftaufnahme der parzellierten Stellplätze am Rohrspitz" },
    },
  ],

  usps: [
    "Hauseigener Badestrand",
    "Stellplätze mit Strom",
    "Hafen mit 190 Liegeplätzen",
    "Eco-Camping seit 2006",
    "Hunde willkommen",
    "Bodensee-Radweg am Platz",
  ],

  trust: {
    heading: "Darauf ist am Rohrspitz Verlass",
    headingEmphasis: "am Rohrspitz",
    intro:
      "Familie Salzmann führt den Platz im Einklang mit der Natur — mit ausgezeichnetem Umweltmanagement, kurzen Wegen zum Wasser und einem Team, das den Rohrspitz seit Jahrzehnten lebt.",
  },

  awards: [{ label: "Eco-Camping seit 2006" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-42587ec105.webp`, alt: "Luftaufnahme: Campingplatz Rohrspitz am Bodensee" },
    sunset: { src: `${IMG}/gallery-dbdd0e5aef.webp`, alt: "Sonnenuntergang über dem Bodensee am Rohrspitz" },
  },

  breather: {
    image: { src: `${IMG}/gallery-77992a2890.webp`, alt: "Rohrspitz mit Hafen und Bodensee aus der Luft" },
    line: "2000 Hektar Naturschutzgebiet — und mittendrin dein Stellplatz.",
  },

  camping: {
    heading: "Camping am Naturjuwel Rohrspitz",
    intro:
      "Erholsame Tage im Einklang mit der Natur: parzellierte Stellplätze in vielen Größen, ein Badestrand am Bodensee und alles für den entspannten Campingtag.",
    features: [
      {
        title: "Hafen mit 190 Liegeplätzen",
        text: "Der Hafen am Rohrspitz beheimatet 190 Boote — von der kleinen Fischergondel bis zum großen Motorboot.",
        image: { src: `${IMG}/gallery-a0c1898e0e.webp`, alt: "Hafen am Rohrspitz mit Booten am Bodensee" },
      },
      {
        title: "Kiosk SeeYou",
        text: "Der Kiosk SeeYou mit Sonnenterrasse und Seeblick ist das Herzstück am Rohrspitz — für Snacks und Getränke.",
        image: { src: `${IMG}/gallery-9dac7985c9.webp`, alt: "Kiosk SeeYou mit Terrasse und Blick auf den Bodensee" },
      },
      {
        title: "Restaurant SeeYou",
        text: "Im Restaurant SeeYou direkt am Wasser gibt es Pizza und mediterrane Küche, dazu einen Panoramasaal mit Seeblick.",
        image: { src: `${IMG}/gallery-cfdaf37cd4.webp`, alt: "Terrasse des Restaurant SeeYou am Rohrspitz" },
      },
      {
        title: "Bootshandel & Service",
        text: "Vom Verkauf bis zur Wartung: rund ums Boot bekommst du am Rohrspitz kompetente Hilfe aus einer Hand.",
        image: { src: `${IMG}/activity-142aad577c.webp`, alt: "Bootshalle für Verkauf und Service am Rohrspitz" },
      },
      {
        title: "Spielplatz am Kiosk",
        text: "Beim Kiosk SeeYou gibt es einen Spielplatz mit Rutsche — die Kinder spielen, während du auf der Terrasse sitzt.",
        image: { src: `${IMG}/gallery-ae6b4d769e.webp`, alt: "Spielplatz mit Rutsche beim Kiosk SeeYou" },
      },
      {
        title: "Sonnenterrasse am See",
        text: "Auf der blumengeschmückten Terrasse an der Rezeption genießt du den Blick über das Rheindelta zum Bodensee.",
        image: { src: `${IMG}/gallery-81ae22a908.webp`, alt: "Blumengeschmückte Sonnenterrasse an der Rezeption" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Rohrspitz",
    intro:
      "Baden, Boot fahren und Natur beobachten — am Bodensee und im Rheindelta liegt das alles direkt vor deinem Vorzelt.",
    items: [
      {
        title: "Wassersport am Bodensee",
        text: "Segeln, Motorboot oder einfach Boot fahren — der Bodensee liegt direkt vor dem Hafen am Rohrspitz.",
        image: { src: `${IMG}/gallery-5fe82d9ec8.webp`, alt: "Boote im Hafen am Bodensee" },
      },
      {
        title: "Vogelparadies Rheindelta",
        text: "Das Rheindelta ist seit 1995 Natura-2000-Gebiet und ein Paradies für unzählige Wasservögel.",
        image: { src: `${IMG}/gallery-4adf564edd.webp`, alt: "Wasservögel im Naturschutzgebiet Rheindelta" },
      },
      {
        title: "Natur hautnah erleben",
        text: "Auwälder, Schilfflächen und Feuchtwiesen rund um den Platz laden zum Beobachten und Staunen ein.",
        image: { src: `${IMG}/gallery-38c3b3136f.webp`, alt: "Libelle auf einem Schilfhalm am Rohrspitz" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Rohrspitz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Die Zufahrt erfolgt ausschließlich über Höchst — der Beschilderung „Rohrspitz“ bis an den See und zum Parkplatz Salzmann folgen (Navi führt manchmal falsch über Fußach).",
      },
      {
        title: "Aus der Schweiz",
        text: "Grenzübertritt bei St. Margrethen oder bei Rheineck / Gaißau, dann der Ausschilderung „Rohrspitz“ bis an den See folgen.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Öffentlich nicht direkt erreichbar — nächste Haltestellen sind Fußach Alte Post sowie Höchst Hecht.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Bodensee-Radwanderweg führt direkt an unserem Betrieb vorbei.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Rohrspitz",
    headingEmphasis: "Rohrspitz",
    intro: "Hafen, Strand und lange Sommerabende am Bodensee — ein paar Eindrücke vom Rohrspitz.",
    tag: "April bis Oktober",
    moreCount: 16,
    images: [
      { src: `${IMG}/gallery-d243378d0f.webp`, alt: "Abendstimmung am Hafen des Rohrspitz" },
      { src: `${IMG}/gallery-2983d5d729.webp`, alt: "Luftaufnahme des Rohrspitz mit Hafen und Badestrand am Bodensee" },
      { src: `${IMG}/gallery-5d12f37704.webp`, alt: "Boote im Abendlicht auf dem Bodensee" },
      { src: `${IMG}/gallery-303200ddfc.webp`, alt: "Bootshandel am Rohrspitz" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Rohrspitz",
    headingEmphasis: "am Rohrspitz",
    intro:
      "Reservierung ist schon ab einer Nacht möglich — wähle Zeitraum und Stellplatzgröße, die Campingrezeption bestätigt dir deine Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise je Stellplatz/Nacht (Preisliste 2026) · zzgl. € 9 pro Erw., € 5,50 pro Kind & € 2,60 Gästetaxe, Strom € 5/Tag · bitte aktuell bestätigen",
    highlight: {
      title: "10 % ab 7 Nächten",
      text: "Bei längeren Aufenthalten gibt es ab der siebten Nacht 10 % Ermäßigung.",
    },
    categories: [
      { id: "zelt", label: "Zeltplatz (kleines Zelt)", perNight: 13.4, perExtraGuest: 9 },
      { id: "standard", label: "Standard-Stellplatz", perNight: 22.2, perExtraGuest: 9 },
      { id: "deluxe", label: "Deluxe (Wohnwagen / Wohnmobil)", perNight: 27.8, perExtraGuest: 9 },
      { id: "superdeluxe", label: "Familienplatz ab 90 m²", perNight: 39.5, perExtraGuest: 9 },
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
        { label: "Hafen & SeeYou", href: "#camping" },
      ],
    },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default salzmann;
