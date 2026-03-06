// import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Recipe from "./components/Recipe";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Recipe />
			<Newsletter />
			<Footer />
		</main>
	);
}

export default App;
