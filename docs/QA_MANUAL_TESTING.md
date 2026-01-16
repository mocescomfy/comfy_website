# Manual QA Plan (Chrome Tool)

This document is a step-by-step manual testing guide for the MOCES website.
It is written so an agent can follow it later using the Chrome tool.

## Scope

- Public marketing site for MOCES, "Zona De(s)conforto", and Comfy app
- Static pages and interactions (no authenticated areas)
- Desktop and mobile viewports
- Accessibility and performance checks

## Environments

- Local dev: `http://localhost:4321`
- Preview/prod: fill in final URL before testing

## Test Data

- None required (static site)

## Tooling Setup (Chrome Tool)

1. Open the site in a new Chrome session.
2. Disable extensions or run in a clean profile.
3. Use two viewports:
   - Desktop: 1440x900
   - Mobile: 390x844
4. If available, capture screenshots for each major section.

## Smoke Checklist (Desktop)

### 1) Global Layout

- Site loads without errors or blank sections.
- Header, footer, and main content are visible.
- Typography renders with the intended font (Inter).
- No overlapping sections or layout shifts on initial load.
- No missing assets (broken images or empty icon placeholders).

### 2) Navigation / Header

- Logo and navigation links are visible and readable.
- Navigation links scroll to the correct section.
- Links do not 404 (open in same tab or new tab as expected).
- Focus outline is visible when tabbing through links.

### 3) Hero Section

- Primary headline and supporting copy are readable and non-stigmatizing.
- Main call-to-action button is visible and clickable.
- Hero imagery loads and is not stretched or pixelated.

### 4) Project / Impact / Transparency Sections

- Each section heading and body text renders correctly.
- Supporting visuals load correctly.
- Content is sensitive and appropriate for mental health context.

### 5) App / Comfy Section

- App screenshots or visuals load.
- App value proposition is clear and readable.
- Any download or learn-more CTA is visible.

### 6) Donation / Contribute Sections

- Donation messaging is clear and not misleading.
- Progress indicators (if present) show correct styling.
- Buttons have hover/focus states.
- Buttons and links are not dead (click produces intended result).

### 7) Footer

- Social icons display correctly and are clickable.
- Funding logos display without distortion.
- Contact and legal info are visible.

## Mobile Checklist

Repeat the sections above with the mobile viewport and verify:

- No horizontal scrolling.
- Text wraps correctly and remains readable.
- Buttons are large enough for touch.
- Navigation is usable (including any mobile menu).
- Decorative elements do not block content.

## Accessibility Checks

### Keyboard Navigation

- Use `Tab` to move through interactive elements.
- All interactive elements are reachable.
- Visible focus styles are present.

### Color & Contrast (Visual Spot Check)

- Text is readable on gradients and decorative backgrounds.
- CTAs and links are clearly distinguishable.

### Images

- Images convey appropriate meaning for mental health context.
- Decorative images do not distract from content.

## Content Quality Checks

- Tone is compassionate, professional, and non-judgmental.
- Portuguese context is respected (Olhão references, local relevance).
- No typos or mixed-language confusion.
- Donation and transparency claims are clear.

## Performance Spot Checks

- Initial load feels fast (no blocking spinners).
- Images load without excessive delay.
- Scrolling is smooth (no jank).

## SEO / Meta Spot Checks

- Page title is unique and descriptive.
- Meta description present (view page source if needed).
- Open Graph/Twitter card tags present (if provided).

## Regression Checks for Known Risks

- Gradients and glassmorphism effects render as intended.
- Backdrop blur does not reduce text contrast.
- Section anchors align with navigation.

## Test Evidence

Capture and store:

- One full-page screenshot (desktop)
- One full-page screenshot (mobile)
- 2–3 screenshots of key sections (hero, donate, footer)

## Reporting Template

Use this structure for each issue:

- **Title:** Short description of the issue
- **Severity:** blocker | high | medium | low
- **Environment:** local | preview | prod
- **Steps to Reproduce:**
  1. ...
  2. ...
- **Expected:** ...
- **Actual:** ...
- **Evidence:** screenshot name or link

## Completion Criteria

- All checklist items pass or have tracked issues.
- No blocker or high-severity issues remain.
- Evidence captured for the run.
