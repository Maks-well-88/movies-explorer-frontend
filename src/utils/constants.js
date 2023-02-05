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
	},
	{
		id: 2,
		name: 'В погоне за Бенкси',
		time: 27,
		imageSrc: PicTwo,
	},
	{
		id: 3,
		name: 'В погоне за Бенкси',
		time: 27,
		imageSrc: PicThree,
	},
];
