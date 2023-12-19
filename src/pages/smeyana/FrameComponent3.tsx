import { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isMobile } from "utils/utils";
import styles from "./FrameComponent3.module.scss";
import { useScroll } from "../../hooks/useScroll";
import { Header } from "../../components/header/header";
const FrameComponent3: FunctionComponent = () => {
	const navigate = useNavigate();

	const onArrowLeftHighlighted1ImageClick = useCallback(() => {
		navigate("/frame-281");
	}, [navigate]);

	const onArrowLeftNormal1ImageClick = useCallback(() => {
		navigate("/frame-283");
	}, [navigate]);

	const ref = useRef<HTMLDivElement>(null);
	const scroll = useScroll(ref);
	useLayoutEffect(() => {
		if (ref.current) ref.current.scrollTop = scroll;
	}, []);

	const preloaderSrc = isMobile() ? '3@2x-mob.png' : '3@2x.png';

	return (
		<div className={styles.f32Parent}>
			<div ref={ref} className={styles.f32Child}>
				<Header showMenu={false} />
				<img className={styles.background} alt="" src="/f-3-22@2x.png" />
				<img className={styles.bgIcon} alt="" src="/bg3@2x.jpg" />
				<img className={styles.pageLogo} alt="" src="/rectangle-22@2x.png" />
				<img className={styles.divIcon} alt="" src="/div@2x.png" />
				<div className={styles.character}>
					<div className={styles.creator}>Художник: Sandra Verenim</div>
					<div className={styles.name}>Смеяна</div>
					<p className={styles.about}>
						Великая Волшебница Смеяна по праву считается одним из флагманов техномагического развития Сарнаута.
						Изобретения из её мастерских пользуются популярностью во всём мире.<br/>Даже лапотники из дальних
						канийских деревень слышали об этой женщине властных нравов.<br />По слухам, Владычица имеет свои
						академии, где вход открыт лишь для канийских девиц. И она хотела бы распространять образование и
						дальше — чтобы искоренить невежество среди простого люда.
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

export default FrameComponent3;
