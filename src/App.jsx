import { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Recipe from "./components/Recipe";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	const [search, setSearch] = useState("");

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
