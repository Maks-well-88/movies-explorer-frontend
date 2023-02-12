import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = ({ films, isEmptyResponse }) => {
	const [cardCount, setCardCount] = useState(12);
	const allFilmsCount = films.length;

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

	useEffect(() => {
		updateCardCount();
		window.addEventListener('resize', () => setTimeout(updateCardCount, 1000));
		return () => window.removeEventListener('resize', () => setTimeout(updateCardCount, 1000));
	}, []);

	const location = useLocation();
	const moreStyle =
		location.pathname === '/movies'
			? 'MoviesCardList__more MoviesCardList__more_active'
			: 'MoviesCardList__more';
	const cardListStyle =
		location.pathname === '/movies'
			? 'MoviesCardList'
			: 'MoviesCardList MoviesCardList_position_saved-movies';

	return (
		<>
			{isEmptyResponse ? (
				<div className='MoviesCardList__empty-wrapper'>
					<p className='MoviesCardList__empty-title'>Ничего не найдено</p>
				</div>
			) : (
				<div className={cardListStyle}>
					{films.slice(0, cardCount).map((film, i) => (
						<MoviesCard key={i} film={film} />
					))}
				</div>
			)}
			{films.length > 3 && (
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
