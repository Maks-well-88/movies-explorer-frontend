import { useContext } from 'react';

import { MovieButton } from '../MovieButton/MovieButton';
import { AppContext } from '../../contexts/AppContext';
import './MoviesCard.css';

export const MoviesCard = ({ film }) => {
	const { getMinutesString } = useContext(AppContext);
	const handleCardClick = e => e.target.tagName !== 'BUTTON' && window.open(film.trailerLink, '_blank');

	return (
		<article className='MoviesCard' onClick={handleCardClick}>
			<div className='MoviesCard__description'>
				<p className='MoviesCard__title'>{film.nameRU}</p>
				<p className='MoviesCard__duration'>
					{film.duration} {getMinutesString(film.duration)}
				</p>
			</div>
			<div className='MoviesCard__wrapper'>
				<img
					className='MoviesCard__image'
					src={`https://api.nomoreparties.co/${film.image.url}`}
					alt={film.nameRU}
				/>
			</div>
			<div className='MoviesCard__button-wrapper'>
				<MovieButton film={film} />
			</div>
		</article>
	);
};
