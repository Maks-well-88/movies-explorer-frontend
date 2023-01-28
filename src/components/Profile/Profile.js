import { Header } from '../Header/Header';
import './Profile.css';

export const Profile = () => {
	return (
		<>
			<Header />
			<section className='Profile'>
				<div className='Profile__container'>
					<h1 className='Profile__greeting'>Привет, Виталий!</h1>
					<div className='Profile__user-name'>
						<span className='Profile__user-title'>Имя</span>
						<span>Виталий</span>
					</div>
					<div className='Profile__user-email'>
						<span className='Profile__user-title' lang='en'>
							E-mail
						</span>
						<span lang='en'>pochta@yandex.ru</span>
					</div>
					<div className='Profile__buttons-container'>
						<button type='button' className='Profile__edit-button'>
							Редактировать
						</button>
						<button type='button' className='Profile__logout-button'>
							Выйти из аккаунта
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
