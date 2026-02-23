# Logo Replacement Design

**Date:** 2026-02-23
**Issues:** #36 (Header logos), #37 (Footer logos)
**Status:** Approved

## Overview

Replace header and footer logos with new client-provided assets. The new logos feature illustrated designs (MOCES with hands icon, Comfy with cloud mascot) replacing the previous text-only versions.

## Header Changes (Issue #36)

**File:** `src/components/LogoZone.astro`

### Asset Replacements

| Current | New | Format |
|---------|-----|--------|
| `src/assets/moces.png` | `moces.svg` | SVG |
| `src/assets/comfy.png` | `comfy.png` | PNG |
| `src/assets/zonadesconforto.png` | `zonadesconforto.png` | PNG |

### Sizing Adjustments

- **MOCES:** Vertical layout (hands + text stacked), needs height-based sizing
- **Comfy:** Includes cloud mascot above text, needs more vertical space
- **Zona:** Similar aspect ratio, straightforward replacement

Responsive breakpoints preserved (mobile/desktop).

## Footer Changes (Issue #37)

**File:** `src/components/layout/Footer.tsx`

### New Structure

```
┌─────────────────────────────────────────────────────────────┐
│                      BRAND LOGOS                            │
│         MOCES    |    Zona    |    Comfy                    │
├─────────────────────────────────────────────────────────────┤
│                   COFINANCIADO POR                          │
│    PT Inovação Social    |    Algarve 2030 bar              │
├─────────────────────────────────────────────────────────────┤
│                  INVESTIDORES SOCIAIS                       │
│  CMO  | Olhão | Fuseta | Moncarapacho | Pechão | Quelfes    │
└─────────────────────────────────────────────────────────────┘
```

### New Assets

| Asset | Purpose |
|-------|---------|
| `pis-logo.png` | PT Inovação Social - Cofinanciado row |
| `algarve2030-bar.svg` | Replaces current funding-logos.svg |
| `cmo-logo.png` | Câmara Municipal de Olhão |
| 5 Junta PNGs | Investidores Sociais row |

### Responsive Behavior

- **Desktop (lg):** All logos in single rows per section
- **Tablet (md):** Wrap as needed, centered
- **Mobile:** Stack/wrap, smaller sizes

## Asset Organization

```
src/assets/
├── moces.svg
├── comfy.png
├── zonadesconforto.png
└── footer/
    ├── pis-logo.png
    ├── algarve2030-bar.svg
    ├── cmo-logo.png
    └── juntas/
        ├── olhao.png
        ├── fuseta.png
        ├── moncarapacho.png
        ├── pechao.png
        └── quelfes.png
```

## Testing

### Verification Steps

1. Start dev server
2. Check header at 430px, 768px, 1440px
3. Check footer at same breakpoints
4. Verify all logos load without 404s
5. Visual check against `Logos.png` reference

### Acceptance Criteria

- All 3 header logos display correctly at all breakpoints
- Footer shows 3 rows: brand logos, cofinanciado, investidores sociais
- No pixelation
- No layout shifts or overflow issues

## Source Assets

Downloaded from client email (2026-02-23) to `client-assets/`:
- Header: `Moces-01-Logo-Vertical-Black.svg`, `Comfy-Logo-Black.png`, `ZONA-DESCONFORTO.png`
- Footer: `logotipo-PIS-2017-001.png`, `Barras-de-Assinaturas-Algarve2030-Cores.svg`, `logo-cmo---mais-para-si-01.png`
- Juntas: `juntas2/*.png` (5 files)
