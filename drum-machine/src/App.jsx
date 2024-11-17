import { useEffect } from 'react';
import './App.css'

// Thanks https://forum.freecodecamp.org/t/playing-sound-with-react/425160/4 for help with playing sound
function handleButtonPress(event) {
  // Get id corresponding to button that triggered event
  const id = event.target.innerText;

  // Play the button's respective audio element
  document.getElementById(id).play();

  updateDisplay(id);
}

function handleKeyPress(event) {
  // make key uppercase, play if it matches a key
  const id = event.key.toUpperCase();
  if (id === "Q" || id === "W" || id === "E" || id === "A" || id === "S" || id === "D" || id === "Z" || id === "X" || id === "C") {
    document.getElementById(id).play();
    updateDisplay(id);
  }
}

function updateDisplay (id) {
  switch (id) {
    case "Q":
      document.getElementById("display").innerText = "Heater 1";
      break;
    case "W":
      document.getElementById("display").innerText = "Heater 2";
      break;
    case "E":
      document.getElementById("display").innerText = "Heater 3";
      break;
    case "A":
      document.getElementById("display").innerText = "Heater 4";
      break;
    case "S":
      document.getElementById("display").innerText = "Clap";
      break;
    case "D":
      document.getElementById("display").innerText = "Open HH";
      break;
    case "Z":
      document.getElementById("display").innerText = "Kick n' Hat";
      break;
    case "X":
      document.getElementById("display").innerText = "Kick";
      break;
    case "C":
      document.getElementById("display").innerText = "Closed HH";
      break;
  }
}

function App() {
  // Thanks https://stackoverflow.com/questions/71822354/onkeydown-onkeyup-listener-in-react for useEffect to add listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="drum-pads">
        <button className="drum-pad" id="heater-1" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className="clip" id="Q"></audio>
          Q
        </button>
        <button className="drum-pad" id="heater-2" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" className="clip" id="W"></audio>
          W        
        </button>
        <button className="drum-pad" id="heater-3" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" className="clip" id="E"></audio>
          E        
        </button>
        <button className="drum-pad" id="heater-4" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" className="clip" id="A"></audio>
          A        
        </button>
        <button className="drum-pad" id="clap" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" className="clip" id="S"></audio>
          S      
        </button>
        <button className="drum-pad" id="open-hh" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" className="clip" id="D"></audio>
          D        
        </button>
        <button className="drum-pad" id="kick-n-hat" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" className="clip" id="Z"></audio>
          Z        
        </button>
        <button className="drum-pad" id="kick" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" className="clip" id="X"></audio>
          X        
        </button>
        <button className="drum-pad" id="closed-hh" onClick={handleButtonPress}>
          <audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" className="clip" id="C"></audio>
          C        
        </button>
      </div>
      {/* Thanks https://www.editpad.org/tool/invisible-character for invisible char */}
      <p id="display">‎ </p>
    </div>
  )
}

export default App
