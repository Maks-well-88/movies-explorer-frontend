import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import BurgerMenuBlack from '../../images/burger-menu-black.svg';
import BurgerMenuWhite from '../../images/burger-menu-white.svg';
import './BurgerMenu.css';

export const BurgerMenu = () => {
	const { location, handleOpenMenu } = useContext(AppContext);
	const mainPage = location.pathname === '/';
	const blackMenuStyle = mainPage ? 'Navigation__menu Navigation__menu_hidden' : 'Navigation__menu';
	const whiteMenuStyle = mainPage ? 'Navigation__menu' : 'Navigation__menu Navigation__menu_hidden';

	return (
		<>
			<img className={blackMenuStyle} src={BurgerMenuBlack} onClick={handleOpenMenu} alt='Меню' />
			<img className={whiteMenuStyle} src={BurgerMenuWhite} onClick={handleOpenMenu} alt='Меню' />
		</>
	);
};
