import { test, expect } from "@playwright/test";
import { baseUrl } from "./constants";
import AxeBuilder from "@axe-core/playwright";
import { keyToElement, Key } from "./utils";

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
    await page.locator('[data-testId="theme-toggle"]').click();
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
    ).toHaveClass("f-select-item f-select-item-selected");
    await page.locator('[data-testId="basic-select-trigger"]').click();
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).not.toBeVisible();
  });

  test("can click select trigger to open, clicking a select option closes", async ({
    page,
  }) => {
    await page.locator('[data-testId="basic-select-trigger"]').click();
    await page.screenshot();
    await page
      .locator('[data-testid="basic-select-select-item-1"]')
      .filter({ hasText: "French" })
      .click();
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).not.toBeVisible();
    await expect(
      page.locator('[data-testId="basic-select-trigger"]')
    ).toHaveText("French");
  });

  test("can scroll to bottom option in scrollable select and click last option", async ({
    page,
  }) => {
    await page.locator('[data-testId="scrollable-select-trigger"]').click();
    await page.screenshot();
    await page
      .locator('[data-testid="scrollable-select-select-item-0"]')
      .filter({ hasText: "English" })
      .hover();
    await page.screenshot();
    await page
      .locator('[data-testid="scrollable-select-select-item-6"]')
      .filter({ hasText: "Hindi" })
      .scrollIntoViewIfNeeded();
    await expect(
      page
        .locator('[data-testid="scrollable-select-select-item-6"]')
        .filter({ hasText: "Hindi" })
    ).toBeVisible();
    await page.screenshot();
    await page
      .locator('[data-testid="scrollable-select-select-item-6"]')
      .filter({ hasText: "Hindi" })
      .click();
    await page.screenshot();
    await expect(
      page.locator('[data-testId="scrollable-select-trigger"]')
    ).toHaveText("Hindi");
  });

  test("can click select trigger to open, can click outside select to close", async ({
    page,
  }) => {
    await page.locator('[data-testId="basic-select-trigger"]').click();
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-testid="basic-select-select-item-0"]')
    ).toHaveClass("f-select-item f-select-item-selected");
    await page
      .locator('[class="f-typography-h2"]')
      .filter({ hasText: "Basic select" })
      .click();
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).not.toBeVisible();
  });

  test("can tab to select trigger and press enter key to open, can press downkey to bottom option and press enter to select", async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName.toLowerCase() !== "chromium",
      `Test only for chromium!`
    );
    await keyToElement(page, '[data-testId="basic-select-trigger"]');
    await page.screenshot();
    await page.keyboard.press(Key.ARROW_DOWN);
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).toBeVisible();
    await keyToElement(
      page,
      '[data-testid="basic-select-select-radio-3"]',
      Key.ARROW_DOWN
    );
    await page.screenshot();
    await page.keyboard.press("Enter");
    await page.screenshot();
    await expect(
      page.locator('[data-testId="basic-select-trigger"]')
    ).toHaveText("Italian");
  });

  test("can tab to select trigger and press space to open, can press escape to close", async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName.toLowerCase() !== "chromium",
      `Test only for chromium!`
    );
    await keyToElement(page, '[data-testId="basic-select-trigger"]');
    await page.screenshot();
    await page.keyboard.press(" ");
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await page.screenshot();
    await expect(
      page.locator('[data-testid="basic-select-select-options"]')
    ).not.toBeVisible();
  });
});
