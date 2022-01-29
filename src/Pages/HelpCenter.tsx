import React from 'react';
import { Link } from 'react-router-dom';
import Help from '../assets/help.svg';
import '../styles/Pages/HelpCenter.css';

function HelpCenter() {
	return (
		<div className='help container'>
			<div className='row'>
				<div className='col-lg-6 col-md-6 col-xs-12'>
					<div className='help__1st'>
						<img src={Help} alt='Help center' />
					</div>
				</div>
				<div className='col-lg-6 col-md-6 col-xs-12'>
					<div className='help__2nd'>
						<h1 className='help__h1'>
							Orit IQ test, basic info!
							<br />
							It’s so easy if you believe in yourself
						</h1>
						<p className='help__p'>
							Test consist of 10 questions, coming from all study of life.
							Ranging from entertainment, sport, academics, history, society and
							alot more. This test can be played as often as you want. After the
							test, you will be graded over 100.
						</p>
						<Link to='/quiz'>
							<button className='help__btn'>Play Now</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HelpCenter;
