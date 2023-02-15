import { useContext, useState, useEffect } from 'react';

import { Header } from '../Header/Header';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Form } from '../Form/Form';
import { AppContext } from '../../contexts/AppContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import './Profile.css';

export const Profile = ({ onLogout, onUpdateUser }) => {
	const { currentUser } = useContext(CurrentUserContext);
	const [editProfile, setEditProfile] = useState(false);
	const { setSubmitButtonDisabled } = useContext(AppContext);
	const { values, setValues, handleChange, errors, isValid } = useFormWithValidation({
		name: '',
		email: '',
	});

	const profileGreetingStyle = editProfile
		? 'Profile__greeting Profile__greeting_type_edit'
		: 'Profile__greeting';

	useEffect(() => {
		if (Object.values(values).some(value => value !== '')) {
			setSubmitButtonDisabled(true);
		}

		isValid && setSubmitButtonDisabled(!isValid);

		if (values.name === currentUser.data.name && values.email === currentUser.data.email) {
			setSubmitButtonDisabled(true);
		}
	}, [setSubmitButtonDisabled, currentUser, isValid, values]);

	useEffect(() => setSubmitButtonDisabled(true), [setSubmitButtonDisabled]);

	const checkValidityOnUpdateUser = e => {
		e.preventDefault();
		if (isValid) {
			onUpdateUser(values);
			setEditProfile(false);
		}
		return null;
	};

	const handleEditButtonClick = () => {
		setValues({
			name: currentUser.data.name,
			email: currentUser.data.email,
		});
		setEditProfile(true);
	};

	return (
		<>
			<Header />
			<section className='Profile'>
				<div className='Profile__container'>
					{currentUser.updated ? (
						<h1 className='Profile__updated'>Профиль обновлен</h1>
					) : (
						<h1 className={profileGreetingStyle}>Привет, {currentUser.data.name}!</h1>
					)}

					{!editProfile ? (
						<>
							<div className='Profile__user-name'>
								<span className='Profile__user-title'>Имя</span>
								<span>{currentUser.data.name}</span>
							</div>
							<div className='Profile__user-email'>
								<span className='Profile__user-title' lang='en'>
									E-mail
								</span>
								<span lang='en'>{currentUser.data.email}</span>
							</div>
							<div className='Profile__buttons-container'>
								<button
									type='button'
									className='Profile__button Profile__button_type_edit'
									onClick={handleEditButtonClick}
								>
									Редактировать
								</button>
								<button
									type='button'
									className='Profile__button Profile__button_type_logout'
									onClick={onLogout}
								>
									Выйти из аккаунта
								</button>
							</div>
						</>
					) : (
						<Form button={'Сохранить'} onSubmitUpdateUser={checkValidityOnUpdateUser}>
							<input
								className='Profile__field'
								name='name'
								type='text'
								value={values.name}
								onChange={handleChange}
								pattern='^[a-zA-Zа-яА-Я\s-]+$'
								autoComplete='off'
								placeholder='Введите имя'
								required
							/>
							<div className='Profile__error-container'>
								{errors.name && <ErrorMessage position='inputError' message={errors.name} />}
							</div>

							<input
								className='Profile__field'
								name='email'
								type='email'
								value={values.email}
								onChange={handleChange}
								pattern='^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$'
								autoComplete='off'
								placeholder='Введите электронную почту'
								required
							/>
							<div className='Profile__error-container'>
								{errors.email && <ErrorMessage position='inputError' message={errors.email} />}
							</div>
						</Form>
					)}
				</div>
			</section>
		</>
	);
};
