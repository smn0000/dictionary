import "./styles.scss"
import { useState } from "react"
import { TFont, ThemeContext } from "../../ThemeContext"
import { useContext, useRef } from "react"
import { useOnClickOutside } from "usehooks-ts"
const FontSelect = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [selected, setSelected] = useState<TFont>("sans")
  const dropDownRef = useRef(null)

  useOnClickOutside(dropDownRef, () => setShowMenu(false))

  const { theme, setFont } = useContext(ThemeContext)
  const handleFontSelect = (font: TFont) => {
    setFont(font)
    setSelected(font)
    setShowMenu(false)
  }

  return (
    <div className={`select__wrapper ${theme}`} ref={dropDownRef}>
      <div
        className="select"
        onMouseUpCapture={() => setShowMenu((current) => !current)}
      >
        <span>{selected === "sans" ? "Sans Serif" : selected}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            strokeWidth="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </div>
      <div className={`select__dropdown ${showMenu ? "" : "hidden"}`}>
        <div
          style={{ fontFamily: "Inter" }}
          onClick={() => handleFontSelect("sans")}
        >
          Sans Serif
        </div>
        <div
          style={{ fontFamily: "Lora" }}
          onClick={() => handleFontSelect("serif")}
        >
          Serif
        </div>
        <div
          style={{ fontFamily: "Inconsolata" }}
          onClick={() => handleFontSelect("mono")}
        >
          Mono
        </div>
      </div>
    </div>
  )
}

export default FontSelect
