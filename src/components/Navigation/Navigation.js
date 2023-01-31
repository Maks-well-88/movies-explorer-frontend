import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import { AccountButton } from '../AccountButton/AccountButton';
import { BurgerMenu } from '../App/BurgerMenu/BurgerMenu';
import { headerNavigationData } from '../../utils/constants';
import './Navigation.css';

export const Navigation = () => {
	const { location, isLoggedIn } = useContext(AppContext);
	const navigate = useNavigate();

	const linkStyle =
		location.pathname === '/' ? 'Navigation__link Navigation__link_position_main' : 'Navigation__link';
	const handleSignInButtonClick = () => navigate('/signin');

	return (
		<nav className='Navigation'>
			{isLoggedIn ? (
				<>
					<BurgerMenu />
					<ul className='Navigation__list'>
						{headerNavigationData.map((item, i) => (
							<li key={i} className='Navigation__item'>
								{item.isButton ? (
									<AccountButton name={item.name} />
								) : (
									<NavLink
										className={({ isActive }) =>
											isActive ? `${linkStyle} Navigation__link_active` : `${linkStyle}`
										}
										to={item.link}
									>
										{item.name}
									</NavLink>
								)}
							</li>
						))}
					</ul>
				</>
			) : (
				<ul className='Navigation__sign-list'>
					<li className='Navigation__signup-item'>
						<Link className='Navigation__signup-link' to='/signup'>
							Регистрация
						</Link>
					</li>
					<li>
						<button className='Navigation__signin-button' type='button' onClick={handleSignInButtonClick}>
							Войти
						</button>
					</li>
				</ul>
			)}
		</nav>
	);
};
