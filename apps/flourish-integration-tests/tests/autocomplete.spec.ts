import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { baseUrl } from "./constants";

const basicTriggerSelector = '[data-testId="basic-autocomplete-trigger"]';
const basicExampleFirstItemSelector = '[data-testId="basic-autocomplete-item-1"]'
const basicExampleSelectedId = '[data-testId="basic-autocomplete-selected-id"]'

test.describe("<Link /> integration tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.LOCALHOST ?? baseUrl}`);
    await page.locator('[href="/autocomplete"]').click();
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

  test("can select matching input with mouse", async ({ page }) => {
    await page.locator(basicTriggerSelector).type("aero");
    await page.locator(basicExampleFirstItemSelector).click()
    expect(page.locator(basicExampleSelectedId)).toHaveText("Selected id is 1")
  });
});
