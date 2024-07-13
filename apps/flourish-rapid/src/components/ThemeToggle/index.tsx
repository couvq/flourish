import { Button } from 'flourish-ui'
import { useState } from 'react'

enum Theme {
  DARK = 'moon',
  LIGHT = 'sun'
}

const ThemeToggle = () => {
  // @ts-ignore
  const [theme, setTheme] = useState<Theme>(
    // @ts-ignore
    localStorage.getItem('theme') ?? Theme.LIGHT
  )

  const toggleTheme = () => {
    // theme === Theme.LIGHT ? setTheme(Theme.DARK) : setTheme(Theme.LIGHT)
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK)
      localStorage.setItem('theme', Theme.DARK)
    } else {
      setTheme(Theme.LIGHT)
      localStorage.setItem('theme', Theme.LIGHT)
    }
    document.body.classList.toggle('f-dark-mode')
  }
  return (
    <Button
      variant="icon"
      label="Change the theme"
      icon={theme}
      onClick={toggleTheme}
      data-testId="theme-toggle"
    />
  )
}

export default ThemeToggle
