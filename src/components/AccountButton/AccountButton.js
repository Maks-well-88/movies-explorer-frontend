import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import blackIcon from '../../images/account-icon-black.svg';
import whiteIcon from '../../images/account-icon-white.svg';
import './AccountButton.css';

export const AccountButton = ({ name, position = '' }) => {
	const { location, setIsOpenedMenu } = useContext(AppContext);
	const navigate = useNavigate();
	const mainPath = location.pathname === '/';

	let buttonStyle = mainPath
		? 'Navigation__account-button Navigation__account-button_color_white'
		: 'Navigation__account-button';

	let whiteIconStyle = mainPath
		? 'Navigation__account-icon Navigation__account-icon_active'
		: 'Navigation__account-icon';

	let blackIconStyle = mainPath
		? 'Navigation__account-icon'
		: 'Navigation__account-icon Navigation__account-icon_active';

	switch (position) {
		case 'header':
			buttonStyle += ' Navigation__account-button_position_header';
			break;
		default:
			buttonStyle = 'Navigation__account-button';
			blackIconStyle = 'Navigation__account-icon Navigation__account-icon_active';
			whiteIconStyle = 'Navigation__account-icon';
	}

	const handleAccauntButtonClick = () => {
		setIsOpenedMenu(false);
		navigate('/profile');
	};

	return (
		<button className={buttonStyle} type='button' onClick={handleAccauntButtonClick}>
			<img className={whiteIconStyle} src={whiteIcon} alt='Аккаунт' />
			<img className={blackIconStyle} src={blackIcon} alt='Аккаунт' />
			<span className='Navigation__account-text'>{name}</span>
		</button>
	);
};
