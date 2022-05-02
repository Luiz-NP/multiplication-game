import { useEffect, useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(10)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (isRunning) {
      let interval = setInterval(() => {
        setSeconds(seconds => seconds - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isRunning])

  if (seconds < 1) {
    setIsRunning(false)
    setSeconds(10)
  }

  return <span className="timer">Tempo: {seconds}</span>
}
