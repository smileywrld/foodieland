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

				<div className="text-xs text-gray-400 mt-3 flex justify-start items-center gap-2">
					<img
						src={recipe.image}
						className="w-10 h-10 object-cover rounded-full"
					/>
					<h4>By Chef </h4>{" "}
					<p>
						{new Date().toLocaleString("en-US", { weekday: "long" })},{" "}
						{new Date().toLocaleString("en-US", { month: "long" })}{" "}
						{new Date().getDate()}, {new Date().getFullYear()}
					</p>
				</div>
			</div>
		</div>
	);
}

export default RecipeCard;
