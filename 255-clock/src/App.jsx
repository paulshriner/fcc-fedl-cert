import { useState } from 'react'
import './App.css'

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);

  const changeLength = (e) => {
    // length cannot be <= 0 or > 60
    switch (e.target.id) {
      case "break-decrement":
        breakLength > 1 && setBreakLength(breakLength - 1);
        break;
      case "break-increment":
        breakLength < 60 && setBreakLength(breakLength + 1);
        break;
      case "session-decrement":
        sessionLength > 1 && setSessionLength(sessionLength - 1);
        break;
      case "session-increment":
        sessionLength < 60 && setSessionLength(sessionLength + 1);            
    }
  }
  
  return (
    <>
      <h1>25 + 5 Clock</h1>
      <h2 id="break-label">Break Length</h2>
      <button id="break-decrement" onClick={changeLength}>Down</button>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={changeLength}>Up</button>
      <h2 id="session-label">Session Length</h2>
      <button id="session-decrement" onClick={changeLength}>Down</button>
      <div id="session-length">{sessionLength}</div>
      <button id="session-increment" onClick={changeLength}>Up</button>
      <h2 id="timer-label">Session</h2>
      <div id="time-left"></div>
      <button id="start_stop">Start/Stop</button>
      <button id="reset">Reset</button>
    </>
  )
}

export default App
