import "./styles.scss"

const WordTitle = ({
  word,
  phonetics,
}: {
  word: string
  phonetics: IPhonetics[]
}) => {
  const playAudio = () => {
    const audio = new Audio(phonetics[0].audio)
    audio.play()
  }
  return (
    <div className="word__title">
      <div className="word__title__left">
        <p className="heading large">{word}</p>
        <p className="word__title__text">{phonetics[0].text}</p>
      </div>
      <div className="word__title__right">
        {phonetics[0].audio && (
          <button onClick={playAudio} className="word__title__play">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
            >
              <g fill="#A445ED" fillRule="evenodd">
                <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                <path d="M29 27v21l21-10.5z" />
              </g>
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default WordTitle
