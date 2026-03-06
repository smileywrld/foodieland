function Sidebar({ recipes }) {
	return (
		<aside className="space-y-6">
			<h3 className="text-xl font-semibold">Tasty Recipes</h3>

			{recipes.slice(0, 3).map((recipe) => (
				<div key={recipe.id} className="flex gap-3">
					<img
						src={recipe.image}
						className="w-16 h-16 rounded-lg object-cover"
					/>

					<div>
						<p className="text-sm font-medium">{recipe.name}</p>

						<span className="text-xs text-gray-400">By Chef</span>
					</div>
				</div>
			))}

			<div className="bg-green-700 text-white p-6 rounded-2xl text-center mt-8 h-56">
                <h4 className="font-semibold">Don't forget to eat healthy food</h4>
                
			</div>
		</aside>
	);
}

export default Sidebar;
