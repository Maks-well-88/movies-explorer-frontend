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
