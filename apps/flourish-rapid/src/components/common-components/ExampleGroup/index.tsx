import { Typography } from 'flourish-ui'
import './ExampleGroup.scss'

interface ExampleGroupProps {
  children: React.ReactNode
  groupName: string
}

const ExampleGroup = ({ children, groupName }: ExampleGroupProps) => {
  return (
    <div className="example-group">
      <Typography variant="h2">{groupName}</Typography>
      {children}
    </div>
  )
}

export default ExampleGroup
