import { test, expect } from "@playwright/test";
import { baseUrl } from "./constants";
import AxeBuilder from "@axe-core/playwright";
import { keyToElement } from "./utils";

const amazonUrl = "https://www.amazon.com";
const componentsUrl = '/'
const breadcrumbUrl = '/breadcrumbs'

test.describe("<Breadcrumbs /> integration tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.LOCALHOST ?? baseUrl}`);
    await page.locator('[href="/breadcrumbs"]').click();
  });

  test("has no axe-core a11y violations", async ({ page }) => {
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });

  test("has no axe-core a11y violations in dark mode", async ({ page }) => {
    await page.locator('[data-testId="theme-toggle"]').click();
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });
});
