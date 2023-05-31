import { createContext, useState } from "react"

export type TTheme = "light" | "dark"
export type TFont = "sans" | "serif" | "mono"

export const ThemeContext = createContext<any>({ theme: "light", undefined })

export const ThemeProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>("light")
  const [font, setFont] = useState<TFont>("sans")

  return (
    <ThemeContext.Provider value={{ theme, setTheme, font, setFont }}>
      {children}
    </ThemeContext.Provider>
  )
}
