# vaishnavi-srinath-portfolio

A high-performance, dark-mode portfolio website for Vaishnavi Srinath — AI/ML Engineer & Software Developer.

Built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion. Designed with a technical dark aesthetic: grid backgrounds, monospace type accents, glowing accent colors, and typewriter hero animations.

---

## Role Classification

**Primary Role:** AI / ML Engineer (with strong Software Engineering foundation)  
**Seniority:** Mid-level (3+ years production + active research)  
**Key Strengths:** Production-grade backend systems, agentic AI pipelines, large-scale ETL, published ML research

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + CSS custom properties |
| Animations | CSS keyframes + Intersection Observer |
| Icons | Lucide React |
| Fonts | Syne (display) + DM Sans (body) + JetBrains Mono |

---

## Local Setup

```bash
# 1. Clone or download the repo
git clone https://github.com/YOUR_USERNAME/vaishnavi-srinath-portfolio.git
cd vaishnavi-srinath-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

```bash
# Build for production
npm run build
npm start
```

---

## Project Structure

```
├── app/
│   ├── globals.css        # Design tokens, global styles, animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with scroll detection
│   ├── Hero.tsx           # Typewriter hero with live stats
│   ├── About.tsx          # Bio + four-pillar strengths grid
│   ├── Projects.tsx       # Featured + secondary project cards
│   ├── Experience.tsx     # Timeline + education
│   ├── Skills.tsx         # Grouped skill chips + certifications
│   └── Contact.tsx        # Contact grid + footer
├── public/                # Static assets
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Sections

- **Hero** — Typewriter role animation, live achievement stats, CTA buttons
- **About** — Personal narrative + four engineering pillars
- **Projects** — 2 featured (agentic AI, Text-Tune) + 2 supporting (phishing detector, TriMet)
- **Experience** — Timeline: SFSU Research → Philips SDE → Philips Intern
- **Skills** — 7 grouped skill categories + certifications
- **Contact** — Email, LinkedIn, GitHub, location with direct CTAs

---

## Customization

All colors live in `app/globals.css` as CSS custom properties under `:root`. Swap `--accent` to change the entire color theme instantly.

```css
:root {
  --accent: #00d4a0;        /* main highlight color */
  --bg-primary: #0a0c0f;   /* page background */
  --text-primary: #e8ecf4; /* main text */
}
```
