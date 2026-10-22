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
  menuPrice?: string;
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
  menuPrice?: string;
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
    "2X 100G FRISCHES BEEF",
    "BURGER. POMMES. FERTIG.",
    "GERMERSHEIM",
    "REMZI'S SPEZIAL DOUBLE",
    "100% PUTEN BACON (HALAL)",
    "5,0 ★ GOOGLE REVIEWS",
    "MÜNCHENER STR. 14",
    "SUCUK & CHEDDAR",
  ],

  menuNote: "Alle Menüs inkl. Pommes oder Süßkartoffel und einem Getränk nach Wahl!",

  // Highlights / Klassiker (Exakt nach der Original-Speisekarte)
  signatureBurgers: [
    {
      id: "remzis-spezial",
      name: "Remzi´s Spezial Double",
      tagline: "Die persönliche Haus-Kreation des Chefs",
      description: "2x 100g frisches Beef gesmashed, doppelter Puten Bacon (Halal), Cheddar Cheese, Sucuk (türkische Knoblauchwurst), gegrillte Zwiebeln, Tomaten, frischer Salat, eingelegte Gurken, mit Cocktail- & eigener Spezialsoße.",
      price: "12,50 €",
      menuPrice: "17,50 €",
      photoSlot: "/images/hero-burger.jpg",
      badge: "Chef-Empfehlung",
      sauceNote: "Cocktail- & eigene Spezialsoße",
    },
    {
      id: "double-smash-bacon",
      name: "Double Smash Cheese Bacon",
      tagline: "Doppelter Puten Bacon (Halal) & Cheddar",
      description: "2x 100g frisches Beef, doppelter Puten Bacon (Halal), Cheddar Cheese, gegrillte Zwiebeln, Tomaten, frischer Salat, eingelegte Gurken, mit feiner Cocktail- & Barbecuesoße.",
      price: "12,50 €",
      menuPrice: "17,50 €",
      photoSlot: "/images/burger-1.jpg",
      badge: "Kunden-Liebling",
      sauceNote: "Cocktail- & Barbecuesoße",
    },
    {
      id: "double-smash-fire",
      name: "Double Smash Cheese on Fire",
      tagline: "Feurig & Scharf mit Jalapeños",
      description: "2x 100g frisches Beef, doppelter Cheddar Cheese, gegrillte Zwiebeln, Tomaten, frischer Salat, eingelegte Gurken, scharfe Jalapeños, mit Cocktail- & scharfer Chilisoße.",
      price: "11,50 €",
      menuPrice: "16,50 €",
      photoSlot: "/images/burger-2.jpg",
      badge: "Scharf & Würzig",
      sauceNote: "Cocktail- & scharfe Chilisoße",
    },
    {
      id: "double-smash-sucuk",
      name: "Double Smash Cheese Sucuk",
      tagline: "Mit würziger türkischer Knoblauchwurst",
      description: "2x 100g frisches Beef, doppelter Cheddar Cheese, gegrillte Sucuk Scheiben, gegrillte Zwiebeln, Tomaten, frischer Salat, eingelegte Gurken, mit Cocktail- & Barbecuesoße.",
      price: "12,50 €",
      menuPrice: "17,50 €",
      photoSlot: "/images/burger-3.jpg",
      badge: "Original Street Food",
      sauceNote: "Mit Sucuk & Barbecuesoße",
    },
  ] as SignatureBurger[],

  // Vollständige Speisekarte nach Kategorien (Original Double Beef Karte & Street Food)
  menuCategories: [
    {
      id: "double-beef",
      name: "Double Burger (2x 100g Beef)",
      description: "Mit jeweils 2x 100g frischem Beef auf der heißen Platte gesmashed. Als Einzelburger oder Spar-Menü.",
      items: [
        {
          id: "d1",
          name: "Double Smash Burger",
          description: "2x 100g frisches Beef, gegrillte Zwiebeln, Tomaten, frischer Salat, eingelegte Gurken, Soße nach Wahl",
          price: "10,90 €",
          menuPrice: "15,90 €",
          popular: true,
        },
        {
          id: "d2",
          name: "Double Smash Cheese",
          description: "2x 100g Beef, doppelter Cheddar Cheese, gegrillte Zwiebeln, Tomaten, frischer Salat, eingelegte Gurken, Soße nach Wahl",
          price: "11,50 €",
          menuPrice: "16,50 €",
          badge: "Bestseller",
          popular: true,
        },
        {
          id: "d3",
          name: "Double Smash Cheese on Fire",
          description: "2x 100g Beef, doppelter Cheddar, gegrillte Zwiebeln, Tomaten, Salat, Gurken, Jalapenos, Cocktail- & scharfe Chilisoße",
          price: "11,50 €",
          menuPrice: "16,50 €",
          spicy: true,
          badge: "Scharf",
        },
        {
          id: "d4",
          name: "Double Smash Cheese Bacon",
          description: "2x 100g Beef, doppelter Puten Bacon (Halal), Cheddar Cheese, gegrillte Zwiebeln, Tomaten, Salat, Gurken, Cocktail- & Barbecuesoße",
          price: "12,50 €",
          menuPrice: "17,50 €",
          popular: true,
          badge: "Halal Pute",
        },
        {
          id: "d5",
          name: "Double Smash Cheese Sucuk",
          description: "2x 100g Beef, doppelter Cheddar Cheese & Sucuk (türkische Knoblauchwurst), gegrillte Zwiebeln, Tomaten, Salat, Gurken, Cocktail- & Barbecuesoße",
          price: "12,50 €",
          menuPrice: "17,50 €",
          badge: "Spezialität",
        },
        {
          id: "d6",
          name: "Remzi´s Spezial Double",
          description: "2x 100g Beef, doppelter Puten Bacon (Halal), Cheddar Cheese, Sucuk, gegrillte Zwiebeln, Tomaten, frischer Salat, eingelegte Gurken, Cocktail- & eigene Spezialsoße",
          price: "12,50 €",
          menuPrice: "17,50 €",
          badge: "Chef-Hit",
          popular: true,
        },
      ],
    },
    {
      id: "chicken-specials",
      name: "Chicken, Dogs & Wet Burger",
      description: "Knuspriges Hähnchenfilet, traditioneller Islak Wet Burger und Street Dogs.",
      items: [
        {
          id: "c1",
          name: "Crunchy Chicken Supreme",
          description: "Zartes kross gebackenes Chicken Filet, Eisbergsalat, Cheddar, Tomate, Homemade Knoblauch-Kräuter Mayo",
          price: "10,50 €",
          menuPrice: "15,50 €",
          popular: true,
        },
        {
          id: "c2",
          name: "Wet Burger (Islak Burger)",
          description: "Traditionell gedämpfter Street-Burger in aromatischer Knoblauch-Tomatensauce – super saftig",
          price: "7,50 €",
          badge: "Istanbul Style",
        },
        {
          id: "c3",
          name: "VUR Loaded Street Dog",
          description: "Knackige Wurst im Brioche-Bun mit Röstzwiebeln, Gurkenrelish, frischen Zwiebeln & Haus-Sauce",
          price: "6,90 €",
          menuPrice: "11,90 €",
          badge: "Beliebt",
        },
        {
          id: "c4",
          name: "Chicken Tenders (5 Stück)",
          description: "Handgeschnittene Filetstreifen in Knusperpanade inkl. 1 Dip nach Wahl",
          price: "7,90 €",
        },
      ],
    },
    {
      id: "fries",
      name: "Pommes & Beilagen",
      description: "Extra knusprig frittiert und goldbraun serviert.",
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
          name: "Süßkartoffel-Pommes",
          description: "Knusprige Sweet Potato Fries mit feinem Meersalz (auch im Menü wählbar)",
          price: "5,40 €",
        },
        {
          id: "f3",
          name: "Chili Cheese Fries (Loaded)",
          description: "Große Portion Pommes mit warmer Käsesauce, scharfen Jalapeños & Röstzwiebeln",
          price: "7,50 €",
          spicy: true,
          badge: "Loaded",
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
      name: "Saucen & Dips",
      description: "Frisch zubereitet für den perfekten Geschmack.",
      items: [
        { id: "s1", name: "Remzi´s Spezialsoße", description: "Geheime hausgemachte Rezeptur des Chefs", price: "1,50 €", popular: true },
        { id: "s2", name: "Cocktailsoße", description: "Cremig & aromatisch abgestimmt", price: "1,50 €" },
        { id: "s3", name: "Scharfe Chilisoße", description: "Feuriger Chili-Kick für Schärfe-Fans", price: "1,50 €", spicy: true },
        { id: "s4", name: "Barbecuesoße (Smoky BBQ)", description: "Rauchig-süße US-Barbecue-Sauce", price: "1,50 €" },
        { id: "s5", name: "Warme Cheddar Käsesauce", description: "Flüssiger geschmolzener Käsedip", price: "2,00 €" },
        { id: "s6", name: "Ketchup & Mayonnaise", description: "Klassische Markenqualität", price: "1,00 €" },
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
        { id: "d5", name: "Ayran (0,25l)", description: "Klassisch kühl & herzhaft", price: "2,00 €" },
      ],
    },
  ],

  // Die 3 Werte / "Warum VUR"
  values: [
    {
      number: "01",
      title: "2x 100g Frisches Beef",
      highlight: "Double Smash",
      description: "Keine Tiefkühl-Fertigware! Jeder Double Burger wird mit 2x 100g frischem Rindfleisch auf der heißen Platte gesmashed – maximale Röstaromen und saftiger Kern.",
    },
    {
      number: "02",
      title: "Remzi´s Spezialsoße & Sucuk",
      highlight: "Echte Spezialitäten",
      description: "Doppelter Puten Bacon (100% Halal), würzige Sucuk (türkische Knoblauchwurst) und Remzi´s hauseigene Spezialsoße machen den Unterschied, den man schmeckt.",
    },
    {
      number: "03",
      title: "Burger. Pommes. Fertig.",
      highlight: "Münchener Str. 14",
      description: "Als Menü mit knusprigen Pommes oder Süßkartoffeln und Getränk. Schnell per WhatsApp vorbestellen und direkt in Germersheim (neben JET) abholen.",
    },
  ] as ValueCard[],

  stats: [
    { value: "5,0", label: "Sterne auf Google", suffix: "★" },
    { value: "55+", label: "Echte Bewertungen", suffix: "" },
    { value: "2x 100g", label: "Frisches Beef pro Burger", suffix: "" },
    { value: "100%", label: "Halal Puten Bacon", suffix: "" },
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
      title: "Chef Remzi am Grill",
      subtitle: "Frisch gesmashed vor deinen Augen",
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
      owner: "Remzi [Nachname des Inhabers bitte ergänzen]",
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
