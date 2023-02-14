import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { AppContext } from '../../contexts/AppContext';
import './Form.css';

export const Form = ({ children, button, onSubmitRegister, onSubmitLogin }) => {
	const { serverError, submitButtonDisabled } = useContext(AppContext);
	const location = useLocation();
	const registerPage = location.pathname === '/signup';

	return (
		<form className='Form' onSubmit={registerPage ? onSubmitRegister : onSubmitLogin} noValidate>
			{children}
			<div className='Form__error-info'>
				{serverError && <ErrorMessage position='submitError' message={serverError} />}
			</div>
			<button className='Form__button' type='submit' disabled={submitButtonDisabled}>
				{button}
			</button>
		</form>
	);
};
