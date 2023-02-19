import { useState, useEffect } from 'react';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { searchMessages } from '../../utils/constants';
import './MoviesCardList.css';

export const MoviesCardList = ({ page, searchResultNotification, films }) => {
	const [cardCount, setCardCount] = useState(12);
	const allFilmsCount = films.length;
	const moreStyle =
		page === '/movies' ? 'MoviesCardList__more' : 'MoviesCardList__more MoviesCardList__more_active';
	const cardListStyle =
		page === '/movies' ? 'MoviesCardList MoviesCardList_position_saved-movies' : 'MoviesCardList';

	useEffect(() => {
		updateCardCount();
		window.addEventListener('resize', () => setTimeout(updateCardCount, 1000));
		return () => window.removeEventListener('resize', () => setTimeout(updateCardCount, 1000));
	}, []);

	const updateCardCount = () => {
		if (window.innerWidth <= 480) {
			setCardCount(5);
		} else if (window.innerWidth <= 820) {
			setCardCount(8);
		} else {
			setCardCount(12);
		}
	};

	const handleShowMoreCards = () => {
		if (window.innerWidth <= 480) {
			setCardCount(prev => prev + 2);
		} else if (window.innerWidth <= 820) {
			setCardCount(prev => prev + 2);
		} else {
			setCardCount(prev => prev + 3);
		}
	};

	return (
		<>
			{!films.length && !page ? (
				<div className='MoviesCardList__empty-wrapper'>
					<p className='MoviesCardList__empty-title'>
						{searchResultNotification.includes(searchMessages.notFound) ? 'Ничего не найдено' : ''}
					</p>
				</div>
			) : (
				<div className={cardListStyle}>
					{!page
						? films.slice(0, cardCount).map(film => <MoviesCard key={film.id} film={film} page={page} />)
						: films.map(film => <MoviesCard key={film._id} film={film} page={page} />)}
				</div>
			)}

			{films.length > 0 && !page && (
				<div className={moreStyle}>
					{cardCount < allFilmsCount && (
						<button className='MoviesCardList__more-button' type='button' onClick={handleShowMoreCards}>
							Ещё
						</button>
					)}
				</div>
			)}
		</>
	);
};
