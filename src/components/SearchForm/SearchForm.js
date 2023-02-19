import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import SearchIcon from '../../images/search-icon.svg';
import './SearchForm.css';

export const SearchForm = props => {
	return (
		<form className='SearchForm' onSubmit={props.onSearch}>
			<fieldset className='SearchForm__container'>
				<div className='SearchForm__input-wrap'>
					<img className='SearchForm__icon' src={SearchIcon} alt='Поиск' />
					<input
						name='search'
						className='SearchForm__input'
						type='text'
						value={props.values.search}
						onChange={props.handleChange}
						placeholder='Фильм'
						autoComplete='off'
					/>
					<button className='SearchForm__submit-button' type='submit' />
				</div>
				<FilterCheckbox checked={props.isChecked} onCheck={props.handleChangeCheckbox} />
				{props.errorMessage && <ErrorMessage position={'search'} message={props.errorMessage} />}
			</fieldset>
		</form>
	);
};
