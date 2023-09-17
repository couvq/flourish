import '@testing-library/jest-dom'
import {
  createEvent,
  fireEvent,
  getByRole,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import React from 'react'
import PrimaryBtn from '..'
import userEvent from '@testing-library/user-event'

describe('<PrimaryBtn />', () => {
  it('renders without error', () => {
    const wrapper = render(<PrimaryBtn>Button</PrimaryBtn>)
    expect(wrapper).not.toBeNull()
  })

  it('preventDefault called on mouse down', () => {
    render(<PrimaryBtn>Button</PrimaryBtn>)
    const btn = screen.getByRole('button', { name: 'Button' })
    const mockMouseDown = createEvent.mouseDown(btn)
    mockMouseDown.preventDefault = jest.fn()
    fireEvent(btn, mockMouseDown)
    expect(mockMouseDown.preventDefault).toHaveBeenCalled()
  })

  it('creates ripple effect on click and calls onClick function passed in through props', () => {
    const onClick = jest.fn()
    const { container } = render(
      <PrimaryBtn onClick={onClick}>Button</PrimaryBtn>
    )
    const btn = screen.getByRole('button', { name: 'Button' })
    fireEvent.click(btn)
    expect(container.querySelector('.ripple')).toBeInTheDocument()
    expect(onClick).toHaveBeenCalled()
  })

  it('fires default click if none passed', () => {
    render(<PrimaryBtn>Button</PrimaryBtn>)
    const btn = screen.getByRole('button', { name: 'Button' })
    fireEvent.click(btn)
  })

  it('adds focus grow effect when focused, removes it on blur', () => {
    const { container } = render(<PrimaryBtn>Button</PrimaryBtn>)
    const btn = screen.getByRole('button', { name: 'Button' })
    fireEvent.focus(btn)
    expect(container.querySelector('.focus-grow')).toBeInTheDocument()
    fireEvent.blur(btn)
    expect(container.querySelector('.focus-grow')).not.toBeInTheDocument()
  })
})
