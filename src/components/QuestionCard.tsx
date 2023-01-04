import React, { FC, MouseEvent } from 'react';
import { AnswerObject } from '../App';


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
    return (
        <div>
            <p className='number'>Question: {questionNr} / {totalQuestions}</p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {
                    answers.map(answer => (
                        <div key={answer}>
                            <button
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