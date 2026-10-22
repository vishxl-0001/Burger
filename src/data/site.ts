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
  open: string;     // Format "HH:mm" z.B. "11:30"
  close: string;    // Format "HH:mm" z.B. "21:00"
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
   * ÖFFNUNGSZEITEN (CONFIG)
   * TODO: Öffnungszeiten bitte vom Inhaber prüfen und bestätigen lassen!
   * Aktuelle Werte sind realistische Richtwerte für den Snack-Bar Betrieb.
   * =====================================================================
   */
  openingHours: [
    { dayName: "Montag", dayShort: "Mo", dayIndex: 1, open: "12:00", close: "21:00", isClosed: false },
    { dayName: "Dienstag", dayShort: "Di", dayIndex: 2, open: "12:00", close: "21:00", isClosed: false },
    { dayName: "Mittwoch", dayShort: "Mi", dayIndex: 3, open: "12:00", close: "21:00", isClosed: false },
    { dayName: "Donnerstag", dayShort: "Do", dayIndex: 4, open: "12:00", close: "21:00", isClosed: false },
    { dayName: "Freitag", dayShort: "Fr", dayIndex: 5, open: "12:00", close: "22:00", isClosed: false },
    { dayName: "Samstag", dayShort: "Sa", dayIndex: 6, open: "13:00", close: "22:00", isClosed: false },
    { dayName: "Sonntag", dayShort: "So", dayIndex: 0, open: "13:00", close: "21:00", isClosed: false },
  ] as OpeningHourDay[],

  marqueeStrip: [
    "FRISCH GEGRILLT",
    "BURGER. POMMES. FERTIG.",
    "GERMERSHEIM",
    "HAUSGEMACHTE SAUCEN",
    "KEIN SCHNICKSCHNACK",
    "5,0 ★ GOOGLE REVIEWS",
    "MÜNCHENER STR. 14",
    "KNACKIG & SAFTIG",
  ],

  // Highlights / Klassiker
  signatureBurgers: [
    {
      id: "vur-classic",
      name: "VUR Original Classic",
      tagline: "Der Eckpfeiler unseres Grills",
      description: "100% saftiges Rindfleisch frisch auf dem Grill gesmashed, doppelt geschmolzener Cheddar, knackige Gewürzgurken, rote Zwiebeln und unsere legendäre VUR House-Sauce im getoasteten Brioche Bun.",
      price: "9,90 €",
      photoSlot: "/images/burger-1.jpg",
      badge: "Kunden-Liebling",
      sauceNote: "Mit VUR Spezial-Sauce",
    },
    {
      id: "smoky-bacon",
      name: "Smoky BBQ Bacon",
      tagline: "Karamellisiert & Rauchig",
      description: "Frisch gegrilltes Rindfleisch, extra kross gebratener Bacon, rauchige Hickory BBQ-Sauce, karamellisierte Schmorzwiebeln und cremiger Cheddar.",
      price: "11,50 €",
      photoSlot: "/images/burger-2.jpg",
      badge: "Extra Kräftig",
      sauceNote: "Rauchige Hickory BBQ",
    },
    {
      id: "crispy-chicken",
      name: "Crunchy Chicken Supreme",
      tagline: "Ultra-kross & Buttermilch mariniert",
      description: "Zartes Hähnchenbrustfilet in geheimer Gewürzkruste gebacken, frischer Eisbergsalat, Tomatenscheiben und hauseigene Knoblauch-Kräuter-Mayonnaise.",
      price: "10,50 €",
      photoSlot: "/images/burger-3.jpg",
      badge: "Super Knusprig",
      sauceNote: "Hausgemachte Knoblauch-Kräuter-Creme",
    },
    {
      id: "chili-cheese-fire",
      name: "Chili Cheese Heat",
      tagline: "Scharf & unverschämt cremig",
      description: "Double Beef Smash Patty, feurige Jalapeño-Ringe, schmelzende Chili-Cheddar-Cheese-Sauce und knusprige Röstzwiebeln für den ultimativen Crunch.",
      price: "11,90 €",
      photoSlot: "/images/burger-4.jpg",
      badge: "Hot & Cheesy",
      sauceNote: "Echte Jalapeño-Käse-Sauce",
    },
  ] as SignatureBurger[],

  // Vollständige Speisekarte nach Kategorien
  menuCategories: [
    {
      id: "burger",
      name: "Rindfleisch Burger",
      description: "Täglich frisch gewolftes 100% Rindfleisch, frisch auf heißer Platte gegrillt.",
      items: [
        {
          id: "b1",
          name: "VUR Classic Smash",
          description: "Saftiges Beef, Cheddar, Gewürzgurken, rote Zwiebeln, VUR Sauce",
          price: "9,90 €",
          popular: true,
        },
        {
          id: "b2",
          name: "Double Cheese Monster",
          description: "2x 100g Beef Patties, 4x Cheddar, karamellisierte Zwiebeln, Spezial-Dressing",
          price: "12,90 €",
          badge: "Bestseller",
        },
        {
          id: "b3",
          name: "Smoky BBQ Bacon",
          description: "Beef Patty, knuspriger Bacon, Cheddar, Schmorzwiebeln, BBQ-Sauce",
          price: "11,50 €",
        },
        {
          id: "b4",
          name: "Chili Cheese Inferno",
          description: "Beef Patty, Jalapeños, warme Käsesauce, Röstzwiebeln, Schärfe nach Wahl",
          price: "11,90 €",
          spicy: true,
        },
        {
          id: "b5",
          name: "Truffle & Mushroom",
          description: "Beef Patty, geschmorte Champignons, Schweizer Käse, weiße Trüffelmayo",
          price: "12,50 €",
          badge: "Gourmet",
        },
        {
          id: "b6",
          name: "VUR Veggie Smash",
          description: "Hausgemachtes pflanzliches Patty, Cheddar, Salat, Tomate, Gurkenrelish",
          price: "10,50 €",
          vegetarian: true,
        },
      ],
    },
    {
      id: "chicken",
      name: "Crispy Chicken",
      description: "In Buttermilch mariniertes Hähnchenfilet mit super-crunchy Kruste.",
      items: [
        {
          id: "c1",
          name: "Crunchy Chicken Supreme",
          description: "Krosses Chicken Filet, Eisbergsalat, Tomate, Homemade Garlic-Mayo",
          price: "10,50 €",
          popular: true,
        },
        {
          id: "c2",
          name: "Spicy Honey Hot Chicken",
          description: "Crunchy Chicken glasiert mit feurigem Chili-Honig, Pickles, Coleslaw",
          price: "11,20 €",
          spicy: true,
          badge: "Scharf & Süß",
        },
        {
          id: "c3",
          name: "Chicken Tenders (5 Stück)",
          description: "Zarte handgeschnittene Filetstreifen in Knusperpanade, inkl. 1 Dip nach Wahl",
          price: "7,90 €",
        },
        {
          id: "c4",
          name: "Chicken Tenders (8 Stück)",
          description: "Für den großen Hunger oder zum Teilen, inkl. 2 Dips nach Wahl",
          price: "11,50 €",
        },
      ],
    },
    {
      id: "fries",
      name: "Pommes & Loaded Sides",
      description: "Extra knusprig doppelt frittiert und würzig abgeschmeckt.",
      items: [
        {
          id: "f1",
          name: "VUR Haus-Pommes (Skin-On)",
          description: "Goldgelb, außen knusprig, innen fluffig mit speziellem Pommessalz",
          price: "4,20 €",
          popular: true,
        },
        {
          id: "f2",
          name: "Süßkartoffel-Pommes",
          description: "Knusprige Sweet Potato Fries mit feinem Meersalz",
          price: "5,40 €",
        },
        {
          id: "f3",
          name: "Chili Cheese Fries (Loaded)",
          description: "Große Portion Pommes mit warmem Käsedip, Jalapeños & Röstzwiebeln",
          price: "7,50 €",
          spicy: true,
          badge: "Beliebt",
        },
        {
          id: "f4",
          name: "VUR Truffle Fries",
          description: "Knusprige Pommes mit Parmesan, Trüffelöl & Schnittlauch",
          price: "7,90 €",
        },
        {
          id: "f5",
          name: "Onion Rings (8 Stück)",
          description: "Ganze Zwiebelringe im Bierteig kross ausgebacken mit BBQ-Dip",
          price: "5,50 €",
          vegetarian: true,
        },
      ],
    },
    {
      id: "sauces",
      name: "Hausgemachte Saucen & Dips",
      description: "Frisch zubereitet nach eigener Rezeptur – der pure Geschmack.",
      items: [
        { id: "s1", name: "VUR Signature Sauce", description: "Cremig, leicht würzig, die perfekte Burger-Begleitung", price: "1,50 €", popular: true },
        { id: "s2", name: "Truffle Mayo", description: "Feine Mayonnaise mit echtem schwarzem Trüffel", price: "1,80 €" },
        { id: "s3", name: "Warm Cheese Dip", description: "Flüssiger, cremiger Cheddar-Dip zum Eintauchen", price: "2,00 €" },
        { id: "s4", name: "Chili-Knoblauch Creme", description: "Frischer Knoblauch mit angenehmer Chilinote", price: "1,50 €", spicy: true },
        { id: "s5", name: "Smoky Hickory BBQ", description: "Rauchig-süße Barbecue Sauce nach US-Art", price: "1,50 €" },
        { id: "s6", name: "Ketchup & Mayo (Classic)", description: "Markenqualität klassisch serviert", price: "1,00 €" },
      ],
    },
    {
      id: "drinks",
      name: "Erfrischungsgetränke",
      description: "Eiskalt serviert zu deinem Menü.",
      items: [
        { id: "d1", name: "Fritz-Kola (0,33l)", description: "Viel Koffein, volles Aroma", price: "3,20 €" },
        { id: "d2", name: "Fritz-Kola Ohne Zucker (0,33l)", description: "Voller Geschmack ohne Kalorien", price: "3,20 €" },
        { id: "d3", name: "Fritz-Limo Orange / Zitrone (0,33l)", description: "Fruchtig herb und super erfrischend", price: "3,20 €" },
        { id: "d4", name: "Hausgemachter Eistee (0,4l)", description: "Pfirsich-Zitrone mit frischer Minze", price: "3,80 €", badge: "Hausgemacht", popular: true },
        { id: "d5", name: "Mineralwasser Still / Sprudel (0,33l)", description: "Regionale Quelle", price: "2,50 €" },
        { id: "d6", name: "Ayran (0,25l)", description: "Klassisch kühl & erfrischend", price: "2,00 €" },
      ],
    },
  ],

  // Die 3 Werte / "Warum VUR"
  values: [
    {
      number: "01",
      title: "100% Echtes Fleisch",
      highlight: "Frisch auf den Grill",
      description: "Keine Tiefkühl-Patties, kein Formfleisch. Unser Fleisch wird täglich frisch gewolft und erst bei deiner Bestellung mit Vollgas auf der heißen Platte gesmashed.",
    },
    {
      number: "02",
      title: "Eigene Saucen-Kreationen",
      highlight: "Geheimrezeptur",
      description: "Vom ersten Biss bis zum letzten Pommes-Dip: Alle unsere Hauptsaucen rühren wir selbst an. Fein ausbalanciert zwischen Säure, Würze und Crunch.",
    },
    {
      number: "03",
      title: "Burger. Pommes. Fertig.",
      highlight: "Kein Schnickschnack",
      description: "Wir konzentrieren uns auf das, worauf es ankommt: hemmungslos ehrlicher Geschmack, kross gebackene Brötchen und schneller, herzlicher Service mitten in Germersheim.",
    },
  ] as ValueCard[],

  stats: [
    { value: "5,0", label: "Sterne auf Google", suffix: "★" },
    { value: "55+", label: "Echte Bewertungen", suffix: "" },
    { value: "100%", label: "Frisch zubereitet", suffix: "" },
    { value: "0%", label: "Industrie-Gedöns", suffix: "" },
  ],

  // Galerie-Slots
  gallery: [
    { id: "g1", photoSlot: "/images/gallery-1.jpg", title: "Double Smash am Grill", subtitle: "Frisch auf die Platte", tag: "Grill & Flame" },
    { id: "g2", photoSlot: "/images/gallery-2.jpg", title: "Knusprige Skin-On Fries", subtitle: "Heiß & gesalzen", tag: "Sides" },
    { id: "g3", photoSlot: "/images/gallery-3.jpg", title: "Bacon & geschmolzener Cheddar", subtitle: "Reine Hingabe", tag: "Burger Art" },
    { id: "g4", photoSlot: "/images/gallery-4.jpg", title: "Frische Buns & Zutaten", subtitle: "Täglich frisch geliefert", tag: "Zutaten" },
    { id: "g5", photoSlot: "/images/gallery-5.jpg", title: "Crunchy Chicken Supreme", subtitle: "Kross bis zum Kern", tag: "Crispy" },
    { id: "g6", photoSlot: "/images/gallery-6.jpg", title: "Chili Cheese Glanz", subtitle: "Würzige Jalapeños", tag: "Special" },
    { id: "g7", photoSlot: "/images/gallery-7.jpg", title: "Handgemachte Saucen", subtitle: "Frisch gerührt", tag: "Dips" },
    { id: "g8", photoSlot: "/images/gallery-8.jpg", title: "VUR Burger vor Ort", subtitle: "Münchener Str. 14", tag: "Germersheim" },
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
