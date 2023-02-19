import { shortMovieDuration } from '../constants';

export const moviesFilter = (initialMovies, query, isChecked) => {
	let filteredMovies = initialMovies;

	if (query) {
		filteredMovies = filteredMovies.filter(movie => {
			const info = `${movie.nameRU} ${movie.nameEN} ${movie.description}`;
			return info.toLowerCase().includes(query.toLowerCase());
		});
	}
	if (isChecked) {
		filteredMovies = filteredMovies.filter(movie => movie.duration <= shortMovieDuration);
	}

	return filteredMovies;
};
