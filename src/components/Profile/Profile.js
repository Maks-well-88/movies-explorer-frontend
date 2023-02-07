import { useState } from 'react';

import { Header } from '../Header/Header';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { errorMessages } from '../../utils/constants';
import './Profile.css';

export const Profile = () => {
	const [editProfile, setEditProfile] = useState(false);
	const [hasError, setHasError] = useState(false);

	const editButtonStyle = editProfile
		? 'Profile__button Profile__button_type_edit Profile__button_unactive'
		: 'Profile__button Profile__button_type_edit';
	const logoutButtonStyle = editProfile
		? 'Profile__button Profile__button_type_logout Profile__button_unactive'
		: 'Profile__button Profile__button_type_logout';
	const saveButtonStyle = editProfile
		? 'Profile__button Profile__button_type_save'
		: 'Profile__button Profile__button_type_save Profile__button_unactive';

	const handleEditButtonClick = () => setEditProfile(true);
	const handleSaveButtonClick = () => setHasError(true);

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
						{hasError && <ErrorMessage position={'profile'} message={errorMessages.profileError} />}
						<button
							disabled={hasError}
							type='button'
							className={saveButtonStyle}
							onClick={handleSaveButtonClick}
						>
							Сохранить
						</button>
						<button type='button' className={editButtonStyle} onClick={handleEditButtonClick}>
							Редактировать
						</button>
						<button type='button' className={logoutButtonStyle}>
							Выйти из аккаунта
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
