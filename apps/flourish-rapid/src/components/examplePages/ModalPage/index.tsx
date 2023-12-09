import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Modal } from 'flourish-ui'
import { useState } from 'react'

const ModalPage = () => {
  const [show, setShow] = useState(false)
  return (
    <ExamplePage exampleName="Modal examples">
      <ExampleGroup groupName="Basic Modal">
        <button onClick={() => setShow(true)}>open</button>
        <Modal show={show} onClose={() => setShow(false)} dismissAriaLabel="Close example modal">
          modal content
        </Modal>
      </ExampleGroup>
    </ExamplePage>
  )
}

export default ModalPage
