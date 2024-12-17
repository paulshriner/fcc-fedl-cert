import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [status, setStatus] = useState("session");
  const [clockActive, setClockActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(sessionLength * 60000);

  // Thanks https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks for help with timer
  useEffect(() => {
    let interval = null;

    if (clockActive) {
      // Subtract 1 second every second
      interval = setInterval(() => {
        setTimeRemaining(timeRemaining => timeRemaining - 1000);
      }, 1000);

      // Update time remaining based on Break or Session
      if (timeRemaining <= 0) {
        if (status === "session") {
          setStatus("break");
          setTimeRemaining(breakLength * 60000);
        } else {
          setStatus("session");
          setTimeRemaining(sessionLength * 60000);          
        }
      }
    } else if (!clockActive && timeRemaining !== 0) {
      // same as "pausing" the timer
      clearInterval(interval);
    }

    // Cleanup for when component is unmounted
    return () => clearInterval(interval);
  }, [clockActive, timeRemaining]); // array of dependecies, only run when these change

  const handleClick = (e) => {
    // If clock is running then these buttons don't do anything
    if (!clockActive) {
      if (e.target.id === "break-decrement") {
        // length cannot be <= 0 or > 60
        if (breakLength > 1) {
          // Need to do in this order so changes don't get out of sync
          if (status === "break") {
            setTimeRemaining((breakLength - 1) * 60000);
          }
          setBreakLength(breakLength - 1);
        }
      }

      if (e.target.id === "break-increment") {
        if (breakLength < 60) {
          if (status === "break") {
            setTimeRemaining((breakLength + 1) * 60000);
          }
          setBreakLength(breakLength + 1);
        }
      }

      if (e.target.id === "session-decrement") {
        if (sessionLength > 1) {
          if (status === "session") {
            setTimeRemaining((sessionLength - 1) * 60000);
          }
          setSessionLength(sessionLength - 1);
        }
      }

      if (e.target.id === "session-increment") {
        if (sessionLength < 60) {
          if (status === "session") {
            setTimeRemaining((sessionLength + 1) * 60000);
          }
          setSessionLength(sessionLength + 1);
        }
      }      
    }

    // Start/Pause the clock
    if (e.target.id === "start_stop") {
      clockActive ? setClockActive(false) : setClockActive(true);
    }
  }

  // Thanks https://stackoverflow.com/questions/61791234/how-to-display-countdown-timer-in-react for time formatting
  // Pads a zero if the second is one digit (less than 10)
  const padTime = time => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  }

  const format = time => {
    // Gets minutes using integer division
    const minutes = Math.floor(time / 60);

    // Get remainder seconds
    const seconds = time % 60;

    // Return formatted sring using padTime for seconds
    return `${minutes}:${padTime(seconds)}`;
  }
  
  return (
    <>
      <h1>25 + 5 Clock</h1>
      <h2 id="break-label">Break Length</h2>
      <button id="break-decrement" onClick={handleClick}>Down</button>
      <div id="break-length">{breakLength}</div>
      <button id="break-increment" onClick={handleClick}>Up</button>
      <h2 id="session-label">Session Length</h2>
      <button id="session-decrement" onClick={handleClick}>Down</button>
      <div id="session-length">{sessionLength}</div>
      <button id="session-increment" onClick={handleClick}>Up</button>
      <h2 id="timer-label">{status === "session" ? "Session" : "Break"}</h2>
      <div id="time-left">{format(timeRemaining / 1000)}</div>
      <button id="start_stop" onClick={handleClick}>Start/Stop</button>
      <button id="reset">Reset</button>
    </>
  )
}

export default App
