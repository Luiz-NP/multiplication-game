import './style.css'
import { useRef } from 'react'

import Timer from '../Timer'

export default function Questions() {
  let inputRef = useRef()
  let QuestionsRef = useRef()
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
    '2x10'
  ]

  function enviarResposta(e) {
    e.preventDefault()

    x = Number(QuestionsRef.current.innerText.slice(0, 1))
    y = Number(QuestionsRef.current.innerText.slice(2))

    results = x * y

    if (String(results) === inputRef.current.value) {
      QuestionsRef.current.innerText = 'certo!'
    }
  }

  return (
    <div className="container">
      <div className="Timer">
        <Timer />
        <span ref={QuestionsRef}>{}</span>
        <form onSubmit={enviarResposta}>
          <input className="input" type="number" ref={inputRef} />
          <input className="button" type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}
