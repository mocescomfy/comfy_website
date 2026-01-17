# QA Testing Plan - MOCES Landing Page

## Overview

This document provides a step-by-step end-to-end testing plan to verify the MOCES "Zona De(s)conforto" landing page matches the Figma design across all supported viewports.

**Figma Reference:** https://www.figma.com/design/odanCgLViklOxyQEGP7t5t/Moces_Landing-Page_PA--Copy-?node-id=1-40

---

## Supported Viewports

| Viewport | Width | Figma Frame Name |
|----------|-------|------------------|
| Mobile | 430px | iPhone 16 Plus - 1 |
| Tablet | 744px | iPad mini 8.3 - 1 |
| Desktop | 1440px | Moces-Comfy_Landin-page |

---

## Test Environment Setup

1. Start the development server: `npm run dev`
2. Open browser (Chrome recommended for DevTools)
3. Open Developer Tools (F12)
4. Enable device toolbar for responsive testing
5. Have Figma open in a separate tab for comparison

---

## Section-by-Section Testing Checklist

### 1. Header / Logo Zone

**Figma Sections:**
- Desktop: `46:2826` (header)
- Tablet: `46:572` (header)
- Mobile: `46:573` (header)

#### Desktop (1440px)
- [ ] Three logos displayed horizontally: MOCES, Zona De(s)conforto, Comfy App
- [ ] Logo sizes and spacing match Figma
- [ ] Navigation menu visible (rounded pill shape)
- [ ] Menu has 6 items: Hero, O Projeto, A App, Impacto, Contribuir, Transparência
- [ ] Menu items have correct typography and spacing

#### Tablet (744px)
- [ ] Three logos displayed horizontally
- [ ] Logo sizes adjusted for tablet
- [ ] Hamburger menu icon visible (left side)
- [ ] Desktop navigation menu hidden

#### Mobile (430px)
- [ ] Three logos displayed horizontally (smaller)
- [ ] Hamburger menu icon visible (left side)
- [ ] Desktop navigation menu hidden
- [ ] Logos fit within viewport without overflow

**Interactive Tests (All Viewports):**
- [ ] Hamburger menu opens full-screen overlay (mobile/tablet)
- [ ] Menu overlay has close button
- [ ] Menu items scroll to correct sections
- [ ] Smooth scroll animation works

---

### 2. Hero Section

**Figma Sections:**
- Desktop: `46:2844` (Hero-section)
- Tablet: `46:574` (Group 29)
- Mobile: `46:1052` (Group 29)

#### Desktop (1440px)
- [ ] Main headline: "Apoie a Saúde Mental dos Jovens de Olhão"
- [ ] Subheadline: "Ajude a criar a app Comfy e promover o bem-estar emocional dos jovens"
- [ ] "Faça uma Doação" button centered
- [ ] Star decoration visible (left side)
- [ ] Flower animation/decoration visible (right side)
- [ ] Typography sizes match Figma
- [ ] Spacing and alignment correct

#### Tablet (744px)
- [ ] Headline text centered
- [ ] Text width constrained to ~680px
- [ ] Button centered below text
- [ ] Decorations scaled appropriately
- [ ] Star decoration positioned correctly
- [ ] Flower decoration positioned correctly

#### Mobile (430px)
- [ ] Headline text centered, smaller font
- [ ] Text width constrained to ~366px
- [ ] Button width adjusted for mobile
- [ ] Decorations scaled down
- [ ] No horizontal overflow
- [ ] Proper spacing between elements

**Interactive Tests:**
- [ ] "Faça uma Doação" button hover state shows animated face icon
- [ ] Button links to GoFundMe page

---

### 3. O Projeto (The Project) Section

**Figma Sections:**
- Desktop: `46:2872` (O-projeto)
- Tablet: `46:603` (Group 10)
- Mobile: `46:1120` (Group 10)

**Section ID:** `#projeto`

#### Desktop (1440px)
- [ ] Background color matches (light/cream color)
- [ ] "O Projeto Zona De(s)conforto" heading
- [ ] Project description text
- [ ] Zona De(s)conforto logo image
- [ ] Rotated media card with video placeholder
- [ ] Play button on media card
- [ ] "SAIBA MAIS SOBRE O PROJETO" button
- [ ] Two-column layout (text left, media right or mixed)
- [ ] Link text mentioning Instagram and donation

#### Tablet (744px)
- [ ] Single column layout
- [ ] Heading and description at top
- [ ] Media card below text
- [ ] Play button centered on media
- [ ] Button full width or appropriately sized
- [ ] Proper spacing between elements

#### Mobile (430px)
- [ ] Single column layout
- [ ] Heading wraps correctly
- [ ] Description text readable
- [ ] Media card scales down
- [ ] Play button proportional
- [ ] Button fits viewport
- [ ] No horizontal overflow

**Interactive Tests:**
- [ ] Play button hover state
- [ ] Instagram link works
- [ ] Donation link works
- [ ] "SAIBA MAIS SOBRE O PROJETO" button links to Instagram

---

### 4. A App Comfy Section

**Figma Sections:**
- Desktop: `46:2911` (A-app)
- Tablet: `46:690` (Group 28)
- Mobile: `46:1159` (Group 28)

**Section ID:** `#app`

#### Desktop (1440px)
- [ ] Lavender/purple rounded panel background
- [ ] "A App Comfy" heading with Comfy logo inline
- [ ] "Apoio ao Bem-Estar e Saúde Mental dos Jovens" subheading
- [ ] Description text
- [ ] Phone mockups on left and right sides of panel
- [ ] "CONHEÇA A APP COMFY" button centered
- [ ] Cloud character decoration (bottom left)
- [ ] Proper padding inside panel

#### Tablet (744px)
- [ ] Lavender panel present
- [ ] Phone mockups visible (scaled)
- [ ] Text content centered within panel
- [ ] Button centered
- [ ] Cloud decoration visible
- [ ] Panel margins/padding correct

#### Mobile (430px)
- [ ] Lavender panel present
- [ ] Phone mockups visible on sides (smaller or hidden based on design)
- [ ] Text centered
- [ ] Button fits within panel
- [ ] Cloud decoration scaled
- [ ] No overflow issues

**Interactive Tests:**
- [ ] "CONHEÇA A APP COMFY" button hover state
- [ ] Button links to Instagram/app page

---

### 5. Impacto (Impact) Section

**Figma Sections:**
- Desktop: `46:2955` (Impacto)
- Tablet: `46:749` (Group 12)
- Mobile: `46:1203` (Group 12)

**Section ID:** `#impacto`

#### Desktop (1440px)
- [ ] "O Impacto da Sua Doação" heading
- [ ] Description text about donation usage
- [ ] Bulleted list with 3 items (checkmarks):
  - Desenvolver e melhorar a tecnologia da app
  - Promover a app em escolas e centros comunitários
  - Formar facilitadores especializados em saúde mental
- [ ] Callout box with quote about helping youth
- [ ] Purple character illustration (right side)
- [ ] Cloud character illustration
- [ ] Decorative elements properly positioned

#### Tablet (744px)
- [ ] Single column layout
- [ ] Heading and list visible
- [ ] Callout box positioned correctly
- [ ] Character illustrations scaled
- [ ] Proper spacing between elements

#### Mobile (430px)
- [ ] All content stacked vertically
- [ ] Bulleted list readable
- [ ] Callout box fits width
- [ ] Character illustrations scaled or repositioned
- [ ] No horizontal overflow

---

### 6. Como Contribuir (How to Contribute) Section

**Figma Sections:**
- Desktop: `46:2998` (Como-ajudar)
- Tablet: `46:792` (Group 25) + `46:827` (Group 24)
- Mobile: `46:1246` (Group 25) + `46:1281` (Group 24)

**Section ID:** `#contribuir`

#### Desktop (1440px)
- [ ] Two-column layout:
  - Left: "Como Pode Ajudar?" content
  - Right: "Meta de Arrecadação" fundraising goal
- [ ] Left column has heading, description, bulleted steps, donate button
- [ ] Speech bubble decoration with support message
- [ ] Right column has vertical progress bar
- [ ] Progress bar shows: 0€, 10,000€, 20,000€, 30,000€, 40,000€ marks
- [ ] Current amount indicator (15,000€)
- [ ] "Meta de Arrecadação" label
- [ ] Cloud decoration (top left)

#### Tablet (744px)
- [ ] Content may stack or use modified layout
- [ ] "Como Pode Ajudar?" section visible
- [ ] Fundraising goal visible
- [ ] Progress bar functional
- [ ] Decorations scaled appropriately

#### Mobile (430px)
- [ ] Single column layout
- [ ] "Como Pode Ajudar?" stacked above fundraising goal
- [ ] Progress bar visible and readable
- [ ] All tick marks and labels visible
- [ ] Button fits width
- [ ] No overflow issues

**Interactive Tests:**
- [ ] Donate button hover state
- [ ] Donate button links to GoFundMe

---

### 7. Transparência (Transparency) Section

**Figma Sections:**
- Desktop: `46:3059` (Transparencia)
- Tablet: `46:854` (Frame 8)
- Mobile: `46:1307` (Frame 8)

**Section ID:** `#transparencia`

#### Desktop (1440px)
- [ ] Purple/dark background
- [ ] "Transparência e Responsabilidade" heading
- [ ] Description text about fund usage transparency
- [ ] Three overlapping, rotated project photos
- [ ] Photo composition matches Figma rotation angles
- [ ] Optional link buttons (may be hidden/placeholder)

#### Tablet (744px)
- [ ] Heading visible
- [ ] Description text readable
- [ ] Photos visible (may have different arrangement)
- [ ] Proper padding and margins

#### Mobile (430px)
- [ ] Single column layout
- [ ] Heading wraps correctly
- [ ] Description readable
- [ ] Photos scaled and arranged for mobile
- [ ] No overflow

---

### 8. Junte-se à Causa (Join the Cause) Section

**Figma Sections:**
- Desktop: `46:3069` (Junta-se)
- Tablet: `46:870` (Group 31)
- Mobile: `46:1322` (Group 31)

**Section ID:** `#causa`

#### Desktop (1440px)
- [ ] "Junte-se à Causa" heading
- [ ] Description about other ways to help
- [ ] Bulleted list:
  - Partilhar a página com amigos e familiares
  - Participar em eventos e atividades organizadas pela MOCES
  - Voluntariar-se para o projeto
- [ ] Closing statement about creating healthier future
- [ ] "PARTICIPE E FAÇA A DIFERENÇA!" button with shadow effect
- [ ] "Partilhar o projeto:" label
- [ ] Social media icons row: Facebook, Instagram, LinkedIn, TikTok
- [ ] Decorative elements (star, cloud, flower)

#### Tablet (744px)
- [ ] Content within rounded panel/card
- [ ] All text content visible
- [ ] Button centered
- [ ] Social media icons row
- [ ] Decorations visible

#### Mobile (430px)
- [ ] Content stacked vertically
- [ ] Bulleted list readable
- [ ] Button fits width
- [ ] Social media icons row (may wrap or shrink)
- [ ] Decorations scaled
- [ ] No overflow

**Interactive Tests:**
- [ ] "PARTICIPE E FAÇA A DIFERENÇA!" button hover state
- [ ] Button links to GoFundMe
- [ ] Facebook icon links to facebook.com/associacao.moces
- [ ] Instagram icon links to instagram.com/moces.pt
- [ ] LinkedIn icon links to linkedin.com/company/associacaomoces
- [ ] TikTok icon links to tiktok.com/@the.comfy.app

---

### 9. Footer

**Figma Sections:**
- Desktop: `46:3113` (Footer)
- Tablet: `46:916` (Frame 28)
- Mobile: `46:1367` (Frame 28)

#### Desktop (1440px)
- [ ] Three brand logos: MOCES, Zona De(s)conforto, Comfy App
- [ ] Funding organization logos:
  - ALGARVE 2030
  - PORTUGAL 2030
  - European Union flag
- [ ] Proper spacing between logo groups
- [ ] Copyright text (if present)

#### Tablet (744px)
- [ ] Logos arranged appropriately
- [ ] Funding logos visible
- [ ] Spacing adjusted for tablet

#### Mobile (430px)
- [ ] Logos may stack or scale
- [ ] Funding logos visible
- [ ] All content fits viewport
- [ ] No overflow

---

## Global Tests (All Sections)

### Typography
- [ ] Font family matches Figma (likely custom font)
- [ ] Heading sizes match per viewport
- [ ] Body text sizes match per viewport
- [ ] Line heights appropriate
- [ ] Font weights correct

### Colors
- [ ] Background colors match Figma
- [ ] Text colors match Figma
- [ ] Button colors match Figma
- [ ] Accent colors correct

### Spacing
- [ ] Section padding matches Figma
- [ ] Element margins match Figma
- [ ] Consistent spacing throughout

### Images & Decorations
- [ ] All images load correctly
- [ ] Decorative elements positioned correctly
- [ ] No missing assets
- [ ] Image quality appropriate

### Responsive Behavior
- [ ] No horizontal scroll at any viewport
- [ ] Smooth transitions between breakpoints
- [ ] Content remains readable at all sizes
- [ ] Touch targets appropriately sized on mobile/tablet

---

## Interaction Tests

### Navigation
- [ ] All menu items scroll to correct sections
- [ ] Smooth scroll animation works
- [ ] Active section highlighting (if implemented)
- [ ] Mobile menu opens and closes correctly
- [ ] Menu closes when item is selected

### Buttons
- [ ] All donate buttons have hover state with animated face
- [ ] All buttons have correct cursor on hover
- [ ] Button press/active states work
- [ ] All links open in appropriate tab

### Links
- [ ] All external links work (GoFundMe, Instagram, social media)
- [ ] Links open in new tab where appropriate
- [ ] No broken links

---

## Performance Tests

- [ ] Page loads within reasonable time
- [ ] Images are optimized
- [ ] No layout shift during load
- [ ] Smooth scrolling performance
- [ ] Animations run at 60fps

---

## Browser Compatibility

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## Accessibility Tests

- [ ] All images have alt text
- [ ] Color contrast meets WCAG standards
- [ ] Focus states visible for keyboard navigation
- [ ] Links are descriptive
- [ ] Page structure uses semantic HTML

---

## Test Execution Template

For each testing session, use this template:

```
Date: ___________
Tester: ___________
Environment: Dev Server / Staging / Production
Browser: ___________

Viewport: Desktop (1440px) / Tablet (744px) / Mobile (430px)

Section: ___________
Figma Node: ___________

Findings:
- Pass/Fail: ___________
- Issues Found: ___________
- Screenshot: ___________

Notes:
___________
```

---

## Issue Reporting

When reporting issues, include:

1. **Section affected**
2. **Viewport(s) affected**
3. **Expected behavior** (from Figma)
4. **Actual behavior** (what you see)
5. **Figma node reference**
6. **Screenshot comparison**
7. **Steps to reproduce**

Use the GitHub issue template from CLAUDE.md for consistency.
