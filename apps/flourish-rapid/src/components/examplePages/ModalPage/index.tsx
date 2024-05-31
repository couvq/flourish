import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Button, Modal, Typography } from 'flourish-ui'
import { useState } from 'react'

const ModalPage = () => {
  const [showEmptyModal, setShowEmptyModal] = useState(false)
  const [showBasicModal, setShowBasicModal] = useState(false)
  const [showScrollableModal, setShowScrollableModal] = useState(false)
  return (
    <ExamplePage exampleName="Modal examples">
      <ExampleGroup groupName="Empty Modal">
        <Button onClick={() => setShowEmptyModal(true)}>Open</Button>
        <Modal
          show={showEmptyModal}
          onClose={() => setShowEmptyModal(false)}
          dismissAriaLabel="Close example modal"
        >
        </Modal>
      </ExampleGroup>

      <ExampleGroup groupName="Basic Modal">
        <Button onClick={() => setShowBasicModal(true)}>Open</Button>
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
        <Button onClick={() => setShowScrollableModal(true)}>open</Button>
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
