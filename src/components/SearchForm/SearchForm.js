import { useState, useEffect } from 'react';

import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { errorMessages } from '../../utils/constants';
import { useForm } from '../../hooks/useForm';
import { getMovies } from '../../utils/MoviesApi';
import SearchIcon from '../../images/search-icon.svg';
import './SearchForm.css';

export const SearchForm = ({ setMovies, setIsLoading, isChecked, onCheck, movies, setIsEmptyResponse }) => {
	const [searchError, setSearchError] = useState('');
	const { values, handleChange, setValues } = useForm({ search: '' });

	useEffect(() => {
		const query = localStorage.getItem('query');
		query && setValues({ search: localStorage.getItem('query') });
	}, [setValues]);

	const handleSubmitSearchForm = e => {
		e.preventDefault();
		if (values.search.trim() === '') {
			setSearchError(errorMessages.keywordMissing);
		} else {
			setIsLoading(true);
			getMovies()
				.then(response => {
					response === 0 ? setIsEmptyResponse(true) : setIsEmptyResponse(false);
					setMovies(response);
					localStorage.setItem('movies', JSON.stringify(response));
					localStorage.setItem('checkbox', isChecked);
					localStorage.setItem('query', values.search);
				})
				.catch(err => {
					setSearchError(errorMessages.searchError);
					console.error(err);
				})
				.finally(() => {
					setIsLoading(false);
					movies && setSearchError('');
				});
		}
	};

	return (
		<form className='SearchForm' onSubmit={handleSubmitSearchForm}>
			<fieldset className='SearchForm__container'>
				<div className='SearchForm__input-wrap'>
					<img className='SearchForm__icon' src={SearchIcon} alt='Поиск' />
					<input
						name='search'
						className='SearchForm__input'
						type='text'
						value={values.search}
						onChange={handleChange}
						placeholder='Фильм'
						autoComplete='off'
					/>
					<button className='SearchForm__submit-button' type='submit' />
				</div>
				<FilterCheckbox checked={isChecked} onCheck={onCheck} />
				{searchError && <ErrorMessage position={'search'} message={searchError} />}
			</fieldset>
		</form>
	);
};
