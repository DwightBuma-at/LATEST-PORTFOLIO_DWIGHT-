import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const ROUTES = ['/', '/about-me', '/experience', '/projects', '/skills', '/contacts'];

test.describe('Portfolio smoke & accessibility', () => {
  for (const route of ROUTES) {
    test(`renders ${route} without horizontal overflow or critical a11y violations`, async ({
      page,
    }) => {
      await page.goto(route);
      await page.waitForLoadState('networkidle');

      const hasOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(hasOverflow).toBe(false);

      const results = await new AxeBuilder({ page }).analyze();
      expect(results.violations).toEqual([]);
    });
  }
});
