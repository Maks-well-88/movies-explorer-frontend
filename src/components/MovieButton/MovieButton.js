import './MovieButton.css';

export const MovieButton = ({ page, onSaveFilm, isSavedFilm, onDeleteFilm }) => {
	return (
		<>
			{!page ? (
				isSavedFilm ? (
					<button
						className='MovieButton__button MovieButton__button_type_saved'
						type='button'
						onClick={onDeleteFilm}
					></button>
				) : (
					<button
						className='MovieButton__button MovieButton__button_type_save'
						type='button'
						onClick={onSaveFilm}
					>
						Сохранить
					</button>
				)
			) : (
				<button
					className='MovieButton__button MovieButton__button_type_delete'
					type='button'
					onClick={onDeleteFilm}
				></button>
			)}
		</>
	);
};
