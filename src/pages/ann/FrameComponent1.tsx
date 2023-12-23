import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import useSound from "hooks/useSound";
import backgroundSound from "./backgroundSound.mp3";
import { Link, useNavigate } from "react-router-dom";
import { isMobile } from "utils/utils";
import styles from "./FrameComponent1.module.scss";
import { useScroll } from "../../hooks/useScroll";
import { Header } from "../../components/header/header";
const FrameComponent1: FunctionComponent = () => {
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

	const logoSrc = isMobile() ? 'rectangle-22@2x-mob.png' : 'rectangle-22@2x-light.png';	
	return (
		<div className={styles.f32Parent}>
			<div ref={ref} className={styles.f32Child}>
				<Header showMenu={false} />
				<img className={styles.background} src="/f-3-22@2x-cropped.webp" />
				<img className={styles.bgIcon} src="/bg1@2x-light.webp" />
				<img className={styles.pageLogo} src={`/${logoSrc}`} />
				<img className={styles.divIcon} src="/div@2x.webp" />
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
						<img className={styles.icons} alt="" src="/icons4.svg" />
						<Link to="/frame-285">Назад к персонажам</Link>
					</div>
				</div>
				<div className={styles.preloader}>
					<img className={styles.ant} src="/1@2x.webp" />
				</div>
				<div className={styles.arrowlefthighlighted1Icon} onClick={onArrowLeftHighlighted1ImageClick} />
				<div className={styles.arrowleftnormal1Icon} onClick={onArrowLeftNormal1ImageClick} />
				<img className={styles.divIcon1} src="/div@2x.webp" />
				{isMobile() && <img className={styles.divIcon2} src="/div@2x.webp" />}
			</div>
		</div>
	);
};

export default FrameComponent1;
