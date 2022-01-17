import React from 'react'


// https://opentdb.com/api.php?amount=10&type=multiple
type Props={
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> =({question, answer, callback, userAnswer, questionNr, totalQuestions})=> {


    return (
        <div>
            Question Cardx
        </div>
    )
}

export default QuestionCard
