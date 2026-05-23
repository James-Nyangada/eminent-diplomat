import Link from "next/link";
import Image from "next/image";


const CtaSidebar = () => {
	return (
		<div className="feature-box">
			<div className="feature-content">
				<h2 className="title">Modern</h2>
				<span>Home Makeover</span>
				<Link className="read-more feature-contact" href="tel:8321890640">
					<i className="tji-phone-3"></i>
					<span>+8 (321) 890-640</span>
				</Link>
			</div>
			<div className="feature-images">
				<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src="/images/service/service-ad.webp" alt="" />
			</div>
		</div>
	);
};

export default CtaSidebar;
