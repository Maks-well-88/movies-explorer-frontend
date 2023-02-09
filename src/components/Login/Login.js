import { Link } from 'react-router-dom';

import { Logo } from '../Logo/Logo';
import { Form } from '../Form/Form';
import './Login.css';

export const Login = () => {
	return (
		<section className='Login'>
			<div className='Login__container'>
				<Logo />
				<h1 className='Login__title'>Рады видеть!</h1>
				<Form button={'Войти'}>
					<label lang='en' className='Login__label' htmlFor='email'>
						E-mail
						<input
							className='Login__field'
							name='email'
							type='email'
							autoComplete='off'
							placeholder='Введите электронную почту'
							required
						/>
					</label>
					<label className='Login__label' htmlFor='password'>
						Пароль
						<input
							className='Login__field Login__field_type_password'
							name='password'
							type='password'
							autoComplete='off'
							placeholder='Введите пароль'
							required
						/>
					</label>
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
