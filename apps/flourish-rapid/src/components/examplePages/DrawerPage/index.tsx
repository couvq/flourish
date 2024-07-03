import ExampleGroup from '@/components/common-components/ExampleGroup'
import ExamplePage from '@/components/common-components/ExamplePage'
import { Button, Drawer, Link, Typography } from 'flourish-ui'
import { useState } from 'react'

const DrawerPage = () => {
  const [show, setShow] = useState(false)

  return (
    <ExamplePage exampleName="Drawer examples">
      <ExampleGroup groupName="Basic drawer">
        <Button
          variant="icon"
          icon="bars"
          label="Open the drawer"
          // @ts-ignore
          onClick={(e) => {
            setShow(!show)
          }}
        />
        <Drawer
          dismissAriaLabel="Close the drawer"
          show={show}
          // @ts-ignore
          onClose={(e) => setShow(false)}
        >
          <Typography variant="h1">This is my drawer heading</Typography>
          <br />
          <Link href="#">Visit my portfolio</Link>
          <br />
          <Link href="#">Visit my github</Link>
          <br />
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In dolorem
            id soluta libero dicta voluptas ratione corrupti laboriosam.
            Voluptatibus ullam numquam delectus consequatur amet, quod
            repellendus accusantium iste tempora temporibus?
          </Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            accusantium sint asperiores suscipit pariatur voluptates,
            voluptatibus facere vel sequi voluptate rem exercitationem, deleniti
            ipsam nostrum. Dolorum, eos? Facilis, architecto molestias?
          </Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            sit suscipit dolore ea tempore placeat impedit autem iusto non
            excepturi quos, accusamus animi explicabo assumenda accusantium?
            Non, quaerat molestiae! Fugiat.
          </Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            sit suscipit dolore ea tempore placeat impedit autem iusto non
            excepturi quos, accusamus animi explicabo assumenda accusantium?
            Non, quaerat molestiae! Fugiat.
          </Typography>
        </Drawer>
      </ExampleGroup>
    </ExamplePage>
  )
}

export default DrawerPage
