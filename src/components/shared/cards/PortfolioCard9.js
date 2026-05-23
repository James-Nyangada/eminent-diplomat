import Link from "next/link";
import Image from "next/image";


const PortfolioCard9 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img3 = "/images/project/project-6.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item">
			<div className="project-img">
				<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={img3} alt="" />
			</div>
			<div className="project-content">
				<span className="categories">
					<Link href={`/portfolios/${id}`}>{category}</Link>
				</span>
				<div className="project-text">
					<h4 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h4>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard9;
