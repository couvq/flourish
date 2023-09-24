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

  it('fires default change event handler on click if no changeEvent prop passed', () => {
    render(
      <Select
        label="test select"
        options={[{ label: 'test', value: 'test' }]}
        data-testId="test-select"
      />
    )
    const select = screen.getByTestId('test-select')
    fireEvent.change(select)
  })

  it('renders label text if labelVisible prop is true', () => {
    render(
      <Select
        label="test select label"
        options={[{ label: 'test', value: 'test' }]}
        data-testId="test-select"
        labelVisible
      />
    )
    const labelText = screen.getByText('test select label')
    expect(labelText).toBeInTheDocument()
  })
})
