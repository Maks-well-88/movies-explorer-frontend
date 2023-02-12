import PicOne from '../images/pic-1.png';
import PicTwo from '../images/pic-2.png';
import PicThree from '../images/pic-3.png';

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

export const savedMoviesList = [
	{
		id: 1,
		name: 'В погоне за Бенкси',
		time: 27,
		imageSrc: PicOne,
		saved: true,
	},
	{
		id: 2,
		name: 'В погоне за Бенкси',
		time: 27,
		imageSrc: PicTwo,
		saved: true,
	},
	{
		id: 3,
		name: 'В погоне за Бенкси',
		time: 27,
		imageSrc: PicThree,
		saved: true,
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
	keywordMissing: 'Нужно ввести ключевое слово',
	searchError: 'Произошла ошибка. Проблема с соединением или сервер недоступен. Попробуйте позже',
};
