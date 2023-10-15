import { Page } from "@playwright/test";

/**
 * Presses the key until the element with the given selector is in focus.
 * @param selector css selector for element you want to tab to
 * @param key key to press for keyboard navigation, defaults to Tab if none specified
 */
export const keyToElement = async (
  page: Page,
  selector: string,
  key: "Tab" | "ArrowUp" | "ArrowDown"
): Promise<void> => {
  await page.evaluate(
    ({ selector }) => {
      if (!document.querySelector(selector)) {
        throw new Error(`No elements found with selector: ${selector}`);
      } else if (document.querySelectorAll(selector).length > 1) {
        throw new Error(`Multiple elements found with selector: ${selector}`);
      }
    },
    { selector }
  );
  await tabTo(page, selector, key);
};

const tabTo = async (
  page: Page,
  selector: string,
  key: "Tab" | "ArrowUp" | "ArrowDown",
  visited: Element[] = []
): Promise<void> => {
  await page.keyboard.press(key);
  await page.screenshot();

  const foundTarget = await page.evaluate(
    ({ selector, visited }) => {
      const target = document.querySelector(selector);
      const focused = document.activeElement;

      if (focused === target) {
        console.log(`Element with selector ${selector} is focused`);
        return true;
      }

      if (!document.activeElement) return false;

      // @ts-ignore
      if (visited.includes(focused)) {
        console.error(
          `Element with selector ${selector} is not a tabbable element`
        );
        return false;
      }

      // @ts-ignore
      visited.push(focused);
    },
    { selector, visited }
  );

  if (!foundTarget) return tabTo(page, selector, key, visited);
};
