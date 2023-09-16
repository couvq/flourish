import { test, expect } from "@playwright/test";
import { baseUrl } from "./constants";
import AxeBuilder from "@axe-core/playwright";
import { tabToElement } from "./utils";

test.describe("<Button /> integration tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.LOCALHOST ?? baseUrl}`);
    await page.locator('[href="/button"]').click();
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

  test("can click primary button to increase count", async ({ page }) => {
    await page.locator('[data-testId="primary-button"]').click();
    expect(
      page.locator('[data-testId="primary-button-count"]').filter({ hasText: "1" })
    ).toBeAttached();
  });

  test("can tab to and press enter key on primary button to increase count", async ({
    page,
    browserName
  }) => {
    test.skip(
      browserName.toLowerCase() !== "chromium",
      `Test only for chromium!`
    );
    await tabToElement(page, '[data-testId="primary-button"]');
    await page.keyboard.press("Enter");
    await page.screenshot();
    expect(
      page.locator('[data-testId="primary-button-count"]').filter({ hasText: "1" })
    ).toBeAttached();
  });
});
