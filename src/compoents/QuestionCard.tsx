import React, { MouseEvent } from 'react';
import { AnswerObject } from '../Pages/QuizPage';
import '../styles/components/QuestionCard.css';

// https://opentdb.com/api.php?amount=10&type=multiple
type Props = {
	question: string;
	answers: string[];
	callback: (e: MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
}) => {
	return (
		<div className='quiz__card'>
			<p
				dangerouslySetInnerHTML={{ __html: question }}
				className='card__question'
			/>
			<div className='card__answer'>
				{answers.map((answer) => (
					<div key={answer} className='answer'>
						<button
							disabled={userAnswer ? true : false}
							value={answer}
							onClick={callback}
							className='card__btn'
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
