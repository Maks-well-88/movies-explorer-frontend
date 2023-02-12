export const getMovies = () => {
	return fetch('https://api.nomoreparties.co/beatfilm-movies').then(res =>
		res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
	);
};
