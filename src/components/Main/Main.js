import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Promo } from '../Promo/Promo';
import { AboutProject } from '../AboutProject/AboutProject';
import { Techs } from '../Techs/Techs';
import { AboutMe } from '../AboutMe/AboutMe';
import './Main.css';

export const Main = () => {
	return (
		<div>
			<Header />
			<Promo />
			<AboutProject />
			<Techs />
			<AboutMe />
			<Footer />
		</div>
	);
};
