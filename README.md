# unMapped 🌲

**Core Framework**

- React 19 with TypeScript for type-safe component architecture
- Vite for optimized development experience and production builds
- SCSS Modules for scoped, maintainable styling with enhanced CSS features

**Why These Choices?**

- TypeScript provides compile-time type safety and enhanced developer experience
- SCSS Modules combine the benefits of CSS Modules with powerful preprocessing
  capabilities
- Vite offers superior development performance and modern build optimizationic
  tour portfolio built with modern web tech. Think of it as your digital trail
  guide to exploring the beauty of responsive design and TypeScript
  craftsmanship.

## Live Site

Check it out:
[https://shaander.github.io/unmapped](https://shaander.github.io/unmapped)

## Project Origins

This project was created as Project 1 of the Comprehensive React Projects Course
by John Smilga. However, as a seasoned developer, I chose to completely rebuild
the project from scratch using modern TypeScript React and SCSS, implementing
industry best practices and adding my own design system. The result is a fully
overhauled, accessibility-compliant application that maintains the core
conceptual foundation while showcasing contemporary development standards.

## What's This About?

unMapped is a fictional tour company portfolio that demonstrates the
intersection of nature-inspired design and modern web development. The site
showcases scenic tours through forest byways, misty overlooks, and hidden river
bends while implementing clean React architecture and comprehensive TypeScript
integration.

This project serves as both a portfolio piece and a demonstration of
professional development practices, featuring responsive design principles,
accessibility compliance, and maintainable code architecture.

## Tech Stack & Choices

**Core Framework**

- React 19 with TypeScript for bulletproof component architecture
- Vite for lightning-fast development and optimized builds
- CSS Modules for scoped, maintainable styling

**Why These Choices?**

- TypeScript because life's too short for runtime type errors
- CSS Modules because global CSS is like hiking without a map (chaotic)
- Vite because waiting for builds is like watching paint dry on a rainy camping
  trip

## Design Philosophy

**Typography That Breathes** The type system uses a nature-inspired scale that
feels organic rather than mechanical. Headings get generous line-height
(1.2-1.3) to mirror the spaciousness of natural landscapes. Body text sits at a
comfortable reading size with plenty of letter-spacing, because cramped text is
about as appealing as a cramped tent.

**Color Palette: Mint & Earth** The primary color palette centers around a
custom mint green (`#2da975`) that captures that feeling of morning mist on pine
needles. Supporting grays range from charcoal (`hsl(209, 61%, 16%)`) to
whisper-light backgrounds, creating a tonal foundation that never fights for
attention.

**Responsive Design Strategy**

The layout adapts systematically across devices:

- Mobile: Single column layout for focused content consumption
- Tablet: Two-column grids where content hierarchy supports it
- Desktop: Three-column grids for optimal content density

Comprehensive responsive design includes specific optimizations for XS mobile
devices (320px) to ensure accessibility across all device capabilities.

## Architecture Deep Dive

**Component Structure**

Each component follows a data-driven architecture where content is separated
into dedicated data files (`tourData.ts`, `serviceData.ts`,
`navigationData.ts`). This separation of concerns enables content updates
without modifying component logic, maintaining clean architectural boundaries.

**TypeScript Implementation**

Types are organized by domain in the `types/domain/` directory with strict
typing throughout the application. Every data structure uses proper interface
definitions, and the type system provides compile-time validation for enhanced
reliability. rather than when users are trying to book their dream hiking trip.

**SCSS Organization**

Styles utilize SCSS Modules with kebab-case class names accessed via bracket
notation (`styles["nav-toggle"]`). Each component maintains its own stylesheet,
while global styles manage typography and layout fundamentals. The architecture
follows mobile-first responsive design principles with systematic breakpoint
management.

## Key Features

**Accessible Navigation**

Mobile-responsive navigation with properly implemented burger menu
functionality. Includes comprehensive ARIA labeling and keyboard navigation
support for full accessibility compliance.

**Intelligent Content Display**

Mobile devices display condensed content (half of tours/services initially) with
expandable "see more" functionality. This approach optimizes mobile user
experience while maintaining full content accessibility.

**Performance & Optimization**

- Optimized image assets with comprehensive alt text coverage
- CSS uses efficient grid layouts that don't fight the browser
- No horizontal scrolling (because sideways scrolling is nobody's friend)

## Development Experience

**Hot Module Replacement** Vite's HMR means changes appear instantly during
development. It's like having a campfire that never goes out.

**Type-Safe Development** The entire codebase passes `tsc --noEmit` without
warnings. TypeScript catches everything from typos in component props to
mismatched data structures.

**Component Testing** Each component is built to be predictable and testable.
Props are properly typed, side effects are contained, and the data flow is
explicit.

## Deployment

Built for GitHub Pages with automatic deployment via `npm run deploy`. The build
process includes TypeScript compilation and Vite optimization, resulting in a
lightweight bundle that loads fast even on slow connections (important when
you're researching trips from a mountain coffee shop with sketchy WiFi).

## Development & Deployment

The project includes automated deployment to GitHub Pages with TypeScript
compilation and Vite optimization, resulting in efficient bundle sizes and
optimal loading performance.

## Getting Started

```bash
# Clone and install dependencies
git clone https://github.com/ShaAnder/unmapped.git
cd unmapped
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Contributing

Found a bug or want to suggest an improvement? Open an issue or submit a PR.
Just like trail maintenance, good software gets better with community
involvement.

---
