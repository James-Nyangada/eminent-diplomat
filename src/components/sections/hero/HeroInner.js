"use client";
import sliceText from "@/libs/sliceText";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const innerImages = [
	"/images/bg/gen_inner_1.png",
	"/images/bg/gen_inner_2.png",
	"/images/bg/gen_inner_3.png"
];

const HeroInner = ({ title, text, breadcrums = [] }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % innerImages.length);
		}, 7000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			className="tj-page-header section-gap-x"
			style={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}
		>
			{innerImages.map((src, index) => (
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
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1 className={`tj-page-title`}>{title}</h1>
						</div>
					</div>
				</div>
			</div>
			<div
				className="page-header-overlay"
				style={{ backgroundImage: `url('/images/shape/pheader-overlay.webp')`, zIndex: -1 }}
			></div>
		</section>
	);
};

export default HeroInner;
