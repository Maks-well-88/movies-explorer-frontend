import { useNavigate } from 'react-router-dom';

import './NotFound.css';

export const NotFound = () => {
	const navigate = useNavigate();
	const handleBackButtonClick = () => navigate(-1);

	return (
		<section className='NotFound'>
			<div className='NotFound__info'>
				<h1 className='NotFound__title'>404</h1>
				<p className='NotFound__text'>Страница не найдена</p>
			</div>
			<button className='NotFound__back-button' type='button' onClick={handleBackButtonClick}>
				Назад
			</button>
		</section>
	);
};
