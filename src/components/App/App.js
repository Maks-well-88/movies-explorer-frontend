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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { register } from '../../utils/MainApi';
import { login } from '../../utils/MainApi';
import { getUser } from '../../utils/MainApi';
import { updateUser } from '../../utils/MainApi.js';
import { saveMovie } from '../../utils/MainApi';
import { getSavedMovie } from '../../utils/MainApi';
import { deleteMovie } from '../../utils/MainApi';
import { errorMessages } from '../../utils/constants';
import './App.css';

export const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isOpenedMenu, setIsOpenedMenu] = useState(false);
	const [savedMovies, setSavedMovies] = useState([]);
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
	const [movies, setMovies] = useState([]);
	const [currentUser, setCurrentUser] = useState({});
	const [serverError, setServerError] = useState('');
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			getUser(token)
				.then(response => {
					if (response) {
						setIsLoggedIn(true);
						setCurrentUser({ data: response });
						setServerError('');
					}
				})
				.catch(error => {
					console.error(error);
					setServerError(errorMessages.authorizationTokenError);
				});

			getSavedMovie(token)
				.then(movies => {
					movies && setSavedMovies(movies.filter(movie => movie.ownwer === currentUser._id));
					movies && setFilteredMovies(movies.filter(movie => movie.ownwer === currentUser._id));
				})
				.catch(error => {
					console.error(error);
					setServerError(errorMessages.serverError);
				});
		}
	}, [currentUser._id, isLoggedIn]);

	useEffect(() => {
		setFilteredMovies(filteredMovies);
	}, [filteredMovies, setFilteredMovies]);

	const handleOpenMenu = () => setIsOpenedMenu(true);
	const handleCloseMenuEsc = e => e.key === 'Escape' && setIsOpenedMenu(false);
	const handleCloseMenu = e => e.target === e.currentTarget && setIsOpenedMenu(false) && e.stopPropagation();

	const handleRegister = values => {
		register(values)
			.then(response => {
				if (response) {
					const { email, password } = values;
					login({ email, password })
						.then(data => {
							data.token && localStorage.setItem('token', data.token);
							setIsLoggedIn(true);
							navigate('/movies');
							setServerError('');
						})
						.catch(error => console.error(error));
				} else {
					setServerError(errorMessages.userEmailExists);
				}
			})
			.catch(error => {
				setServerError(errorMessages.registrationError);
				console.error(error);
			});
	};

	const handleLogin = values => {
		const { email, loginPassword } = values;
		login({ email: email, password: loginPassword })
			.then(data => {
				data.token && localStorage.setItem('token', data.token);
				setIsLoggedIn(true);
				navigate('/movies');
				setServerError('');
			})
			.catch(error => {
				setServerError(errorMessages.wrongUsernamePassword);
				console.error(error);
			});
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
		localStorage.removeItem('token');
		localStorage.removeItem('movies');
		localStorage.removeItem('checkbox');
		localStorage.removeItem('query');
		navigate('/');
	};

	const handleUpdateUserProfile = values => {
		const token = localStorage.getItem('token');
		if (token) {
			updateUser(token, values)
				.then(response => {
					if (response) {
						setCurrentUser({ data: response, updated: true });
						setTimeout(() => {
							setCurrentUser({ data: response });
						}, 3000);
						setServerError('');
					}
				})
				.catch(error => {
					setServerError(errorMessages.profileError);
					console.error(error);
				});
		} else {
			setServerError(errorMessages.authorizationTokenWrongFormat);
		}
	};

	const handleSaveMovie = savedMovie => {
		const token = localStorage.getItem('token');
		if (token) {
			saveMovie(token, savedMovie)
				.then(movie => {
					if (movie) {
						setSavedMovies(prevState => [...prevState, movie]);
						setFilteredMovies(prevState => [...prevState, movie]);
					}
				})
				.catch(error => {
					setServerError(errorMessages.serverError);
					console.error(error);
				});
		}
	};

	const handleDeleteMovie = movieToBeDeleted => {
		const token = localStorage.getItem('token');
		if (token) {
			deleteMovie(token, movieToBeDeleted._id)
				.then(response => {
					setSavedMovies(savedMovies.filter(savedMovie => savedMovie.movieId !== movieToBeDeleted.movieId));
					setFilteredMovies(
						filteredMovies.filter(filteredMovie => filteredMovie.movieId !== movieToBeDeleted.movieId)
					);
				})
				.catch(error => {
					setServerError(errorMessages.serverError);
					console.error(error);
				});
		}
	};

	return (
		<div className='App'>
			<CurrentUserContext.Provider value={{ currentUser }}>
				<AppContext.Provider
					value={{
						location,
						isLoggedIn,
						setIsOpenedMenu,
						handleOpenMenu,
						movies,
						setMovies,
						savedMovies,
						setSubmitButtonDisabled,
						submitButtonDisabled,
						serverError,
						setServerError,
						handleSaveMovie,
						handleDeleteMovie,
					}}
				>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/signup' element={<Register onRegister={handleRegister} />} />
						<Route path='/signin' element={<Login onLogin={handleLogin} />} />
						<Route
							path='/movies'
							element={
								<ProtectedRoute component={Movies} isLoading={isLoading} setIsLoading={setIsLoading} />
							}
						/>
						<Route
							path='/saved-movies'
							element={
								<ProtectedRoute
									component={SavedMovies}
									filteredMovies={filteredMovies}
									setFilteredMovies={setFilteredMovies}
								/>
							}
						/>
						<Route
							path='/profile'
							element={
								<ProtectedRoute
									component={Profile}
									onUpdateUser={handleUpdateUserProfile}
									onLogout={handleLogout}
								/>
							}
						/>
						<Route path='*' element={isLoggedIn ? <NotFound /> : <Navigate to='/signin' />} />
					</Routes>
					<Menu
						isOpenedMenu={isOpenedMenu}
						setIsOpenedMenu={setIsOpenedMenu}
						handleCloseMenuEsc={handleCloseMenuEsc}
						handleCloseMenu={handleCloseMenu}
					/>
				</AppContext.Provider>
			</CurrentUserContext.Provider>
		</div>
	);
};
