import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { Select } from '..'

describe('<Select />', () => {
  it('renders without error', () => {
    const wrapper = render(
      <Select value="test" options={[{ label: 'test', value: 'test' }]} />
    )
    expect(wrapper).not.toBeNull()
  })

  it('clicking trigger initially rotates caret icon, opens dropdown, and moves focus to the first select item.', async () => {
    render(
      <Select
        data-testId="test-select"
        value="placeholder text"
        options={[
          { label: 'test', value: 'test' },
          { label: 'test2', value: 'test2' }
        ]}
      />
    )
    const trigger = screen.getByRole('combobox', { name: 'placeholder text' })
    const caret = screen.getByTestId('test-select-caret')
    const dropdown = screen.getByRole('listbox')
    const firstItem = screen.getByTestId('test-select-select-item-0')
    fireEvent.click(trigger)
    waitFor(() => {
      expect(caret).toHaveClass('rotate-caret-up')
      expect(dropdown).not.toHaveClass('f-closed')
      expect(dropdown).toBeVisible()
      expect(firstItem).toHaveClass('f-select-item-selected')
    })
  })

  it('after initial opening - clicking second dropdown item rotates caret down, closes dropdown, and moves focus back to trigger.', async () => {
    render(
      <Select
        data-testId="test-select"
        value="placeholder text"
        options={[
          { label: 'test', value: 'test' },
          { label: 'test2', value: 'test2' }
        ]}
      />
    )
    const trigger = screen.getByRole('combobox', { name: 'placeholder text' })
    const caret = screen.getByTestId('test-select-caret')
    const dropdown = screen.getByRole('listbox')
    const secondItem = screen.getByTestId('test-select-select-item-1')
    fireEvent.click(trigger)
    fireEvent.click(secondItem)
    waitFor(() => {
      expect(caret).toHaveClass('rotate-caret-down')
      expect(dropdown).toHaveClass('f-closed')
      expect(dropdown).not.toBeVisible()
      expect(trigger).toHaveFocus()
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })
  })

  it('can close dropdown by clicking outside of select', async () => {
    render(
      <>
        <button>outside select</button>
        <Select
          data-testId="test-select"
          value="placeholder text"
          options={[
            { label: 'test', value: 'test' },
            { label: 'test2', value: 'test2' }
          ]}
        />
      </>
    )
    const trigger = screen.getByRole('combobox', { name: 'placeholder text' })
    const caret = screen.getByTestId('test-select-caret')
    const dropdown = screen.getByRole('listbox')
    const secondItem = screen.getByTestId('test-select-select-item-1')
    const outsideBtn = screen.getByRole('button', { name: 'outside select'})
    fireEvent.click(trigger)
    fireEvent.click(outsideBtn)
    waitFor(() => {
      expect(caret).toHaveClass('rotate-caret-down')
      expect(dropdown).toHaveClass('f-closed')
      expect(dropdown).not.toBeVisible()
      expect(trigger).toHaveFocus()
      expect(trigger).toHaveAttribute('aria-expanded', 'false')
    })
  })

  it('previously selected item has focus on next open', async () => {
    render(
      <Select
        data-testId="test-select"
        value="placeholder text"
        options={[
          { label: 'test', value: 'test' },
          { label: 'test2', value: 'test2' }
        ]}
      />
    )
    const trigger = screen.getByRole('combobox', { name: 'placeholder text' })
    const secondItem = screen.getByTestId('test-select-select-item-1')
    fireEvent.click(trigger)
    fireEvent.click(secondItem)
    fireEvent.click(trigger)
    waitFor(() => expect(secondItem).toHaveClass('f-select-item-selected'))
  })
})
