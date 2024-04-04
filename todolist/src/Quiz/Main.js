import React, { useState } from 'react'
import question from './question.json'
import Questons from './Questons';
import Result from './Result';
import './Main.css'

export default function Main() {
  const [currentquestion, setCurrentquestion] = useState(0);
  const [answer, setAnswer] = useState([]);

  const handlenextquestion = (iscorrect) => {
    setCurrentquestion(currentquestion + 1);
    setAnswer([...answer, iscorrect])
  };
  const reset = () => {
    setCurrentquestion(0)
    setAnswer([])
  }
  return (
    <>
      <div className='background'>
      </div>
      <div className='main'>
        <h1>suraj Quiz</h1>
        {currentquestion < question.length &&
          <Questons question={question[currentquestion]}
            onanswerclick={handlenextquestion} />
        }
        {currentquestion === question.length &&
          <Result answer={answer} question={question} reset={reset} />
        }
      </div>
    </>
  )
}
