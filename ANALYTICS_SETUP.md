# Analytics Setup (Free + Permanent)

This project is configured to use:

- **Google Analytics 4 (GA4)** for quantitative analytics (visits, devices, countries, traffic trends)
- **Microsoft Clarity** for behavioral analytics (session recordings, heatmaps, click behavior)

Both services provide a free plan with no 30-day trial limitation for normal landing-page usage.

## What is already implemented in code

- Central analytics module in `src/config/analytics.ts`
- Environment-based configuration (`VITE_GA4_MEASUREMENT_ID`, `VITE_CLARITY_PROJECT_ID`)
- SPA-compatible pageview tracking on initial load and hash changes
- Event tracking for:
  - section navigation clicks (`section_navigation_click`)
  - theme changes (`theme_changed`)
  - language changes (`language_changed`)
  - contact form lifecycle:
    - `contact_form_submit_attempt`
    - `contact_form_submit_success`
    - `contact_form_submit_failed`

## 1) Create Google Analytics 4 (GA4)

1. Open: <https://analytics.google.com>
2. Sign in with your Google account.
3. Click **Admin** (bottom-left).
4. In the **Account** column, create/select an account.
5. In the **Property** column, click **Create Property**.
   - Name: `UniVision Studio`
   - Time zone: your local timezone
   - Currency: your preference
6. Choose your business info and continue.
7. Create a **Web** data stream:
   - Website URL: your domain (or local preview later)
   - Stream name: `UniVision Landing`
8. After stream creation, copy the **Measurement ID** (format: `G-XXXXXXXXXX`).

## 2) Create Microsoft Clarity

1. Open: <https://clarity.microsoft.com>
2. Sign in with Microsoft/Google account.
3. Click **New Project**.
4. Enter:
   - Name: `UniVision Studio`
   - Website URL: your domain
   - Category as relevant (Business/Technology)
5. Create the project and copy the **Project ID**.

## 3) Add IDs to your local environment

1. In project root, create `.env` (do not commit it).
2. Add:

```env
VITE_GA4_MEASUREMENT_ID=G-YOUR_REAL_ID
VITE_CLARITY_PROJECT_ID=YOUR_REAL_CLARITY_ID
```

3. Restart dev server:

```bash
npm run dev
```

## 4) Validate tracking

### GA4 check

1. Open your website in browser.
2. In GA4 go to **Reports > Realtime**.
3. Confirm at least 1 active user appears.
4. Navigate between sections (`#home`, `#services`, etc.) and check events.

### Clarity check

1. Open Clarity dashboard.
2. Wait a few minutes.
3. Confirm session recordings start appearing.

## 5) Recommended privacy compliance

- Add a **Privacy Policy** page/section mentioning GA4 and Clarity usage.
- If you target EU users, add a **cookie consent banner** and load analytics after consent.

## Useful notes

- If IDs are missing, analytics calls safely no-op.
- In development, ad blockers can block analytics scripts.
- For production deployment, add the same env vars in your hosting platform settings.
