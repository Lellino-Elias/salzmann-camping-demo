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
  regionLong: "Rheindelta · Bodensee · Vorarlberg",

  heroVariant: "center",

  claim: "Dein Stellplatz am Naturjuwel Rohrspitz",
  claimEmphasis: "Naturjuwel Rohrspitz",
  emailDetail: "euer hauseigener Badestrand direkt am Bodensee",
  intro:
    "Zwischen Schilfgürtel und Bodensee liegen parzellierte Stellplätze, ein hauseigener Badestrand und 2000 Hektar Naturschutzgebiet — Campingurlaub im Einklang mit der Natur am Rohrspitz.",

  statement: {
    text: "Bei uns beginnt der Bodensee gleich hinter dem Schilf vor deinem Stellplatz.",
    emphasis: "der Bodensee",
  },

  pillars: [
    {
      title: "Direkt am Bodensee",
      text: "Der Platz liegt unmittelbar am Wasser, eingebettet zwischen Schilf, Wiese und dem Hafen am Rohrspitz.",
      image: { src: `${IMG}/gallery-773211aa11.webp`, alt: "Luftaufnahme: Campingplatz und Hafen am Rohrspitz am Bodensee" },
    },
    {
      title: "Hauseigener Badestrand",
      text: "Zum eigenen Strand sind es nur ein paar Schritte — Schwimmen und Sonnen direkt am Bodensee.",
      image: { src: `${IMG}/activity-dc9fd8444b.webp`, alt: "Hauseigener Badestrand am Bodensee beim Rohrspitz" },
    },
    {
      title: "Mitten im Rheindelta",
      text: "Der Rohrspitz ist das Herz des Naturschutzgebietes Rheindelta mit Auwäldern, Schilf und Feuchtwiesen.",
      image: { src: `${IMG}/gallery-4adf564edd.webp`, alt: "Naturlandschaft des Rheindeltas am Rohrspitz" },
    },
  ],

  usps: [
    "Hauseigener Badestrand",
    "Stellplätze mit Strom",
    "Eco-Camping seit 2006",
    "Hunde willkommen",
    "Eigener Yachthafen",
    "Online buchbar",
  ],

  trust: {
    heading: "Naturschutz und Urlaub gehen hier zusammen",
    headingEmphasis: "Naturschutz",
    intro:
      "Seit Jahrzehnten führt Familie Salzmann den Platz im Einklang mit dem Rheindelta: Solarwarmwasser, Mülltrennung und ein sanfter Umgang mit der Natur — ausgezeichnet mit dem Eco-Camping-Siegel.",
  },

  awards: [{ label: "Eco-Camping seit 2006" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-77992a2890.webp`, alt: "Luftaufnahme: Campingplatz Rohrspitz am Bodensee mit Blick auf die Berge" },
  },

  breather: {
    image: { src: `${IMG}/gallery-d243378d0f.webp`, alt: "Abendstimmung am Hafen Rohrspitz am Bodensee" },
    line: "Goldene Abende am Hafen, wenn der Bodensee zur Ruhe kommt.",
  },

  camping: {
    heading: "Camping am Naturjuwel Rohrspitz",
    intro:
      "Vom Stellplatz sind es nur ein paar Schritte zum Wasser: parzellierte Plätze in vielen Größen, Strom, Sanitär per Chipkarte und alles, was ein ruhiger Campingtag braucht.",
    features: [
      {
        title: "Parzellierte Stellplätze",
        text: "Parzellierte Plätze in vielen Größen, jeder mit eigenem Stromanschluss — für Zelt, Wohnwagen und Wohnmobil.",
        image: { src: `${IMG}/gallery-42587ec105.webp`, alt: "Parzellierte Stellplätze am Bodensee beim Rohrspitz" },
      },
      {
        title: "Seerestaurant SeeYou",
        text: "Das Restaurant SeeYou liegt direkt am Wasser — Einkehr mit Seeblick, ganz ohne Anfahrt.",
        image: { src: `${IMG}/gallery-cfdaf37cd4.webp`, alt: "Terrasse des Restaurants SeeYou am Rohrspitz" },
      },
      {
        title: "Kiosk mit Selbstbedienung",
        text: "Der Kiosk SeeYou versorgt dich mit dem Nötigsten und kleinen Snacks — praktisch mitten am Platz.",
        image: { src: `${IMG}/gallery-ae6b4d769e.webp`, alt: "Kiosk SeeYou mit Sonnenschirmen am Rohrspitz" },
      },
      {
        title: "Eigener Yachthafen",
        text: "Direkt nebenan liegt der Hafen am Rohrspitz — Anlaufstelle für Boote, Segler und Wassersportler.",
        image: { src: `${IMG}/gallery-a0c1898e0e.webp`, alt: "Yachthafen mit Segelbooten am Rohrspitz" },
      },
      {
        title: "Sonnenterrasse am See",
        text: "Auf der Terrasse am Kiosk sitzt du mit Blick über Schilf und Bodensee in der Sonne.",
        image: { src: `${IMG}/gallery-9dac7985c9.webp`, alt: "Sonnenterrasse mit Blick auf den Bodensee am Rohrspitz" },
      },
      {
        title: "Natur direkt am Platz",
        text: "Schwäne auf der Wiese, Vögel über dem Schilf — die Tierwelt des Rheindeltas beginnt am Stellplatz.",
        image: { src: `${IMG}/gallery-d901e1b2cb.webp`, alt: "Schwäne auf der Wiese am Campingplatz Rohrspitz" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Erlebnisse rund um den Rohrspitz",
    intro:
      "Baden, Boot fahren oder Vögel beobachten — am Rohrspitz liegt der Bodensee mit dem ganzen Rheindelta direkt vor dem Vorzelt.",
    items: [
      {
        title: "Baden am Bodensee",
        text: "Der hauseigene Badestrand lädt zum Schwimmen, Sonnen und Plantschen am Bodensee ein.",
        image: { src: `${IMG}/activity-819940c37c.webp`, alt: "Strand am Bodensee beim Rohrspitz" },
      },
      {
        title: "Tier- und Pflanzenwelt",
        text: "Über 300 Vogelarten und seltene Tiere leben im Rheindelta — Naturbeobachtung beginnt am Platz.",
        image: { src: `${IMG}/gallery-efc9d62c69.webp`, alt: "Libelle in der Natur des Rheindeltas am Rohrspitz" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Rohrspitz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Die Zufahrt führt ausschließlich über Höchst — der Beschilderung „Rohrspitz“ bis an den See und zum Parkplatz Salzmann folgen.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Nächste Haltestellen sind Fußach Alte Post und Höchst Hecht; von dort weiter mit Rad oder zu Fuß.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Bodensee-Radwanderweg führt direkt an unserem Betrieb vorbei — ideal für die Anreise per Rad.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Rohrspitz",
    headingEmphasis: "Rohrspitz",
    intro: "Wasser, Wiese und Naturschutzgebiet — ein paar Bilder vom Leben am Rohrspitz.",
    tag: "April bis Oktober",
    moreCount: 16,
    images: [
      { src: `${IMG}/gallery-5fe82d9ec8.webp`, alt: "Yachthafen mit Booten am Rohrspitz am Bodensee" },
      { src: `${IMG}/gallery-b995f0a8e7.webp`, alt: "Frische Backwaren am Kiosk SeeYou" },
      { src: `${IMG}/gallery-38c3b3136f.webp`, alt: "Libelle im Schilf des Rheindeltas" },
      { src: `${IMG}/gallery-d58c782a9e.webp`, alt: "Moosbewachsener Baumstamm im Naturschutzgebiet Rheindelta" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Bodensee",
    headingEmphasis: "am Bodensee",
    intro:
      "Wähle Zeitraum und Stellplatz — über das Online-System siehst du freie Plätze, oder du fragst direkt bei der Campingrezeption an.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatzpreise pro Nacht laut Preisliste der Website (Stand 2018); Personen (Erw. € 9, Kinder € 5,50), Strom, Pkw und Gästetaxe kommen hinzu — bitte aktuelle Tarife bestätigen.",
    highlight: {
      title: "Direkt am See",
      text: "Vom Stellplatz zum hauseigenen Badestrand sind es nur ein paar Schritte.",
    },
    categories: [
      { id: "zelt", label: "Zeltplatz", perNight: 13.4, perExtraGuest: 9 },
      { id: "standard", label: "Standard-Stellplatz", perNight: 22.2, perExtraGuest: 9 },
      { id: "deluxe", label: "Deluxe (Wohnwagen/Wohnmobil)", perNight: 27.8, perExtraGuest: 9 },
      { id: "familie", label: "Familienplatz ab 90 m²", perNight: 39.5, perExtraGuest: 9 },
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
        { label: "Hafen & Kiosk", href: "#camping" },
      ],
    },
    { label: "Erleben", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Anreise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default salzmann;
