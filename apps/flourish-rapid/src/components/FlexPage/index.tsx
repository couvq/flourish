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

const alignItemsOptions: string[] = ['stretch', 'center', 'start', 'end']

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
  const [selectedAlignItems, setSelectedAlignItems] = useState<
    'stretch' | 'center' | 'start' | 'end' | undefined
  >('stretch')
  const [gapValue, setGapValue] = useState(0)

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
          <label htmlFor="ai-select">
            <Typography>Align Items</Typography>
          </label>
          <select
            name="ai"
            id="ai-select"
            value={selectedAlignItems}
            // @ts-ignore
            onChange={(e) => setSelectedAlignItems(e.target.value)}
          >
            {alignItemsOptions.map((option, i) => (
              <option value={option} key={i}>
                {option}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={gapValue}
            // @ts-ignore
            onChange={(e) => setGapValue(e.target.value)}
          />
          <Flex
            direction={selectedDirection}
            justifyContent={selectedJustifyContent}
            alignItems={selectedAlignItems}
            // @ts-ignore
            gap={gapValue}
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
