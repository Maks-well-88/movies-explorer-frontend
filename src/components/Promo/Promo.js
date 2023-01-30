import landingLogo from '../../images/landing-logo.svg';
import './Promo.css';

export const Promo = () => {
	return (
		<section className='Promo'>
			<h1 className='Promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
			<img className='Promo__image' src={landingLogo} alt='Картинка' />
		</section>
	);
};
