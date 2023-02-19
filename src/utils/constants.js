export const headerNavigationData = [
	{
		link: '/movies',
		name: 'Фильмы',
		isButton: false,
	},
	{
		link: '/saved-movies',
		name: 'Сохранённые фильмы',
		isButton: false,
	},
	{
		name: 'Аккаунт',
		isButton: true,
	},
];

export const footerNavigationData = [
	{
		link: 'https://practicum.yandex.ru/',
		name: 'Яндекс.Практикум',
	},
	{
		link: 'https://github.com/Maks-well-88',
		name: 'Github',
	},
];

export const errorMessages = {
	profileError: 'При обновлении профиля произошла ошибка',
	serverError: '500, на сервере произошла ошибка',
	notFound: '404 Страница по указанному маршруту не найдена',
	userExists: 'Пользователь с таким email уже существует',
	registrationError: 'При регистрации пользователя произошла ошибка',
	userEmailExists: 'Пользователь с таким email уже существует',
	authorizationTokenError: 'При авторизации произошла ошибка. Переданный токен некорректен',
	authorizationTokenWrongFormat:
		'При авторизации произошла ошибка. Токен не передан или передан не в том формате',
	wrongUsernamePassword: 'Вы ввели неправильный логин или пароль',
	searchError: 'Произошла ошибка. Проблема с соединением или сервер недоступен. Попробуйте позже',
	keywordMissing: 'Нужно ввести ключевое слово',
};

export const searchMessages = {
	notFound: 'Ничего не найдено',
};

export const shortMovieDuration = 40;
