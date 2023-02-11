import PicOne from '../images/pic-1.png';
import PicTwo from '../images/pic-2.png';
import PicThree from '../images/pic-3.png';
import PicFour from '../images/pic-4.png';
import PicFive from '../images/pic-5.png';
import PicSix from '../images/pic-6.png';
import PicSeven from '../images/pic-7.png';
import PicEight from '../images/pic-8.png';
import PicNine from '../images/pic-9.png';
import PicTen from '../images/pic-10.png';
import PicEleven from '../images/pic-11.png';
import PicTwelve from '../images/pic-12.png';

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
	authorizationTokenError: 'При авторизации произошла ошибка. Переданный токен некорректе',
	authorizationTokenWrongFormat:
		'При авторизации произошла ошибка. Токен не передан или передан не в том формате',
	wrongUsernamePassword: 'Вы ввели неправильный логин или пароль',
};
