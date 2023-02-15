import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { AppContext } from '../../contexts/AppContext';
import './Form.css';

export const Form = ({ children, button, onSubmitRegister, onSubmitLogin, onSubmitUpdateUser }) => {
	const { serverError, submitButtonDisabled } = useContext(AppContext);
	const location = useLocation();
	const registerPage = location.pathname === '/signup';
	const loginPage = location.pathname === '/signin';
	const profilePage = location.pathname === '/profile';

	const formErrorInfoStyle = profilePage
		? 'Form__error-info Form__error-info_position_profile'
		: 'Form__error-info';
	const formButtonStyle = profilePage ? 'Form__button Form__button_position_profile' : 'Form__button';

	return (
		<form
			className='Form'
			onSubmit={
				(loginPage && onSubmitLogin) ||
				(registerPage && onSubmitRegister) ||
				(profilePage && onSubmitUpdateUser)
			}
			noValidate
		>
			{children}
			<div className={formErrorInfoStyle}>
				{serverError && <ErrorMessage position='submitError' message={serverError} />}
			</div>
			<button className={formButtonStyle} type='submit' disabled={submitButtonDisabled}>
				{button}
			</button>
		</form>
	);
};
