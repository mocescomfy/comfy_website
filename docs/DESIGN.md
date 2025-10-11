# Design System Documentation - MOCES Mental Health Initiative

Design system for the MOCES "Zona De(s)conforto" project and Comfy app landing page, focused on youth mental health support in Olhão, Portugal.

Figma design reference (main):
https://www.figma.com/design/odanCgLViklOxyQEGP7t5t/Moces_Landing-Page_PA--Copy-?node-id=1-40&p=f&t=tlCIFOCNJGCIhHAt-0


## Color Palette

This document outlines the complete color system used in the MOCES mental health initiative, designed to be calming, supportive, and accessible for youth mental health content.

### Primary Brand Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Bright Blue | `#3245ff` | Primary gradient color, trust and stability |
| Purple | `#bc52ee` | Primary gradient color, creativity and calm |
| Soft Red | `#d83333` | Secondary gradient color, gentle attention |
| Bright Pink/Magenta | `#f041ff` | Secondary gradient color, warmth and support |

### Neutral Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Very Dark Gray | `#111827` | Primary text color, SVG fills |
| Medium Gray | `#4b5563` | Secondary text color (paragraphs) |
| Dark Charcoal | `#17191e` | Astro logo fill |

### Gradient Background Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Light Pink | `#f3cddd` | Code background gradient |
| Light Lavender | `#f5cee7` | Code background gradient |

### Interactive Colors (RGB/RGBA)

| Color | Value | Usage |
|-------|-------|-------|
| Medium Gray | `rgb(78, 80, 86)` | Link hover state |
| Light Gray | `rgb(230, 230, 230)` | Button hover text |
| Pure White | `rgba(255, 255, 255, 1)` | Background boxes |
| Semi-transparent White | `rgba(255, 255, 255, 0.55)` | Hover background |
| Very Transparent White | `rgba(255, 255, 255, 0.12)` | Inset shadow highlights |
| Semi-transparent Black | `rgba(0, 0, 0, 0.24)` | Inset shadow depths |

## Gradient Definitions

### Primary Button Gradient
```css
background: linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%);
```
**Usage**: Main call-to-action buttons

### Code Highlight Gradient
```css
background: linear-gradient(14deg, #d83333 0%, #f041ff 100%);
```
**Usage**: Code text highlighting with webkit text fill

### Code Background Gradients
```css
/* Padding box */
background: linear-gradient(66.77deg, #f3cddd 0%, #f5cee7 100%) padding-box;

/* Border box */
background: linear-gradient(155deg, #d83333 0%, #f041ff 18%, #f5cee7 45%) border-box;
```
**Usage**: Code block backgrounds with gradient borders

### SVG Background Gradients

#### Gradient A (Blue to Purple)
```svg
<linearGradient id="a" x1="107.37" x2="1130.66" y1="1993.35" y2="1026.31">
  <stop stop-color="#3245FF"/>
  <stop offset="1" stop-color="#BC52EE"/>
</linearGradient>
```

#### Gradient B (Red to Pink)
```svg
<linearGradient id="b" x1="373" x2="1995.44" y1="1100" y2="118.03">
  <stop stop-color="#D83333"/>
  <stop offset="1" stop-color="#F041FF"/>
</linearGradient>
```

#### Astro Logo Gradient
```svg
<linearGradient id="a" x1="6.33" x2="19.43" y1="40.8" y2="34.6">
  <stop stop-color="#D83333"/>
  <stop offset="1" stop-color="#F041FF"/>
</linearGradient>
```

## Design Principles

### Color Usage Guidelines for Mental Health Content

1. **Primary Gradients**: Use blue-to-purple (`#3245ff` → `#bc52ee`) for trust-building elements and primary actions
2. **Secondary Gradients**: Use red-to-pink (`#d83333` → `#f041ff`) for supportive accents and call-to-action elements
3. **Text Hierarchy**: 
   - Primary text: `#111827` (very dark gray) for high readability
   - Secondary text: `#4b5563` (medium gray) for supportive content
4. **Interactive States**: Use RGB values with transparency for gentle, non-aggressive interactions
5. **Backgrounds**: Utilize subtle gradients with light pinks and lavenders for calming, supportive atmosphere
6. **Mental Health Considerations**: Colors chosen to be calming, non-triggering, and supportive

### Accessibility Considerations for Mental Health Support

- Primary text color (`#111827`) provides excellent contrast for users with visual impairments
- Secondary text color (`#4b5563`) maintains good readability for extended reading
- Interactive elements use sufficient color contrast ratios (WCAG 2.1 AA minimum)
- Gradients are used as enhancements, not as sole means of conveying critical information
- Color choices avoid potential triggers for users with mental health sensitivities
- Design supports users with anxiety, depression, and other mental health conditions
- Consistent visual hierarchy reduces cognitive load for vulnerable users

### Visual Effects

- **Blur Effects**: `filter: blur(100px)` for background elements
- **Backdrop Filters**: `backdrop-filter: blur(50px)` for glassmorphism effects
- **Box Shadows**: Combination of inset shadows for depth and dimension
- **Transparency**: Strategic use of RGBA values for layering effects

## Implementation Notes

- All gradients use CSS `linear-gradient()` function
- SVG assets include embedded gradient definitions
- Color values are consistent across components
- Responsive design maintains color consistency across breakpoints
- Modern CSS features like `backdrop-filter` are utilized for visual enhancement

