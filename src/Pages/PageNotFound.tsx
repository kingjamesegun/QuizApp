import React from 'react';
import Found from '../assets/notfound.svg';

function PageNotFound() {
	return (
		<div className='found'>
			<img src={Found} alt='page not found' />
            <h3>Page Not Found</h3>
		</div>
	);
}

export default PageNotFound;
