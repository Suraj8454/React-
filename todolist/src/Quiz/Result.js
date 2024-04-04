import React from 'react'
import './Main.css'


export default function Result({answer,question,reset =()=>{}}) {
    const corrctanswergive=answer.filter((an)=> an).length;
    const print=()=>{
      window.print()
    }
  return (
    <div className='result'>
      <div className='printresult'>
      <h2>Result</h2>
      <p><span style={{fontSize:"30px"}}>&#8680;</span> You got {corrctanswergive} out of {question.length} Questions.</p>
      <ul>
        {question.map((value,id)=>{
            return (
                <li key={id} data-correct={answer[id]}>
                   Q{id+1}.{value.question}?
                </li>
            )
        })}
      </ul>
      </div>
      <div className='button'>
      <button onClick={print}>Print</button>
      <button onClick={reset}>Restart</button>
      </div>
    </div>
  )
}
