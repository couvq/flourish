import '@testing-library/jest-dom'
import {
  createEvent,
  fireEvent, render,
  screen
} from '@testing-library/react'
import React from 'react'
import SecondaryBtn from '..'

describe('<SecondaryBtn />', () => {
  it('renders without error', () => {
    const wrapper = render(<SecondaryBtn>Button</SecondaryBtn>)
    expect(wrapper).not.toBeNull()
  })

  it('preventDefault called on mouse down', () => {
    render(<SecondaryBtn>Button</SecondaryBtn>)
    const btn = screen.getByRole('button', { name: 'Button' })
    const mockMouseDown = createEvent.mouseDown(btn)
    mockMouseDown.preventDefault = jest.fn()
    fireEvent(btn, mockMouseDown)
    expect(mockMouseDown.preventDefault).toHaveBeenCalled()
  })

  it('creates ripple effect on click and calls onClick function passed in through props', () => {
    const onClick = jest.fn()
    const { container } = render(
      <SecondaryBtn onClick={onClick}>Button</SecondaryBtn>
    )
    const btn = screen.getByRole('button', { name: 'Button' })
    fireEvent.click(btn)
    expect(container.querySelector('.ripple')).toBeInTheDocument()
    expect(onClick).toHaveBeenCalled()
  })

  it('fires default click if none passed', () => {
    render(<SecondaryBtn>Button</SecondaryBtn>)
    const btn = screen.getByRole('button', { name: 'Button' })
    fireEvent.click(btn)
  })
})
