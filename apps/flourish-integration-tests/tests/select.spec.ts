import { test, expect } from "@playwright/test";
import { baseUrl } from "./constants";
import AxeBuilder from "@axe-core/playwright";
import { tabToElement } from "./utils";

test.describe("<Select /> integration tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.LOCALHOST ?? baseUrl}`);
    await page.locator('[href="/select"]').click();
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

  test("can click select trigger to open, can click trigger again to close", async ({
    page,
  }) => {
    await page.locator('[data-testId="basic-select-trigger"]').click();
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).toBeVisible();
    await expect(
        page.locator('[data-testid="basic-select-select-item-0"]')
      ).toHaveClass('f-select-item f-select-item-selected');
    await page.locator('[data-testId="basic-select-trigger"]').click();
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).not.toBeVisible();
  });
  // todo - click select trigger to open, click select option to close
  // todo - click select trigger to open, click outside to close
  // todo - keyboard to open, keyboard to select and close
});
