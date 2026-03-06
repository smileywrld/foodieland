function Footer() {
	return (
		<footer className="mt-20 border-t pt-10 pb-6">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
				{/* Logo */}
				<h2 className="text-xl font-bold">Foodieland.</h2>

				{/* Links */}
				<nav className="flex gap-6 text-gray-600">
					<a href="#">Home</a>
					<a href="#">Recipes</a>
					<a href="#">Blog</a>
					<a href="#">Contact</a>
					<a href="#">About</a>
				</nav>
			</div>

			{/* copyright */}
			<p className="text-center text-gray-400 text-sm mt-6">
				© {new Date().getFullYear()} Foodieland. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
