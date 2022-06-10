import './style.css'
import { useRef, useState } from 'react'

export default function Game() {
  const [times, setTimes] = useState(10)
  const [most, setMost] = useState(true)
  const [answers, setAnswers] = useState(0)

  let inputRef = useRef()
  let QuestionsRef = useRef()
  let timesRef = useRef()
  let x, y
  let results

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
    '2x10',
    '3x1',
    '3x2',
    '3x3',
    '3x4',
    '3x5',
    '3x6',
    '3x7',
    '3x8',
    '3x9',
    '3x10',
    '4x1',
    '4x2',
    '4x3',
    '4x4',
    '4x5',
    '4x6',
    '4x7',
    '4x8',
    '4x9',
    '4x10',
    '5x1',
    '5x2',
    '5x3',
    '5x4',
    '5x5',
    '5x6',
    '5x7',
    '5x8',
    '5x9',
    '5x10'
  ]

  function enviarResposta(e) {
    e.preventDefault()
    if (times > 0) {
      x = Number(QuestionsRef.current.innerText.slice(0, 1))
      y = Number(QuestionsRef.current.innerText.slice(2))

      results = x * y

      if (String(results) === inputRef.current.value) {
        setAnswers(answers + 1)
        setMost(false)
        setTimeout(() => {
          QuestionsRef.current.innerText = 'certo!'
        }, 1)
      } else {
        setMost(false)
        setTimeout(() => {
          QuestionsRef.current.innerText = 'errado!'
        }, 1)
      }

      let timer = setInterval(() => {
        QuestionsRef.current.value =
          questions[Math.floor(Math.random() * questions.length)]
        setMost(true)

        setTimes(s => s - 1)
      }, 3000)

      setTimeout(() => {
        clearInterval(timer)
      }, 4000)
    } else {
      setTimeout(() => {
        timesRef.current.innerText = 'Fim'
        QuestionsRef.current.innerText = 'Acertos: ' + answers + '/10'
      }, 1)

      setMost(false)
    }
  }

  return (
    <div className="container">
      <div className="Timer">
        <span ref={timesRef}>Tentativas: {times}</span>
        <span ref={QuestionsRef}>
          {questions[Math.floor(Math.random() * questions.length)]}
        </span>
        <form onSubmit={enviarResposta}>
          {most ? (
            <input className="input" type="number" ref={inputRef} />
          ) : (
            ' '
          )}
        </form>
      </div>
    </div>
  )
}
