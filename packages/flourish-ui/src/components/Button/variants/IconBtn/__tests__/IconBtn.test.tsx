import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import IconBtn from '..'

describe('<SecondaryBtn />', () => {
  it('renders without error', () => {
    const wrapper = render(<IconBtn />)
    expect(wrapper).not.toBeNull()
  })
})
