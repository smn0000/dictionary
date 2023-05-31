import { createContext, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

export type TTheme = "light" | "dark"
export type TFont = "sans" | "serif" | "mono"

export const ThemeContext = createContext<any>({ theme: "light", undefined })

export const ThemeProvider: React.FC<any> = ({ children }) => {
  const isPreferredDark = useMediaQuery("(prefers-color-scheme: dark)")

  const [theme, setTheme] = useState<TTheme>(isPreferredDark ? "dark" : "light")
  const [font, setFont] = useState<TFont>("sans")

  return (
    <ThemeContext.Provider value={{ theme, setTheme, font, setFont }}>
      {children}
    </ThemeContext.Provider>
  )
}
