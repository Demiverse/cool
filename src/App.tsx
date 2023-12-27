import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Main from "./pages/main";
import { default as Yasker } from "./pages/yasker";
import { default as Ann } from "./pages/ann";
import { default as Nayan } from "./pages/nayan";
import { default as Smeyana } from "./pages/smeyana";
import Characters from "./pages/characters";
import { WithScroll } from "./components/scrollcontext";
import { AudioProvider } from "./shared/providers/audio";

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
			case "/yasker":
				title = "";
				metaDescription = "";
				break;
			case "/ann":
				title = "";
				metaDescription = "";
				break;
			case "/nayan":
				title = "";
				metaDescription = "";
				break;
			case "/smeyana":
				title = "";
				metaDescription = "";
				break;
			case "/frame-284":
				title = "";
				metaDescription = "";
				break;
			case "/characters":
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
		<AudioProvider>
			<WithScroll>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/yasker" element={<Yasker />} />
					<Route path="/ann" element={<Ann />} />
					<Route path="/nayan" element={<Nayan />} />
					<Route path="/smeyana" element={<Smeyana />} />
					<Route path="/characters" element={<Characters />} />
				</Routes>
			</WithScroll>
		</AudioProvider>
	);
}
export default App;
