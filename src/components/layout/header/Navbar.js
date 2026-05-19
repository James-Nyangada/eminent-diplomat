import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const links = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Pillars of Growth", path: "/pillars" },
		{ name: "Sovereign Compendium", path: "/compendium" },
		{ name: "Blog", path: "/blogs" },
		{ name: "Protocol Intake", path: "/intake" }
	];

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center ms-auto" style={{ marginRight: "40px" }}>
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{links.map((link, idx) => (
						<li key={idx}>
							<Link href={link.path}>{link.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
