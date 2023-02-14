import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { NotFound } from '../NotFound/NotFound';
import { Menu } from '../Menu/Menu';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { AppContext } from '../../contexts/AppContext';
import { savedMoviesList } from '../../utils/constants';
import { register } from '../../utils/MainApi';
import { login } from '../../utils/MainApi';
import { getUser } from '../../utils/MainApi';
import { errorMessages } from '../../utils/constants';
import './App.css';

export const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [isEmptyResponse, setIsEmptyResponse] = useState(false);
	const [isOpenedMenu, setIsOpenedMenu] = useState(false);
	const [savedMovies, setSavedMovies] = useState(savedMoviesList);
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
	const [movies, setMovies] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [serverError, setServerError] = useState('');
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		console.log('Проверка аутентификации в App', isLoggedIn);
		const token = localStorage.getItem('token');
		console.log('Я 1');
		if (token) {
			getUser(token)
				.then(response => {
					if (response) {
						setIsLoggedIn(true);
						setCurrentUser(response);
						setServerError('');
					}
				})
				.catch(error => console.error(error));
		}
	}, [isLoggedIn]);

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

	const handleRegister = values => {
		register(values)
			.then(response => {
				if (response) {
					setIsLoggedIn(true);
					navigate('/movies');
					setServerError('');
				}
			})
			.then(() => {
				const { email, password } = values;
				login({ email, password })
					.then(data => data.token && localStorage.setItem('token', data.token))
					.then(() => {
						getUser(localStorage.getItem('token'))
							.then(response => {
								if (response) {
									setIsLoggedIn(true);
									setCurrentUser(response);
									navigate('/movies');
									setServerError('');
								}
							})
							.catch(error => console.error(error));
					})
					.catch(error => console.error(error));
			})
			.catch(error => console.log(error.name));
	};

	const handleLogin = values => {
		const { email, loginPassword } = values;
		login({ email: email, password: loginPassword })
			.then(data => {
				data.token && localStorage.setItem('token', data.token);
			})
			.then(() => {
				getUser(localStorage.getItem('token'))
					.then(response => {
						if (response) {
							setIsLoggedIn(true);
							setCurrentUser(response);
							navigate('/movies');
							setServerError('');
						}
					})
					.catch(error => console.error(error));
			})
			.catch(error => console.error(error));
	};

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
					serverError,
					setSubmitButtonDisabled,
					submitButtonDisabled,
					setIsLoggedIn,
					setCurrentUser,
					setServerError,
				}}
			>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/signup' element={<Register onRegister={handleRegister} />} />
					<Route path='/signin' element={<Login onLogin={handleLogin} />} />
					<Route
						path='/movies'
						element={
							<ProtectedRoute
								component={Movies}
								isLoggedIn={isLoggedIn}
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
					<Route
						path='/saved-movies'
						element={<ProtectedRoute component={SavedMovies} isLoggedIn={isLoggedIn} />}
					/>
					<Route path='/profile' element={<ProtectedRoute component={Profile} isLoggedIn={isLoggedIn} />} />
					<Route path='*' element={isLoggedIn ? <NotFound /> : <Navigate to='/signin' />} />
				</Routes>
				<Menu />
			</AppContext.Provider>
		</div>
	);
};
