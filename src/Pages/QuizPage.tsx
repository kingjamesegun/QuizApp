import React, { MouseEvent, useState } from 'react';
import QuestionCard from '../compoents/QuestionCard';


const total_Questions = 10;


function QuizPage() {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    // number user is on
    const [number, setNumber] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setameOver] = useState(true);
    const [userAnswers, setUserAnswers] = useState([]);
    

	// ftn start the quiz
	const startQuiz = async () => {};

	// BTN ftn that shows answer
	const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {};

	// ftn shows next question
	const nextQuestion = () => {};

	return (
		<div className='quiz'>
			{/* https://opentdb.com/api.php?amount=10&type=multiple */}
			<div className='quiz__start' onClick={startQuiz}>
				Start Quiz
			</div>
			<p className='quiz__score'>Score:</p>
			<p className=''>Loading Questions</p>
			<QuestionCard 
                questionNr={number + 1}
                totalQuestions={total_Questions}
                question = {questions[number].question}
                answers={answers[number].answer}
                userAnswer = { userAnswers ? userAnswers[number] : undefined}
                callback={checkAnswer}

            />
			<button className='quiz__next' onClick={nextQuestion}>
				Next
			</button>
		</div>
	);
}

export default QuizPage;
