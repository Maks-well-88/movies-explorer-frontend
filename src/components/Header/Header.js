import { useContext } from 'react';

import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { AppContext } from '../../contexts/AppContext';
import './Header.css';

export const Header = () => {
	const { location } = useContext(AppContext);

	return (
		<header className={location.pathname === '/' ? 'Header Header_location_main' : 'Header'}>
			<div className='Header__container'>
				<Logo />
				<Navigation />
			</div>
		</header>
	);
};
