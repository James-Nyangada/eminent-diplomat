"use client";
import Link from "next/link";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";


const heroImages = [
	"/images/hero/gen_home_1.webp",
	"/images/hero/gen_home_2.webp",
	"/images/hero/gen_home_3.webp"
];

const Hero4 = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	ReactDOM.preload("/images/hero/gen_home_1.webp", { as: "image", fetchPriority: "high" });

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
		}, 7000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="h4-banner-section section-gap-x" style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
			{heroImages.map((src, index) => (
				<div 
					key={src}
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundImage: `url('${src}')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						opacity: index === currentImageIndex ? 1 : 0,
						transition: 'opacity 3s ease-in-out',
						zIndex: -2
					}}
				/>
			))}
			<div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: -1 }}></div>

			<div className="h4-banner-area container" style={{ position: 'relative', zIndex: 2, padding: '150px 0', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<div className="h4-banner-content text-center" style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<span className="sub-title wow fadeInUp" data-wow-delay=".2s" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '5px 18px', borderRadius: '30px', marginBottom: '28px', fontSize: '0.9rem', letterSpacing: '2px' }}>
						EMINENT DIPLOMATS
					</span>
					<h1 className="banner-title text-anim" style={{ textTransform: "uppercase", color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '28px' }}>
						THE CRUCIBLE OF GLOBAL CAPITAL
					</h1>
					<div className="wow fadeInUp" data-wow-delay=".5s" style={{ fontSize: "1rem", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1.2px", lineHeight: "1.7", color: 'rgba(255,255,255,0.82)', marginBottom: '45px', textAlign: 'center' }}>
						THE GEOPOLITICAL BRIDGE FOR SOVEREIGN CAPITAL
						<br />
						ABSOLUTE INSTITUTIONAL EXECUTION
					</div>
					<div className="wow fadeInUp" data-wow-delay=".7s">
						<Link href="/contact" className="tj-primary-btn btn-no-icon">
							<span className="btn-text"><span>Institutional Execution</span></span>
						</Link>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img loading="lazy" src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img loading="lazy" src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Hero4;
