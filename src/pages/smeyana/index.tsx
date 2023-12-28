import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSound from "hooks/useSound";
import backgroundSound from "./backgroundSound.mp3";
import { isMobile } from "utils/utils";
import { useScroll } from "../../hooks/useScroll";
import { Navigation } from "../../components/navigation/navigation";
import MuteButton from "components/muteButton/MuteButton";
import { Border } from "shared/ui/border";
import { clsx } from "utils/utils";
import styles from "../character.module.scss";

const Page: FunctionComponent = () => {
	const navigate = useNavigate();
	const [muted, { toggleMuteBgSound }] = useSound(backgroundSound);

	const handleGoPrevPage = useCallback(() => {
		navigate("/nayan");
	}, [navigate]);

	const handleGoNextPage = useCallback(() => {
		navigate("/yasker");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	let prefix = '/characters/smeyana';
	let backgroundPath = `/background${isMobile() ? '-mob' : ''}.webp`;
	let logoPath = `/logo${isMobile() ? '-mob' : ''}.webp`;

	return (
		<div className={styles.page}>
			<div ref={ref} className={styles.container}>
				<header className={styles.header}>
					<Navigation showMenu={false} />
					<img className={styles.logo} src={`${logoPath}`} />
				</header>
				<Border className={styles.topBorder} />
				<main className={styles.character}>
					<img
						className={styles.background}
						src={`${prefix}${backgroundPath}`}
					/>
					<div className={styles.about}>
						<div className={styles.creator}>Художник: Sandra Verenim</div>
						<div className={styles.name}>Смеяна</div>
						<p className={styles.text}>
							Великая Волшебница Смеяна по праву считается одним из флагманов техномагического развития Сарнаута.
							Изобретения из её мастерских пользуются популярностью во всём мире.<br/>Даже лапотники из дальних
							канийских деревень слышали об этой женщине властных нравов.<br />По слухам, Владычица имеет свои
							академии, где вход открыт лишь для канийских девиц. И она хотела бы распространять образование и
							дальше — чтобы искоренить невежество среди простого люда.
						</p>
						<div className={styles.goBack}>
							<img src="/icons4.svg" />
							<Link to="/characters">Назад к персонажам</Link>
						</div>
					</div>
					<div className={styles.avatar}>
						<div className={clsx(styles.goPrev, styles.arrow)} onClick={handleGoPrevPage} />
						<div className={styles.image}>
							<img loading="eager" src={`${prefix}/own-page-avatar.png`} />
						</div>
						<div className={clsx(styles.goNext, styles.arrow)} onClick={handleGoNextPage} />
					</div>
					{ isMobile() && <Border className={styles.middleBorder}/> }
				</main>
				<Border className={styles.bottomBorder} />
				<MuteButton muted={muted} toggleMuteBgSound={toggleMuteBgSound} />
			</div>
		</div>
	);
};

export default Page;
