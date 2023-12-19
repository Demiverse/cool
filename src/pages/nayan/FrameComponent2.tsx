import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isMobile } from "utils/utils";
import styles from "./FrameComponent2.module.scss";
import { useScroll } from "../../hooks/useScroll";
import { Header } from "../../components/header/header";
const FrameComponent2: FunctionComponent = () => {
	const navigate = useNavigate();

	const onArrowLeftHighlighted1ImageClick = useCallback(() => {
		navigate("/frame-282");
	}, [navigate]);

	const onArrowLeftNormal1ImageClick = useCallback(() => {
		navigate("/frame-280");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	const preloaderSrc = isMobile() ? '2@2x-mob.png' : '2@2x.png';
	const logoSrc = isMobile() ? 'rectangle-22@2x-mob.png' : 'rectangle-22@2x.png';
	
	return (
		<div className={styles.f32Parent}>
			<div ref={ref} className={styles.f32Child}>
				<Header showMenu={false} />
				<img className={styles.background} alt="" src="/f-3-22@2x.png" />
				<img className={styles.bgIcon} alt="" src="/bg2@2x.jpg" />
				<img className={styles.pageLogo} alt="" src={`/${logoSrc}`} />
				<img className={styles.divIcon} alt="" src="/div@2x.png" />
				<div className={styles.character}>
					<div className={styles.creator}>Художник: аNон</div>
					<div className={styles.name}>Найан</div>
					<p className={styles.about}>
						Эрудированный историк, обладатель древнейших артефактов, наследник королевского рода и один из самых
						долгоживущих эльфов. Имя ему — Найан ди Дернье. Лишь немногие в Сарнауте могут посоревноваться с его
						кладезем знаний.<br/>Он был свидетелем разрушительного Катаклизма, наблюдал за основанием целых
						государств и повстречал множество людей, сыгравших важную роль в истории Сарнаута. Но кто-то сыграл
						важную роль именно в его жизни, оставив глубокий отпечаток в душе.
					</p>
					<div className={styles.goBack}>
						<img className={styles.icons} alt="" src="/icons4.svg" />
						<Link to="/frame-285">Назад к персонажам</Link>
					</div>
				</div>
				<div className={styles.preloader}>
					<img className={styles.ant} alt="" src={`/${preloaderSrc}`} />
				</div>
				<div className={styles.arrowlefthighlighted1Icon} onClick={onArrowLeftHighlighted1ImageClick} />
				<div className={styles.arrowleftnormal1Icon} onClick={onArrowLeftNormal1ImageClick} />
				<img className={styles.divIcon1} alt="" src="/div@2x.png" />
				{isMobile() && <img className={styles.divIcon2} alt="" src="/div@2x.png" />}
			</div>
		</div>
	);
};

export default FrameComponent2;
