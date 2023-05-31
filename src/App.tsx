import "./styles.scss"
import Navbar from "./components/Navbar/Navbar"
import SearchBar from "./components/Searchbar/SearchBar"
import WordMeaning from "./components/WordMeaning/WordMeaning"
import WordTitle from "./components/WordTitle/WordTitle"
import Source from "./components/Source/Source"
import { ThemeContext } from "./ThemeContext"
import { useContext, useEffect, useState } from "react"

const initialData: IWord = {
  word: "dictionary",
  phonetic: "/ˈdɪkʃəˌnɛɹi/",
  phonetics: [
    {
      text: "/ˈdɪkʃəˌnɛɹi/",
      audio: "",
    },
    {
      text: "/ˈdɪkʃ(ə)n(ə)ɹi/",
      audio:
        "https://api.dictionaryapi.dev/media/pronunciations/en/dictionary-uk.mp3",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=503422",
    },
    {
      text: "/ˈdɪkʃəˌnɛɹi/",
      audio: "",
    },
  ],
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition:
            "A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data.",
          synonyms: ["wordbook"],
          antonyms: [],
        },
        {
          definition:
            "(preceded by the) A synchronic dictionary of a standardised language held to only contain words that are properly part of the language.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "(by extension) Any work that has a list of material organized alphabetically; e.g., biographical dictionary, encyclopedic dictionary.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition:
            "An associative array, a data structure where each value is referenced by a particular key, analogous to words and definitions in a physical dictionary.",
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: ["wordbook"],
      antonyms: [],
    },
    {
      partOfSpeech: "verb",
      definitions: [
        {
          definition: "To look up in a dictionary.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "To add to a dictionary.",
          synonyms: [],
          antonyms: [],
        },
        {
          definition: "To compile a dictionary.",
          synonyms: [],
          antonyms: [],
        },
      ],
      synonyms: [],
      antonyms: [],
    },
  ],
  license: {
    name: "CC BY-SA 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  sourceUrls: ["https://en.wiktionary.org/wiki/dictionary"],
}

function App() {
  const { theme, font } = useContext(ThemeContext)
  const [wordData, setWordData] = useState<IWord>(initialData)
  const [isNotFound, setIsNotFound] = useState(false)
  const getWordFromApi = (input: string) => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
      .then((res) => res.json())
      .then((data) => checkData(data))
  }

  const checkData = (data: IWord[] | IErrorResult) => {
    if ("title" in data) return setIsNotFound(true)
    return setWordData(data[0])
  }

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#050505"
    } else document.body.style.backgroundColor = "#ffffff"
  }, [theme])

  return (
    <div className={`wrapper ${theme} ${font}`}>
      <Navbar />
      <SearchBar getWordFromApi={getWordFromApi} />
      <main className="main">
        {isNotFound ? (
          <div className="not-found">
            <p className="heading large">😕</p>
            <p>No Definitions Found</p>
            <p>
              Sorry pal, we couldn't find definitions for the word you were
              looking for. You can try the search again at later time or head to
              the web instead.
            </p>
          </div>
        ) : (
          <>
            <WordTitle word={wordData.word} phonetics={wordData.phonetics} />
            {wordData.meanings.map((meaning, index) => (
              <WordMeaning
                key={index}
                meaning={meaning}
                getWordFromApi={getWordFromApi}
              />
            ))}
            {wordData.sourceUrls && wordData.sourceUrls.length > 0 && (
              <Source source={wordData.sourceUrls} />
            )}
          </>
        )}
      </main>
    </div>
  )
}

export default App
