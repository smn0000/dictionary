import Navbar from "./components/Navbar/Navbar"
import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"
function App() {
  const { theme, font } = useContext(ThemeContext)
  return (
    <div className={`${theme} ${font}`}>
      <Navbar />
      <main>
        <h1>Lorem</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eum
          explicabo quisquam obcaecati? Laborum nesciunt molestias, nobis,
          tempore magni minus architecto sint ut animi minima asperiores placeat
          harum fugit dicta?
        </p>
      </main>
    </div>
  )
}

export default App
