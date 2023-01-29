import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import './Header.css';

export const Header = () => {
	return (
		<div className='Header'>
			<div className='Header__container'>
				<Logo />
				<Navigation />
			</div>
		</div>
	);
};
