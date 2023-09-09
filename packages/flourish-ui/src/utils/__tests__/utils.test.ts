import '@testing-library/jest-dom'
import { classMerge } from '..'

describe('utils test suite', () => {
  it('classMergeFunction works', () => {
    const responseDefinedInput = classMerge('default', 'flex', 'flex-grow')
    expect(responseDefinedInput).toBe('default flex flex-grow')

    const responseUndefinedInput = classMerge('default', undefined, undefined, undefined);
    expect(responseUndefinedInput).toBe('default');
  })
})
