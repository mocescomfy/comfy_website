# Terms Page Content Update - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace placeholder terms content with client's exact legal text from Feb 24 email.

**Architecture:** Direct content replacement in existing Astro page. No structural changes - keep layout, styling, header/footer intact.

**Tech Stack:** Astro, Tailwind CSS

---

### Task 1: Transcribe Terms Content

**Files:**
- Create: `docs/content/terms-content.md` (temporary reference)

**Step 1: Extract text from email screenshots**

Transcribe the full terms content from these screenshots in order:
1. `moces-thread-last.png` - Header, intro, DEFINIÇÕES
2. `moces-thread-terms.png` - DESCRIÇÃO DA APP, REGISTO DE UTILIZADOR
3. `email-scroll.png` - User obligations cont., RESOLUÇÃO DE LITÍGIOS, UTILIZAÇÃO DA APP POR MENORES
4. `email-scroll2.png` - DIREITOS E OBRIGAÇÕES DAS PARTES
5. `email-attachments.png` - ALTERAÇÕES AOS TERMOS, CONTACTOS

Save raw transcription to `docs/content/terms-content.md` for reference.

**Step 2: Commit transcription**

```bash
git add docs/content/terms-content.md
git commit -m "docs: transcribe terms content from client email"
```

---

### Task 2: Update Terms Page

**Files:**
- Modify: `src/pages/termosecondicoes.astro`

**Step 1: Replace page content**

Keep the existing structure:
- Lines 1-6: imports and frontmatter (keep)
- Lines 7-14: Layout, header, main wrapper (keep)
- Lines 15-22: Back link and h1 title (update date to "20 de fevereiro de 2026")
- Lines 24-142: Content sections (replace entirely)
- Lines 144-154: Footer section (keep)

Replace the content div with client's sections:
1. Intro paragraphs (no heading)
2. DEFINIÇÕES (definitions list a-h)
3. DESCRIÇÃO DA APP
4. REGISTO DE UTILIZADOR (with 3 subsections)
5. DIREITOS E OBRIGAÇÕES DAS PARTES (with 4 subsections)
6. RESOLUÇÃO DE LITÍGIOS
7. UTILIZAÇÃO DA APP POR MENORES
8. ALTERAÇÕES AOS TERMOS
9. CONTACTOS

**Step 2: Verify dev server renders correctly**

```bash
npm run dev
```

Open http://localhost:4321/termosecondicoes and verify:
- All sections display correctly
- Portuguese text renders properly (accents, special chars)
- Links to ola@moces.pt work
- Back links work
- Responsive at 430px, 768px, 1440px

**Step 3: Commit changes**

```bash
git add src/pages/termosecondicoes.astro
git commit -m "feat: update terms page with client's legal text

Closes #61"
```

---

### Task 3: Cleanup

**Files:**
- Delete: `docs/content/terms-content.md` (optional - can keep for reference)

**Step 1: Verify production build**

```bash
npm run build
```

Expected: Build succeeds with no errors.

**Step 2: Final verification**

```bash
npm run preview
```

Check terms page renders correctly in production build.
