import React, { FunctionComponent, useCallback, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";
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

	return (
		<div className={styles.f32Parent}>
			<div ref={ref} className={styles.f32Child}>
				<img className={styles.background} alt="" src="/f-3-22@2x.png" />
				<img className={styles.bgIcon} alt="" src="/bg3@2x.jpg" />
				<img className={styles.divIcon} alt="" src="/div@2x.png" />
				<img className={styles.frameChild} alt="" src="/rectangle-22@2x.png" />
				<div className={styles.preloader}>
					<img className={styles.ant} alt="" src="/3@2x.png" />
				</div>
				<div className={styles.div6}>Смеяна</div>
				<div className={styles.div7}>
					Великая Волшебница Смеяна по праву считается одним из флагманов техномагического развития Сарнаута.
					Изобретения из её мастерских пользуются популярностью во всём мире. Даже лапотники из дальних
					канийских деревень слышали об этой женщине властных нравов. По слухам, Владычица имеет свои
					академии, где вход открыт лишь для канийских девиц. И она хотела бы распространять образование и
					дальше — чтобы искоренить невежество среди простого люда.
				</div>
				<div className={styles.div10}>Художник: Sandra Verenim</div>
				<div className={styles.div8}>
					<img className={styles.icons} alt="" src="/icons4.svg" />
					<div className={styles.div9}>
						<Link to="/frame-285">Назад к персонажам</Link>
					</div>
				</div>
				<img className={styles.divIcon1} alt="" src="/div@2x.png" />
				<div className={styles.arrowlefthighlighted1Icon} onClick={onArrowLeftHighlighted1ImageClick} />
				<div className={styles.arrowleftnormal1Icon} onClick={onArrowLeftNormal1ImageClick} />
				<Header showMenu={false} />
			</div>
		</div>
	);
};

export default FrameComponent3;