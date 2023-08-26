import { Typography } from 'flourish-ui'
import { Link } from 'react-router-dom'

interface ExamplePageProps {
  children: React.ReactNode,
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
        <Link to="/">Go back to components</Link>
        <Typography variant='h1'>{exampleName}</Typography>
        {children}
      </div>
    </>
  )
}

export default ExamplePage
