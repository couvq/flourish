import { test, expect, Page } from "@playwright/test";
import { baseUrl } from "./constants";
import AxeBuilder from "@axe-core/playwright";
import { keyToElement } from "./utils";

const basicModalTriggerSelector = '[data-testId="basic-modal-trigger"]';
const scrollableModalTriggerSelector =
  '[data-testId="scrollable-modal-trigger"]';
const scrollableModalSubmitFeedbackBtn =
  '[data-testId="scrollable-modal-trigger"]';
const basicModalSelector = '[data-testId="basic-modal"]';
const basicModalDismissBtnSelector =
  '[data-testId="basic-modal-dismiss-button"]';

const openBasicModalViaClick = async (page: Page) => {
  await page.locator(basicModalTriggerSelector).click();
  await page.screenshot();
};

const openBasicModalViaTabKey = async (page: Page) => {
  await keyToElement(page, basicModalTriggerSelector);
  await page.screenshot();
  await page.keyboard.press("Enter");
  await page.screenshot();
};

test.describe("<Modal /> integration tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${process.env.LOCALHOST ?? baseUrl}`);
    await page.locator('[href="/modal"]').click();
  });

  test("has no axe-core a11y violations", async ({ page }) => {
    await openBasicModalViaClick(page);
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });

  test("has no axe-core a11y violations in dark mode", async ({ page }) => {
    await page.locator("button").filter({ hasText: "Change theme" }).click();
    await openBasicModalViaClick(page);
    const a11yScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();

    expect(a11yScanResults.violations).toEqual([]);
  });

  test("should be able to open basic modal by clicking modal trigger and close by clicking dismiss button", async ({
    page,
  }) => {
    await openBasicModalViaClick(page);
    expect(page.locator(basicModalSelector)).toBeVisible();
    await page.locator(basicModalDismissBtnSelector).click();
    await page.screenshot();
    expect(page.locator(basicModalSelector)).not.toBeVisible();
  });

  test("should focus icon dismiss btn upon opening modal", async ({ page }) => {
    await openBasicModalViaClick(page);
    expect(page.locator(basicModalDismissBtnSelector)).toBeFocused();
  });

  test("Should be able to open basic modal by clicking modal trigger and close by clicking outside of modal", async ({
    page,
  }) => {
    await openBasicModalViaClick(page);
    expect(page.locator(basicModalSelector)).toBeVisible();
    // click top left corner of screen (outside modal)
    await page.click("body", {
      position: {
        x: 0,
        y: 0,
      },
    });
    await page.screenshot();
    expect(page.locator(basicModalSelector)).not.toBeVisible();
  });

  test("Should be able to scroll to content in scrollable modal", async ({
    page,
  }) => {
    await page.locator(scrollableModalTriggerSelector).click();
    await page.screenshot();
    await page
      .locator(scrollableModalSubmitFeedbackBtn)
      .scrollIntoViewIfNeeded();
    await page.screenshot();
    expect(page.locator(scrollableModalSubmitFeedbackBtn)).toBeInViewport();
  });

  test("Should be able to open basic modal using only keyboard and trigger dismiss icon btn using only keyboard, once closed focus should return to the trigger element", async ({
    page,
  }) => {
    await openBasicModalViaTabKey(page);
    expect(page.locator(basicModalSelector)).toBeVisible();
    await keyToElement(page, basicModalDismissBtnSelector);
    await page.screenshot();
    await page.keyboard.press("Enter");
    await page.screenshot();
    expect(page.locator(basicModalSelector)).not.toBeVisible();
    expect(page.locator(basicModalTriggerSelector)).toBeFocused();
  });

  test("Should be able to open basic modal using only keyboard and close modal by pressing escape key, once closed focus should return to the trigger element", async ({
    page,
  }) => {
    await openBasicModalViaTabKey(page);
    expect(page.locator(basicModalSelector)).toBeVisible();
    await page.keyboard.press("Escape");
    await page.screenshot();
    expect(page.locator(basicModalSelector)).not.toBeVisible();
    expect(page.locator(basicModalTriggerSelector)).toBeFocused();
  });
});
