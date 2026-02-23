# Logo Replacement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace header and footer logos with new client-provided illustrated assets, and restructure footer to add "Investidores Sociais" row.

**Architecture:** Direct asset replacement for header (LogoZone.astro), structural refactor for footer (Footer.tsx) to add three distinct rows. Assets organized in src/assets/ with footer-specific assets in subdirectory.

**Tech Stack:** Astro, React/TypeScript, Tailwind CSS

---

## Task 1: Copy and Organize Assets

**Files:**
- Source: `client-assets/` (various files)
- Create: `src/assets/moces.svg`
- Create: `src/assets/comfy.png`
- Create: `src/assets/zonadesconforto.png`
- Create: `src/assets/footer/pis-logo.png`
- Create: `src/assets/footer/algarve2030-bar.svg`
- Create: `src/assets/footer/cmo-logo.png`
- Create: `src/assets/footer/juntas/olhao.png`
- Create: `src/assets/footer/juntas/fuseta.png`
- Create: `src/assets/footer/juntas/moncarapacho.png`
- Create: `src/assets/footer/juntas/pechao.png`
- Create: `src/assets/footer/juntas/quelfes.png`

**Step 1: Create footer asset directories**

```bash
mkdir -p src/assets/footer/juntas
```

**Step 2: Copy header assets (replacing existing)**

```bash
cp client-assets/Moces-01-Logo-Vertical-Black.svg src/assets/moces.svg
cp client-assets/Comfy-Logo-Black.png src/assets/comfy.png
cp client-assets/ZONA-DESCONFORTO.png src/assets/zonadesconforto.png
```

**Step 3: Copy footer assets**

```bash
cp client-assets/logotipo-PIS-2017-001.png src/assets/footer/pis-logo.png
cp client-assets/Barras-de-Assinaturas-Algarve2030-Cores.svg src/assets/footer/algarve2030-bar.svg
cp client-assets/logo-cmo---mais-para-si-01.png src/assets/footer/cmo-logo.png
```

**Step 4: Copy junta logos with clean names**

```bash
cp "client-assets/juntas2/Junta Freguesia Olhão.png" src/assets/footer/juntas/olhao.png
cp "client-assets/juntas2/Junta Freguesia Fuseta.png" src/assets/footer/juntas/fuseta.png
cp "client-assets/juntas2/Junta Freguesia Moncarapacho.png" src/assets/footer/juntas/moncarapacho.png
cp "client-assets/juntas2/Junta Fraguesia Pechão.png" src/assets/footer/juntas/pechao.png
cp "client-assets/juntas2/Junta Freguesia Quelfes.png" src/assets/footer/juntas/quelfes.png
```

**Step 5: Remove old header PNG assets**

```bash
rm src/assets/moces.png
```

**Step 6: Verify all assets exist**

```bash
ls -la src/assets/moces.svg src/assets/comfy.png src/assets/zonadesconforto.png
ls -la src/assets/footer/
ls -la src/assets/footer/juntas/
```

Expected: All 11 new files present

**Step 7: Commit**

```bash
git add src/assets/
git commit -m "chore: add new logo assets for header and footer"
```

---

## Task 2: Update Header Logos (LogoZone.astro)

**Files:**
- Modify: `src/components/LogoZone.astro`

**Step 1: Update imports to use new assets**

Change imports from:
```astro
import mocesLogo from '../assets/moces.png';
import zonaLogo from '../assets/zonadesconforto.png';
import comfyLogo from '../assets/comfy.png';
```

To:
```astro
import mocesLogo from '../assets/moces.svg';
import zonaLogo from '../assets/zonadesconforto.png';
import comfyLogo from '../assets/comfy.png';
```

**Step 2: Adjust MOCES logo sizing for vertical layout**

The new MOCES logo is vertical (hands icon above text). Change the container from:
```astro
<div class="flex items-center justify-center flex-shrink-0 w-[78px] h-4 sm:w-[120px] sm:h-6">
```

To (taller for vertical layout):
```astro
<div class="flex items-center justify-center flex-shrink-0 w-[40px] h-[50px] sm:w-[60px] sm:h-[75px]">
```

And update the Image width/height props:
```astro
<Image
  src={mocesLogo}
  alt="Moces - Organização sem fins lucrativos"
  width={60}
  height={75}
  loading="eager"
  decoding="async"
  class="w-full h-full object-contain"
/>
```

**Step 3: Adjust Comfy logo sizing for cloud mascot**

The new Comfy logo has cloud mascot above text. Change the container from:
```astro
<div class="flex items-center justify-center flex-shrink-0 w-[71px] h-6 sm:w-[110px] sm:h-[37px]">
```

To (taller for mascot):
```astro
<div class="flex items-center justify-center flex-shrink-0 w-[50px] h-[60px] sm:w-[80px] sm:h-[95px]">
```

And update the Image width/height props:
```astro
<Image
  src={comfyLogo}
  alt="Comfy App"
  width={80}
  height={95}
  loading="eager"
  decoding="async"
  class="w-full h-full object-contain"
/>
```

**Step 4: Start dev server and verify**

```bash
npm run dev
```

Open browser at localhost:4321, check header logos at 430px, 768px, 1440px widths.

Expected: All 3 logos display without 404s, proper sizing at all breakpoints.

**Step 5: Commit**

```bash
git add src/components/LogoZone.astro
git commit -m "feat(header): replace logos with new illustrated versions (#36)"
```

---

## Task 3: Restructure Footer Component

**Files:**
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Update imports for new assets**

Replace existing imports:
```tsx
import mocesLogo from '../../assets/moces.png';
import zonaLogo from '../../assets/zonadesconforto.png';
import comfyLogo from '../../assets/comfy.png';
```

With:
```tsx
import mocesLogo from '../../assets/moces.svg';
import zonaLogo from '../../assets/zonadesconforto.png';
import comfyLogo from '../../assets/comfy.png';
import pisLogo from '../../assets/footer/pis-logo.png';
import algarve2030Bar from '../../assets/footer/algarve2030-bar.svg';
import cmoLogo from '../../assets/footer/cmo-logo.png';
import juntaOlhao from '../../assets/footer/juntas/olhao.png';
import juntaFuseta from '../../assets/footer/juntas/fuseta.png';
import juntaMoncarapacho from '../../assets/footer/juntas/moncarapacho.png';
import juntaPechao from '../../assets/footer/juntas/pechao.png';
import juntaQuelfes from '../../assets/footer/juntas/quelfes.png';
```

**Step 2: Replace footer content with new structure**

Replace the entire content inside the `<footer>` tag with:

```tsx
<footer className="w-full px-4 py-12 md:px-8 md:py-16 bg-[#FAF0E6]">
  <div className="container-responsive space-y-10">
    {/* Row 1: Brand Logos */}
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
      {/* MOCES Logo - vertical layout */}
      <div className="w-[50px] h-[62px] sm:w-[60px] sm:h-[75px]">
        <img
          src={mocesLogo.src}
          alt="MOCES - Organização sem fins lucrativos"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Zona De(s)conforto Logo */}
      <div className="w-20 h-20 sm:w-[100px] sm:h-[100px]">
        <img
          src={zonaLogo.src}
          alt="Zona De(s)conforto"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Comfy Logo - with cloud mascot */}
      <div className="w-[50px] h-[60px] sm:w-[70px] sm:h-[85px]">
        <img
          src={comfyLogo.src}
          alt="Comfy App"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>

    {/* Row 2: Cofinanciado Por */}
    <div className="space-y-3">
      <p className="text-center text-sm text-gray-600 font-inter uppercase tracking-wide">
        Cofinanciado por
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
        {/* PT Inovação Social */}
        <div className="h-12 w-auto">
          <img
            src={pisLogo.src}
            alt="Portugal Inovação Social"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
        {/* Algarve 2030 Bar */}
        <div className="h-12 w-auto">
          <img
            src={algarve2030Bar.src}
            alt="ALGARVE 2030, PORTUGAL 2030, Cofinanciado pela União Europeia"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    {/* Row 3: Investidores Sociais */}
    <div className="space-y-3">
      <p className="text-center text-sm text-gray-600 font-inter uppercase tracking-wide">
        Investidores Sociais
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
        {/* CMO */}
        <div className="h-10 w-auto sm:h-12">
          <img
            src={cmoLogo.src}
            alt="Câmara Municipal de Olhão"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
        {/* Juntas */}
        <div className="h-8 w-auto sm:h-10">
          <img
            src={juntaOlhao.src}
            alt="Junta de Freguesia de Olhão"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="h-8 w-auto sm:h-10">
          <img
            src={juntaFuseta.src}
            alt="Junta de Freguesia da Fuseta"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="h-8 w-auto sm:h-10">
          <img
            src={juntaMoncarapacho.src}
            alt="Junta de Freguesia de Moncarapacho"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="h-8 w-auto sm:h-10">
          <img
            src={juntaPechao.src}
            alt="Junta de Freguesia de Pechão"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="h-8 w-auto sm:h-10">
          <img
            src={juntaQuelfes.src}
            alt="Junta de Freguesia de Quelfes"
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="pt-4 text-center text-sm text-gray-600 font-inter">
      <p>© 2025 MOCES - Todos os direitos reservados</p>
    </div>
  </div>
</footer>
```

**Step 3: Verify in browser**

Check footer at 430px, 768px, 1440px widths.

Expected:
- 3 rows visible (brand logos, cofinanciado, investidores sociais)
- All logos load without 404s
- Responsive wrapping on mobile

**Step 4: Commit**

```bash
git add src/components/layout/Footer.tsx
git commit -m "feat(footer): restructure with new logos and investidores sociais row (#37)"
```

---

## Task 4: Clean Up Old Assets

**Files:**
- Delete: `public/footer/funding-logos.svg` (replaced by algarve2030-bar.svg)

**Step 1: Remove old funding logos**

```bash
rm public/footer/funding-logos.svg
```

**Step 2: Verify no 404s**

Check dev server console for any missing asset errors.

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove old funding-logos.svg"
```

---

## Task 5: Final Verification

**Step 1: Visual comparison against reference**

Open `client-assets/Logos.png` for reference. Compare header and footer against this reference.

**Step 2: Test all breakpoints**

| Breakpoint | Width | Check |
|------------|-------|-------|
| Mobile | 430px | Header logos, footer wrapping |
| Tablet | 768px | Header logos, footer layout |
| Desktop | 1440px | Header logos, footer single rows |

**Step 3: Close GitHub issues**

Use gh CLI or GitHub UI to close issues #36 and #37 with reference to commits.

```bash
gh issue close 36 --comment "Implemented in commits. Header logos replaced with new illustrated versions."
gh issue close 37 --comment "Implemented in commits. Footer restructured with 3 rows and new logos."
```
