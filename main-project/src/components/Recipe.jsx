import { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import Sidebar from "./Sidebar";

function Recipe({ search }) {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		axios
			.get("https://dummyjson.com/recipes")
			.then((res) => setRecipes(res.data.recipes));
	}, []);

	// to be able to searche recipes
	const filteredRecipes = recipes.filter((recipe) =>
		recipe.name.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<section className="container mx-auto grid md:grid-cols-3 gap-10 px-6">
			{/* Recipes */}
			<div className="md:col-span-2 space-y-8">
				{filteredRecipes.map((recipe) => (
					<RecipeCard key={recipe.id} recipe={recipe} />
				))}
			</div>

			{/* Sidebar */}
			<Sidebar recipes={recipes} />
		</section>
	);
}

export default Recipe;
