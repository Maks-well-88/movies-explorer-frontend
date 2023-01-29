import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { Form } from '../Form/Form';
import './Register.css';

export const Register = () => {
	const registerError = 'Что-то пошло не так...';

	return (
		<section className='Register'>
			<div className='Register__container'>
				<Logo />
				<h1 className='Register__title'>Добро пожаловать!</h1>
				<Form button={'Зарегистрироваться'} registerError={registerError}>
					<label className='Register__label' lang='en' htmlFor='name'>
						Имя
						<input
							className='Register__field'
							name='name'
							type='text'
							autocomplete='off'
							placeholder='Введите ваше имя'
							required
						/>
					</label>
					<label lang='en' className='Register__label' htmlFor='email'>
						E-mail
						<input
							className='Register__field'
							name='email'
							type='email'
							autocomplete='off'
							placeholder='Введите электронную почту'
							required
						/>
					</label>
					<label className='Register__label' htmlFor='password'>
						Пароль
						<input
							className='Register__field Register__field_type_password'
							name='password'
							type='password'
							autocomplete='off'
							placeholder='Введите пароль'
							required
						/>
					</label>
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
