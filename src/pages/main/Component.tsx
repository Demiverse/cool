import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Component.module.scss";
import { Header } from "../../components/header/header";

const Component: FunctionComponent = () => {
	const navigate = useNavigate();

	const onImageClick = useCallback(() => {
		navigate("/frame-285");
	}, [navigate]);

	return (
		<div className={styles.page}>
			<img className={styles.background} alt="" src="/f-3-22@2x.png" />
			<Header />
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.preloader2}>
						<img className={styles.child} alt="" src="/rectangle-221@2x.png" />
					</div>
					<div className={styles.buttonbuylevelnormal2Parent}>
						<img className={styles.buttonbuylevelnormal2Icon} alt="" src="/buttonbuylevelnormal-2@2x.png" />
						<div className={styles.div7}>Играть</div>
					</div>
					<div className={styles.preloader}>
						<div className={styles.text}>
							<p>
								Жаркие дни пришли в Сарнаут — Игниста готова распахнуть свои двери! Тёплый ветерок
								обдувает героя Сарнаута и аромат цветов щекочет ноздри. А буйная растительность
								скрывает, судя по звукам... Кхм, пожалуй, отойдём и не будем мешать...
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
			</div>
			<img className={styles.ant} alt="" src="/--1@2x.png" />
		</div>
	);
};
export default Component;