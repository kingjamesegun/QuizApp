import React, { useState, MouseEvent } from 'react';
import Logo from '../assets/Logo.svg';
import Bar from '../assets/bar.svg';
import CloseBar from '../assets/close.svg';
import '../styles/Navbar.css';

function Navbar() {
	const [toogle, setToggle] = useState(false);

	const handleBarClick = (e: MouseEvent) => {
		e.preventDefault();
		setToggle((prevState) => !prevState);
	};
	let toogleClass = 'nav__links';

	if (toogle === true) {
		toogleClass += ' active';
	}

	return (
		<nav className='navbar'>
			<div className='nav__text'>
				<img src={Logo} alt='Logo' />
			</div>
			<div className='nav__bar' onClick={handleBarClick}>
				{toogle ? (
					<img src={CloseBar} alt='close' />
				) : (
					<img src={Bar} alt='Bar' />
				)}
			</div>
			<div className={toogleClass}>
				<ul className='nav__ul'>
					<li className='nav__li'>
						<a href='#'>Contact US</a>
					</li>
					<li className='nav__li'>
						<a href='#'>Help Center</a>
					</li>
					<li className='nav__li btn__demo'>
						<a href='#'>Play Demo</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
