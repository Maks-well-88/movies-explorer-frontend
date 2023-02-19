import './MovieButton.css';

// если не MoviesPage

export const MovieButton = ({ page, onSaveMovie, savedMovie, onDeleteMovie }) => {
	return (
		<>
			{!page ? (
				savedMovie ? (
					<button
						className='MovieButton__button MovieButton__button_type_saved'
						type='button'
						onClick={onDeleteMovie}
					></button>
				) : (
					<button
						className='MovieButton__button MovieButton__button_type_save'
						type='button'
						onClick={onSaveMovie}
					>
						Сохранить
					</button>
				)
			) : (
				<button
					className='MovieButton__button MovieButton__button_type_delete'
					type='button'
					onClick={onDeleteMovie}
				></button>
			)}
		</>
	);
};
