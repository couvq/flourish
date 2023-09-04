const ThemeToggle = () => {
  return (
    <button onClick={() => document.body.classList.toggle('f-dark-mode')}>
      Change theme
    </button>
  )
}

export default ThemeToggle
