import { Typography } from 'flourish-ui'
import ExampleGroup from '@components/ExampleGroup'
import ExamplePage from '@components/ExamplePage'

interface TypographyExample {
  groupName: string
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption"
}

const typographyExamples: TypographyExample[] = [
  {
    groupName: 'Heading level 1',
    variant: 'h1'
  },
  {
    groupName: 'Heading level 2',
    variant: 'h2'
  },
  {
    groupName: 'Heading level 3',
    variant: 'h3'
  },
  {
    groupName: 'Heading level 4',
    variant: 'h4'
  },
  {
    groupName: 'Heading level 5',
    variant: 'h5'
  },
  {
    groupName: 'Heading level 6',
    variant: 'h6'
  },
  {
    groupName: 'Paragraph',
    variant: 'p'
  },
  {
    groupName: 'Caption',
    variant: 'caption'
  }
]

const TypographyPage = () => {
  return (
    <>
      <ExamplePage exampleName="Typography examples">
        {typographyExamples.map((typographyExample) => (
          <ExampleGroup groupName={typographyExample.groupName}>
            <Typography variant={typographyExample.variant}>
              The quick brown fox jumps over the lazy dog.
            </Typography>
          </ExampleGroup>
        ))}
      </ExamplePage>
    </>
  )
}

export default TypographyPage
