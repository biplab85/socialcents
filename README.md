# SocialCents - Your First Social Currency Card

A modern Next.js website for SocialCents, featuring the INfLUX card - a social currency card that rewards creators for sharing brands they love.

## Features

- Modern, responsive design with 100% SCSS styling
- Smooth scroll animations using Intersection Observer
- Interactive carousels with Swiper.js
- Animated statistics counter
- Mobile-first responsive design
- Accessibility-focused components

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **Animations:** Custom hooks + CSS animations
- **Carousels:** Swiper.js
- **Fonts:** Inter, Poppins (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
socialcents/
├── public/
│   └── images/          # Static images
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with fonts
│   │   ├── page.tsx     # Main page
│   │   └── globals.scss # Global styles
│   ├── components/
│   │   ├── common/      # Reusable components
│   │   ├── layout/      # Header, Footer
│   │   └── sections/    # Page sections
│   ├── data/
│   │   └── content.ts   # Site content data
│   ├── hooks/           # Custom React hooks
│   └── styles/          # SCSS architecture
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _typography.scss
│       ├── _animations.scss
│       └── _reset.scss
└── package.json
```

## Sections

1. **Hero** - Full-screen intro with animated card visual
2. **About** - Key benefits and value proposition
3. **How It Works** - 3-step process (Buy, Post, Earn)
4. **Features** - Feature grid with icons
5. **Stats** - Animated counter statistics
6. **Gallery** - App screenshots carousel
7. **Partners** - Partner brands carousel
8. **Testimonials** - User testimonials slider
9. **CTA** - Call-to-action with gradient background
10. **Contact** - Contact form and info

## Design System

### Colors

- Primary: `#6C5CE7` (Purple)
- Secondary: `#00D9FF` (Cyan)
- Accent: `#FF6B9D` (Pink)
- Dark: `#1A1A2E` (Navy)

### Typography

- Headings: Poppins
- Body: Inter

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private - All rights reserved.
