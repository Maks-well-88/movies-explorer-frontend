import { Link } from 'react-router-dom';

import LogoImage from '../../images/logo.svg';
import './Logo.css';

export const Logo = () => {
	return (
		<Link to='/'>
			<img className='Logo' src={LogoImage} alt='Логотип' />
		</Link>
	);
};
