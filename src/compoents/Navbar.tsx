import React from 'react';
import Logo from '../assets/Logo.svg';
import Bar from '../assets/bar.svg';
import '../styles/Navbar.css';

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='nav__text'>
				<img src={Logo} alt='Logo' />
			</div>
			<div className='nav__bar'>
				<img src={Bar} alt='Bar' />
			</div>
			<div className='nav__links'>
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
