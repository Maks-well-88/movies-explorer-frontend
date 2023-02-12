import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import './Form.css';

export const Form = ({ children, button, isValid, submitButtonDisabled }) => {
	const registerError = 'Что-то пошло не так...';
	const error = false;

	const handleSubmit = e => {
		e.preventDefault();
		if (isValid) {
			console.log('Отправка!');
		}
		return null;
	};

	return (
		<form className='Form' onSubmit={handleSubmit} noValidate>
			{children}
			<div className='Form__error-info'>
				{error && <ErrorMessage position='submitError' message={registerError} />}
			</div>
			<button className='Form__button' type='submit' disabled={submitButtonDisabled}>
				{button}
			</button>
		</form>
	);
};
