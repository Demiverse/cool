import { useScrollContext } from "../components/scrollcontext";
import { useLayoutEffect } from "react";

export const useScroll = (ref: any | null) => {
	const { scroll, setScroll } = useScrollContext();
	useLayoutEffect(() => {
		const onScroll = () => {
			const scroll = ref.current?.scrollTop || 0;
			setScroll(scroll);
		};
		ref.current?.addEventListener("scroll", onScroll);
		return () => ref.current?.removeEventListener("scroll", onScroll);
	}, [ref.current]);
	return scroll;
};
