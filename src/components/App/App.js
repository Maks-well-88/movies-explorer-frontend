import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import { Menu } from '../Menu/Menu';
import { AppContext } from '../../contexts/AppContext';
import { savedMoviesList } from '../../utils/constants';
import './App.css';

export const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [isEmptyResponse, setIsEmptyResponse] = useState(false);
	const [isOpenedMenu, setIsOpenedMenu] = useState(false);
	const location = useLocation();
	const [movies, setMovies] = useState([]);
	const [savedMovies, setSavedMovies] = useState(savedMoviesList);

	useEffect(
		() => (location.pathname === '/' ? setIsLoggedIn(false) : setIsLoggedIn(true)),
		[location, setIsLoggedIn]
	);

	useEffect(() => {
		const store = JSON.parse(localStorage.getItem('movies'));
		store && setMovies(JSON.parse(localStorage.getItem('movies')));
		setIsChecked(JSON.parse(localStorage.getItem('checkbox')));
	}, []);

	const handleRemoveCard = id => setSavedMovies(savedMovies.filter(film => film.id !== id));
	const handleOpenMenu = () => setIsOpenedMenu(true);
	const handleCloseMenuEsc = e => e.key === 'Escape' && setIsOpenedMenu(false);
	const handleCloseMenu = e => e.target === e.currentTarget && setIsOpenedMenu(false) && e.stopPropagation();
	const handleChangeCheckbox = () => setIsChecked(prevState => !prevState);

	const getMinutesString = minutes => {
		if (minutes % 10 === 1 && minutes % 100 !== 11) {
			return 'минута';
		} else if ([2, 3, 4].includes(minutes % 10) && ![12, 13, 14].includes(minutes % 100)) {
			return 'минуты';
		} else {
			return 'минут';
		}
	};

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
					handleRemoveCard,
					movies,
					savedMovies,
					getMinutesString,
				}}
			>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route
						path='/movies'
						element={
							<Movies
								isLoading={isLoading}
								isChecked={isChecked}
								setMovies={setMovies}
								setIsLoading={setIsLoading}
								onCheck={handleChangeCheckbox}
								movies={movies}
								isEmptyResponse={isEmptyResponse}
								setIsEmptyResponse={setIsEmptyResponse}
							/>
						}
					/>
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
