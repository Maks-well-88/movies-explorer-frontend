import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import blackIcon from '../../images/account-icon-black.svg';
import whiteIcon from '../../images/account-icon-white.svg';
import './AccountButton.css';

export const AccountButton = ({ name }) => {
	const { location } = useContext(AppContext);
	const navigate = useNavigate();

	const buttonStyle =
		location.pathname === '/'
			? 'Navigation__account-button Navigation__account-button_position_main'
			: 'Navigation__account-button';

	const blackIconStyle =
		location.pathname === '/'
			? 'Navigation__account-icon Navigation__account-icon_position_main'
			: 'Navigation__account-icon';

	const whiteIconStyle =
		location.pathname === '/'
			? 'Navigation__account-icon'
			: 'Navigation__account-icon Navigation__account-icon_position_main';

	const handleAccauntButtonClick = () => navigate('/profile');

	return (
		<button className={buttonStyle} type='button' onClick={handleAccauntButtonClick}>
			<img className={whiteIconStyle} src={whiteIcon} alt='Аккаунт' />
			<img className={blackIconStyle} src={blackIcon} alt='Аккаунт' />
			<span className='Navigation__account-text'>{name}</span>
		</button>
	);
};
