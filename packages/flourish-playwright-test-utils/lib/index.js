/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * Presses the key until the element with the given selector is in focus.
 * @param selector css selector for element you want to tab to
 * @param key key to press for keyboard navigation, defaults to Tab if none specified
 */
const keyToElement = (page, selector, key) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.evaluate(({ selector }) => {
        if (!document.querySelector(selector)) {
            throw new Error(`No elements found with selector: ${selector}`);
        }
        else if (document.querySelectorAll(selector).length > 1) {
            throw new Error(`Multiple elements found with selector: ${selector}`);
        }
    }, { selector });
    yield tabTo(page, selector, key);
});
const tabTo = (page, selector, key, visited = []) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.keyboard.press(key);
    yield page.screenshot();
    const foundTarget = yield page.evaluate(({ selector, visited }) => {
        const target = document.querySelector(selector);
        const focused = document.activeElement;
        if (focused === target) {
            console.log(`Element with selector ${selector} is focused`);
            return true;
        }
        if (!document.activeElement)
            return false;
        // @ts-ignore
        if (visited.includes(focused)) {
            console.error(`Element with selector ${selector} is not a tabbable element`);
            return false;
        }
        // @ts-ignore
        visited.push(focused);
    }, { selector, visited });
    if (!foundTarget)
        return tabTo(page, selector, key, visited);
});

export { keyToElement };
