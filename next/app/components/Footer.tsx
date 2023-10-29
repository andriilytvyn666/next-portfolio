import { useTheme } from '../theme/ThemeContext'

export default function Footer() {
  const theme = useTheme()

  return (
    <footer className="flex w-full items-center justify-between pt-4 pb-5">
      <p>copyright © 2023 andrii lytvyn</p>
      <p>українська</p>
      <button onClick={theme.toggleTheme}>
        {theme.isThemeDark === true ? 'theme is true' : 'theme is false'}
      </button>
    </footer>
  )
}
