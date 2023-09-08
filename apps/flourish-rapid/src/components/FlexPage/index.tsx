import ExamplePage from '@components/ExamplePage'
import { Flex } from 'flourish-ui'
import React from 'react'
import ExampleGroup from '../ExampleGroup'

interface SquareProps {
  children: React.ReactNode
}

const Square = ({ children }: SquareProps) => (
  <div
    style={{
      width: '20px',
      height: '20px',
      background: 'red',
      color: 'white'
    }}
  >
    {children}
  </div>
)

const FlexPage = () => {
  return (
    <>
      <ExamplePage exampleName="Flex examples">
        <ExampleGroup groupName="Column">
          <Flex direction="col">
            <Square>1</Square>
            <Square>2</Square>
          </Flex>
        </ExampleGroup>
        <ExampleGroup groupName="Row">
          <Flex direction='row'>
            <Square>1</Square>
            <Square>2</Square>
          </Flex>
        </ExampleGroup>
        <ExampleGroup groupName="Column Reverse">
          <Flex direction='col-reverse'>
            <Square>1</Square>
            <Square>2</Square>
          </Flex>
        </ExampleGroup>
        <ExampleGroup groupName="Row Reverse">
          <Flex direction="row-reverse">
            <Square>1</Square>
            <Square>2</Square>
          </Flex>
        </ExampleGroup>
      </ExamplePage>
    </>
  )
}

export default FlexPage
