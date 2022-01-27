import React from 'react';
import './App.css';
import Navbar from './compoents/Navbar';
import HomePage from './Pages/HomePage';
import QuizPage from './Pages/QuizPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HelpCenter from './Pages/HelpCenter';

function App() {
	const startTrivia = () => {};
	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};
	return (
		<Router>
			<Navbar />
			<Route path='/' exact>
				<HomePage />
			</Route>
			<Route path='/quiz'>
				<QuizPage />
			</Route>
			<Route path='/help_center'>
				<HelpCenter/>
			</Route>
		</Router>
	);
}

export default App;
