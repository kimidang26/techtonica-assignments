import React from 'react';



const Questionaire = ({handleAnswer, data: {question, correct_answer, incorrect_answers} }) => {

const shuffledAnswers= [ correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
    return  (
        <div>
            <div className='bg-white text-pink-800 p-10 rounded shadow-md '>
                <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html:question}}/> 
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                
                {shuffledAnswers.map((answer) => (
                
                <button 
                className={`${correct_answer === answer ? 'bg-pink-300' : 'bg-white'} p-4 text-pink-800 font-semibold rounded shadow`} onClick={() => handleAnswer(answer)} > {answer} </button>
                ))}
            </div>
        </div>
    );
};



export default Questionaire;

{/* <Button className={correct_answer=== shuffledAnswer[1] ? 'bg-pink-300' : '' } onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]}/>
<Button className={correct_answer=== shuffledAnswer[2] ? 'bg-pink-300' : '' } onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/>
<Button className={correct_answer=== shuffledAnswer[3] ? 'bg-pink-300' : '' } onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/> */}