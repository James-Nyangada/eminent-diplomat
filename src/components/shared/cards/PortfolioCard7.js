import Link from "next/link";
import Image from "next/image";


const PortfolioCard7 = ({ portfolio, idx }) => {
	const {
		title = "Event Management Platform",
		img7 = "/images/project/project-4.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item h4-project-item tj-sticky-panel">
			<div className="project-img">
				<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={img7} alt="Image" />
			</div>
			<div className="project-content">
				<div className="project-text">
					<div>
						<h3 className="title">
							<Link href={`/portfolios/${id}`}>{title}</Link>
						</h3>
						<span className="categories">
							<Link href={`/portfolios/${id}`}>{category}</Link>
						</span>
					</div>
					<Link className="tji-icon-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right-long"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard7;
