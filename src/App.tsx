import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Component from "./pages/main/Component";
import FrameComponent from "./pages/yasker/FrameComponent";
import FrameComponent1 from "./pages/ann/FrameComponent1";
import FrameComponent2 from "./pages/nayan/FrameComponent2";
import FrameComponent3 from "./pages/smeyana/FrameComponent3";
import CharactersPage from "./pages/characters";
import { useEffect } from "react";
import { ScrollProvider, WithScroll } from "./components/scrollcontext";

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
				<Route path="/" element={<Component />} />
				<Route path="/frame-283" element={<FrameComponent />} />
				<Route path="/frame-282" element={<FrameComponent1 />} />
				<Route path="/frame-281" element={<FrameComponent2 />} />
				<Route path="/frame-280" element={<FrameComponent3 />} />
				<Route path="/frame-285" element={<CharactersPage />} />
			</Routes>
		</WithScroll>
	);
}
export default App;
