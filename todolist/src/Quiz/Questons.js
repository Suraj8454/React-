import React from 'react'

export default function Questons({ question, onanswerclick=()=>{} }) {
    return (
        <div className='question'>
            <h2>Q{question.number}.{question.question} ?</h2>
            <ul>
                {question.answeroption.map((option,id) => {
                    return <li key={option.text}>
                        <h3>
                        {id+1}.<button onClick={() => onanswerclick(option.iscorrect)}>
                       {option.text}
                        </button></h3>
                    </li>
                })}
            </ul>
        </div>
    )
}
