import { Button } from 'flourish-ui'
import { useState } from 'react'

enum Theme {
  DARK = 'sun',
  LIGHT = 'moon'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  const toggleTheme = () => {
    theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT)
    document.body.classList.toggle('f-dark-mode')
  }
  return (
    <Button
      variant="icon"
      label="Change the theme"
      icon={theme}
      onClick={toggleTheme}
    />
  )
}

export default ThemeToggle
