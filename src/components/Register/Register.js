import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { Form } from '../Form/Form';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { AppContext } from '../../contexts/AppContext';
import './Register.css';

export const Register = ({ onRegister }) => {
	const { setSubmitButtonDisabled, submitButtonDisabled } = useContext(AppContext);
	const { values, handleChange, errors, setErrors, isValid } = useFormWithValidation({
		name: '',
		email: '',
		password: '',
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

	const checkValidityOnRegister = e => {
		e.preventDefault();
		if (isValid) onRegister(values);
		return null;
	};

	return (
		<section className='Register'>
			<div className='Register__container'>
				<Logo />
				<h1 className='Register__title'>Добро пожаловать!</h1>

				<Form button={'Зарегистрироваться'} onSubmitRegister={checkValidityOnRegister}>
					<label className='Register__label' lang='en' htmlFor='name'>
						Имя
						<input
							className='Register__field'
							name='name'
							type='text'
							value={values.name}
							pattern='^[a-zA-Zа-яА-Я\s-]+$'
							onChange={handleChange}
							autoComplete='off'
							placeholder='Введите ваше имя'
							required
						/>
					</label>
					<div className='Register__error-container'>
						{errors.name && submitButtonDisabled && (
							<ErrorMessage position='inputError' message={errors.name} />
						)}
					</div>

					<label lang='en' className='Register__label' htmlFor='email'>
						E-mail
						<input
							className='Register__field'
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

					<label className='Register__label' htmlFor='password'>
						Пароль
						<input
							className='Register__field Register__field_type_password'
							name='password'
							type='password'
							value={values.password}
							minLength={6}
							onChange={handleChange}
							autoComplete='off'
							placeholder='Введите пароль'
							required
						/>
					</label>
					<div className='Register__error-container'>
						{errors.password && submitButtonDisabled && (
							<ErrorMessage position='inputError' message={errors.password} />
						)}
					</div>
				</Form>

				<div className='Register__info'>
					<p className='Register__info-title'>Уже зарегистрированы?</p>
					<span className='Register__signin'>
						<Link className='Register__info-link' to='/signin'>
							Войти
						</Link>
					</span>
				</div>
			</div>
		</section>
	);
};
