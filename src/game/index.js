import './style.css'
import { useRef, useState } from 'react'

export default function Game() {
  const [times, setTimes] = useState(10)

  let inputRef = useRef()
  let QuestionsRef = useRef()
  let timesRef = useRef()
  let x, y
  let results
  let answers = 0
  let most = true

  const questions = [
    '2x1',
    '2x2',
    '2x3',
    '2x4',
    '2x5',
    '2x6',
    '2x7',
    '2x8',
    '2x9',
    '2x10'
  ]

  function enviarResposta(e) {
    e.preventDefault()

    x = Number(QuestionsRef.current.innerText.slice(0, 1))
    y = Number(QuestionsRef.current.innerText.slice(2))

    results = x * y

    String(results) === inputRef.current.value
      ? (QuestionsRef.current.innerText = 'certo!')
      : (QuestionsRef.current.innerText = 'errado!')

    let timer = setInterval(() => {
      QuestionsRef.current.value =
        questions[Math.floor(Math.random() * questions.length)]

      setTimes(s => s - 1)
    }, 3000)

    setTimeout(() => {
      clearInterval(timer)
    }, 4000)
  }
  if (times < 1) {
    timesRef.current.innerText = 'Fim'
    QuestionsRef.current.innerText = 'Acertos: ' + answers
  }

  return (
    <div className="container">
      <div className="Timer">
        <span ref={timesRef}>{times}</span>
        <span ref={QuestionsRef}>
          {questions[Math.floor(Math.random() * questions.length)]}
        </span>
        <form onSubmit={enviarResposta}>
          {most === true ? (
            <input className="input" type="number" ref={inputRef} />
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  )
}
