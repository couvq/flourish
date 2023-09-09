import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Flex } from '..'

describe('<Flex />', () => {
  it('col direction prop sets proper class', () => {
    render(
      <Flex direction="col" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-col')
  })

  it('col-reverse direction prop sets proper class', () => {
    render(
      <Flex direction="col-reverse" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-col-reverse')
  })

  it('row direction prop sets proper class', () => {
    render(
      <Flex direction="row" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-row')
  })

  it('row-reverse direction prop sets proper class', () => {
    render(
      <Flex direction="row-reverse" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-row-reverse')
  })

  it('undefined direction prop sets proper class', () => {
    render(
      <Flex data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-col')
  })

  it('start justifyContent prop sets proper class', () => {
    render(
      <Flex justifyContent="start" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-jc-start')
  })

  it('center justifyContent prop sets proper class', () => {
    render(
      <Flex justifyContent="center" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-jc-center')
  })

  it('space-between justifyContent prop sets proper class', () => {
    render(
      <Flex justifyContent="space-between" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass(
      'f-flex-jc-space-between'
    )
  })

  it('space-around justifyContent prop sets proper class', () => {
    render(
      <Flex justifyContent="space-around" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass(
      'f-flex-jc-space-around'
    )
  })

  it('space-evenly justifyContent prop sets proper class', () => {
    render(
      <Flex justifyContent="space-evenly" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass(
      'f-flex-jc-space-evenly'
    )
  })

  it('undefined justifyContent prop sets proper class', () => {
    render(
      <Flex data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-jc-start')
  })

  it('stretch alignItems prop sets proper class', () => {
    render(
      <Flex alignItems="stretch" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-ai-stretch')
  })

  it('center alignItems prop sets proper class', () => {
    render(
      <Flex alignItems="center" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-ai-center')
  })

  it('start alignItems prop sets proper class', () => {
    render(
      <Flex alignItems="start" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-ai-start')
  })

  it('end alignItems prop sets proper class', () => {
    render(
      <Flex alignItems="end" data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-ai-end')
  })

  it('undefined alignItems prop sets proper class', () => {
    render(
      <Flex data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-ai-stretch')
  })

  it('undefined gap prop sets proper class', () => {
    render(
      <Flex data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-gap-0')
  })

  it('greater than 16 gap prop sets proper class', () => {
    render(
      // @ts-ignore
      <Flex gap={20} data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-gap-16')
  })

  it('proper gap prop sets proper class', () => {
    render(
      <Flex gap={8} data-testId="flex-test">
        <div>1</div>
        <div>2</div>
      </Flex>
    )

    expect(screen.getByTestId('flex-test')).toHaveClass('f-flex-gap-8')
  })
})
