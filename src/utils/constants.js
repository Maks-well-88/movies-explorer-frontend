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
	keywordMissing: 'Нужно ввести ключевое слово',
	wrongUsernamePassword: 'Вы ввели неправильный логин или пароль',
	searchError: 'Произошла ошибка. Проблема с соединением или сервер недоступен. Попробуйте позже',
	profileError: 'При обновлении профиля произошла ошибка',
	authorizationTokenError: 'При авторизации произошла ошибка. Переданный токен некорректен',
	serverError: '500, на сервере произошла ошибка',
	userEmailExists: 'Пользователь с таким email уже существует',
	registrationError: 'При регистрации пользователя произошла ошибка',
	authorizationTokenWrongFormat: 'Токен не передан или передан не в том формате',
};

export const inputValidationMessages = {
	cantBeBlank: 'Это поле не может быть пустым',
	invalidUsername: 'Недопустимое имя пользователя',
	incorrectEmail: 'Некорректный адрес электронной почты',
	tooShortPassword: 'Пароль не может быть короче 6 символов',
};

export const regExps = {
	emailRegExp: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
	nameRegExp: /^[a-zA-Zа-яА-Я\s-]+$/,
	passRegExp: /[A-Za-z0-9]{6,}/,
};

export const searchMessages = {
	notFound: 'Ничего не найдено',
};

export const shortMovieDuration = 40;
