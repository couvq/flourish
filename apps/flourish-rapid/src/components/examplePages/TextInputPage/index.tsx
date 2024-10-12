import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { TextInput } from 'flourish-ui'

const TextInputPage = () => {
  return (
    <ExamplePage exampleName='TextInput examples'>
      <ExampleGroup groupName='Basic example'>
        <TextInput />
      </ExampleGroup>
    </ExamplePage>
  )
}

export default TextInputPage
