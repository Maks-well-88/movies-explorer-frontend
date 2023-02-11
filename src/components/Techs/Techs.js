import './Techs.css';

export const Techs = () => {
	return (
		<section className='Techs'>
			<h1 className='Techs__title'>Технологии</h1>
			<div className='Techs__description'>
				<h2 className='Techs__description-title'>7 технологий</h2>
				<p className='Techs__description-text'>
					На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
				</p>
				<ul className='Techs__list'>
					<li className='Techs__item'>HTML</li>
					<li className='Techs__item'>CSS</li>
					<li className='Techs__item'>JS</li>
					<li className='Techs__item'>React</li>
					<li className='Techs__item'>Git</li>
					<li className='Techs__item'>Express.js</li>
					<li className='Techs__item'>mongoDB</li>
				</ul>
			</div>
		</section>
	);
};
