import Arrow from '../../images/arrow.svg';
import './Portfolio.css';

export const Portfolio = () => {
	return (
		<section className='Portfolio'>
			<h1 className='Portfolio__title'>Портфолио</h1>
			<ul className='Portfolio__list'>
				<li className='Portfolio__item'>
					<p className='Portfolio__item-name'>Статичный сайт</p>
					<a href='https://maks-well-88.github.io/how-to-learn/' target='_blank' rel='noreferrer'>
						<img className='Portfolio__item-image' src={Arrow} alt='Перейти' />
					</a>
				</li>
				<li className='Portfolio__item'>
					<p className='Portfolio__item-name'>Адаптивный сайт</p>
					<a href='https://maks-well-88.github.io/russian-travel/' target='_blank' rel='noreferrer'>
						<img className='Portfolio__item-image' src={Arrow} alt='Перейти' />
					</a>
				</li>
				<li className='Portfolio__item'>
					<p className='Portfolio__item-name'>Одностраничное приложение</p>
					<a href='https://maks-well-88.github.io/mesto/' target='_blank' rel='noreferrer'>
						<img className='Portfolio__item-image' src={Arrow} alt='Перейти' />
					</a>
				</li>
			</ul>
		</section>
	);
};
