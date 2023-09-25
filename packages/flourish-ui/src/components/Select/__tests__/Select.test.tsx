import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Select } from '..'

describe('<Select />', () => {
  it('renders without error', () => {
    const wrapper = render(
      <Select
        label="test select"
        options={[{ label: 'test', value: 'test' }]}
      />
    )
    expect(wrapper).not.toBeNull()
  })
})
