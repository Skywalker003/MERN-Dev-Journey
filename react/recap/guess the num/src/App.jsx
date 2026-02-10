import './App.css'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("")
  const [num, setNum] = useState(() => Math.floor(Math.random() * 10) + 1)

  if (input == num) {
    setTimeout(() => {      
      setNum(() => Math.floor(Math.random() * 10) + 1)
      setInput("")
    }, 5000)
  }
  
  return (
    <>
      <div className="App">
        <h2>Guess The Number between 1 and 10</h2>
        <input type="number" placeholder="Enter your guess" id='term' value={input} onChange={(e) => setInput(e.target.value)} />
        <h2>you guessed it : {input==""? " " :input==num? "correct!" : input>num ? "higher" : "lower"}</h2>
      </div>
    </>
  )
}

export default App
