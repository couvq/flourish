import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Modal from '..'

describe.skip('<Modal />', () => {
  it('should render without error', () => {
    const wrapper = render(<Modal show={true}>modal content</Modal>)
    expect(wrapper).not.toBeNull()
  })
})
