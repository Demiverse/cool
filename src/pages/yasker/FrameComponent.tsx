import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import useSound from "hooks/useSound";
import backgroundSound from "./backgroundSound.mp3";
import { Link, useNavigate } from "react-router-dom";
import { isMobile } from "utils/utils";
import styles from "./FrameComponent.module.scss";
import { useScroll } from "../../hooks/useScroll";
import { Header } from "../../components/header/header";

const FrameComponent: FunctionComponent = () => {
	const navigate = useNavigate();
	const [muted, { toggleMuteBgSound }] = useSound(backgroundSound);

	const onArrowLeftHighlighted1ImageClick = useCallback(() => {
		navigate("/frame-280");
	}, [navigate]);

	const onArrowLeftNormal1ImageClick = useCallback(() => {
		navigate("/frame-282");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	const preloaderSrc = isMobile() ? '@2x-mob.png' : '@2x.webp';
	const logoSrc = isMobile() ? 'rectangle-22@2x-mob.png' : 'rectangle-22@2x-light.png';

	return (
		<div className={styles.f32Parent}>
			<div ref={ref} className={styles.f32Child}>
				<Header showMenu={false} />
				<img className={styles.background} src="/f-3-22@2x-cropped.webp" />
				<img className={styles.bgIcon} src="/bg@2x.webp" />
				<img className={styles.pageLogo} src={`/${logoSrc}`} />
				<img className={styles.divIcon} src="/div@2x.webp" />
				<div className={styles.character}>
					<div className={styles.creator}>Художник: UNGOODEST</div>
					<div className={styles.name}>Яскер</div>
					<p className={styles.about}>
						Яскер — вождь хадаганской нации, непоколебимый глава Империи и народный любимец. Его непреклонность
						и верность сравнима лишь с Великим Незебом, который положил начало государству и впоследствии
						оставил своего преемника, способного стать продолжателем его дела. Всё бы ничего, но Яскер, как и
						его предшественник, скрывает немало тайн, а одна из них напрямую связана с аллодом Игниста.
					</p>
					<div className={styles.goBack}>
						<img className={styles.icons} alt="" src="/icons4.svg" />
						<Link to="/frame-285">Назад к персонажам</Link>
					</div>
				</div>
				<div className={styles.preloader}>
					<img className={styles.ant} src={`/${preloaderSrc}`} />
				</div>
				<div className={styles.arrowlefthighlighted1Icon} onClick={onArrowLeftHighlighted1ImageClick} />
				<div className={styles.arrowleftnormal1Icon} onClick={onArrowLeftNormal1ImageClick} />
				<img className={styles.divIcon1} src="/div@2x.webp" />
				{isMobile() && <img className={styles.divIcon2} src="/div@2x.webp" />}
			</div>
		</div>
	);
};

export default FrameComponent;