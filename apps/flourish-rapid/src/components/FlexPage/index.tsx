import ExamplePage from '@components/ExamplePage'
import { Flex, Typography } from 'flourish-ui'
import React, { useState } from 'react'
import ExampleGroup from '../ExampleGroup'
import './FlexPage.scss'

interface SquareProps {
  children: React.ReactNode
}

const flexDirections: string[] = ['col', 'row', 'row-reverse', 'col-reverse']

const justifyContentOptions: string[] = [
  'start',
  'center',
  'space-between',
  'space-around',
  'space-evenly'
]

const Square = ({ children }: SquareProps) => (
  <div className="square">{children}</div>
)

const FlexPage = () => {
  const [selectedDirection, setSelectedDirection] = useState<
    'col' | 'row' | 'row-reverse' | 'col-reverse' | undefined
  >('col')
  const [selectedJustifyContent, setSelectedJustifyContent] = useState<
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined
  >('start')
  return (
    <>
      <ExamplePage exampleName="Flex examples">
        <ExampleGroup groupName="Basic">
          <label htmlFor="directions-select">
            <Typography>Flex direction</Typography>
          </label>
          <select
            name="directions"
            id="directions-select"
            value={selectedDirection}
            // @ts-ignore
            onChange={(e) => setSelectedDirection(e.target.value)}
          >
            {flexDirections.map((direction, i) => (
              <option value={direction} key={i}>
                {direction}
              </option>
            ))}
          </select>

          <label htmlFor="jc-select">
            <Typography>Justify Content</Typography>
          </label>
          <select
            name="jc"
            id="jc-select"
            value={selectedJustifyContent}
            // @ts-ignore
            onChange={(e) => setSelectedJustifyContent(e.target.value)}
          >
            {justifyContentOptions.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>
          <Flex
            direction={selectedDirection}
            justifyContent={selectedJustifyContent}
          >
            {Array.from(Array(3).keys()).map((number, i) => (
              <Square key={i}>{number + 1}</Square>
            ))}
          </Flex>
        </ExampleGroup>
      </ExamplePage>
    </>
  )
}

export default FlexPage
