import { useContext } from 'react';

import { MoviesCard } from '../MoviesCard/MoviesCard';
import { AppContext } from '../../contexts/AppContext';
import './MoviesCardList.css';

export const MoviesCardList = () => {
	const { movies, handleRemoveCard } = useContext(AppContext);

	return (
		<div className='MoviesCardList'>
			{movies.map((film, i) => (
				<MoviesCard key={i} film={film} onDelete={handleRemoveCard} />
			))}
		</div>
	);
};
