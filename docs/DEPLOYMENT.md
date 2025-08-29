# Deployment Guide

This guide covers deployment options and best practices for the Comfy app landing page.

## Overview

The Comfy landing page is built with Astro, which generates static files that can be deployed to various hosting platforms. This ensures fast loading times and excellent SEO performance.

## Recommended Hosting Platforms

### 1. Netlify (Recommended)
**Why Netlify:**
- Excellent Astro support
- Automatic deployments from Git
- Built-in form handling
- Edge functions support
- Free SSL certificates
- Global CDN

**Deployment Steps:**
1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[build.environment]
  NODE_VERSION = "18"
```

### 2. Vercel
**Why Vercel:**
- Zero-configuration deployments
- Excellent performance
- Built-in analytics
- Image optimization
- Edge functions

**Deployment Steps:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow the setup prompts
4. Automatic deployments on Git push

**Vercel Configuration** (`vercel.json`):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro"
}
```

### 3. GitHub Pages
**Why GitHub Pages:**
- Free hosting for public repositories
- Direct integration with GitHub
- Custom domain support

**Deployment Steps:**
1. Install GitHub Pages adapter: `npm install @astrojs/github-pages`
2. Update `astro.config.mjs`:
   ```js
   import { defineConfig } from 'astro/config';
   import githubPages from '@astrojs/github-pages';

   export default defineConfig({
     integrations: [githubPages()],
     site: 'https://username.github.io/moces/'
   });
   ```
3. Set up GitHub Actions workflow
4. Enable GitHub Pages in repository settings

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Build Optimization

### Environment Variables
Create `.env` file for development:
```env
PUBLIC_SITE_URL=http://localhost:4321
PUBLIC_APP_STORE_URL=https://apps.apple.com/app/comfy
PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.moces.comfy
PUBLIC_ANALYTICS_ID=your-analytics-id
```

For production, set these in your hosting platform's environment variables.

### Performance Optimization

**Astro Configuration** (`astro.config.mjs`):
```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    }
  },
  compressHTML: true,
  site: 'https://comfy.moces.org' // Replace with your domain
});
```

### Image Optimization
```js
// Add to astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  // ... other config
  image: {
    domains: ['your-image-domain.com'],
    formats: ['webp', 'avif']
  }
});
```

## Custom Domain Setup

### DNS Configuration
Point your domain to your hosting provider:

**For Netlify:**
- Add CNAME record: `www` → `your-site.netlify.app`
- Add A record: `@` → Netlify's IP address

**For Vercel:**
- Add CNAME record: `www` → `your-project.vercel.app`
- Add A record: `@` → Vercel's IP address

### SSL Certificates
All recommended platforms provide automatic SSL certificates. Ensure HTTPS redirect is enabled.

## Monitoring & Analytics

### Google Analytics 4
Add to `Layout.astro`:
```astro
---
const { PUBLIC_ANALYTICS_ID } = import.meta.env;
---

{PUBLIC_ANALYTICS_ID && (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${PUBLIC_ANALYTICS_ID}`}></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', import.meta.env.PUBLIC_ANALYTICS_ID);
    </script>
  </>
)}
```

### Core Web Vitals
Monitor performance with:
- Google PageSpeed Insights
- Lighthouse CI
- Web Vitals Chrome extension
- Real User Monitoring (RUM)

## SEO Optimization

### Sitemap Generation
```js
// Add to astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://comfy.moces.org',
  integrations: [
    sitemap()
  ]
});
```

### Meta Tags
Ensure each page has:
- Unique title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

### robots.txt
Create `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://comfy.moces.org/sitemap-index.xml
```

## Security Headers

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://www.google-analytics.com;
">
```

### HTTP Headers
Configure in your hosting platform:
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

## Backup & Recovery

### Git Repository
- Keep main branch protected
- Use feature branches for changes
- Tag releases for easy rollback
- Maintain clean commit history

### Database Backup
If using a CMS or database:
- Regular automated backups
- Test restore procedures
- Store backups in separate location
- Document recovery process

## Continuous Integration

### Pre-deployment Checks
```yaml
# Add to GitHub Actions
- name: Run tests
  run: npm test

- name: Check types
  run: npm run type-check

- name: Lint code
  run: npm run lint

- name: Audit dependencies
  run: npm audit
```

### Automated Testing
```js
// package.json scripts
{
  "scripts": {
    "test": "playwright test",
    "test:visual": "percy exec -- playwright test",
    "lighthouse": "lhci autorun"
  }
}
```

## Troubleshooting

### Common Issues

**Build Fails:**
- Check Node.js version compatibility
- Clear node_modules and reinstall
- Verify all dependencies are installed

**Slow Loading:**
- Optimize images
- Enable compression
- Check for unused CSS/JS
- Use CDN for assets

**SEO Issues:**
- Verify meta tags
- Check sitemap generation
- Ensure proper canonical URLs
- Test with Google Search Console

### Support Resources
- [Astro Documentation](https://docs.astro.build/)
- [Netlify Support](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Guide](https://docs.github.com/en/pages)

---

*This deployment guide ensures the Comfy landing page is delivered with optimal performance, security, and reliability.*
