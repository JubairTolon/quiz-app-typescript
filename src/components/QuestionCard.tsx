import React, { FC, MouseEvent, useState } from 'react';
import { AnswerObject } from '../App';
import './QuestionCard.css';


type Props = {
    question: string
    answers: string[]
    callback: (e: MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined
    questionNr: number
    totalQuestions: number
}


const QuestionCard: FC<Props> = ({ question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions }) => {

    const [clicked, setClicked] = useState<boolean>(false);
    const [correct, setCorrect] = useState<boolean>(false);

    console.log(answers)
    console.log(userAnswer)
    return (
        <div className='QuestionCard'>
            <p className='number'>Question: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div className='answer-main'>
                {
                    answers.map(answer => (
                        <div className='answer'
                            key={answer}>
                            <button
                                className='answer-button'
                                disabled={userAnswer ? true : false}
                                onClick={callback}
                                value={answer}>
                                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default QuestionCard;