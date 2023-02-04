import { useContext } from 'react';

import { AppContext } from '../../contexts/AppContext';
import BurgerMenuBlack from '../../images/burger-menu-black.svg';
import BurgerMenuWhite from '../../images/burger-menu-white.svg';
import './BurgerMenu.css';

export const BurgerMenu = () => {
	const { location } = useContext(AppContext);
	const menuBlackStyle =
		location.pathname === '/' ? 'Navigation__menu Navigation__menu_position_main' : 'Navigation__menu';

	const menuWhiteStyle =
		location.pathname === '/' ? 'Navigation__menu' : 'Navigation__menu Navigation__menu_position_main';
	return (
		<>
			<img className={menuBlackStyle} src={BurgerMenuBlack} alt='Меню' />
			<img className={menuWhiteStyle} src={BurgerMenuWhite} alt='Меню' />
		</>
	);
};
