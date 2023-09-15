import React, { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

const scrollcontext = createContext({ scroll: 0, setScroll: (value: number) => {} });
export const ScrollProvider = scrollcontext.Provider;
export const useScrollContext = () => useContext(scrollcontext);
export const WithScroll: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [scroll, setScroll] = useState(0);
	const updateScroll = (value: number) => setScroll(value);
	const value = useMemo(() => ({ scroll, setScroll: updateScroll }), [scroll]);
	const location = useLocation();
	useLayoutEffect(() => {
		document.body.scrollTop = scroll;
	}, [location]);

	return <ScrollProvider value={value}>{children}</ScrollProvider>;
};
