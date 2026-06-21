import type { CampsiteConfig } from "../types";

const IMG = "/campsites/salzmann";

const salzmann: CampsiteConfig = {
  name: "Camping Rohrspitz Salzmann",
  shortName: "Rohrspitz",
  slug: "salzmann",
  ort: "Fußach",
  region: "Vorarlberg",
  brandKind: "Camping am Bodensee",
  see: "Bodensee",
  regionLong: "Bodensee · Rheindelta · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Camping am Bodensee, mitten im Rheindelta",
  claimEmphasis: "am Bodensee",
  emailDetail: "euer hauseigener Badestrand am Bodensee",
  intro:
    "Vom 1. April bis 15. Oktober findest du am Rohrspitz parzellierte Stellplätze mit Strom, einen hauseigenen Badestrand und die Ruhe des Rheindeltas — direkt am Bodensee.",

  statement: {
    text: "Hier campst du mitten im Naturschutzgebiet Rheindelta — und der Bodensee beginnt gleich hinter dem Schilf.",
    emphasis: "mitten im Naturschutzgebiet",
  },

  pillars: [
    {
      title: "Direkt am Bodensee",
      text: "Der Rohrspitz ragt direkt in den Bodensee — Wasser, Schilf und Weite rund um den Platz.",
      image: { src: `${IMG}/gallery-773211aa11.webp`, alt: "Luftaufnahme von Campingplatz und Hafen am Rohrspitz" },
    },
    {
      title: "Mitten im Naturschutzgebiet",
      text: "2000 Hektar Rheindelta, über 300 Vogelarten — ein Natura-2000-Gebiet rund um den Platz.",
      image: { src: `${IMG}/gallery-4adf564edd.webp`, alt: "Wasservögel im Naturschutzgebiet Rheindelta am Rohrspitz" },
    },
    {
      title: "Eigener Yachthafen",
      text: "Der hauseigene Hafen beheimatet rund 190 Boote — Gästeboote sind ein beliebtes Anlaufziel.",
      image: { src: `${IMG}/gallery-a0c1898e0e.webp`, alt: "Boote im Hafen am Rohrspitz am Bodensee" },
    },
  ],

  usps: [
    "Hauseigener Badestrand",
    "Stellplätze mit Strom",
    "Eigener Yachthafen",
    "Eco-Camping seit 2006",
    "Restaurant & Kiosk",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Warum Gäste an den Rohrspitz zurückkehren",
    headingEmphasis: "Rohrspitz",
    intro:
      "Seit Jahren führt Familie Salzmann den Platz am Rohrspitz mit Sorgfalt für die Natur — zweifach umweltausgezeichnet, ruhig gelegen und doch mit allem, was einen Campingtag am See ausmacht.",
  },

  awards: [{ label: "Eco-Camping — ausgezeichnet seit 2006" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: {
      src: `${IMG}/gallery-77992a2890.webp`,
      alt: "Luftaufnahme: Camping am Rohrspitz am Bodensee mit Hafen und Alpenpanorama",
    },
  },

  breather: {
    image: { src: `${IMG}/gallery-d243378d0f.webp`, alt: "Abendstimmung im Hafen am Rohrspitz am Bodensee" },
    line: "Der schönste Ruhepol am Bodensee.",
  },

  camping: {
    heading: "Dein Stellplatz am Rohrspitz",
    intro:
      "Parzellierte Stellplätze in vielen Größen, ein eigener Badestrand und kurze Wege zu Kiosk, Restaurant und Hafen — alles direkt am Bodensee.",
    features: [
      {
        title: "Parzellierte Stellplätze",
        text: "Plätze in vielen Größen, jeder mit Stromanschluss — vom kleinen Zelt bis zum großen Wohnmobil.",
        image: { src: `${IMG}/gallery-42587ec105.webp`, alt: "Parzellierte Stellplätze am Rohrspitz mit Blick über den Bodensee" },
      },
      {
        title: "Hauseigener Badestrand",
        text: "Der Bodensee liegt direkt am Platz — ein naturbelassener Badestrand zum Baden und Sonnen.",
        image: { src: `${IMG}/activity-dc9fd8444b.webp`, alt: "Naturbelassener Badestrand am Bodensee beim Camping Rohrspitz" },
      },
      {
        title: "Restaurant SeeYou",
        text: "Mediterrane Küche, Pizza und Seeblick — das SeeYou-Team verwöhnt dich direkt am Wasser.",
        image: { src: `${IMG}/gallery-cfdaf37cd4.webp`, alt: "Restaurant SeeYou am Rohrspitz mit Terrasse" },
      },
      {
        title: "Kiosk SeeYou",
        text: "Das Herzstück am Rohrspitz: Selbstbedienungs-Kiosk mit Sonnenterrasse und kleinem Spielplatz.",
        image: { src: `${IMG}/gallery-ae6b4d769e.webp`, alt: "Selbstbedienungs-Kiosk SeeYou mit Terrasse und Spielplatz am Rohrspitz" },
      },
      {
        title: "Sonnenterrasse am See",
        text: "Unter schattigen Schirmen sitzt du mit Blick über die Wiese und das Wasser des Bodensees.",
        image: { src: `${IMG}/gallery-9dac7985c9.webp`, alt: "Sonnenterrasse mit Seeblick am Kiosk des Camping Rohrspitz" },
      },
      {
        title: "Frische Backwaren",
        text: "Brötchen, Croissants und Brezen gibt es frisch am Kiosk — ideal fürs Campingfrühstück.",
        image: { src: `${IMG}/gallery-b995f0a8e7.webp`, alt: "Frische Backwaren im Kiosk am Rohrspitz" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Rohrspitz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Die Zufahrt erfolgt ausschließlich über die Gemeinde Höchst — dann der Beschilderung „Rohrspitz“ bis zum Parkplatz Salzmann folgen.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Bus bis Höchst (Haltestelle Hecht); die letzten Kilometer an den Rohrspitz führen per Rad oder zu Fuß.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Bodensee-Radwanderweg führt direkt an unserem Betrieb vorbei.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Rohrspitz",
    headingEmphasis: "Rohrspitz",
    intro: "Hafen, Terrasse und Seeluft — ein paar Bilder vom Leben am Rohrspitz.",
    tag: "April bis Oktober",
    moreCount: 16,
    images: [
      { src: `${IMG}/gallery-5fe82d9ec8.webp`, alt: "Boote im Hafen am Rohrspitz" },
      { src: `${IMG}/gallery-81ae22a908.webp`, alt: "Blumengeschmückte Terrasse am Kiosk SeeYou" },
      { src: `${IMG}/gallery-38c3b3136f.webp`, alt: "Libelle im Schilf des Rheindeltas" },
      { src: `${IMG}/gallery-5d12f37704.webp`, alt: "Abendstimmung über dem Bodensee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Rohrspitz",
    headingEmphasis: "am Rohrspitz",
    intro: "Wähle Zeitraum und Platzkategorie — Reservierungen sind schon ab einer Nacht möglich.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatzpreise laut Preisliste — Personen (€ 9 Erw. / € 5,50 Kind), Strom € 5/Tag und Gästetaxe € 2,60 kommen hinzu · bitte aktuelle Preise bestätigen.",
    highlight: {
      title: "10 % ab 7 Nächten",
      text: "Bei längeren Aufenthalten gibt es ab der siebten Nacht 10 % Ermäßigung.",
    },
    categories: [
      { id: "zelt", label: "Kleines Zelt", perNight: 16.1, perExtraGuest: 9 },
      { id: "standard", label: "Standard-Stellplatz", perNight: 22.2, perExtraGuest: 9 },
      { id: "deluxe", label: "Deluxe-Stellplatz", perNight: 27.8, perExtraGuest: 9 },
      { id: "familienplatz", label: "Familienplatz ab 90 m²", perNight: 39.5, perExtraGuest: 9 },
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
    { label: "Camping", href: "#camping" },
    { label: "Am Rohrspitz", href: "#galerie" },
    { label: "Preise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default salzmann;
