import '@testing-library/jest-dom'
import { classMerge, removeFocusGrowEffect } from '..'

describe('utils test suite', () => {
  it('classMergeFunction works', () => {
    const responseDefinedInput = classMerge('default', 'flex', 'flex-grow')
    expect(responseDefinedInput).toBe('default flex flex-grow')

    const responseUndefinedInput = classMerge('default', undefined, undefined, undefined);
    expect(responseUndefinedInput).toBe('default');
  })

  it('removeFocusGrowEffect function works', () => {
    const button = document.createElement('button');
    const focusGrow = document.createElement('span');
    focusGrow.classList.add('focus-grow');
    // @ts-ignore
    button.addEventListener('blur', (e: FocusEvent) => removeFocusGrowEffect(e))
    document.body.appendChild(button);
    button.focus();
    button.blur();
    const focusGrowAfterBlur = document.querySelector('.focus-grow');
    expect(focusGrowAfterBlur).not.toBeInTheDocument();
  });
})
