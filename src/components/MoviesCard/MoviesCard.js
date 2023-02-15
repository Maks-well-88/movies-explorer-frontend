import { useContext } from 'react';

import { MovieButton } from '../MovieButton/MovieButton';
import { AppContext } from '../../contexts/AppContext';
import './MoviesCard.css';

export const MoviesCard = ({ film }) => {
	const { getMinutesString, handleSaveFilm, handleDeleteFilm, savedMovies, location } =
		useContext(AppContext);

	const isSavedFilm = savedMovies.find(savedFilm => savedFilm.movieId === film.id);
	const moviesPage = location.pathname === '/movies';

	const handleCardClick = e => e.target.tagName !== 'BUTTON' && window.open(film.trailerLink, '_blank');
	const onSaveFilm = () => handleSaveFilm(film);

	const onDeleteFilm = () => {
		if (film.movieId) {
			handleDeleteFilm(film);
		} else {
			const deletedFilm = savedMovies.find(savedFilm => savedFilm.movieId === film.id);
			handleDeleteFilm(deletedFilm);
		}
	};

	return (
		<article className='MoviesCard' onClick={handleCardClick}>
			<div className='MoviesCard__description'>
				<p className='MoviesCard__title'>{film.nameRU}</p>
				<p className='MoviesCard__duration'>
					{film.duration} {getMinutesString(film.duration)}
				</p>
			</div>
			<div className='MoviesCard__wrapper'>
				{moviesPage ? (
					<img
						className='MoviesCard__image'
						src={`https://api.nomoreparties.co/${film.image.url}`}
						alt={film.nameRU}
					/>
				) : (
					<img className='MoviesCard__image' src={film.image} alt={film.nameRU} />
				)}
			</div>
			<div className='MoviesCard__button-wrapper'>
				<MovieButton
					onSaveFilm={onSaveFilm}
					onDeleteFilm={onDeleteFilm}
					isSavedFilm={isSavedFilm}
					moviesPage={moviesPage}
				/>
			</div>
		</article>
	);
};
