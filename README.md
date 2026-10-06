# D CAFE & KITCHEN (द कैफे & किचन)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![React](https://img.shields.io/badge/React-19-blue.svg)]()
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)]()
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4.svg)]()
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)]()
[![Netlify](https://img.shields.io/badge/Deploy-Netlify-00C7B7.svg)]()

A modern, cinematic, luxury restaurant website for **D Cafe & Kitchen** located in Tajganj, Agra, Uttar Pradesh.

---

## 🍽️ About the Restaurant

* **Name**: D Cafe & Kitchen (**द कैफे & किचन**)
* **Category**: Contemporary Indian Restaurant & Kitchen
* **Location**: Ground Floor, No. 618, The Hosteller, 619, Dhandhupura Rd, Tajganj, Basai, Agra, Uttar Pradesh 282001
* **Rating**: 4.8 ★ (149 Verified Reviews)
* **Price Range**: ₹200–₹400 per person
* **Hours**: Open Daily · Closes 11:00 PM
* **Phone**: [085959 55905](tel:+918595955905)
* **Website**: [dcafekitchen.com](https://dcafekitchen.com)
* **Attributes**: Women-owned · LGBTQ+ welcoming · Made from scratch to order

---

## ✨ Features

- **Cinematic Centered Hero**: Atmospheric Indian culinary photography with dark charcoal & antique gold styling, centered brand typography, and interactive CTAs.
- **Floating Luxury Navigation**: Responsive navbar with centered brand wordmark, mobile drawer, and quick cart count.
- **Curated Menu Experience**: 7 categories (`01 — STARTERS` to `07 — SPECIALS`) with vertical desktop navigation, live image previews, mobile swipeable categories, and dietary filters (All, Veg, Signatures).
- **Interactive Ordering Bag**: Slide-over drawer supporting Dine-In, Takeaway, and No-contact Delivery with real-time tax calculation, cooking preferences, and instant receipt generation.
- **Table Reservation System**: Guest count, calendar date, time selection, seating area preference, and instant booking confirmation.
- **Agra & Tajganj Narrative**: Atmospheric location storytelling, framed dark map, directions, and one-click address copying.
- **Verified Social Proof**: 4.8 ★ (149 reviews) showcase with guest testimonials and an animated gold-on-black review marquee.
- **Micro-Interactions & Custom Cursor**: Contextual cursor modes (`TASTE`, `VIEW`, `VISIT`) for desktop.

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/d-cafe-and-kitchen.git
   cd d-cafe-and-kitchen
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build:**
   ```bash
   npm run build
   ```
   The built production-ready static assets will be output in the `dist` directory.

---

## 🌐 Deploy to Netlify

This project is pre-configured with `netlify.toml` and `public/_redirects` for continuous deployment.

### Method 1: Connecting your GitHub Repository (Recommended)
1. Push this repository to your **GitHub** account.
2. Log in to [Netlify](https://app.netlify.com).
3. Click **"Add new site"** → **"Import an existing project"** → select **GitHub**.
4. Choose the repository.
5. The build settings are auto-detected via `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **Deploy Site**. Your website will be live with full SPA routing!

### Method 2: Manual Deploy via Netlify CLI
```bash
# Install Netlify CLI if needed
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 with custom antique-gold and charcoal palettes
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond (Serif), Noto Serif Devanagari (Hindi), Plus Jakarta Sans

---

## 📄 License

Apache-2.0
