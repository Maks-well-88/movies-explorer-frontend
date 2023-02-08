import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './Movies.css';

export const Movies = () => {
	const { movies } = useContext(AppContext);

	return (
		<>
			<Header />
			<SearchForm />
			<main>
				<MoviesCardList films={movies} />
			</main>
			<Footer />
		</>
	);
};
