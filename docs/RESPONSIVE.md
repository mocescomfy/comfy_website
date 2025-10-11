# Responsive Design Implementation Guide

This guide documents the responsive design approach for the MOCES landing page using Tailwind CSS.

## Breakpoint Reference

Based on the Figma designs, we use the following breakpoints:

| Device | Tailwind Prefix | Min Width | Figma Frame Width | Notes |
|--------|----------------|-----------|-------------------|-------|
| Mobile (iPhone) | `(default)` | 0px | 430px | Mobile-first base styles |
| Tablet (iPad) | `md:` | 768px | 744px | iPad mini 8.3" |
| Desktop | `lg:` | 1024px | 1440px | Full desktop layout |

### Tailwind Breakpoint Configuration

```css
/* In global.css @theme */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets (iPad) */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
```

## Component Implementation Checklist

When implementing each section:

- [ ] Extract design specs from Figma (spacing, typography, colors)
- [ ] Start with mobile styles (base Tailwind classes)
- [ ] Add tablet styles using `md:` prefix
- [ ] Add desktop styles using `lg:` prefix
- [ ] Test at exact Figma frame widths (430px, 744px, 1440px)
- [ ] Verify touch targets (min 44x44px) on mobile
- [ ] Check text readability at all breakpoints
- [ ] Ensure images are optimized and responsive
- [ ] Validate accessibility (WCAG 2.1 AA)

## Tailwind Class Naming Conventions

### Layout Patterns

**Mobile-First Stacked Layout:**
```tsx
<div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
```

**Responsive Padding/Spacing:**
```tsx
<section className="px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20">
```

**Responsive Typography:**
```tsx
<h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
```

**Container Width:**
```tsx
<div className="container-responsive"> <!-- Custom class in global.css -->
  <!-- Or manually: -->
  <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
```

### Common Responsive Patterns

**Show/Hide by Breakpoint:**
```tsx
<div className="block md:hidden">Mobile only</div>
<div className="hidden md:block">Tablet and up</div>
<div className="hidden lg:block">Desktop only</div>
```

**Responsive Grid:**
```tsx
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
```

**Responsive Flexbox:**
```tsx
<div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
```

## Design System Reference

### Brand Colors

```tsx
// Primary Gradient (Buttons, CTAs)
className="bg-gradient-to-r from-[#3245ff] to-[#bc52ee]"

// Secondary Gradient (Accents)
className="bg-gradient-to-r from-[#d83333] to-[#f041ff]"

// Navigation Purple
className="bg-[#B496C8]"

// Accent Green
className="bg-[#BEC864]"

// Background Cream
className="bg-[#FAF0E6]"
```

### Typography

```tsx
// Headings - Fredoka font
className="font-fredoka font-bold"

// Body text - Inter font
className="font-inter"

// Responsive heading sizes
className="text-2xl md:text-3xl lg:text-5xl"
```

### Spacing Scale

```tsx
// Small: 8px
className="gap-2"

// Medium: 16-24px
className="gap-4 md:gap-6"

// Large: 40-60px
className="gap-10 md:gap-12 lg:gap-16"

// Extra large: 80-120px
className="gap-20 md:gap-24 lg:gap-32"
```

### Border Radius

```tsx
// Pill/Rounded
className="rounded-full"  // Navigation, buttons

// Card
className="rounded-[20px]"  // Cards, containers

// Button
className="rounded-[40px]"  // Special buttons
```

## Testing Checklist

### Device Testing

Test at these exact widths using browser dev tools:

- [ ] **iPhone 16 Plus**: 430px width
- [ ] **iPad mini 8.3"**: 744px width
- [ ] **Desktop**: 1440px width

### Responsive Testing

- [ ] All sections display correctly at each breakpoint
- [ ] No horizontal scrolling on mobile
- [ ] Images scale appropriately
- [ ] Text remains readable at all sizes
- [ ] Buttons/links are tappable (min 44x44px)
- [ ] Navigation works on mobile and desktop
- [ ] Smooth scrolling between sections
- [ ] Decorative elements (flowers/stars) position correctly

### Accessibility Testing

- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Keyboard navigation works
- [ ] Screen reader friendly (semantic HTML)
- [ ] Focus states visible
- [ ] Alt text on images
- [ ] Form labels and ARIA attributes
- [ ] Reduced motion respected

## Section-by-Section Implementation

### Hero Specs (Figma → Code)

- Layout: centered vertical stack; decorative star left; flower collage masked right
- Typography (Fredoka):
  - Desktop: h1 96px / 1.08; subtitle 24px / 32px
  - Tablet: h1 72px / 1.08; subtitle 24px / 32px; max-width 680px
  - Mobile: h1 48px / 1.08; subtitle 20px / 28px; max-width 310px
- Content widths: mobile 310px, tablet 680px, desktop 900px
- Decorative sizes:
  - Star: 207×220 (mobile), 300×320 (tablet), 436×464 (desktop)
  - Flower mask: 186×180 (mobile), 300×292 (tablet), 402×390 (desktop)
- CTA: `DonateButton` with 3D offset and instant hover face swap
  - Button mobile: text 16.32px; border 2.72px; padding 27×16
  - Button tablet/desktop: text 24px; border 4px; padding 40×24

### Current Progress

- [x] Header (LogoZone + Navbar)
- [x] Hero Section (implemented per Figma)
- [ ] O Projeto
- [ ] A App (App Comfy)
- [ ] Impacto
- [ ] Como Contribuir
- [ ] Transparência
- [ ] Junte-se à Causa
- [ ] Footer

## Common Tailwind Patterns Used

### Glassmorphism Effect

```tsx
className="bg-white/90 backdrop-blur-xl"
```

### Hover Effects

```tsx
className="transition-all duration-300 hover:scale-105 hover:shadow-xl"
```

### Text Gradient

```tsx
className="bg-gradient-to-r from-[#3245ff] to-[#bc52ee] bg-clip-text text-transparent"
```

### Custom Shadows

```tsx
className="shadow-[0_4px_20px_rgba(180,150,200,0.3)]"
```

## Deployment Checklist

Before deploying:

- [ ] All sections implemented and responsive
- [ ] Images optimized (WebP format where possible)
- [ ] Lighthouse score 95+ on all metrics
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile testing on real devices
- [ ] All links work
- [ ] Forms functional
- [ ] Analytics integrated
- [ ] SEO meta tags complete

---

**Maintained by**: MOCES Development Team  
**Last Updated**: October 2025

