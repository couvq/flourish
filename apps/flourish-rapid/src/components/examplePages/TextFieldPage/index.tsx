import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { TextField } from 'flourish-ui'

const TextFieldPage = () => {
  return (
    <ExamplePage exampleName="Text Field examples">
      <ExampleGroup groupName="Basic example">
        <TextField label="Name" />
      </ExampleGroup>
    </ExamplePage>
  )
}

export default TextFieldPage
