import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = ({ films }) => {
	const [cardCount, setCardCount] = useState(12);
	const updateCardCount = () => {
		if (window.innerWidth <= 420) {
			setCardCount(5);
		} else if (window.innerWidth <= 820) {
			setCardCount(8);
		} else {
			setCardCount(12);
		}
	};

	useEffect(() => {
		updateCardCount();
		window.addEventListener('resize', updateCardCount);
		return () => window.removeEventListener('resize', updateCardCount);
	}, []);

	const location = useLocation();
	const moreStyle =
		location.pathname === '/movies'
			? 'MoviesCardList__more MoviesCardList__more_active'
			: 'MoviesCardList__more';

	return (
		<>
			<div className='MoviesCardList'>
				{films.slice(0, cardCount).map((film, i) => (
					<MoviesCard key={i} film={film} />
				))}
			</div>
			<div className={moreStyle}>
				<button className='MoviesCardList__more-button' type='button'>
					Ещё
				</button>
			</div>
		</>
	);
};
