// import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Recipe from "./components/Recipe";
import Newsletter from "./components/Newsletter";
import "./App.css";

function App() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Recipe />
			<Newsletter />
		</main>
	);
}

export default App;
