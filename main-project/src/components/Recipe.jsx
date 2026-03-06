import RecipeCard from "./RecipeCard";

const Recipe = () => {
	return (
		<div>
			<section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
				<div className="md:col-span-2 space-y-8">
					<RecipeCard />
					<RecipeCard />
					<RecipeCard />
				</div>

				<aside></aside>
			</section>
		</div>
	);
};

export default Recipe;
