import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Button } from '..'

describe('<Button />', () => {
  it('renders without error', () => {
    const wrapper = render(<Button>Button</Button>)
    expect(wrapper).not.toBeNull()
  })

  it('renders primary button if primary is specified as variant', () => {
    render(<Button variant="primary">Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('f-button-primary')
  })

  it('renders secondary button if secondary is specified as variant', () => {
    render(<Button variant="secondary">Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('f-button-secondary')
  })
})
