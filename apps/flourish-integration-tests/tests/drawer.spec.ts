import { test, expect, Page } from "@playwright/test";
import { baseUrl } from "./constants";
import AxeBuilder from "@axe-core/playwright";
import { keyToElement } from "./utils";

const basicDrawerTriggerSelector = '[data-testId="basic-drawer-trigger"]';
const basicDrawerSelector = '[data-testId="basic-drawer"]';
const basicDrawerDismissBtnSelector =
  '[data-testId="basic-drawer-dismiss-button"]';

const openBasicDrawerViaClick = async (page: Page) => {
  await page.locator(basicDrawerTriggerSelector).click();
  await page.screenshot();
};

const openBasicDrawerViaTabKey = async (page: Page) => {
  await keyToElement(page, basicDrawerTriggerSelector);
  await page.screenshot();
  await page.keyboard.press("Enter");
  await page.screenshot();
};

test.describe("<Drawer /> integration tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.LOCALHOST ?? baseUrl}`);
    await page.locator('[href="/drawer"]').click();
  });

  test("has no axe-core a11y violations", async ({ page }) => {
    await openBasicDrawerViaClick(page);
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });

  test("has no axe-core a11y violations in dark mode", async ({ page }) => {
    await page.locator('[data-testId="theme-toggle"]').click();
    await openBasicDrawerViaClick(page);
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });
});
