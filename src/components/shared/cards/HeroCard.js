import Link from "next/link";
import PopupVideo from "../popup-video/PopupVideo";
import Image from "next/image";


const HeroCard = ({ item, idx }) => {
	const {
		id,
		title,
		img = "/images/hero/h6-hero-cart-1.webp",
		videoUrl = "https://youtu.be/gXFATcwrO-U",
	} = item || {};

	return (
		<div className="h6-hero-card">
			<div className="h6-hero-card-banner">
				<Image priority width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}  src={img} alt="" />
				<PopupVideo>
					<Link
						className="h6-hero-card-video video-popup glightbox"
						href={videoUrl}
						data-autoplay="true"
						data-vbtype="video"
					>
						<i className="tji-play"></i>
					</Link>
				</PopupVideo>
			</div>
			<div className="h6-hero-card-content">
				<h5 className="h6-hero-card-title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h5>
			</div>
		</div>
	);
};

export default HeroCard;
