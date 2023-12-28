import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSound from "hooks/useSound";
import backgroundSound from "./backgroundSound.mp3";
import { isMobile } from "utils/utils";
import { useScroll } from "../../hooks/useScroll";
import { Navigation } from "components/navigation/navigation";
import MuteButton from "components/muteButton/MuteButton";
import { Border } from "shared/ui/border";
import { clsx } from "utils/utils";
import styles from "../character.module.scss";

const Page: FunctionComponent = () => {
	const navigate = useNavigate();
	const [muted, { toggleMuteBgSound }] = useSound(backgroundSound);

	const handleGoPrevPage = useCallback(() => {
		navigate("/smeyana");
	}, [navigate]);

	const handleGoNextPage = useCallback(() => {
		navigate("/ann");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	let prefix = '/characters/yasker';
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
						<div className={styles.creator}>Художник: UNGOODEST</div>
						<div className={styles.name}>Яскер</div>
						<p className={styles.text}>
							Яскер — вождь хадаганской нации, непоколебимый глава Империи и народный любимец. Его непреклонность и целеустремлённость сравнима лишь с Великим Незебом, который положил начало государству и впоследствии оставил своего преемника, способного стать продолжателем его дела. Идеал лидера! Но Яскер, как и его предшественник, скрывает немало тайн, а одна из них напрямую связана с аллодом Игниста.
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