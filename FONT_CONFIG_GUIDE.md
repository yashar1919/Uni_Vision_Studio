/\*\*

- Font Configuration Documentation
-
- شما یک معماری کامل و بسیار انعطاف‌پذیر برای مدیریت فونت‌های فارسی دارید!
  \*/

// 📁 ساختار فایل‌ها:
// src/
// ├── config/
// │ └── fonts.ts (تنظیمات اصلی فونت‌ها)
// ├── styles/
// │ └── fonts.css (@font-face تعریف‌ها)
// ├── hooks/
// │ └── useFontConfig.ts (Hook برای استفاده در کامپوننت‌ها)
// └── index.css (فایل اصلی که تمام استایل‌ها را import می‌کند)
// public/
// └── fonts/ (فایل‌های فونت)

// ═══════════════════════════════════════════════════════════════

// 🎯 چطور فونت را تغییر دهید؟
//
// بسیار ساده! تنها باید یک خط را تغییر دهید:
//
// فایل: src/config/fonts.ts
// خط: export const ACTIVE_FONT: FontType = 'iranYekan';
//
// برای تغییر به Iran Sans:
// export const ACTIVE_FONT: FontType = 'iranSans';
//
// ✨ تمام پروژه به صورت خودکار Iran Sans استفاده خواهد کرد!

// ═══════════════════════════════════════════════════════════════

// 📚 نحوه استفاده در کامپوننت‌ها:

/\*
import { useFontConfig } from '@/hooks/useFontConfig';

function MyComponent() {
const { activeFont, activeFontFamily } = useFontConfig();

return (
<div>
<p>فونت فعلی: {activeFont.name}</p>
<p>Family: {activeFontFamily}</p>
</div>
);
}
\*/

// ═══════════════════════════════════════════════════════════════

// 🚀 فونت‌های موجود:
//
// 1. Iran Yekan (پیش‌فرض)
// - IRANYekanX-Light (وزن: 300)
// - IRANYekanX-Regular (وزن: 400)
// - IRANYekanX-Medium (وزن: 500)
// - IRANYekanX-Bold (وزن: 700)
//
// 2. Iran Sans
// - IRANSans_Light (وزن: 300)
// - IRANSans (وزن: 400)
// - IRANSans_Medium (وزن: 500)
// - IRANSans_Bold (وزن: 700)

// ═══════════════════════════════════════════════════════════════

// 💡 نکات مهم:
//
// • تمام کامپوننت‌ها خودکار از فونت انتخاب شده استفاده می‌کنند
// • هیچ تغییری در کامپوننت‌ها لازم نیست
// • فقط یک فایل (src/config/fonts.ts) را تغییر دهید
// • تمام وزن‌های فونت پیش‌بارگذاری شده‌اند
// • font-display: swap برای بهتر شدن عملکرد استفاده شده است

export {};
