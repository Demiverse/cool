import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Main from "./pages/main/Main";
import { default as Yasker } from "./pages/yasker";
import { default as Ann } from "./pages/ann";
import { default as Nayan } from "./pages/nayan";
import { default as Smeyana } from "./pages/smeyana";
import CharactersPage from "./pages/characters";
import { WithScroll } from "./components/scrollcontext";

function App() {
	const action = useNavigationType();
	const location = useLocation();
	const pathname = location.pathname;

	useEffect(() => {
		if (action !== "POP") {
			window.scrollTo(0, 0);
		}
	}, [action, pathname]);

	useEffect(() => {
		let title = "";
		let metaDescription = "";

		switch (pathname) {
			case "/":
				title = "";
				metaDescription = "";
				break;
			case "/frame-283":
				title = "";
				metaDescription = "";
				break;
			case "/frame-282":
				title = "";
				metaDescription = "";
				break;
			case "/frame-281":
				title = "";
				metaDescription = "";
				break;
			case "/frame-280":
				title = "";
				metaDescription = "";
				break;
			case "/frame-284":
				title = "";
				metaDescription = "";
				break;
			case "/frame-285":
				title = "";
				metaDescription = "";
				break;
		}

		if (title) {
			document.title = title;
		}

		if (metaDescription) {
			const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
				'head > meta[name="description"]'
			);
			if (metaDescriptionTag) {
				metaDescriptionTag.content = metaDescription;
			}
		}
	}, [pathname]);

	return (
		<WithScroll>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/frame-283" element={<Yasker />} />
				<Route path="/frame-282" element={<Ann />} />
				<Route path="/frame-281" element={<Nayan />} />
				<Route path="/frame-280" element={<Smeyana />} />
				<Route path="/frame-285" element={<CharactersPage />} />
			</Routes>
		</WithScroll>
	);
}
export default App;
