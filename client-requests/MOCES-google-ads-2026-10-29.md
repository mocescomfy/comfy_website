# MOCES – Google Ads conversion tracking (2026-10-29)

Request from Maria Lopes (MOCES), on behalf of their marketing team.

## Requests

### 1. Add Google Ads tag ✅
- [x] Add `gtag('config', 'AW-17410462215');` right after `gtag('config', 'G-L0DNH564R3');`
- Done in `src/layouts/Layout.astro` (still consent-gated, loads only after "Aceitar")

### 2. Conversion on App Store / Google Play clicks ✅
- [x] Fire conversion `AW-17410462215/19gKCIHZl7ccEIek-u1A` (value 1.0 USD) on badge clicks
- Done in `src/components/AppDownloadBadges.astro`
- Note: Google's `gtag_report_conversion(url)` snippet was adapted, not pasted. It redirects in the
  same tab via a callback, which would break our `target="_blank"` links, hang if the callback is
  blocked, and error when there is no consent. We fire the event with `transport_type: 'beacon'`
  and let the link open normally.

### 3. Cookie banner wording (our addition) ✅
- [x] Banner now mentions advertising cookies (Google Ads), required under GDPR now that Ads cookies are set
- [x] Consent Mode v2 signals sent as granted after consent
- Pending: Maria may want different wording
