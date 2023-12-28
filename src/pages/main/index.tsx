import { FunctionComponent } from "react";
import useSound from "hooks/useSound";
import backgroundSound from "./backgroundSound.mp3";
import { Navigation } from "../../components/navigation/navigation";
import MuteButton from "components/muteButton/MuteButton";
import styles from "./style.module.scss";

const Main: FunctionComponent = () => {
	const [muted, { toggleMuteBgSound }] = useSound(backgroundSound);
	return (
		<div className={styles.page}>
			<Navigation />
			<MuteButton muted={muted} toggleMuteBgSound={toggleMuteBgSound} />
			<img className={styles.fairy} src="/--1@2x.webp" />
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src="/logo.webp" />
				</div>
				<div className={styles.content}>
					<p>
						Жаркие дни пришли в Сарнаут — Игниста готова распахнуть свои двери! Тёплый ветерок
						обдувает героя Сарнаута и аромат цветов щекочет ноздри.<br />
						А буйная растительность скрывает, судя по звукам... Кхм, пожалуй, отойдём и не будем мешать...
					</p>
					<p>
						Тропический аллод, принадлежащий Дому ди Делис, полон множеством тайн и готов поделиться
						кое-какими из них. Ведь это место пропитано романтикой, гедонизмом и кулуарными
						историями. Неудивительно, что на минувший День всех влюблённых Антуанетта ди Делис
						решила воспользоваться поводом и собрать влиятельных лиц Сарнаута именно здесь. И герой
						Сарнаута тоже приглашён.
					</p>
					<p>
						Портал alloder.ru анонсирует небольшую игру в жанре визуальной новеллы. В ней вы сможете
						узнать чуть ближе некоторых, уже известных вам персонажей Сарнаута. Следите за
						новостями!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;