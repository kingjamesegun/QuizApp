import React, { MouseEvent, useState } from 'react';
import { Diffculty, fetchQuizQuestions, QuestionState } from '../API';
import QuestionCard from '../compoents/QuestionCard';

const total_Questions = 10;

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

function QuizPage() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	// number user is on
	const [number, setNumber] = useState(0);
	const [answers, setAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

	// console.log(fetchQuizQuestions(total_Questions, Diffculty.EASY));
	console.log(questions);

	// ftn start the quiz
	const startQuiz = async () => {
		// try {
		setLoading(true);
		setGameOver(false);
		const newQuestions = await fetchQuizQuestions(
			total_Questions,
			Diffculty.EASY
		);
		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setAnswers([]);

		setNumber(0);
		setLoading(false);
		// } catch (error) {
		// console.log(error);
		// }
	};

	// BTN ftn that shows answer
	const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			// Users answer
			const answer = e.currentTarget.value;
			// check answer against correct answer
			const correct = questions[number].correct_answer === answer;
			// add score if the answer is corect
			if (correct) setScore((prev) => prev + 1);
			//save answer in the array
			const answerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	// ftn shows next question
	const nextQuestion = () => {};

	return (
		<div className='quiz'>
			{/* https://opentdb.com/api.php?amount=10&type=multiple */}
			{gameOver || userAnswers.length === total_Questions ? (
				<div className='quiz__start' onClick={startQuiz}>
					Start Quiz
				</div>
			) : null}

			{!gameOver ? <p className='quiz__score'>Score:</p> : null}

			{loading && <p className=''>Loading Questions</p>}

			{!loading && !gameOver && (
				<QuestionCard
					questionNr={number + 1}
					totalQuestions={total_Questions}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!gameOver &&
			!loading &&
			userAnswers.length === number + 1 &&
			number !== total_Questions - 1 ? (
				<button className='quiz__next' onClick={nextQuestion}>
					Next
				</button>
			) : null}
		</div>
	);
}

export default QuizPage;
