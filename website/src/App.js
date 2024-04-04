
import { useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('')

  const change = (e) => {
    setText(e.target.value)
  }
  const speackbutton = () => {
    if (text == 0) {
      alert("Please enter")
    }
    let syn = window.speechSynthesis;
    let speech = new SpeechSynthesisUtterance(text)
    syn.speak(speech)
  }

  return (
    <>
      <div className='speak_container'>
      </div>
        <h1> Text speak</h1>
        <div className='container'>
          <textarea value={text} onChange={change} />
          <div className='button'>
            <button onClick={speackbutton}>Speck</button>
          </div>
        </div>
    </>
  );
}

export default App;
