import './App.scss';
import React, { useState, useEffect } from 'react';

const audioClips = [
  {
    key: "Q",
    id: "Heater-1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
  },
  {
    key: "W",
    id: "Heater-2",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
  },
  {
    key: "E",
    id: "Heater-3",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
  },
  {
    key: "A",
    id: "Heater-4",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
    },
    {
      key: "S",
      id: "Clap",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
    },
    {
      key: "D",
      id: "Open-HH",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
    },
    {
      key: "Z",
      id: "Kick-n-Hat",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
    },
    {
      key: "X",
      id: "Kick",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
    },
    {
      key: "C",
      id: "Closed-HH",
      url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
    }
];
function App() {
  const [displayText, setDisplayText] = useState("");

 const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const clip = audioClips.find((sound) => sound.key === key);
    if (clip) {
      playAudio(clip);
    }
  }

  const playAudio = (clip) => {
    const audioElement = document.getElementById(clip.key);
    audioElement.currentTime = 0;
    audioElement.play();
    setDisplayText(clip.id);
  }
  useEffect (() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  }, []);
  return (
    <div id="drum-machine">
      <div id="display">{displayText}</div>
      <div className="drum-pads">
        {audioClips.map((clip) => (
          <div key={clip.key} className="drum-pad" id={clip.id} onClick={()=> playAudio(clip)}>
        {clip.key}
        <audio className="clip" id={clip.key} src={clip.url} />
        
      </div>
        ))}
    </div>
    </div>
  );
}

export default App;
