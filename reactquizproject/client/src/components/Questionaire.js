import React from 'react';



const Questionaire = ({
    showAnswers, handleAnswer,handleNextQuestion, 
    data: {question, correct_answer, answers} 
}) => {



    return  (
        <div className='flex flex-col'>
            <div className='bg-white text-pink-800 p-10 rounded shadow-md '>
                <h2 className='text-2xl' dangerouslySetInnerHTML={{ __html:question}}/> 
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                
                {answers.map((answer) => {
                
                const textColor = showAnswers ? 
                answer === correct_answer ?
                'text-green-500': 'text-red-500' : "text-pink-700";

                // const textColor = showAnswers ? 'text-white' : 'text-pink-800';
                return (
                    <button 
                    className= {` bg-white ${textColor} p-4  font-semibold rounded shadow`} 
                    onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{ __html:answer}} 
                    />
                    );
                 })}
                
            </div>
            
            {showAnswers && (
                <button 
                onClick={handleNextQuestion}
                className= {` ml-auto bg-pink-300 p-4  font-semibold rounded shadow mt-6`}> 
                Next Question
            </button>   
            )}

            
        </div>
    );
};



export default Questionaire;

{/* <Button className={correct_answer=== shuffledAnswer[1] ? 'bg-pink-300' : '' } onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]}/>
<Button className={correct_answer=== shuffledAnswer[2] ? 'bg-pink-300' : '' } onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/>
<Button className={correct_answer=== shuffledAnswer[3] ? 'bg-pink-300' : '' } onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/> */}