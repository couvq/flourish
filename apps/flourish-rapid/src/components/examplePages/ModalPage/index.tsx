import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Button, Modal, Typography } from 'flourish-ui'
import { useState } from 'react'

const ModalPage = () => {
  const [showBasicModal, setShowBasicModal] = useState(false)
  const [showScrollableModal, setShowScrollableModal] = useState(false)
  return (
    <ExamplePage exampleName="Modal examples">
      <ExampleGroup groupName="Basic Modal">
        <button onClick={() => setShowBasicModal(true)}>open</button>
        <Modal
          show={showBasicModal}
          onClose={() => setShowBasicModal(false)}
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
            customers. As earth&apos;s most customer obsessed design system we
            value customer feedback and use it to make flourish more delightful
            for you.
          </Typography>
          <Button onClick={() => console.log('thanks for the feedback!')}>
            Submit feedback
          </Button>
        </Modal>
      </ExampleGroup>

      <ExampleGroup groupName="Modal with scrollable content">
        <button onClick={() => setShowScrollableModal(true)}>open</button>
        <Modal
          show={showScrollableModal}
          onClose={() => setShowScrollableModal(false)}
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
            customers. As earth&apos;s most customer obsessed design system we
            value customer feedback and use it to make flourish more delightful
            for you.
          </Typography>
          <Typography
            style={{
              marginBottom: '1rem'
            }}
          >
            Your feedback helps us make more informed decisions for our
            customers. As earth&apos;s most customer obsessed design system we
            value customer feedback and use it to make flourish more delightful
            for you.
          </Typography>
          <Typography
            style={{
              marginBottom: '1rem'
            }}
          >
            Your feedback helps us make more informed decisions for our
            customers. As earth&apos;s most customer obsessed design system we
            value customer feedback and use it to make flourish more delightful
            for you.
          </Typography>
          <Button onClick={() => console.log('thanks for the feedback!')}>
            Submit feedback
          </Button>
        </Modal>
      </ExampleGroup>
    </ExamplePage>
  )
}

export default ModalPage
