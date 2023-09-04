import { test, expect } from "@playwright/test";
import { baseUrl } from "./constants";
import AxeBuilder from "@axe-core/playwright";

test.describe("<Typography /> integration tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.LOCALHOST ?? baseUrl}`);
    await page.locator('[href="/typography"]').click();
  });

  test("has no axe-core a11y violations", async ({ page }) => {
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });


  test("has no axe-core a11y violations in dark mode", async ({ page }) => {
    await page.locator('button').filter({ hasText: 'Change theme'}).click();
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });

  test("has all variants of typography component", async ({ page }) => {
    await expect(
      page
        .locator("h1.f-typography-h1")
        .filter({ hasText: "The quick brown fox jumps over the lazy dog." })
    ).toBeAttached();
    await expect(
      page
        .locator("h2.f-typography-h2")
        .filter({ hasText: "The quick brown fox jumps over the lazy dog." })
    ).toBeAttached();
    await expect(
      page
        .locator("h3.f-typography-h3")
        .filter({ hasText: "The quick brown fox jumps over the lazy dog." })
    ).toBeAttached();
    await expect(
      page
        .locator("h4.f-typography-h4")
        .filter({ hasText: "The quick brown fox jumps over the lazy dog." })
    ).toBeAttached();
    await expect(
      page
        .locator("h5.f-typography-h5")
        .filter({ hasText: "The quick brown fox jumps over the lazy dog." })
    ).toBeAttached();
    await expect(
      page
        .locator("h6.f-typography-h6")
        .filter({ hasText: "The quick brown fox jumps over the lazy dog." })
    ).toBeAttached();
    await expect(
      page
        .locator("p.f-typography-body")
        .filter({ hasText: "The quick brown fox jumps over the lazy dog." })
    ).toBeAttached();
    await expect(
      page
        .locator("p.f-typography-caption")
        .filter({ hasText: "The quick brown fox jumps over the lazy dog." })
    ).toBeAttached();
  });
});
