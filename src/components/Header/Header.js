import { Link } from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';
import './Header.css';
import Logo from '../../images/logo.svg';

export const Header = () => {
	return (
		<div className='Header'>
			<div className='Header__container'>
				<Link to='/'>
					<img className='Header__logo' src={Logo} alt='Логотип' />
				</Link>
				<Navigation />
			</div>
		</div>
	);
};
