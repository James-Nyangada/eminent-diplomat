"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroImages = [
	"/images/hero/gen_home_1.png",
	"/images/hero/gen_home_2.png",
	"/images/hero/gen_home_3.png"
];

const Hero4 = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="h4-banner-section section-gap-x">
			<div className="h4-banner-area">
				<div className="h4-banner-content">
					<span className="sub-title wow fadeInUp" data-wow-delay=".2s">
						EMINENT DIPLOMATS CO. LTD.
					</span>
					<h1 className="banner-title text-anim" style={{ textTransform: "uppercase" }}>
						THE CRUCIBLE OF GLOBAL CAPITAL
					</h1>
					<div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
						<ButtonPrimary text={"Institutional Execution"} url={"/contact"} />
						<div className="banner-desc" style={{ fontSize: "1.05rem", textTransform: "uppercase", fontWeight: "600", letterSpacing: "0.5px", lineHeight: "1.6" }}>
							THE GEOPOLITICAL BRIDGE FOR SOVEREIGN CAPITAL | ABSOLUTE INSTITUTIONAL EXECUTION
						</div>
					</div>
				</div>
				<div className="banner-img-area">
					<div className="banner-img" style={{ position: "relative" }}>
						{heroImages.map((src, index) => (
							<Image
								key={src}
								data-speed="0.8"
								src={src}
								alt=""
								width={1479}
								height={648}
								style={{
									opacity: index === currentImageIndex ? 1 : 0,
									transition: "opacity 1s ease-in-out",
									position: index === 0 ? "relative" : "absolute",
									top: 0,
									left: 0
								}}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Hero4;
