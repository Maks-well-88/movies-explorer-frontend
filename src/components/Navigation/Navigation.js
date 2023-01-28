import { Link } from 'react-router-dom';

import './Navigation.css';
import Icon from '../../images/account-icon.svg';
import BurgerMenu from '../../images/burger-menu.svg';
import { headerNavigationData } from '../../utils/constants';

export const Navigation = () => {
	return (
		<nav className='Navigation'>
			<img className='Navigation__menu' src={BurgerMenu} alt='Меню' />
			<ul className='Navigation__list'>
				{headerNavigationData.map((item, i) => (
					<li key={i} className='Navigation__item'>
						<Link className='Navigation__link' to={item.link}>
							{item.isAccount ? (
								<div className='Navigation__account'>
									<img src={Icon} alt='Аккаунт' />
									<span className='Navigation__account-text'>{item.name}</span>
								</div>
							) : (
								item.name
							)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
