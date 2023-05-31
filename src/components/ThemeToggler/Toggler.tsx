import { ThemeContext } from "../../ThemeContext"
import { ChangeEvent, FormEvent, useContext } from "react"
import "./styles.scss"

const Toggler = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className={`toggler__wrapper ${theme}`}>
      <input
        type="checkbox"
        className="toggler"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          e.target.checked ? setTheme("dark") : setTheme("light")
        }
      />
      <div
        className={`toggler__ball ${theme === "dark" ? "toggled" : ""}`}
      ></div>
    </div>
  )
}

export default Toggler
