import React from 'react';

// https://opentdb.com/api.php?amount=10&type=multiple
type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
	questionNr: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNr,
	totalQuestions,
}) => {
	return (
		<div className='card'>
			<p className='card__number'>
				Question: {questionNr} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div>
				{answers.map((answer) => (
					<div key={answer}>
						<button disabled={userAnswer} value={answer} onClick={callback}>
							<span dangerouslySetInnerHTML={{ __html: answer }} />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;
