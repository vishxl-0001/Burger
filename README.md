# VUR Burger – Offizielle Website (Germersheim)

> **„Burger. Pommes. Fertig.“**  
> Hochwertiger, mobiler First-One-Pager für den Burger-Imbiss **VUR Burger** in der Münchener Str. 14, 76726 Germersheim.

---

## 🍔 Schnellstart (Lokal starten)

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Entwicklungsserver starten
npm run dev

# 3. Produktions-Build erstellen & prüfen
npm run build
npm run preview
```

---

## 📸 Fotos hinzufügen & austauschen

Alle Fotoplätze sind bereits im Code integriert. Solange keine echten Fotos vorliegen, zeigt die `<PhotoSlot />`-Komponente automatisch einen stilvollen, dunklen Platzhalter mit der jeweiligen Slot-Bezeichnung an, sodass das Layout niemals zerreißt.

Lege deine echten Fotodateien einfach in den Ordner **`/public/images/`** mit folgenden Dateinamen ab:

| Dateiname | Verwendung auf der Website | Empfohlenes Format |
| :--- | :--- | :--- |
| `hero-burger.jpg` | Hauptfoto im Hero-Bereich (oben) | Hochformat oder 4:3 |
| `burger-1.jpg` | Signature Burger 1 (VUR Original Classic) | Querformat (4:3) |
| `burger-2.jpg` | Signature Burger 2 (Smoky BBQ Bacon) | Querformat (4:3) |
| `burger-3.jpg` | Signature Burger 3 (Crunchy Chicken Supreme) | Querformat (4:3) |
| `burger-4.jpg` | Signature Burger 4 (Chili Cheese Heat) | Querformat (4:3) |
| `sides-1.jpg` | Haus-Pommes / Loaded Fries | Querformat (4:3) |
| `gallery-1.jpg` bis `gallery-8.jpg` | 8 Fotos für die Galerie „Aus der Küche“ | Gemischt (Querformat / Quadrat) |
| `location.jpg` | Außenansicht / Standort Münchener Str. 14 | 16:9 Querformat |
| `og-image.jpg` | Link-Vorschau in WhatsApp & Social Media | 1200 × 630 px |
| `logo.png` *(optional)* | Eigenes Brand-Logo | Freigestelltes PNG |

---

## 📝 Inhalte, Preise & Öffnungszeiten anpassen

**Sämtliche Inhalte leben an einer einzigen, zentralen Stelle:**  
👉 [`src/data/site.ts`](file:///home/vishxl/clientttss/burger-truck/src/data/site.ts)

### 1. Öffnungszeiten anpassen (`openingHours`)
In `src/data/site.ts` findest du das Array `openingHours`:
```typescript
openingHours: [
  { dayName: "Montag", dayShort: "Mo", dayIndex: 1, open: "12:00", close: "21:00", isClosed: false },
  // ...
]
```
- Die Live-Anzeige („Jetzt geöffnet“ / „Geschlossen“) auf der Website berechnet sich **automatisch und sekundengenau** anhand dieser Tabelle nach deutscher Zeit (`Europe/Berlin`).
- Der aktuelle Wochentag wird in der Tabelle auf der Website farblich hervorgehoben.

### 2. Speisekarte & Preise bearbeiten (`menuCategories`)
Unter `menuCategories` in `src/data/site.ts` kannst du Kategorien (Burger, Chicken, Pommes, Saucen, Getränke), Artikelnamen, Beschreibungen, Preise und Badges (`popular`, `spicy`, `vegetarian`) direkt pflegen.

### 3. Telefon & WhatsApp Links (`contact`)
- `phone`: Die Telefonnummer für direkte Anrufe (`tel:+4917621016719`).
- `whatsappBaseUrl`: Der WhatsApp-Direktlink (`https://wa.me/4917621016719`).
- `whatsappDefaultMessage`: Der Text, der bei Kunden im WhatsApp-Chatfenster automatisch vorausgefüllt wird.

### 4. Impressum & Datenschutz
Im Datenobjekt unter `legal` können Inhaber-Name, E-Mail und USt-IdNr. direkt eingetragen werden. Die Platzhalter sind im Impressums-Modal klar ersichtlich.

---

## 🚀 Deployment auf Vercel

Das Projekt ist für sofortiges Zero-Config-Deployment auf Vercel vorkonfiguriert:

1. **GitHub Repository erstellen & Code pushen:**
   ```bash
   git init
   git add .
   git commit -m "feat: VUR Burger Website"
   git branch -M main
   git remote add origin <DEIN-GITHUB-REPO-URL>
   git push -u origin main
   ```
2. **Auf [vercel.com](https://vercel.com) einloggen** und auf **„Add New Project“** klicken.
3. Das GitHub-Repository auswählen. Vercel erkennt automatisch **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Auf **„Deploy“** klicken. Fertig!

---

## 🎨 Design & Motion Highlights

- **Street-Food Branding:** Handgemachte Ästhetik mit warmer Papier-Farbe (`#F4EDE0`), Grill-Schwarz (`#121212`), Ketchup-Rot (`#D62828`) und Senf-Gelb (`#F6B21B`).
- **Typografie:** Kraftvoller Condensed Display-Font (`Bebas Neue` / `Anton`), leserliche Fließtextschrift (`DM Sans`) und handgeschriebene Marker-Akzente (`Permanent Marker` / `Caveat`).
- **Butterweiche Animation:** Lenis Smooth Scroll, Parallax-Effekte auf Fotos und geschmeidige Framer-Motion-Transitions.
- **Barrierefreiheit & Performance:** Berücksichtigt automatisch `prefers-reduced-motion` für Nutzer, die keine Bewegungseffekte wünschen.
- **Mobile First:** Perfekt optimiert für Smartphones (Daumenfreundliche Touch-Ziele mind. 48px, Floating-WhatsApp-Button mit automatischem Footer-Kollisionsschutz, kein horizontales Scrollen).
