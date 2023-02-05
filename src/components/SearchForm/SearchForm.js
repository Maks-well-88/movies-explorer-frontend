import { useState } from 'react';

import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import SearchIcon from '../../images/search-icon.svg';
import './SearchForm.css';

export const SearchForm = () => {
	const [isChecked, setIsChecked] = useState(false);
	const handleChange = () => setIsChecked(prevState => !prevState);

	return (
		<form className='SearchForm'>
			<fieldset className='SearchForm__container'>
				<div className='SearchForm__input-wrap'>
					<img className='SearchForm__icon' src={SearchIcon} alt='Поиск' />
					<input className='SearchForm__input' type='text' placeholder='Фильм' required={true} />
					<button className='SearchForm__submit-button' type='submit' />
				</div>
				<FilterCheckbox checked={isChecked} onCheck={handleChange} />
			</fieldset>
		</form>
	);
};
