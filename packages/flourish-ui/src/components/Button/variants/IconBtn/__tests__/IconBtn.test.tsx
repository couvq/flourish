import { faXmark } from '@fortawesome/free-solid-svg-icons'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, createEvent } from '@testing-library/react'
import React from 'react'
import IconBtn, { getFontawesomeIconForIconType } from '..'

describe('<IconBtn />', () => {
  it('renders without error', () => {
    const wrapper = render(<IconBtn label="close the modal" />)
    expect(wrapper).not.toBeNull()
  })

  it('getFontawesomeIconForIconType function works', () => {
    const resultWithCloseInput = getFontawesomeIconForIconType('close')
    expect(resultWithCloseInput).toEqual(faXmark)
  })

  it('should fire click event provided to onClick prop when icon button is clicked', () => {
    const handleClick = jest.fn()
    render(
      <IconBtn
        label="close the modal"
        data-testId="test-icon-btn"
        onClick={handleClick}
      />
    )
    const iconBtn = screen.getByTestId('test-icon-btn')
    fireEvent.click(iconBtn)
    expect(handleClick).toHaveBeenCalled()
  })

  it('preventDefault called on mouse down', () => {
    const handleClick = jest.fn()
    render(
      <IconBtn
        label="close the modal"
        data-testId="test-icon-btn"
        onClick={handleClick}
      />
    )
    const btn = screen.getByRole('button', { name: 'close the modal' })
    const mockMouseDown = createEvent.mouseDown(btn)
    mockMouseDown.preventDefault = jest.fn()
    fireEvent(btn, mockMouseDown)
    expect(mockMouseDown.preventDefault).toHaveBeenCalled()
  })

  it('fires default click if none passed', () => {
    render(<IconBtn label="close the modal" data-testId="test-icon-btn" />)
    const btn = screen.getByRole('button', { name: 'close the modal' })
    fireEvent.click(btn)
  })
})
