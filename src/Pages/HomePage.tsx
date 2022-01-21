import '../styles/Pages/Home.css';
import Lady from '../assets/lady.svg';
import FbIcon from '../assets/fb.svg';
import TwitterIcon from '../assets/twitter.svg';
import GithubIcon from '../assets/github.svg';

export default function HomePage() {
	return (
		<div className='home'>
			<div className='row'>
				<div className='col-lg-6 col-xs-12'>
					<h1 className='home__h1'>Easy and intuitive online testing.</h1>
					<p className='home__p'>
						Orit is a best place to test your intelligence. Play a demo to see your
						IQ.
					</p>
					<button className='home__btn'>Play Demo</button>
				</div>
                <div className='col-lg-6 col-xs-12'>
                    <img src={Lady} alt="Lady with a system" className='home__img'/>
                </div>
			</div>
            <div className='home__socials'>
                <div className='socials__li'>
                    <a href="https://twitter.com/kingjamesegun">
                        <img src={TwitterIcon} alt="twitter"/>
                    </a>
                </div>
                <div className='socials__li'>
                    <a href="https://github.com/kingjamesegun">
                        <img src={GithubIcon} alt="Github"/>
                    </a>
                </div>
                <div className='socials__li'>
                    <a href="https://web.facebook.com/profile.php?id=100009214206359">
                        <img src={FbIcon} alt="Facebook"/>
                    </a>
                </div>
            </div>
		</div>
	);
}
