function RecipeCard({ recipe }) {
	return (
		<div className="flex gap-6 border-b pb-6">
			<img
				src={recipe.image}
				className="w-40 h-28 object-cover rounded-xl"
			/>

			<div>
				<h3 className="font-semibold text-lg">{recipe.name}</h3>

				<p className="text-gray-500 text-sm mt-2">
					Delicious recipe that you can cook easily at home.
				</p>

				<div className="text-xs text-gray-400 mt-3">
					By Chef • {recipe.cuisine}
				</div>
			</div>
		</div>
	);
}

export default RecipeCard;
