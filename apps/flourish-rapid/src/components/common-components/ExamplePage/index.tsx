import { Flex, Typography } from 'flourish-ui'
import { Link } from 'react-router-dom'
import ThemeToggle from '../../ThemeToggle'
import './ExamplePage.scss'

interface ExamplePageProps {
  children: React.ReactNode
  exampleName: string
}

const ExamplePage = ({ children, exampleName }: ExamplePageProps) => {
  return (
    <>
      <div
        style={{
          padding: '2rem'
        }}
      >
        <Flex direction='row' alignItems='center' justifyContent='center'>
          <Link className='back-link' to="/">&#x25c0; Go back to components</Link>
          <ThemeToggle />
        </Flex>
        <Typography variant="h1">{exampleName}</Typography>
        {children}
      </div>
    </>
  )
}

export default ExamplePage
