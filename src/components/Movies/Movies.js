import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader';
import './Movies.css';

export const Movies = props => {
	const { movies } = useContext(AppContext);

	return (
		<>
			<Header />
			<SearchForm {...props} />
			<main>
				{props.isLoading ? (
					<Preloader />
				) : (
					<MoviesCardList isEmptyResponse={props.isEmptyResponse} films={movies} />
				)}
			</main>
			<Footer />
		</>
	);
};
