import React, { useState } from 'react'
import './Text.css'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";

export default function Text() {
    const [startstop, setStartstop] = useState(true)
    const [text, setText] = useState();
    const [isCopied, setCopied] = useClipboard(text);
    const start = () => {
        SpeechRecognition.startListening({
            continuous: true, language: 'en-IN'
        })
        setStartstop(false)
    }
    const stop = () => {
        SpeechRecognition.stopListening()
        setStartstop(true)
    }
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition()

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className='text_container'>
            </div>
                <div className='text'>
                    <div className='header'>
                        <h1>Speech to Text Converter</h1>
                    </div>
                    <div className='container'>
                        <div className='textspeak' onClick={() => setText(transcript)}>
                        {/* <textarea value={transcript} onClick={() => setText(transcript)} /> */}
                        {transcript}
                        </div>
                        <div className='buttons'>
                            <button disabled={transcript == ""} onClick={setCopied}>
                                {isCopied ? "Copied" : "Copy text"}
                            </button>
                            {startstop ?
                                <button onClick={start}>Start</button> :
                                <button onClick={stop}>Stop</button>}
                            <button onClick={resetTranscript}>Clear</button>

                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
