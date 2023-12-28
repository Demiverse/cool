import { FunctionComponent, PropsWithChildren, createContext, useContext, useLayoutEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const scrollcontext = createContext({ scroll: 0, setScroll: (value: number) => {} });
export const ScrollProvider = scrollcontext.Provider;
export const useScrollContext = () => useContext(scrollcontext);
export const WithScroll: FunctionComponent<PropsWithChildren> = ({ children }) => {
	const [scroll, setScroll] = useState(0);
	const updateScroll = (value: number) => setScroll(value);
	const value = useMemo(() => ({ scroll, setScroll: updateScroll }), [scroll]);
	const location = useLocation();
	useLayoutEffect(() => {
		document.body.scrollTop = scroll;
	}, [location]);

	return <ScrollProvider value={value}>{children}</ScrollProvider>;
};
