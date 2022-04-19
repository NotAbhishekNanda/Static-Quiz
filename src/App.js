import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Hyderabad', isCorrect: false },
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'Bhubaneswar', isCorrect: false },
        { answerText: 'Vizag', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the CEO of Google?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Sundar Pichai', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
        { answerText: 'Samsung', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
        { answerText: '9', isCorrect: false },
			],
		},
    {
			questionText: 'What is the national Animal of India?',
			answerOptions: [
				{ answerText: 'Tiger', isCorrect: true },
				{ answerText: 'Lion', isCorrect: false },
				{ answerText: 'Bear', isCorrect: false },
				{ answerText: 'Monkey', isCorrect: false },
        { answerText: 'Kangaroo', isCorrect: false },
			],
		},
    {
			questionText: 'Who is The captain of Chennai Super Kings?',
			answerOptions: [
				{ answerText: 'MS Dhoni', isCorrect: true },
				{ answerText: 'Virat Kohli', isCorrect: false },
				{ answerText: 'Rohit Sharma', isCorrect: false },
				{ answerText: 'D K', isCorrect: false },
        { answerText: 'Eoin Morgan', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}.<br/>Thank you for participating.
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
