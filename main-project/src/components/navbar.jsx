const Navbar = () => {
	return (
		<nav className="bg-white shadow shadow-gray-300 w-full px-8 md:px-auto sticky top-0">
			<div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
				<div className="md:order-1">
					<h1 className="text-2xl font-bold italic">FoodieLand</h1>
				</div>
				<div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
					<ul className="flex font-semibold justify-between">
						<li className="md:px-4 md:py-2">
							<a href="#">Home</a>
						</li>
						<li className="md:px-4 md:py-2 ">
							<a href="#">Recipe</a>
						</li>
						<li className="md:px-4 md:py-2 ">
							<a href="#">Blog</a>
						</li>
						<li className="md:px-4 md:py-2 ">
							<a href="#">About us</a>
						</li>
						<li className="md:px-4 md:py-2 ">
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
				<div className="order-2 md:order-3 flex gap-4 text-2xl">
					<a href="#" className="hover:text-blue-600">
						<ion-icon name="logo-facebook"></ion-icon>
					</a>

					<a href="#" className="hover:text-black">
						<ion-icon name="logo-twitter"></ion-icon>
					</a>

					<a href="#" className="hover:text-pink-600">
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
