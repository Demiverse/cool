import React, { FunctionComponent, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";
import { useScrollContext } from "../../components/scrollcontext";
import { useScroll } from "../../hooks/useScroll";
import { Header } from "../../components/header/header";
import style from "../../components/button/style.module.css";
import { clsx } from "../../utils/utils";

const FrameComponent: FunctionComponent = () => {
	const navigate = useNavigate();

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
	return (
		<div className={styles.f32Parent}>
			<div ref={ref} className={styles.f32Child}>
				<img className={styles.background} alt="" src="/f-3-22@2x.png" />
				<img className={styles.bgIcon} alt="" src="/bg@2x.jpg" />
				<img className={styles.divIcon} alt="" src="/div@2x.png" />
				<img className={styles.frameChild} alt="" src="/rectangle-22@2x.png" />
				<div className={styles.preloader}>
					<img className={styles.ant} alt="" src="/@2x.png" />
				</div>
				<div className={styles.div6}>Яскер</div>
				<div className={styles.div7}>
					Яскер — вождь хадаганской нации, непоколебимый глава Империи и народный любимец. Его непреклонность
					и верность сравнима лишь с Великим Незебом, который положил начало государству и впоследствии
					оставил своего преемника, способного стать продолжателем его дела. Всё бы ничего, но Яскер, как и
					его предшественник, скрывает немало тайн, а одна из них напрямую связана с аллодом Игниста.
				</div>
				<div className={styles.div8}>Художник: UNGOODEST</div>
				<img className={styles.divIcon1} alt="" src="/div@2x.png" />
				<div className={styles.arrowlefthighlighted1Icon} onClick={onArrowLeftHighlighted1ImageClick} />
				<div className={styles.arrowleftnormal1Icon} onClick={onArrowLeftNormal1ImageClick} />
				<div className={styles.div9}>
					<img className={styles.icons} alt="" src="/icons4.svg" />
					<div className={styles.div10}>
						<Link to="/frame-285">Назад к персонажам</Link>
					</div>
				</div>
				<Header showMenu={false} />
			</div>
		</div>
	);
};

export default FrameComponent;
