import { useScrollContext } from "../components/scrollcontext";
import { useLayoutEffect } from "react";

function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const useScroll = (ref: any | null) => {
	const { scroll, setScroll } = useScrollContext();
	useLayoutEffect(() => {
		const onScroll = debounce(() => {
			const scroll = ref.current?.scrollTop || 0;
			setScroll(scroll);
		}, 120);

		ref.current?.addEventListener("scroll", onScroll);

		return () => {
			ref.current?.removeEventListener("scroll", onScroll);
		}
	}, [ref.current]);

	return scroll;
};
