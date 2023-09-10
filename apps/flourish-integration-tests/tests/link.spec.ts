import { test, expect } from "@playwright/test";
import { baseUrl } from "./constants";
import AxeBuilder from "@axe-core/playwright";
import { tabToElement } from "./utils";

const href = "https://www.amazon.com/b2b/appcenter";

test.describe("<Link /> integration tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.LOCALHOST ?? baseUrl}`);
    await page.locator('[href="/link"]').click();
  });

  test("has no axe-core a11y violations", async ({ page }) => {
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });

  test("has no axe-core a11y violations in dark mode", async ({ page }) => {
    await page.locator("button").filter({ hasText: "Change theme" }).click();
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });

  test("clicking basic link brings to url provided in href prop", async ({
    page,
  }) => {
    await page.locator('[data-testId="basic-link"]').click();
    expect(page.url()).toBe(href);
  });

  test("clicking external link brings to url provided in href prop in a new tab", async ({
    page,
    context,
  }) => {
    const pagePromise = context.waitForEvent("page");
    await page.locator('[data-testId="external-link"]').click();
    const newPage = await pagePromise;
    await newPage.waitForLoadState();
    expect(newPage.url()).toBe(href);
  });

  // todo - functionaly a11y tests
});
