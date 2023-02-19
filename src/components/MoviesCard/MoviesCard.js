import { useContext } from 'react';

import { MovieButton } from '../MovieButton/MovieButton';
import { AppContext } from '../../contexts/AppContext';
import './MoviesCard.css';

export const MoviesCard = ({ movie, page }) => {
	const { handleSaveMovie, handleDeleteMovie, savedMovies } = useContext(AppContext);

	const savedMovie = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);

	const getMinutesString = minutes => {
		if (minutes % 10 === 1 && minutes % 100 !== 11) {
			return 'минута';
		} else if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes % 100)) {
			return 'минуты';
		} else {
			return 'минут';
		}
	};

	const handleCardClick = e => e.target.tagName !== 'BUTTON' && window.open(movie.trailerLink, '_blank');

	const onSaveMovie = () => handleSaveMovie(movie);

	const onDeleteMovie = () => {
		if (movie.movieId) {
			handleDeleteMovie(movie);
		} else if (savedMovie) {
			handleDeleteMovie(savedMovie);
		}
	};

	return (
		<article className='MoviesCard' onClick={handleCardClick}>
			<div className='MoviesCard__description'>
				<p className='MoviesCard__title'>{movie.nameRU}</p>
				<p className='MoviesCard__duration'>
					{movie.duration} {getMinutesString(movie.duration)}
				</p>
			</div>
			<div className='MoviesCard__wrapper'>
				{!page ? (
					<img
						className='MoviesCard__image'
						src={`https://api.nomoreparties.co/${movie.image.url}`}
						alt={movie.nameRU}
					/>
				) : (
					<img className='MoviesCard__image' src={movie.image} alt={movie.nameRU} />
				)}
			</div>
			<div className='MoviesCard__button-wrapper'>
				<MovieButton
					onSaveMovie={onSaveMovie}
					onDeleteMovie={onDeleteMovie}
					savedMovie={savedMovie}
					page={page}
				/>
			</div>
		</article>
	);
};
