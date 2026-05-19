import Link from "next/link";

const MobileNavbar = () => {
	const links = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Pillars of Growth", path: "/pillars" },
		{ name: "Sovereign Compendium", path: "/compendium" },
		{ name: "Blog", path: "/blogs" },
		{ name: "Protocol Intake", path: "/intake" }
	];

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<nav className="mean-nav">
						<ul>
							{links.map((link, idx) => (
								<li key={idx} className={idx === links.length - 1 ? "mean-last" : ""}>
									<Link href={link.path}>{link.name}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
