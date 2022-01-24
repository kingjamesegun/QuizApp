import React, { MouseEvent, useState } from 'react';
import { Diffculty, fetchQuizQuestions, QuestionState } from '../API';
import QuestionCard from '../compoents/QuestionCard';
import BallIcon from '../assets/Ball.svg';
import StartIllus from '../assets/startnow.svg';
import '../styles/Pages/Quiz.css';

export const total_Questions = 10;

export type AnswerObject = {
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
	// console.log(questions);

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
	const nextQuestion = () => {
		const nextQuestion = number + 1;

		if (nextQuestion === total_Questions) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<div className='quiz'>
			{/* https://opentdb.com/api.php?amount=10&type=multiple */}
			{gameOver || userAnswers.length === total_Questions ? (
				<div className='quiz__start'>
					<img className='start__img' src={StartIllus} alt='start img' />
					<h3 className='start__h3'>Hint:</h3>
					<p className='start__p'>
						The quiz consits of 10 questions from any field of study. <br />A
						quiz is 10marks, summing to be 100marks in total.
					</p>
					<button className='start__btn' onClick={startQuiz}>
						Start Quiz
					</button>
				</div>
			) : null}

			{!gameOver && !loading ? (
				<p className='quiz__score'>
					Score:{score}/{total_Questions}
				</p>
			) : null}

			{/* using LOADING.IO */}
			{!gameOver && loading && (
				<div className='loader'>
					<img src={BallIcon} alt='Loader' />
					<p className='quiz__p'>Let's Go</p>
				</div>
			)}

			{!loading && !gameOver && (
				<QuestionCard
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
					userNumber = {userAnswers.length}
				/>
			)}

			<div className='quiz__function'>
				{!gameOver && !loading ? (
					<p className='card__number'>
						Question: {number + 1} / {total_Questions}
					</p>
				) : null}

				{!gameOver &&
				!loading &&
				userAnswers.length === number + 1 &&
				number !== total_Questions - 1 ? (
					<button className='quiz__next' onClick={nextQuestion}>
						Next
					</button>
				) : null}
			</div>

			{ userAnswers.length === total_Questions? (
				<div className='analysis'>Analysis</div>
			): null}
		</div>
	);
}

export default QuizPage;
