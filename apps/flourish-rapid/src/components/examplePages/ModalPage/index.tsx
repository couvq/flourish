import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Button, Modal, Typography } from 'flourish-ui'
import { useState } from 'react'

const ModalPage = () => {
  const [show, setShow] = useState(false)
  return (
    <ExamplePage exampleName="Modal examples">
      <ExampleGroup groupName="Basic Modal">
        <button onClick={() => setShow(true)}>open</button>
        <Modal
          show={show}
          onClose={() => setShow(false)}
          dismissAriaLabel="Close example modal"
        >
          <Typography
            variant="h1"
            style={{
              marginBottom: '1rem'
            }}
          >
            Leave us feedback
          </Typography>
          <Typography
            style={{
              marginBottom: '1rem'
            }}
          >
            Your feedback helps us make more informed decisions for our
            customers. As earth&apos;s most customer obsessed design system we value
            customer feedback and use it to make flourish more delightful for
            you.
          </Typography>
          <Button onClick={() => alert('thanks for the feedback!')}>
            Submit feedback
          </Button>
        </Modal>
      </ExampleGroup>
    </ExamplePage>
  )
}

export default ModalPage
