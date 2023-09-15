import React, { FunctionComponent, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./FrameComponent5.module.css";
import { useScroll } from "../../hooks/useScroll";
import { Header } from "../../components/header/header";

// fixme: абсолюты,топ,лефт,сделать декор плашки дивами (background-repeat: X)
const FrameComponent5: FunctionComponent = () => {
	const navigate = useNavigate();

	const onImageClick = useCallback(() => {
		navigate("/frame-282");
	}, [navigate]);

	const onImage1Click = useCallback(() => {
		navigate("/frame-283");
	}, [navigate]);

	const onImage2Click = useCallback(() => {
		navigate("/frame-281");
	}, [navigate]);

	const onImage3Click = useCallback(() => {
		navigate("/frame-280");
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
				<Header />
				<div className={styles.preloader}>
					<img className={styles.bgIcon} alt="" src="/bg4@2x.png" />
					<img className={styles.ant} alt="" src="/4@2x.png" onClick={onImageClick} />
					<img className={styles.icon1} alt="" src="/5@2x.png" onClick={onImage1Click} />
					<img className={styles.icon2} alt="" src="/6@2x.png" onClick={onImage2Click} />
					<img className={styles.icon3} alt="" src="/7@2x.png" onClick={onImage3Click} />
					<img className={styles.divIcon} alt="" src="/div@2x.png" />
					<img className={styles.divIcon1} alt="" src="/div@2x.png" />
					<div className={styles.frameChild} />
					<div className={styles.buttonbuylevelnormal2Parent}>
						<img className={styles.buttonbuylevelnormal2Icon} alt="" src="/buttonbuylevelnormal-2@2x.png" />
						<div className={styles.div6}>Играть</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default FrameComponent5;
