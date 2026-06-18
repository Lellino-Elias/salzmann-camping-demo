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

  claim: "Camping am Naturjuwel Rohrspitz",
  claimEmphasis: "Naturjuwel Rohrspitz",
  emailDetail: "eure Lage direkt am Bodensee mitten im Naturschutzgebiet Rheindelta",
  intro:
    "Erholsame Urlaubstage im Einklang mit der Natur — parzellierte Stellplätze mit Strom, ein eigener Badestrand und der Bodensee direkt vor deinem Vorzelt, mitten im Naturschutzgebiet Rheindelta.",

  statement: {
    text: "Bei uns beginnt der Bodensee gleich hinter dem Schilf — mitten im Naturschutzgebiet Rheindelta.",
    emphasis: "Naturschutzgebiet Rheindelta",
  },

  pillars: [
    {
      title: "Direkt am Bodensee",
      text: "Der drittgrößte Binnensee Europas liegt unmittelbar vor dem Platz — mit eigenem Strandzugang.",
      image: { src: `${IMG}/gallery-77992a2890.webp`, alt: "Luftaufnahme des Rohrspitz mit Campingplatz, Hafen und Bodensee" },
    },
    {
      title: "Hauseigener Badestrand",
      text: "Der hauseigene Badestrand gehört zum Platz — flach, ruhig und nur ein paar Schritte entfernt.",
      image: { src: `${IMG}/activity-dc9fd8444b.webp`, alt: "Naturstrand am Bodensee beim Camping Rohrspitz" },
    },
    {
      title: "Eigener Yachthafen",
      text: "190 Liegeplätze direkt am Campingplatz — vom Fischerboot bis zum großen Motorboot.",
      image: { src: `${IMG}/gallery-a0c1898e0e.webp`, alt: "Yachthafen am Rohrspitz mit Booten am Bodensee" },
    },
  ],

  usps: [
    "Eigener Badestrand",
    "Stellplätze mit Strom",
    "Eco-Camping zertifiziert",
    "Yachthafen am Platz",
    "Kiosk & Seerestaurant",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Naturnah campen am Rheindelta",
    headingEmphasis: "Naturnah",
    intro:
      "Seit 2006 trägt der Rohrspitz die Eco-Camping-Auszeichnung. Familie Salzmann führt den Platz im Einklang mit der Natur — Solar-Warmwasser, Mülltrennung und kurze Wege halten alles nah und naturnah.",
  },

  awards: [{ label: "Eco-Camping ausgezeichnet seit 2006" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-42587ec105.webp`, alt: "Luftbild: Campingplatz Rohrspitz Salzmann am Bodensee mit Bergpanorama" },
  },

  breather: {
    image: { src: `${IMG}/gallery-d243378d0f.webp`, alt: "Hafen am Rohrspitz mit Flaggen und Blick über den Bodensee" },
    line: "Der schönste Ruhepol am Bodensee.",
  },

  camping: {
    heading: "Camping am Naturjuwel Rohrspitz",
    intro:
      "Vom 01. April bis 15. Oktober campst du auf parzellierten Stellplätzen mit Strom — Badestrand, Kiosk und Seerestaurant liegen nur ein paar Schritte entfernt.",
    features: [
      {
        title: "Parzellierte Stellplätze",
        text: "Plätze in vielen Größen — vom kleinen Zeltplatz bis zum 90-m²-Familienplatz, alle mit eigenem Stromanschluss.",
        image: { src: `${IMG}/gallery-773211aa11.webp`, alt: "Parzellierte Stellplätze am Rohrspitz aus der Luft" },
      },
      {
        title: "Kiosk SeeYou",
        text: "Das Herzstück am Rohrspitz: Rezeption, Snacks, Eis und gekühlte Getränke auf der großen, geselligen Terrasse.",
        image: { src: `${IMG}/gallery-ae6b4d769e.webp`, alt: "Kiosk SeeYou mit Terrasse am Rohrspitz" },
      },
      {
        title: "Terrasse mit Seeblick",
        text: "Direkt am Schilfgürtel sitzt du mit Blick über den Bodensee — ideal für den Sonnenuntergang am Abend.",
        image: { src: `${IMG}/gallery-9dac7985c9.webp`, alt: "Terrasse mit Seeblick über den Bodensee am Rohrspitz" },
      },
      {
        title: "Frisches vom Kiosk",
        text: "Kaffee, frisches Gebäck und kleine Köstlichkeiten gibt es jeden Morgen direkt an der Rezeption.",
        image: { src: `${IMG}/gallery-b995f0a8e7.webp`, alt: "Frische Backwaren am Kiosk des Rohrspitz" },
      },
      {
        title: "Restaurant SeeYou",
        text: "Pizza und mediterrane Küche im Panoramasaal mit Seeblick — direkt am Platz, von Familie Konstatzky geführt.",
        image: { src: `${IMG}/gallery-cfdaf37cd4.webp`, alt: "Restaurant SeeYou mit Terrasse am Rohrspitz" },
      },
      {
        title: "Natur vor dem Vorzelt",
        text: "Schwäne, Wasservögel und 2000 Hektar Schutzgebiet beginnen gleich hinter deinem Stellplatz.",
        image: { src: `${IMG}/gallery-d901e1b2cb.webp`, alt: "Schwanenfamilie auf der Campingwiese am Rohrspitz" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Rohrspitz",
    intro:
      "Baden, Wassersport und das Naturschutzgebiet Rheindelta mit über 300 Vogelarten — vor dem Vorzelt beginnt das Abenteuer am Bodensee.",
    items: [
      {
        title: "Wassersport am Bodensee",
        text: "Segeln, Motorboot und Wasserski — der Naturhafen ist ein beliebtes Anlaufziel für Gästeboote.",
        image: { src: `${IMG}/gallery-20ced0468d.webp`, alt: "Boot im Hafen am Bodensee beim Rohrspitz" },
      },
      {
        title: "Tiere & Pflanzen",
        text: "Über 300 Vogelarten und 500 Pflanzenarten leben rund um den Rohrspitz im Naturschutzgebiet Rheindelta.",
        image: { src: `${IMG}/gallery-38c3b3136f.webp`, alt: "Libelle im Schilf des Naturschutzgebiets Rheindelta" },
      },
      {
        title: "Strand & Spaziergänge",
        text: "Der hauseigene Kiesstrand lädt zum Baden, Steinesammeln und zu langen Uferspaziergängen ein.",
        image: { src: `${IMG}/activity-819940c37c.webp`, alt: "Kiesstrand am Bodensee am Rohrspitz" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nur über Höchst",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Die Zufahrt erfolgt ausschließlich über die Gemeinde Höchst — manche Navis führen über Fußach in die Irre. Folge der Beschilderung „Rohrspitz“ bis an den See zum Parkplatz Salzmann.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Nächster Bahnhof ist Bregenz, von dort weiter mit dem Bus Richtung Höchst (Haltestelle Hecht). Der Betrieb ist mit Öffis nicht direkt erreichbar.",
      },
      {
        title: "Mit Rad & zu Fuß",
        text: "Der Bodensee-Radwanderweg führt direkt an unserem Betrieb vorbei — ideal für die Anreise mit dem Rad.",
      },
    ],
  },

  galerie: {
    heading: "Sommer am Rohrspitz",
    headingEmphasis: "Sommer",
    intro: "Seeluft, Segelmasten und goldene Abende am Bodensee — ein paar Eindrücke vom Rohrspitz.",
    tag: "April bis Oktober",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-81ae22a908.webp`, alt: "Blühende Terrasse am Kiosk mit Bergblick" },
      { src: `${IMG}/gallery-5fe82d9ec8.webp`, alt: "Boote im Hafen am Bodensee bei Sonnenschein" },
      { src: `${IMG}/gallery-4adf564edd.webp`, alt: "Wasservögel im Naturschutzgebiet Rheindelta" },
      { src: `${IMG}/gallery-e514a62993.webp`, alt: "Abendstimmung über dem Hafen am Bodensee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz am Rohrspitz",
    headingEmphasis: "am Rohrspitz",
    intro:
      "Reservierungen sind ab einer Nacht möglich — für jede Platzkategorie empfehlen wir, vorab zu buchen. Wir bestätigen dir deine Verfügbarkeit am Rohrspitz.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz-Grundpreise laut veröffentlichter Preisliste — Erwachsene € 9, Kinder € 5,50 und € 2,60 Gästetaxe pro Person/Nacht kommen hinzu; bitte aktuelle Tarife bestätigen.",
    highlight: {
      title: "Direkt am Wasser",
      text: "Hauseigener Badestrand und Yachthafen liegen direkt am Platz.",
    },
    categories: [
      { id: "spartarif", label: "Spartarif · kleines Zelt", perNight: 16.1, perExtraGuest: 9 },
      { id: "standard", label: "Standard · Hauszelt / kleines Wohnmobil", perNight: 22.2, perExtraGuest: 9 },
      { id: "deluxe", label: "Deluxe · Wohnwagen / Wohnmobil", perNight: 27.8, perExtraGuest: 9 },
      { id: "superdeluxe", label: "Super Deluxe · Familienplatz ab 90 m²", perNight: 39.5, perExtraGuest: 9 },
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
        { label: "Kiosk & Restaurant", href: "#camping" },
      ],
    },
    { label: "Natur & Aktiv", href: "#aktivitaeten" },
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
