import React, { MouseEvent } from 'react';
import { AnswerObject, total_Questions } from '../Pages/QuizPage';
import '../styles/components/QuestionCard.css';

// https://opentdb.com/api.php?amount=10&type=multiple
type Props = {
	question: string;
	answers: string[];
	callback: (e: MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	userNumber : number
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	userNumber
}) => {
	return (
		<div className={`quiz__card ${userNumber  === total_Questions ? "hide" : null}`}>
			<p
				dangerouslySetInnerHTML={{ __html: question }}
				className='card__question'
			/>
			<div className='card__answer row'>
				{answers.map((answer) => (
					<div key={answer} className='answer col-lg-6'>
						<button
							disabled={userAnswer ? true : false}
							value={answer}
							onClick={callback}
							className={`card__btn `}
						>
							<span dangerouslySetInnerHTML={{ __html: answer }} />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
