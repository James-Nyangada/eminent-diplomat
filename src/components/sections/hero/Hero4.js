"use client";
import Link from "next/link";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import Image from "next/image";



const heroImages = [
	"/images/operations/headquarters.png",
	"/images/hero/gen_home_2.webp",
	"/images/hero/gen_home_3.webp"
];

const Hero4 = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	ReactDOM.preload("/images/operations/headquarters.png", { as: "image", fetchPriority: "high" });

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
		}, 7000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="h4-banner-section section-gap-x hero-section" style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
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

			<div className="h4-banner-area container" style={{ position: 'relative', zIndex: 2, paddingTop: '150px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
				
				

				<div className="h4-banner-content text-center" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<h1 className="banner-title text-anim" style={{ textTransform: "uppercase", color: '#fff', fontSize: 'clamp(3.1rem, 8vw, 6.5rem)', fontWeight: '900', lineHeight: '1.1', marginBottom: '20px', letterSpacing: '3px' }}>
						EMINENT DIPLOMATS
					</h1>
					<h2 className="wow fadeInUp" data-wow-delay=".4s" style={{ textTransform: "uppercase", color: '#5b92e5', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '28px', letterSpacing: '1px' }}>
						THE CRUCIBLE OF GLOBAL CAPITAL
					</h2>
					<div className="wow fadeInUp" data-wow-delay=".5s" style={{ fontSize: "1.1rem", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1.2px", lineHeight: "1.7", color: 'rgba(255,255,255,0.82)', textAlign: 'center' }}>
						THE GEOPOLITICAL BRIDGE FOR SOVEREIGN CAPITAL
						<br />
						ABSOLUTE INSTITUTIONAL EXECUTION
					</div>
				</div>

				<div className="wow fadeInUp" data-wow-delay=".7s" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
					<Link href="/intake" className="tj-primary-btn btn-no-icon">
						<span className="btn-text"><span>Institutional Execution</span></span>
					</Link>
				</div>
			</div>
			<div className="bg-shape-1">
				<Image priority width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}  src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<Image priority width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}  src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Hero4;
