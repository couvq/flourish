import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Modal from '..'

describe.skip('<Modal />', () => {
  it('should render without error', () => {
    const wrapper = render(<Modal show={true}>modal content</Modal>)
    expect(wrapper).not.toBeNull()
  })

  it('should display modal when show is set to true', () => {
    render(
      <Modal show data-testId="test-modal">
        modal content
      </Modal>
    )
    const modal = screen.getByTestId('test-modal')
    expect(modal).toBeVisible()
  })

  it('should not display modal when show is set to false', () => {
    render(
      <Modal show={false} data-testId="test-modal">
        modal content
      </Modal>
    )
    const modal = screen.getByTestId('test-modal')
    expect(modal).not.toBeVisible()
  })

  it('should close modal when dismiss btn is clicked', () => {
    render(
      <Modal show data-testId="test-modal">
        modal content
      </Modal>
    )

    const dismissBtn = screen.getByTestId('test-modal-dismiss-button')
    fireEvent.click(dismissBtn)
    const modal = screen.getByTestId('test-modal')
    expect(modal).not.toBeVisible()
  })
})
