import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import { Menu } from '../Menu/Menu';
import { AppContext } from '../../contexts/AppContext';
import './App.css';

export const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [isOpenedMenu, setIsOpenedMenu] = useState(false);
	const location = useLocation();

	const handleOpenMenu = () => setIsOpenedMenu(true);
	const handleCloseMenuEsc = e => e.key === 'Escape' && setIsOpenedMenu(false);
	const handleCloseMenu = e => e.target === e.currentTarget && setIsOpenedMenu(false) && e.stopPropagation();

	return (
		<div className='App'>
			<AppContext.Provider
				value={{
					location,
					isLoggedIn,
					isOpenedMenu,
					setIsOpenedMenu,
					handleOpenMenu,
					handleCloseMenuEsc,
					handleCloseMenu,
				}}
			>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/saved-movies' element={<SavedMovies />} />
					<Route path='/signup' element={<Register />} />
					<Route path='/signin' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Menu />
			</AppContext.Provider>
		</div>
	);
};
