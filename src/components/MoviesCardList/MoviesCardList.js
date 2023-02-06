import { useContext } from 'react';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { AppContext } from '../../contexts/AppContext';
import './MoviesCardList.css';

export const MoviesCardList = ({ films }) => {
	const { handleRemoveCard } = useContext(AppContext);

	return (
		<div className='MoviesCardList'>
			{films.map((film, i) => (
				<MoviesCard key={i} film={film} onDelete={handleRemoveCard} />
			))}
		</div>
	);
};
