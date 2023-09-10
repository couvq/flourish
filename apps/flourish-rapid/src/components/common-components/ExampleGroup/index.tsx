import { Typography } from 'flourish-ui'

interface ExampleGroupProps {
  children: React.ReactNode
  groupName: string
}

const ExampleGroup = ({ children, groupName }: ExampleGroupProps) => {
  return (
    <div style={{
        border: '2px dashed #000',
        padding: '1rem',
        marginTop: '1rem'
    }}>
      <Typography variant="h2">{groupName}</Typography>
      {children}
    </div>
  )
}

export default ExampleGroup
