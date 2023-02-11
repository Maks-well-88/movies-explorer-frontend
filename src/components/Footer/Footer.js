import { footerNavigationData } from '../../utils/constants';
import './Footer.css';

export const Footer = () => {
	return (
		<footer className='Footer'>
			<p className='Footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
			<div className='Footer__container'>
				<span className='Footer__year'>&copy;&nbsp;{new Date().getFullYear()}</span>
				<nav>
					<ul className='Footer__items'>
						{footerNavigationData.map((item, i) => (
							<li key={i} className='Footer__item'>
								<a className='Footer__link' href={item.link} target='_blank' rel='noreferrer'>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
};
