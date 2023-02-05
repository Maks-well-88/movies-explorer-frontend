import './MoviesCard.css';

export const MoviesCard = ({ film, onDelete }) => {
	return (
		<article className='MoviesCard'>
			<div className='MoviesCard__description'>
				<p className='MoviesCard__title'>{film.name}</p>
				<p className='MoviesCard__duration'>{film.time} минут</p>
			</div>
			<img className='MoviesCard__image' src={film.imageSrc} alt={film.name} />
			<div className='MoviesCard__button-wrapper'>
				<button
					className='MoviesCard__delete-button'
					type='button'
					onClick={() => onDelete(film.id)}
				></button>
			</div>
		</article>
	);
};
