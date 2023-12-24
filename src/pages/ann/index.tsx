import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import useSound from "hooks/useSound";
import backgroundSound from "./backgroundSound.mp3";
import { isMobile } from "utils/utils";
import { useScroll } from "../../hooks/useScroll";
import { Header } from "../../components/header/header";
import MuteButton from "components/muteButton/MuteButton";
import { Border } from "shared/ui/border";
import styles from "../character.module.scss";

const Page: FunctionComponent = () => {
	const navigate = useNavigate();
	const [muted, { toggleMuteBgSound }] = useSound(backgroundSound);

	const onArrowLeftHighlighted1ImageClick = useCallback(() => {
		navigate("/frame-283");
	}, [navigate]);

	const onArrowLeftNormal1ImageClick = useCallback(() => {
		navigate("/frame-281");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	const prefix = '/characters/ann';
	const logoSrc = isMobile() ? 'rectangle-22@2x-mob.png' : 'rectangle-22@2x-light.png';
	
	return (
		<div className={styles.page}>
			<div ref={ref} className={styles.container}>
				<Header showMenu={false} />
				<MuteButton muted={muted} toggleMuteBgSound={toggleMuteBgSound} />
				<img className={styles.background} src="/f-3-22@2x-cropped.webp" />
				<img className={styles.bgIcon} src={`${prefix}/background.webp`} />
				<img className={styles.logo} src={`/${logoSrc}`} />
				<Border className={styles.topBorder}/>
				<div className={styles.character}>
					<div className={styles.creator}>Художник: Opium Witch</div>
					<div className={styles.name}>Антуанетта</div>
					<p className={styles.about}>
						Антуанетта — нынешняя королева эльфов, избранная посредством голосования на Великом Балу в 1020
						году. Элегантная, импозантная, раскованная последовательница гедонизма всегда рада новым
						знакомствам. Её познания дипломатического искусства действительно дают свои результаты, а уж для
						героя Сарнаута точно найдётся минутка, чтобы преподать самый важный урок в его жизни.
					</p>
					<div className={styles.goBack}>
						<img className={styles.icons} src="/icons4.svg" />
						<Link to="/frame-285">Назад к персонажам</Link>
					</div>
				</div>
				<div className={styles.avatar}>
					<img src={`${prefix}/own-page-avatar.png`} />
				</div>
				<div className={styles.prev} onClick={onArrowLeftHighlighted1ImageClick} />
				<div className={styles.next} onClick={onArrowLeftNormal1ImageClick} />
				<Border className={styles.bottomBorder}/>
				{ isMobile() && <Border className={styles.mobileBorder}/> }
			</div>
		</div>
	);
};

export default Page;
