import { useState, useEffect, useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { errorMessages } from '../../utils/constants';
import { useForm } from '../../hooks/useForm';
import { moviesFilter } from '../../utils/functions/moviesFilter';
import './SavedMovies.css';

export const SavedMovies = ({ filteredMovies, setFilteredMovies }) => {
	const { savedMovies, location } = useContext(AppContext);
	const [errorMessage, setErrorMessage] = useState('');
	const { values, handleChange } = useForm({ search: '' });
	const [filterChecked, setFilterChecked] = useState(false);
	const savedMoviesPage = location.pathname;

	useEffect(() => {
		setFilteredMovies(savedMovies);
	}, [savedMovies, setFilteredMovies]);

	const handleChangeCheckbox = () => {
		setFilterChecked(!filterChecked);
		const filteredResult = moviesFilter(savedMovies, values.search, !filterChecked);
		setFilteredMovies(filteredResult);
		setErrorMessage('');
	};

	const handleSubmitSearchSavedMovies = e => {
		e.preventDefault();
		if (values.search.trim() === '') {
			setErrorMessage(errorMessages.keywordMissing);
		} else {
			const filteredResult = moviesFilter(savedMovies, values.search, filterChecked);
			setFilteredMovies(filteredResult);
			setErrorMessage('');
		}
	};

	return (
		<>
			<Header />
			<SearchForm
				values={values}
				onSearch={handleSubmitSearchSavedMovies}
				handleChange={handleChange}
				isChecked={filterChecked}
				handleChangeCheckbox={handleChangeCheckbox}
				errorMessage={errorMessage}
			/>
			<main>
				<MoviesCardList page={savedMoviesPage} movies={filteredMovies} />
			</main>
			<Footer />
		</>
	);
};
