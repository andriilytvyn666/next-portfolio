import React, { createContext, useContext, useState } from 'react'

type ThemeContextProps = {
  isThemeDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
  isThemeDark: true,
  toggleTheme: () => {},
})

type Props = {
  children: React.ReactNode
}

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: Props) {
  const [darkTheme, setDarkTheme] = useState<boolean>(true)

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ isThemeDark: darkTheme, toggleTheme: toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
