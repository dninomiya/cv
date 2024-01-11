import { AppConfig } from '@/app.config';
import { test } from '@playwright/test';

test.use({
  colorScheme: 'dark',
});

test('ogimage', async ({ page }) => {
  const port = process.env.PORT || 3000;
  const locales =
    AppConfig.locales.length > 0
      ? AppConfig.locales.map((locale) => locale.id)
      : [AppConfig.defaultLocale];

  for (const lang of locales) {
    await page.goto(`http://localhost:${port}/${lang}/og-image`);
    await page
      .locator('#canvas')
      .screenshot({ path: `./public/locale/${lang}/og-image.png` });
  }
});
