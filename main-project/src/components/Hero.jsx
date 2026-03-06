function Hero({ search, setSearch }) {
	return (
		<section className="text-center py-12 flex flex-col justify-center items-center">
			<h1 className="text-6xl font-bold">Blog & Article</h1>

			<p className="text-gray-500 mt-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
				minima quae expedita aliquam. Fuga odio adipisci dolorem eum,
				tenetur consequatur molestias voluptatem nihil, neque placeat
				recusandae modi, libero esse atque!
			</p>

			<div className="flex justify-center mt-6 gap-3 border rounded w-fit pr-1 py-1">
				<input
					type="text"
					placeholder="Search recipe..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="px-4 py-2 rounded-md"
				/>

				<button className="bg-black text-white px-6 py-2 rounded">
					Search
				</button>
			</div>
		</section>
	);
}

export default Hero;
