import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Recipe from "./components/Recipe";
import "./App.css";

function App() {
	return (
		<main>
			<Navbar />
			<Hero />
			<Recipe />
		</main>
	);
}

export default App;
