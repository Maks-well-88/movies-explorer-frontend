import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import { AppContext } from '../../contexts/AppContext';
import './App.css';

export const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const location = useLocation();

	return (
		<div className='App'>
			<AppContext.Provider value={{ location, isLoggedIn }}>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/movies' element={<Movies />} />
					<Route path='/saved-movies' element={<SavedMovies />} />
					<Route path='/signup' element={<Register />} />
					<Route path='/signin' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</AppContext.Provider>
		</div>
	);
};
