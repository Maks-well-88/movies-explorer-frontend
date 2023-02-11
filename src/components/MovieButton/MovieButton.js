import { useContext, useState } from 'react';

import { AppContext } from '../../contexts/AppContext';
import './MovieButton.css';

export const MovieButton = ({ film }) => {
	const [savedButton, setSavedButton] = useState(false);
	const { handleRemoveCard } = useContext(AppContext);

	const onDelete = () => handleRemoveCard(film.id);
	const handleButtonClick = () => setSavedButton(!savedButton);

	return (
		<>
			{film.saved ? (
				<button
					className='MovieButton__button MovieButton__button_type_delete'
					type='button'
					onClick={onDelete}
				></button>
			) : savedButton ? (
				<button
					className='MovieButton__button MovieButton__button_type_saved'
					type='button'
					onClick={handleButtonClick}
				></button>
			) : (
				<button
					className='MovieButton__button MovieButton__button_type_save'
					type='button'
					onClick={handleButtonClick}
				>
					Сохранить
				</button>
			)}
		</>
	);
};
