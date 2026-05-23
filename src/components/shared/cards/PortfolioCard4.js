import Link from "next/link";
import Image from "next/image";


const PortfolioCard4 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img4 = "/images/project/project-4.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item h4-project-item">
			<div className="project-content">
				<span className="categories">
					<Link href={`/portfolios/${id}`}>{category}</Link>
				</span>
				<div className="project-text">
					<h4 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h4>
					<Link className="tji-icon-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right-long"></i>
					</Link>
				</div>
			</div>
			<div className="project-img">
				<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={img4} alt="Image" />
			</div>
		</div>
	);
};

export default PortfolioCard4;
