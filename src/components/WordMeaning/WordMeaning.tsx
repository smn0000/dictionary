import { ThemeContext } from "../../ThemeContext"
import "./styles.scss"
import { useContext } from "react"

const WordMeaning = ({
  meaning,
  getWordFromApi,
}: {
  meaning: IMeaning
  getWordFromApi: (word: string) => void
}) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`word__meaning ${theme}`}>
      <div className="word__meaning__partofspeech">
        <p>{meaning.partOfSpeech}</p>
        <div className="line"></div>
      </div>
      <p className="heading small word__meaning__subtitle">Meaning</p>
      <ul className="word__meaning__list">
        {meaning.definitions.map((definition, index) => (
          <li key={index}>
            <p>{definition.definition}</p>
            {definition.example && (
              <p className="word__meaning__example">"{definition.example}"</p>
            )}
          </li>
        ))}
      </ul>
      {meaning.synonyms.length > 0 && (
        <div className="word__meaning__synonyms">
          <p className="heading small word__meaning__subtitle">Synonyms</p>
          {meaning.synonyms?.map((synonym, index) => (
            <p
              key={index}
              className="word__meaning__synonym"
              onClick={() => getWordFromApi(synonym)}
            >
              {synonym}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default WordMeaning
