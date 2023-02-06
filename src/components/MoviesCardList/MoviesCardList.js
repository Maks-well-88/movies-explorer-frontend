import { MoviesCard } from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

export const MoviesCardList = ({ films }) => {
	return (
		<div className='MoviesCardList'>
			{films.map((film, i) => (
				<MoviesCard key={i} film={film} />
			))}
		</div>
	);
};
