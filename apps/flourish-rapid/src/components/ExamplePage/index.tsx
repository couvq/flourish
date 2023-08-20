import { Link } from 'react-router-dom'

interface ExamplePageProps {
  children: React.ReactNode
}

const ExamplePage = ({ children }: ExamplePageProps) => {
  return (
    <>
      <div
        style={{
          padding: '2rem'
        }}
      >
        <Link to="/">Go back to components</Link>
        {children}
      </div>
    </>
  )
}

export default ExamplePage
