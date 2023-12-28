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
		navigate("/yasker");
	}, [navigate]);

	const handleGoNextPage = useCallback(() => {
		navigate("/nayan");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	let prefix = '/characters/ann';
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
						<div className={styles.creator}>Художник: Opium Witch</div>
						<div className={styles.name}>Антуанетта</div>
						<p className={styles.text}>
							Антуанетта — нынешняя королева эльфов, избранная посредством голосования на Великом Балу в 1020
							году. Элегантная, импозантная, раскованная последовательница гедонизма всегда рада новым
							знакомствам. Её познания дипломатического искусства действительно дают свои результаты, а уж для
							героя Сарнаута точно найдётся минутка, чтобы преподать самый важный урок в его жизни.
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
