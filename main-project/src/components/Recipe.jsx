import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import Sidebar from "./Sidebar";

function Recipe() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios.get("https://dummyjson.com/recipes?limit=9").then((res) => {
			setRecipes(res.data.recipes);
		});
	}, []);

	return (
		<section className="container mx-auto grid md:grid-cols-3 gap-10 px-6">
			{/* Recipes */}
			<div className="md:col-span-2 space-y-8">
				{recipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</div>

			{/* Sidebar */}
			<Sidebar recipes={recipes} />
		</section>
	);
}

export default Recipe;
