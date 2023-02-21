import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

import { AccountButton } from '../AccountButton/AccountButton';
import './Menu.css';

export const Menu = ({ isOpenedMenu, setIsOpenedMenu, handleCloseMenuEsc, handleCloseMenu }) => {
	useEffect(() => {
		document.addEventListener('keydown', handleCloseMenuEsc);
		return () => document.removeEventListener('keydown', handleCloseMenuEsc);
	}, [handleCloseMenuEsc]);

	const menuStyle = isOpenedMenu ? 'Menu Menu_opened' : 'Menu';
	const menuContainerStyle = isOpenedMenu ? 'Menu__content Menu__content_opened' : 'Menu__content';

	return (
		<div className={menuStyle} onClick={handleCloseMenu}>
			<div className={menuContainerStyle}>
				<button type='button' className='Menu__close-button' onClick={handleCloseMenu}></button>
				<nav className='Menu__navigation'>
					<ul className='Menu__navigation-list'>
						<li className='Menu__navigation-item' onClick={() => setIsOpenedMenu(false)}>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'Menu__navigation-link Menu__navigation-link_active' : 'Menu__navigation-link'
								}
								to='/'
							>
								Главная
							</NavLink>
						</li>
						<li className='Menu__navigation-item' onClick={() => setIsOpenedMenu(false)}>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'Menu__navigation-link Menu__navigation-link_active' : 'Menu__navigation-link'
								}
								to='/movies'
							>
								Фильмы
							</NavLink>
						</li>
						<li className='Menu__navigation-item' onClick={() => setIsOpenedMenu(false)}>
							<NavLink
								className={({ isActive }) =>
									isActive ? 'Menu__navigation-link Menu__navigation-link_active' : 'Menu__navigation-link'
								}
								to='/saved-movies'
							>
								Сохранённые фильмы
							</NavLink>
						</li>
					</ul>
				</nav>
				<AccountButton name={'Аккаунт'} position={'menu'} />
			</div>
		</div>
	);
};
