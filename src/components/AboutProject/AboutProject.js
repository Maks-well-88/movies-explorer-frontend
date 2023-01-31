import './AboutProject.css';

export const AboutProject = () => {
	return (
		<section className='AboutProject'>
			<h1 className='AboutProject__title'>О проекте</h1>
			<ul className='AboutProject__description-list'>
				<li className='AboutProject__description-item'>
					<h2 className='AboutProject__description-title'>Дипломный проект включал 5 этапов</h2>
					<p className='AboutProject__description-text'>
						Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
						доработки.
					</p>
				</li>
				<li className='AboutProject__description-item'>
					<h2 className='AboutProject__description-title'>На выполнение диплома ушло 5 недель</h2>
					<p className='AboutProject__description-text'>
						У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
						защититься.
					</p>
				</li>
			</ul>
			{/* <ul className='AboutProject__timeline-list'>
				<li className='AboutProject__timeline-item'>1 неделя</li>
				<li className='AboutProject__timeline-item'>4 недели</li>
			</ul>
			<ul className='AboutProject__direction-list'>
				<li className='AboutProject__direction-item'>Back-end</li>
				<li className='AboutProject__direction-item'>Front-end</li>
			</ul> */}
			<div className='AboutProject__timeline-list'>
				<div className='AboutProject__timeline-item'>1 неделя</div>
				<div className='AboutProject__timeline-item'>4 недели</div>
				<div className='AboutProject__timeline-item'>Back-end</div>
				<div className='AboutProject__timeline-item'>Front-end</div>
			</div>
		</section>
	);
};
