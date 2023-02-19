import { useState, useEffect, useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import { Preloader } from '../Preloader/Preloader';
import { searchMessages, errorMessages } from '../../utils/constants';
import { useForm } from '../../hooks/useForm';
import { getMovies } from '../../utils/MoviesApi';
import { moviesFilter } from '../../utils/functions/moviesFilter';
import './Movies.css';

export const Movies = props => {
	const [searchResultNotification, setSearchResultNotification] = useState('');
	const { values, handleChange, setValues } = useForm({ search: '' });
	const { movies, setMovies, location } = useContext(AppContext);
	const [filterChecked, setFilterChecked] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const moviesPage = location.pathname;

	useEffect(() => {
		const checkbox = JSON.parse(localStorage.getItem('checkbox'));
		setMovies(JSON.parse(localStorage.getItem('movies')));
		setValues({ search: localStorage.getItem('query') });
		setFilterChecked(checkbox ? checkbox : false);
	}, [setValues, setMovies]);

	const handleChangeCheckbox = () => setFilterChecked(!filterChecked);

	const handleSubmitSearchMovies = e => {
		e.preventDefault();
		setSearchResultNotification('');
		setErrorMessage('');
		if (values.search.trim() === '') {
			setErrorMessage(errorMessages.keywordMissing);
		} else {
			props.setIsLoading(true);
			getMovies()
				.then(response => {
					const filteredMovies = moviesFilter(response, values.search, filterChecked);
					!filteredMovies.length && setSearchResultNotification(searchMessages.notFound);
					setMovies(filteredMovies);
					localStorage.setItem('movies', JSON.stringify(filteredMovies));
					localStorage.setItem('checkbox', filterChecked);
					localStorage.setItem('query', values.search);
				})
				.catch(err => {
					setErrorMessage(errorMessages.searchError);
					console.error(err);
				})
				.finally(() => props.setIsLoading(false));
		}
	};

	return (
		<>
			<Header />
			<SearchForm
				values={values}
				setValues={setValues}
				onSearch={handleSubmitSearchMovies}
				handleChange={handleChange}
				isChecked={filterChecked}
				handleChangeCheckbox={handleChangeCheckbox}
				errorMessage={errorMessage}
				moviesPage={moviesPage}
			/>
			<main>
				{props.isLoading ? (
					<Preloader />
				) : (
					<MoviesCardList searchResultNotification={searchResultNotification} films={movies} />
				)}
			</main>
			<Footer />
		</>
	);
};
