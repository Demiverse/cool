import React, { useCallback, useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useScroll } from "hooks/useScroll";
import { Header } from "components/header/header";
import { Border } from "shared/ui/border";
import { clsx } from "utils/utils";

const CharactersPage: React.FC = () => {
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
		<div className={styles.page}>
			<img className={styles.pageBackground} alt="" src="/f-3-22@2x.png" />
			<Header />
			<div className={styles.content}>
				<img className={styles.containerBackground} alt="" src="/bg4@2x.png" />
				<Border className={clsx(styles.border, styles.top)} />
				<div className={styles.carousel} data-variant={"v2"}>
					<Slide link={"/6@2x.png"} onClick={onImage2Click} className={styles.nayan} />
					<Slide link={"/7@2x.png"} onClick={onImage3Click} className={styles.smeyana} />
					<Slide link={"/4@2x.png"} onClick={onImageClick} className={styles.ant} />
					<Slide link={"/5@2x.png"} onClick={onImage1Click} className={styles.yasker} />
				</div>
				<Border className={clsx(styles.border, styles.bottom)} />
			</div>
		</div>
	);
};

const Slide = ({ link, className, onClick }: { className?: string; link: string; onClick: () => void }) => (
	<div className={clsx(styles.slide, className)} onClick={onClick}>
		<img alt="" src={link} />
	</div>
);

const PlayButton = () => (
	<div className={styles.buttonContainer}>
		<img className={styles.buttonImage} alt="" src="/buttonbuylevelnormal-2@2x.png" />
		<div className={styles.buttonText}>Играть</div>
	</div>
);

export default CharactersPage;
