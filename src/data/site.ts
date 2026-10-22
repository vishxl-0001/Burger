/**
 * =====================================================================
 * VUR BURGER - ZENTRALE DATENQUELLE (CONTENT & CONFIG)
 * =====================================================================
 * Alle Inhalte, Öffnungszeiten, Kontaktdaten und die Speisekarte 
 * können direkt in dieser Datei angepasst werden.
 */

export interface OpeningHourDay {
  dayName: string;
  dayShort: string;
  dayIndex: number; // 0 = Sonntag, 1 = Montag, ..., 6 = Samstag (JS getDay())
  open: string;     // Format "HH:mm" z.B. "14:00"
  close: string;    // Format "HH:mm" z.B. "22:00"
  isClosed: boolean;
  notes?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  badge?: string;
  spicy?: boolean;
  vegetarian?: boolean;
  popular?: boolean;
  ingredients?: string[];
}

export interface SignatureBurger {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  photoSlot: string;
  badge: string;
  sauceNote: string;
}

export interface ValueCard {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  photoSlot: string;
  title: string;
  subtitle: string;
  tag: string;
}

export const siteConfig = {
  brand: {
    name: "VUR Burger",
    shortName: "VUR",
    tagline: "Burger. Pommes. Fertig.",
    subtitle: "Frisch zubereitet. Richtig saftig. Mitten in Germersheim.",
    type: "Burger Imbiss & Snack Bar",
    foundingYear: "2023",
  },

  contact: {
    address: {
      street: "Münchener Str. 14",
      zip: "76726",
      city: "Germersheim",
      region: "Rheinland-Pfalz",
      country: "Deutschland",
      full: "Münchener Str. 14, 76726 Germersheim",
    },
    phone: "tel:+4917621016719",
    phoneDisplay: "+49 176 21016719",
    phoneRaw: "+4917621016719",
    whatsappNumber: "4917621016719",
    whatsappBaseUrl: "https://wa.me/4917621016719",
    whatsappDefaultMessage: "Hallo VUR Burger, ich möchte gerne bestellen:\n\n1x ",
    instagramUrl: "https://www.instagram.com/v.u.r_burger/",
    instagramHandle: "@v.u.r_burger",
    googleMapsUrl: "https://maps.google.com/?q=M%C3%BCnchener+Str.+14,+76726+Germersheim",
    googleDirectionsUrl: "https://www.google.com/maps/dir//M%C3%BCnchener+Str.+14,+76726+Germersheim",
  },

  socialProof: {
    rating: "5,0",
    maxRating: "5",
    reviewsCount: 55,
    source: "Google Bewertungen",
    quote: "Bester Burger im ganzen Umkreis. Das Fleisch ist perfekt auf den Punkt, die Saucen ein Traum!",
  },

  /**
   * =====================================================================
   * ÖFFNUNGSZEITEN (Verifiziert anhand des Aushangs vor Ort)
   * Mo-Do & So: 14:00 - 22:00 Uhr | Fr & Sa: 14:00 - 24:00 Uhr
   * =====================================================================
   */
  openingHours: [
    { dayName: "Montag", dayShort: "Mo", dayIndex: 1, open: "14:00", close: "22:00", isClosed: false },
    { dayName: "Dienstag", dayShort: "Di", dayIndex: 2, open: "14:00", close: "22:00", isClosed: false },
    { dayName: "Mittwoch", dayShort: "Mi", dayIndex: 3, open: "14:00", close: "22:00", isClosed: false },
    { dayName: "Donnerstag", dayShort: "Do", dayIndex: 4, open: "14:00", close: "22:00", isClosed: false },
    { dayName: "Freitag", dayShort: "Fr", dayIndex: 5, open: "14:00", close: "24:00", isClosed: false },
    { dayName: "Samstag", dayShort: "Sa", dayIndex: 6, open: "14:00", close: "24:00", isClosed: false },
    { dayName: "Sonntag", dayShort: "So", dayIndex: 0, open: "14:00", close: "22:00", isClosed: false },
  ] as OpeningHourDay[],

  marqueeStrip: [
    "ECHTER SMASH BURGER",
    "BURGER. POMMES. FERTIG.",
    "GERMERSHEIM",
    "100% FRISCH GEGRILLT",
    "WET BURGER & HOT DOGS",
    "5,0 ★ GOOGLE REVIEWS",
    "MÜNCHENER STR. 14",
    "KNUSPRIGE POMMES",
  ],

  // Highlights / Klassiker (Exakt abgestimmt auf die realen Food-Fotos)
  signatureBurgers: [
    {
      id: "vur-classic-smash",
      name: "VUR Original Smash",
      tagline: "Kross gebraten & herrlich saftig",
      description: "Frisch auf der heißen Platte gesmashed mit hauchdünnen, krossen Rändern, doppelt geschmolzenem Cheddar, knackigen Pickles und hauseigener VUR Spezial-Sauce im fluffig getoasteten Bun.",
      price: "9,90 €",
      photoSlot: "/images/burger-1.jpg",
      badge: "Kunden-Liebling",
      sauceNote: "Mit original VUR Haus-Sauce",
    },
    {
      id: "burger-combo-platter",
      name: "VUR Street Combo Platter",
      tagline: "Das volle Geschmackserlebnis",
      description: "Dein Wunsch-Burger zusammen mit einer riesigen Portion knusprig goldener Pommes Frites, krossen Chicken Tenders und zwei hausgemachten Dips nach Wahl.",
      price: "14,50 €",
      photoSlot: "/images/burger-2.jpg",
      badge: "Volles Menü",
      sauceNote: "Inklusive 2 Saucen nach Wahl",
    },
    {
      id: "crispy-chicken",
      name: "Crunchy Chicken Supreme",
      tagline: "Extra knusprige Panade & Buttermilch",
      description: "Zartes Hähnchenfilet in goldener Knusperkruste gebacken, cremig geschmolzener Cheddar, frischer Salat und hausgemachte Knoblauch-Kräuter-Mayonnaise. Perfekt mit eiskalter Fritz-Kola.",
      price: "10,50 €",
      photoSlot: "/images/burger-3.jpg",
      badge: "Super Knusprig",
      sauceNote: "Hausgemachte Knoblauch-Kräuter-Creme",
    },
    {
      id: "street-dog-loaded",
      name: "VUR Loaded Street Dog",
      tagline: "Knackig, herzhaft & reichlich belegt",
      description: "Knackig gegrillte Wurst im weichen Brioche-Bun mit feinem Gurkenrelish, frischen Zwiebelwürfeln, goldbraunen Röstzwiebeln und würziger VUR Signature-Sauce.",
      price: "6,90 €",
      photoSlot: "/images/burger-4.jpg",
      badge: "Street-Food Hit",
      sauceNote: "Mit Röstzwiebeln & Spezial-Sauce",
    },
  ] as SignatureBurger[],

  // Vollständige Speisekarte nach Kategorien
  menuCategories: [
    {
      id: "burger",
      name: "Smash Burger",
      description: "Täglich frisch zubereitetes 100% Rindfleisch, heiß und kross auf der Platte gesmashed.",
      items: [
        {
          id: "b1",
          name: "VUR Classic Smash Burger",
          description: "Saftiges Rindfleisch, geschmolzener Cheddar, Gewürzgurken, rote Zwiebeln, VUR Sauce",
          price: "9,90 €",
          popular: true,
        },
        {
          id: "b2",
          name: "Double Smash Cheese",
          description: "2x Beef Patties, 4x Cheddar, karamellisierte Zwiebeln, Spezial-Dressing",
          price: "12,90 €",
          badge: "Bestseller",
        },
        {
          id: "b3",
          name: "Smoky BBQ Bacon Smash",
          description: "Beef Patty, knuspriger Bacon, Cheddar, Schmorzwiebeln, rauchige BBQ-Sauce",
          price: "11,50 €",
        },
        {
          id: "b4",
          name: "Wet Burger (Islak Burger)",
          description: "Traditioneller saftig-würziger Burger in aromatischer Knoblauch-Tomatensauce gedämpft",
          price: "7,50 €",
          badge: "Spezialität",
        },
        {
          id: "b5",
          name: "Chili Cheese Smash",
          description: "Beef Patty, scharfe Jalapeños, warme Käsesauce, Röstzwiebeln",
          price: "11,90 €",
          spicy: true,
        },
        {
          id: "b6",
          name: "VUR Veggie Smash",
          description: "Hausgemachtes vegetarisches Patty, Cheddar, knackiger Salat, Gurkenrelish",
          price: "10,50 €",
          vegetarian: true,
        },
      ],
    },
    {
      id: "chicken",
      name: "Chicken & Hot Dogs",
      description: "Super knuspriges Hähnchenfilet und reichhaltig belegte Street Dogs.",
      items: [
        {
          id: "c1",
          name: "Crunchy Chicken Supreme",
          description: "Krosses Chicken Filet, Eisbergsalat, Cheddar, Tomate, Homemade Garlic-Mayo",
          price: "10,50 €",
          popular: true,
        },
        {
          id: "c2",
          name: "VUR Loaded Street Dog",
          description: "Knackige Wurst, Röstzwiebeln, Gewürzgurken, Zwiebeln, Spezial-Sauce",
          price: "6,90 €",
          popular: true,
          badge: "Beliebt",
        },
        {
          id: "c3",
          name: "Chicken Tenders (5 Stück)",
          description: "Zarte Filetstreifen in goldener Knusperpanade, inkl. 1 Dip nach Wahl",
          price: "7,90 €",
        },
        {
          id: "c4",
          name: "Chicken Tenders (8 Stück)",
          description: "Extra große Portion Knusperfilets zum Teilen, inkl. 2 Dips nach Wahl",
          price: "11,50 €",
        },
      ],
    },
    {
      id: "fries",
      name: "Pommes & Beilagen",
      description: "Extra knusprig frittiert und würzig abgeschmeckt.",
      items: [
        {
          id: "f1",
          name: "Pommes Frites (Klassisch)",
          description: "Goldgelb, außen kross, innen fluffig mit feinem Pommessalz",
          price: "4,20 €",
          popular: true,
        },
        {
          id: "f2",
          name: "Chili Cheese Fries",
          description: "Große Portion Pommes mit warmer Käsesauce, Jalapeños & Röstzwiebeln",
          price: "7,50 €",
          spicy: true,
          badge: "Loaded",
        },
        {
          id: "f3",
          name: "Süßkartoffel-Pommes",
          description: "Knusprige Sweet Potato Fries mit Meersalz",
          price: "5,40 €",
        },
        {
          id: "f4",
          name: "Onion Rings (8 Stück)",
          description: "Ganze Zwiebelringe im Bierteig kross ausgebacken mit Dip",
          price: "5,50 €",
          vegetarian: true,
        },
      ],
    },
    {
      id: "sauces",
      name: "Hausgemachte Saucen & Dips",
      description: "Frisch zubereitet nach eigener Rezeptur.",
      items: [
        { id: "s1", name: "VUR Signature Sauce", description: "Cremig, leicht würzig – das Geheimnis unserer Burger", price: "1,50 €", popular: true },
        { id: "s2", name: "Warme Käsesauce", description: "Flüssiger geschmolzener Cheddar-Dip", price: "2,00 €" },
        { id: "s3", name: "Knoblauch-Kräuter Creme", description: "Frischer Knoblauch & feine Kräuter", price: "1,50 €" },
        { id: "s4", name: "Smoky BBQ Sauce", description: "Rauchig-süße Barbecue-Sauce", price: "1,50 €" },
        { id: "s5", name: "Ketchup & Mayo", description: "Klassische Markenqualität", price: "1,00 €" },
      ],
    },
    {
      id: "drinks",
      name: "Getränke & Soft Drinks",
      description: "Eiskalt serviert zu deinem Essen.",
      items: [
        { id: "d1", name: "Fritz-Kola (0,33l)", description: "Viel Koffein, unverwechselbarer Geschmack", price: "3,20 €", popular: true },
        { id: "d2", name: "Fritz-Kola Superzero (0,33l)", description: "Voller Geschmack ohne Zucker", price: "3,20 €" },
        { id: "d3", name: "Fritz-Limo Orange / Zitrone (0,33l)", description: "Fruchtig & erfrischend", price: "3,20 €" },
        { id: "d4", name: "Mineralwasser (0,5l)", description: "Still oder mit Sprudel", price: "2,50 €" },
        { id: "d5", name: "Ayran (0,25l)", description: "Klassisch kühl zu herzhaftem Street Food", price: "2,00 €" },
      ],
    },
  ],

  // Die 3 Werte / "Warum VUR"
  values: [
    {
      number: "01",
      title: "Echter Smash am Grill",
      highlight: "Frisch gepresst",
      description: "Keine fertigen Tiefkühl-Patties. Unser Fleisch wird mit voller Hitze auf der Stahlplatte gesmashed – für unwiderstehlich knusprige Ränder und maximal saftigen Kern.",
    },
    {
      number: "02",
      title: "Eigene Saucen & Frische",
      highlight: "Hausgemacht",
      description: "Von unserer legendären VUR House-Sauce bis zu den marinierten Zwiebeln: Wir bereiten unsere Komponenten selbst zu. Schmeckt man beim ersten Bissen.",
    },
    {
      number: "03",
      title: "Burger. Pommes. Fertig.",
      highlight: "Münchener Str. 14",
      description: "Direkt an der Münchener Straße in Germersheim (neben JET). Gemütlicher Außenbereich mit Sitzplätzen, ausreichend Parkplätze und ultraschnelle Zubereitung.",
    },
  ] as ValueCard[],

  stats: [
    { value: "5,0", label: "Sterne auf Google", suffix: "★" },
    { value: "55+", label: "Echte Bewertungen", suffix: "" },
    { value: "100%", label: "Frisch zubereitet", suffix: "" },
    { value: "0%", label: "Schnickschnack", suffix: "" },
  ],

  // Galerie-Elemente (Echte Fotos aus der Küche und vom Standort)
  gallery: [
    {
      id: "g1",
      photoSlot: "/images/gallery-1.jpg",
      title: "V.U.R. Burger Food Trailer",
      subtitle: "Offizielles Branding & Menü-Board",
      tag: "Street Food",
    },
    {
      id: "g2",
      photoSlot: "/images/gallery-2.jpg",
      title: "Sonniger Außenbereich",
      subtitle: "Rote Schirme & Holztische zum Verweilen",
      tag: "Outdoor Vibes",
    },
    {
      id: "g3",
      photoSlot: "/images/gallery-3.jpg",
      title: "Frisch am Grill",
      subtitle: "Zubereitung mit Herzblut vor deinen Augen",
      tag: "Handwerk",
    },
    {
      id: "g4",
      photoSlot: "/images/gallery-4.jpg",
      title: "Team bei der Arbeit",
      subtitle: "Schneller Service & heiße Burger",
      tag: "Küche",
    },
    {
      id: "g5",
      photoSlot: "/images/gallery-5.jpg",
      title: "Unser Stand am Tag",
      subtitle: "Münchener Str. 14 in Germersheim",
      tag: "Standort",
    },
    {
      id: "g6",
      photoSlot: "/images/gallery-6.jpg",
      title: "Abendstimmung & Parken",
      subtitle: "Bequem vorfahren & direkt abholen",
      tag: "Germersheim",
    },
    {
      id: "g7",
      photoSlot: "/images/gallery-7.jpg",
      title: "Zentral erreichbar",
      subtitle: "Direkt neben der JET-Tankstelle",
      tag: "Anfahrt",
    },
    {
      id: "g8",
      photoSlot: "/images/gallery-8.jpg",
      title: "VUR Loaded Street Dog",
      subtitle: "Knackig mit Röstzwiebeln & Spezial-Sauce",
      tag: "Spezialität",
    },
  ] as GalleryItem[],

  // Rechtliches & Impressum (Platzhalter für den Inhaber)
  legal: {
    impressum: {
      title: "Impressum",
      operator: "VUR Burger [Rechtsform bitte ergänzen, z. B. Einzelunternehmen / GbR / UG]",
      owner: "[Vorname Nachname des Inhabers]",
      street: "Münchener Str. 14",
      city: "76726 Germersheim",
      country: "Deutschland",
      phone: "+49 176 21016719",
      email: "[E-Mail-Adresse bitte ergänzen, z. B. kontakt@vurburger.de]",
      taxId: "[USt-IdNr. falls vorhanden bitte ergänzen, z. B. DE 123 456 789]",
      register: "[Handelsregister / Amtsgericht falls vorhanden bitte ergänzen]",
      disclaimer: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      responsible: "Verantwortlicher im Sinne der DSGVO: VUR Burger, Münchener Str. 14, 76726 Germersheim.",
      dataCollection: "Diese Webseite ist eine reine Informationsseite. Wir speichern keine personenbezogenen Daten auf unseren Servern, setzen keine Tracking-Cookies und verwenden keine externen Werbenetzwerke.",
      externalLinks: "Bei Klick auf externe Links (z. B. WhatsApp, Instagram, Google Maps) verlassen Sie unsere Webseite. Dabei gelten die Datenschutzbestimmungen der jeweiligen Anbieter (Meta Platforms Ireland Ltd. bzw. Google Ireland Limited).",
      contactNotice: "Wenn Sie uns per WhatsApp oder Telefon kontaktieren, nutzen wir Ihre übermittelten Daten ausschließlich zur Bearbeitung Ihrer Bestellung oder Anfrage.",
    },
  },
};
