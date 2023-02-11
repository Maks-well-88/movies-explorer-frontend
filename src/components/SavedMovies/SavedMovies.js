import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

export const SavedMovies = () => {
	const { savedMovies } = useContext(AppContext);

	return (
		<>
			<Header />
			<SearchForm />
			<main>
				<MoviesCardList films={savedMovies} />
			</main>
			<Footer />
		</>
	);
};
