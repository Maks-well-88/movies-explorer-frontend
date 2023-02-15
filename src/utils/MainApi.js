export const register = body => {
	return fetch('http://localhost:3000/api/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Origin: 'http://localhost:3001',
			'Access-Control-Request-Headers': 'Content-Type',
		},
		body: JSON.stringify(body),
	})
		.then(response => {
			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
		})
		.catch(error => console.error(error));
};

export const login = body => {
	return fetch('http://localhost:3000/api/signin', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Origin: 'http://localhost:3001',
			'Access-Control-Request-Headers': 'Content-Type',
		},
		body: JSON.stringify(body),
	})
		.then(response => {
			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
		})
		.catch(error => console.error(error));
};

export const getUser = token => {
	return fetch('http://localhost:3000/api/users/me', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			Origin: 'http://localhost:3001',
			'Access-Control-Request-Headers': 'Content-Type',
		},
	})
		.then(response => {
			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
		})
		.catch(error => console.error(error));
};

export const updateUser = (token, body) => {
	return fetch('http://localhost:3000/api/users/me', {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			Origin: 'http://localhost:3001',
			'Access-Control-Request-Headers': 'Content-Type',
		},
		body: JSON.stringify(body),
	})
		.then(response => {
			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
		})
		.catch(error => console.error(error));
};

export const saveMovie = (token, body) => {
	return fetch('http://localhost:3000/api/movies', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			Origin: 'http://localhost:3001',
			'Access-Control-Request-Headers': 'Content-Type',
		},
		body: JSON.stringify({
			country: body.country,
			director: body.director,
			duration: body.duration,
			year: body.year,
			description: body.description,
			image: `https://api.nomoreparties.co${body.image.url}`,
			trailerLink: body.trailerLink,
			thumbnail: `https://api.nomoreparties.co${body.image.formats.thumbnail.url}`,
			movieId: body.id,
			nameRU: body.nameRU,
			nameEN: body.nameEN,
		}),
	})
		.then(response => {
			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
		})
		.catch(error => console.error(error));
};

export const getSavedMovie = token => {
	return fetch('http://localhost:3000/api/movies', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			Origin: 'http://localhost:3001',
			'Access-Control-Request-Headers': 'Content-Type',
		},
	})
		.then(response => {
			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
		})
		.catch(error => console.error(error));
};

export const deleteMovie = (token, id) => {
	return fetch(`http://localhost:3000/api/movies/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
			Origin: 'http://localhost:3001',
			'Access-Control-Request-Headers': 'Content-Type',
		},
	})
		.then(response => {
			return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
		})
		.catch(error => console.error(error));
};
