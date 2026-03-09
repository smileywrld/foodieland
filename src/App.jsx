import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipe from "./components/Recipe";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-white">
				<div className="h-12 w-12 rounded-full border-4 border-gray-200 border-t-green-600 animate-spin" />
			</div>
		);
	}

	return (
		<>
			<Navbar />
			<Hero search={search} setSearch={setSearch} />
			<Recipe search={search} />
			<Newsletter />
			<Footer />
		</>
	);
}

export default App;
