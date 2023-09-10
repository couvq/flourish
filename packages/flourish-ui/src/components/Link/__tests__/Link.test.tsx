import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Link } from '..'

describe('<Link />', () => {
  it('renders without error', () => {
    const wrapper = render(<Link href="https://amazon.com">Go to Amazon</Link>)
    expect(wrapper).not.toBeNull()
  })

  it('if external prop is set to true, renders external version of the link', () => {
    const { container } = render(
      <Link href="https://amazon.com" external>
        Go to Amazon
      </Link>
    )
    expect(container.querySelector('.f-icon-external')).toBeInTheDocument();
  })
})
