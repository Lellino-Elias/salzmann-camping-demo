import type { CampsiteConfig } from "../types";

const IMG = "/campsites/salzmann";

const salzmann: CampsiteConfig = {
  name: "Campingplatz Rohrspitz Salzmann",
  shortName: "Rohrspitz",
  slug: "salzmann",
  ort: "Fußach",
  region: "Vorarlberg",
  brandKind: "Camping am Bodensee",
  see: "Bodensee",
  regionLong: "Rheindelta · Bodensee · Vorarlberg, Österreich",

  heroVariant: "center",

  claim: "Dein Sommer am Bodensee — mitten im Naturjuwel Rheindelta",
  claimEmphasis: "Naturjuwel Rheindelta",
  emailDetail: "eure Lage direkt am Bodensee mitten im Naturschutzgebiet Rheindelta",
  intro:
    "Vom 1. April bis 15. Oktober campst du am Rohrspitz mitten im Naturschutzgebiet Rheindelta: parzellierte Stellplätze mit Strom, ein hauseigener Badestrand und der Bodensee direkt vor dir.",

  statement: {
    text: "Hier beginnt das Naturschutzgebiet Rheindelta gleich hinter deinem Vorzelt — und der Bodensee gleich davor.",
    emphasis: "gleich hinter deinem Vorzelt",
  },

  pillars: [
    {
      title: "Direkt am Bodensee",
      text: "Der hauseigene Badestrand liegt unmittelbar am Platz — Seeblick und kurze Wege ins Wasser inklusive.",
      image: { src: `${IMG}/activity-dc9fd8444b.webp`, alt: "Hauseigener Badestrand am Bodensee beim Rohrspitz" },
    },
    {
      title: "Parzellierte Stellplätze",
      text: "Plätze in verschiedensten Größen, alle mit Stromanschluss — ruhig gelegen am Damm zwischen Wiese und See.",
      image: { src: `${IMG}/gallery-42587ec105.webp`, alt: "Stellplätze am Rohrspitz aus der Luft, am Bodensee" },
    },
    {
      title: "Mitten im Naturparadies",
      text: "2000 Hektar Rheindelta umgeben den Platz — Schwäne, Schilf und Auwald gehören hier zum Alltag.",
      image: { src: `${IMG}/gallery-d901e1b2cb.webp`, alt: "Schwanenfamilie auf der Wiese am Rohrspitz" },
    },
  ],

  usps: [
    "Hauseigener Badestrand",
    "Stellplätze mit Strom",
    "Yachthafen mit 190 Plätzen",
    "Hunde willkommen",
    "Eco-Camping seit 2006",
    "Seerestaurant & Kiosk",
  ],

  trust: {
    heading: "Familienbetrieb am Bodensee seit Jahrzehnten",
    headingEmphasis: "seit Jahrzehnten",
    intro:
      "Günther und Jasmin Salzmann führen den Rohrspitz als Familienbetrieb — sanfter Umgang mit der Natur, ausgezeichnet mit Eco-Camping, und ein Platz, an dem 2000 Hektar Rheindelta direkt vor der Tür liegen.",
  },

  awards: [{ label: "Eco-Camping seit 2006" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-77992a2890.webp`, alt: "Luftaufnahme: Campingplatz, Hafen und Strand am Rohrspitz am Bodensee" },
  },

  camping: {
    heading: "Camping am Naturjuwel Rohrspitz",
    intro:
      "Erholsame Urlaubstage im Einklang mit der Natur: parzellierte Stellplätze in verschiedenen Größen, alle mit Stromanschluss — dazu Hafen, Strand und Seerestaurant direkt am Platz.",
    features: [
      {
        title: "Parzellierte Stellplätze",
        text: "Parzellierte Plätze in verschiedenen Größen, alle mit Stromanschluss — frei wählbar über das Online-Buchungssystem.",
        image: { src: `${IMG}/gallery-773211aa11.webp`, alt: "Parzellierte Stellplätze und Hafen am Rohrspitz von oben" },
      },
      {
        title: "Yachthafen am Platz",
        text: "Der hauseigene Hafen beheimatet rund 190 Schiffe — vom kleinen Boot bis zur Yacht, mitten im Naturschutzgebiet.",
        image: { src: `${IMG}/gallery-d243378d0f.webp`, alt: "Yachthafen am Rohrspitz mit Booten und Bodensee" },
      },
      {
        title: "Seerestaurant SeeYou",
        text: "Pizza und mediterrane Küche mit Seeblick: das Restaurant SeeYou liegt direkt am Platz, mit Terrasse am Wasser.",
        image: { src: `${IMG}/gallery-cfdaf37cd4.webp`, alt: "Sonnenterrasse des Restaurant SeeYou am Rohrspitz" },
      },
      {
        title: "Kiosk mit Brötchenservice",
        text: "Frische Backwaren, Eis und Getränke gibt es im Selbstbedienungs-Kiosk SeeYou — der Treffpunkt mitten am Rohrspitz.",
        image: { src: `${IMG}/gallery-b995f0a8e7.webp`, alt: "Frische Backwaren im Kiosk SeeYou am Rohrspitz" },
      },
      {
        title: "Sonnenterrasse am See",
        text: "Geschützte Terrasse mit Blick über Schilf und Bodensee — der ruhige Platz für Kaffee, Drink und lange Sommerabende.",
        image: { src: `${IMG}/gallery-9dac7985c9.webp`, alt: "Sonnenterrasse mit Blick auf den Bodensee am Rohrspitz" },
      },
      {
        title: "Natur direkt am Zaun",
        text: "Schilf, Auwald und Wasservögel beginnen gleich am Platzrand — das Rheindelta ist hier wirklich zum Greifen nah.",
        image: { src: `${IMG}/gallery-4adf564edd.webp`, alt: "Wasservögel im Rheindelta beim Rohrspitz" },
      },
    ],
  },

  kinder: {
    heading: "Mit Kindern am Rohrspitz",
    intro:
      "Flacher Naturstrand, Spielplatz am Kiosk und viel Wiese zum Toben — am Bodensee dürfen die Kleinen den ganzen Tag draußen sein.",
    features: [
      {
        title: "Spielplatz am Kiosk",
        text: "Rutsche und Klettergerüst stehen direkt beim Kiosk — die Kinder spielen, während du den Seeblick genießt.",
        image: { src: `${IMG}/gallery-ae6b4d769e.webp`, alt: "Spielplatz am Kiosk SeeYou am Rohrspitz" },
      },
      {
        title: "Flacher Naturstrand",
        text: "Der hauseigene Strand fällt sanft in den Bodensee ab — ideal fürs Planschen und die ersten Schwimmversuche.",
        image: { src: `${IMG}/gallery-2983d5d729.webp`, alt: "Luftaufnahme: Badestrand am Rohrspitz mit Badegästen und Hafen am Bodensee" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Rund um den Rohrspitz",
    intro:
      "Wassersport, Naturerlebnis und der Bodensee-Radweg direkt am Platz — Vorarlbergs Westen liegt dir zu Füßen.",
    items: [
      {
        title: "Wassersport am Bodensee",
        text: "Segeln, Motorboot und Wasserski: Partnerbetriebe am Rohrspitz bringen dich aufs Wasser des Bodensees.",
        image: { src: `${IMG}/gallery-5d12f37704.webp`, alt: "Motorboot auf dem Bodensee am Rohrspitz" },
      },
      {
        title: "Naturparadies Rheindelta",
        text: "2000 Hektar Schutzgebiet mit Auwäldern, Schilf und seltenen Vögeln — Natura 2000 direkt vor dem Zelt.",
        image: { src: `${IMG}/gallery-38c3b3136f.webp`, alt: "Libelle im Naturschutzgebiet Rheindelta am Rohrspitz" },
      },
      {
        title: "Hafen & Bootsfahrten",
        text: "Vom Liegeplatz aus startest du in den Tag auf dem Bodensee — der Hafen ist beliebtes Anlaufziel am See.",
        image: { src: `${IMG}/gallery-a0c1898e0e.webp`, alt: "Boote im Hafen am Rohrspitz am Bodensee" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Rohrspitz",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Wichtig: Die Zufahrt erfolgt ausschließlich über Höchst (nicht über Fußach!). Über die A14 Richtung Höchst, dann der Beschilderung „Rohrspitz“ bis an den See folgen.",
      },
      {
        title: "Mit Bahn & Bus",
        text: "Nächste Haltestellen in Höchst und Fußach; ab Fußach Alte Post führt ein rund vier Kilometer langer Rad- und Wanderweg an den See.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Bodensee-Radwanderweg führt direkt an unserem Betrieb vorbei — ideal für die Anreise mit dem Fahrrad.",
      },
    ],
  },

  galerie: {
    heading: "Rohrspitz in Bildern",
    headingEmphasis: "Bildern",
    intro:
      "Hafen, Strand und Sonnenterrasse, Boote im Abendlicht und der weite Bodensee — ein paar Eindrücke vom Rohrspitz.",
    tag: "April bis Oktober",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-81ae22a908.webp`, alt: "Sonnenterrasse mit Blumenschmuck am Rohrspitz" },
      { src: `${IMG}/gallery-0bc8c2814b.webp`, alt: "Überdachte Terrasse mit Blick auf die Stellplätze am Rohrspitz" },
      { src: `${IMG}/gallery-e514a62993.webp`, alt: "Hafen am Rohrspitz im Abendlicht" },
      { src: `${IMG}/gallery-22c7749aef.webp`, alt: "Segelboote und Motorboote im Hafen am Rohrspitz am Bodensee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Bodensee",
    headingEmphasis: "am Bodensee",
    intro:
      "Wähle Zeitraum und Stellplatz — die Campingrezeption am Rohrspitz meldet sich mit deiner Verfügbarkeit. Reservierung ab einer Nacht möglich.",
    pricesArePlaceholder: false,
    priceNote:
      "Stellplatz-Tarife pro Nacht laut Preisliste · zzgl. € 9 je Erwachsenem, € 2,60 Gästetaxe und Strom (€ 5/Tag) · Stand 2026, bitte aktuell bestätigen.",
    highlight: {
      title: "10 % ab 7 Nächten",
      text: "Bei längeren Aufenthalten gibt es ab der siebten Nacht 10 % Ermäßigung.",
    },
    categories: [
      { id: "zelt", label: "Zeltplatz (Spartarif)", perNight: 16.1, perExtraGuest: 9 },
      { id: "standard", label: "Standard-Stellplatz", perNight: 22.2, perExtraGuest: 9 },
      { id: "deluxe", label: "Deluxe-Stellplatz", perNight: 27.8, perExtraGuest: 9 },
      { id: "superdeluxe", label: "Super Deluxe (ab 90 m²)", perNight: 39.5, perExtraGuest: 9 },
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
        { label: "Badestrand", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
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
