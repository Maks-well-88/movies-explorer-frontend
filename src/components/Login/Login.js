import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { AppContext } from '../../contexts/AppContext';
import { Logo } from '../Logo/Logo';
import { Form } from '../Form/Form';
import './Login.css';

export const Login = ({ onLogin }) => {
	const { setSubmitButtonDisabled, submitButtonDisabled } = useContext(AppContext);
	const { values, handleChange, errors, setErrors, isValid } = useFormWithValidation({
		email: '',
		loginPassword: '',
	});

	useEffect(() => {
		if (Object.values(values).some(value => value !== '')) {
			setSubmitButtonDisabled(true);
		} else {
			setErrors({});
			setSubmitButtonDisabled(false);
		}

		isValid && setSubmitButtonDisabled(!isValid);
	}, [setSubmitButtonDisabled, setErrors, isValid, values]);

	const checkValidityOnLogin = e => {
		e.preventDefault();
		if (isValid) onLogin(values);
		return null;
	};

	return (
		<section className='Login'>
			<div className='Login__container'>
				<Logo />
				<h1 className='Login__title'>Рады видеть!</h1>

				<Form button={'Войти'} onSubmitLogin={checkValidityOnLogin}>
					<label lang='en' className='Login__label' htmlFor='email'>
						E-mail
						<input
							className='Login__field'
							name='email'
							type='email'
							value={values.email}
							pattern='^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$'
							onChange={handleChange}
							autoComplete='off'
							placeholder='Введите электронную почту'
							required
						/>
					</label>
					<div className='Register__error-container'>
						{errors.email && submitButtonDisabled && (
							<ErrorMessage position='inputError' message={errors.email} />
						)}
					</div>

					<label className='Login__label' htmlFor='loginPassword'>
						Пароль
						<input
							className='Login__field Login__field_type_password'
							name='loginPassword'
							type='password'
							value={values.loginPassword}
							onChange={handleChange}
							autoComplete='off'
							placeholder='Введите пароль'
							required
						/>
					</label>
					<div className='Login__error-container'>
						{errors.loginPassword && submitButtonDisabled && (
							<ErrorMessage position='inputError' message={errors.loginPassword} />
						)}
					</div>
				</Form>

				<div className='Login__info'>
					<p className='Login__info-title'>Ещё не зарегистрированы?</p>
					<span className='Login__signin'>
						<Link className='Login__info-link' to='/signup'>
							Регистрация
						</Link>
					</span>
				</div>
			</div>
		</section>
	);
};
