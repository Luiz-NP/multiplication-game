import { useRef, useState } from 'react'
import './App.css'
import omaga from "../public/omaga.mp3";
import desapointed from "../public/desapointed.mp3";

function App() {
  const [result, setResult] = useState('');
  const [a, setA] = useState(Math.floor(Math.random() * 10));
  const [b, setB] = useState(Math.floor(Math.random() * 10));
  const [rightResult, setRightResult] = useState(null);

  const omagaRef = useRef();
  const desapointedRef = useRef();

  return (
    <form className="App" onSubmit={(e) => {
      e.preventDefault();
      setRightResult((a*b).toString());
      if (+result === a*b) {
        setTimeout(() => {
          setA(Math.floor(Math.random() * 10));
          setB(Math.floor(Math.random() * 10));
          setResult('');
          setRightResult(null);
        }, 4500);
        return omagaRef.current.play()
      };
      setTimeout(() => {
        setA(Math.floor(Math.random() * 10));
        setB(Math.floor(Math.random() * 10));
        setResult('');
        setRightResult(null);
      }, 4500);
      desapointedRef.current.play();
    }}>
      <audio src={omaga} ref={omagaRef}/>
      <audio src={desapointed} ref={desapointedRef}/>
      <span>
        {a} x {b}
      </span>
      <div>
        {
          rightResult ? (
            <span>resposta correta: {rightResult}</span>
          ) : (
            <input type="number" autoFocus onChange={e => setResult(e.target.value)} value={result}/>
          )
        }
      </div>
    </form>
  )
}

export default App
