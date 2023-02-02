import Photo from '../../images/photo.svg';
import './AboutMe.css';

export const AboutMe = () => {
	return (
		<section className='AboutMe'>
			<h1 className='AboutMe__title'>Студент</h1>
			<div className='AboutMe__container'>
				<div className='AboutMe__description'>
					<h2 className='AboutMe__description-name'>Виталий</h2>
					<p className='AboutMe__description-job'>Фронтенд-разработчик, 30 лет</p>
					<p className='AboutMe__description-text'>
						Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть
						жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
						С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс
						по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
					</p>
					<a
						className='AboutMe__description-link'
						href='https://github.com/Maks-well-88'
						target='_blank'
						rel='noreferrer'
					>
						<span className='AboutMe__description-gh'>Github</span>
					</a>
				</div>
				<img className='AboutMe__photo' src={Photo} alt='Фотография' />
			</div>
		</section>
	);
};
