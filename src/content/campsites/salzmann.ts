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
  regionLong: "Rheindelta · Bodensee · Vorarlberg · Österreich",

  heroVariant: "center",

  claim: "Dein Sommer am Bodensee — mitten im Rheindelta",
  claimEmphasis: "am Bodensee",
  emailDetail: "euer hauseigener Badestrand direkt am Bodensee",
  intro:
    "Vom 1. April bis 15. Oktober campst du am Rohrspitz mitten im Naturschutzgebiet Rheindelta — mit parzellierten Stellplätzen, eigenem Badestrand und Yachthafen direkt am Bodensee.",

  statement: {
    text: "Bei uns liegt der Bodensee direkt hinter deinem Vorzelt — und ringsum 2000 Hektar Naturschutzgebiet.",
    emphasis: "der Bodensee",
  },

  pillars: [
    { title: "Direkt am Bodensee", text: "Der hauseigene Badestrand liegt direkt am Platz — Seeblick und Schwimmen inklusive.", image: { src: `${IMG}/activity-dc9fd8444b.webp`, alt: "Kiesstrand am Bodensee beim Camping Rohrspitz" } },
    { title: "Mitten im Naturschutzgebiet", text: "Rings um den Rohrspitz erstrecken sich 2000 Hektar Rheindelta mit über 300 Vogelarten.", image: { src: `${IMG}/gallery-d901e1b2cb.webp`, alt: "Schwanenfamilie auf der Wiese am Camping Rohrspitz" } },
    { title: "Eigener Yachthafen", text: "Der eigene Hafen beheimatet 190 Boote — vom Steg direkt hinaus auf den Bodensee.", image: { src: `${IMG}/gallery-5fe82d9ec8.webp`, alt: "Yachthafen am Rohrspitz am Bodensee" } },
  ],

  usps: [
    "Hauseigener Badestrand",
    "Stellplätze mit Strom",
    "Eigener Yachthafen",
    "Im Naturschutzgebiet",
    "Hunde willkommen",
    "Eco-Camping zertifiziert",
  ],

  trust: {
    heading: "Naturcamping zwischen See und Schilf",
    headingEmphasis: "zwischen See und Schilf",
    intro:
      "Seit Jahrzehnten führt Familie Salzmann den Platz am Rohrspitz im Einklang mit der Natur — eigener Badestrand, Yachthafen und die Ruhe des Rheindeltas inklusive. Zweifach mit Umweltauszeichnungen prämiert.",
  },

  awards: [{ label: "Eco-Camping" }],

  saison: { von: "April", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-42587ec105.webp`, alt: "Luftaufnahme: Camping Rohrspitz am Bodensee mit Blick auf die Alpen" },
  },

  breather: {
    image: { src: `${IMG}/gallery-77992a2890.webp`, alt: "Luftaufnahme des Rohrspitz mit Hafen und Bodensee" },
    line: "Mittendrin im Rheindelta — und doch ganz nah am Wasser.",
  },

  camping: {
    heading: "Camping am Rohrspitz",
    intro:
      "Parzellierte Stellplätze in vielen Größen, kurze Wege ans Wasser und alles für entspannte Tage am Bodensee.",
    features: [
      { title: "Parzellierte Stellplätze", text: "Stellplätze in verschiedenen Größen mit Stromanschluss — freie Platzwahl über das Online-Buchungssystem.", image: { src: `${IMG}/gallery-773211aa11.webp`, alt: "Luftbild der parzellierten Stellplätze am Camping Rohrspitz" } },
      { title: "Hauseigener Badestrand", text: "Der eigene Badestrand am Bodensee lädt direkt vom Platz zum Schwimmen und Sonnen ein.", image: { src: `${IMG}/gallery-2983d5d729.webp`, alt: "Badestrand und Hafeneinfahrt am Rohrspitz" } },
      { title: "Kiosk SeeYou", text: "Der Selbstbedienungs-Kiosk SeeYou versorgt dich mit Snacks, Getränken und Eis am Platz.", image: { src: `${IMG}/gallery-ae6b4d769e.webp`, alt: "Kiosk SeeYou mit Terrasse am Camping Rohrspitz" } },
      { title: "Frisches Gebäck", text: "Frische Backwaren und Frühstücksgebäck holst du dir jeden Morgen direkt am Kiosk.", image: { src: `${IMG}/gallery-b995f0a8e7.webp`, alt: "Frisches Gebäck am Kiosk des Camping Rohrspitz" } },
      { title: "Restaurant direkt am See", text: "Das Restaurant SeeYou serviert Pizza und mediterrane Küche mit Panoramablick auf den See.", image: { src: `${IMG}/gallery-cfdaf37cd4.webp`, alt: "Terrasse des Restaurant SeeYou am Rohrspitz" } },
      { title: "Sonnenterrasse mit Seeblick", text: "Auf der Terrasse am Kiosk sitzt du im Schatten mit Blick über Schilf und Bodensee.", image: { src: `${IMG}/gallery-9dac7985c9.webp`, alt: "Sonnenterrasse mit Seeblick am Rohrspitz" } },
    ],
  },

  aktivitaeten: {
    heading: "Wasser & Natur am Rohrspitz",
    intro:
      "Baden, Boot fahren oder einfach die Vogelwelt des Rheindeltas beobachten — rund um den Platz liegt das Naturparadies Bodensee.",
    items: [
      { title: "Wassersport am Bodensee", text: "Vom eigenen Hafen aus startest du zum Segeln und Bootfahren auf dem Bodensee.", image: { src: `${IMG}/gallery-a0c1898e0e.webp`, alt: "Boote im Yachthafen am Rohrspitz" } },
      { title: "Vogelparadies Rheindelta", text: "Über 300 Vogelarten leben im Rheindelta — ein Paradies für Beobachter direkt vor dem Zelt.", image: { src: `${IMG}/gallery-4adf564edd.webp`, alt: "Wasservögel im Naturschutzgebiet Rheindelta" } },
      { title: "Artenreiche Natur", text: "Über 500 Pflanzenarten und seltene Tiere machen jeden Spaziergang am Rohrspitz besonders.", image: { src: `${IMG}/gallery-38c3b3136f.webp`, alt: "Libelle im Schilf am Rohrspitz" } },
    ],
  },

  anreise: {
    heading: "Dein Weg an den Rohrspitz",
    modes: [
      { title: "Mit dem Auto", text: "Die Zufahrt erfolgt ausschließlich über die Gemeinde Höchst (L202) — manche Navis leiten fälschlich über Fußach, was nur per Rad oder zu Fuß erlaubt ist." },
      { title: "Mit Bahn & Bus", text: "Nächster Bahnhof ist Bregenz, von dort weiter Richtung Höchst; direkt mit Öffis ist der Platz nicht erreichbar." },
      { title: "Mit dem Rad", text: "Der Bodensee-Radweg führt direkt an unserem Betrieb vorbei — ideal für die letzte Etappe ans Wasser." },
    ],
  },

  galerie: {
    heading: "Sommer am Rohrspitz",
    headingEmphasis: "Sommer",
    intro: "Seeblick, Schilf und lange Abende am Bodensee — ein paar Eindrücke vom Rohrspitz.",
    tag: "April bis Oktober",
    moreCount: 16,
    images: [
      { src: `${IMG}/gallery-d243378d0f.webp`, alt: "Abendstimmung am Hafen des Rohrspitz" },
      { src: `${IMG}/activity-819940c37c.webp`, alt: "Treibholz am Strand des Rohrspitz" },
      { src: `${IMG}/gallery-0bc8c2814b.webp`, alt: "Terrasse mit Blick auf die Stellplätze am Rohrspitz" },
      { src: `${IMG}/gallery-5d12f37704.webp`, alt: "Boot im Abendlicht auf dem Bodensee" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Rohrspitz",
    headingEmphasis: "am Rohrspitz",
    intro: "Wähle Zeitraum und Stellplatzgröße — Familie Salzmann bestätigt deine Verfügbarkeit persönlich.",
    pricesArePlaceholder: false,
    priceNote: "ab-Preis = Stellplatz pro Nacht; Personen zzgl. (Erwachsene € 9, Kinder € 5,50), Gästetaxe € 2,60 & Strom — 10 % Ermäßigung ab 7 Nächten.",
    highlight: { title: "Direkt am Wasser", text: "Vom Stellplatz sind es nur wenige Schritte zum eigenen Badestrand." },
    categories: [
      { id: "super-spar", label: "Kleinstzelt (Super Spartarif)", perNight: 13.40, perExtraGuest: 9 },
      { id: "zelt", label: "Spartarif (kleines Zelt)", perNight: 16.10, perExtraGuest: 9 },
      { id: "standard", label: "Standard (Hauszelt / Wohnmobil)", perNight: 22.20, perExtraGuest: 9 },
      { id: "deluxe", label: "Deluxe (Wohnwagen / Wohnmobil)", perNight: 27.80, perExtraGuest: 9 },
      { id: "familienplatz", label: "Familienplatz ab 90 m²", perNight: 39.50, perExtraGuest: 9 },
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
      { label: "Kiosk & Restaurant", href: "#camping" },
    ]},
    { label: "Aktiv & Natur", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default salzmann;
