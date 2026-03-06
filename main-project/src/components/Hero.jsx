const Hero = () => {
	return (
		<div className="container w-full px-5 py-4 flex flex-col gap-9 items-center justify-center h-full">
			<div className="container w- px-5 py-4 flex flex-col gap-9 items-center justify-center ">
				<h2 className="text-5xl text-center  font-bold">Blog & Article</h2>
				<p className="text-center text-2xl">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
					velit, deserunt, tenetur quas at voluptatibus nisi aperiam sunt
					facere beatae ullam alias praesentium vero vel, repellat impedit
					animi quo earum.
				</p>

				<div className="border pl-5  rounded-2xl border-gray-400">
					<input
						type="text"
						placeholder="search article, news or recipe"
						className="w-80"
					/>
					<button className="bg-black text-white border p-5 rounded-2xl w-40 m-2">
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
