"use client";

import getBrands from "@/libs/getBrands";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


const BrandSlider2 = ({ type }) => {
	const brands = getBrands();
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={0}
			freeMode={true}
			centeredSlides={true}
			loop={true}
			speed={5000}
			allowTouchMove={false}
			autoplay={{
				delay: 1,
				disableOnInteraction: false,
			}}
			className={`client-slider client-slider-2 ${
				type === 2 ? "h6-client-slider" : ""
			}`}
			modules={[Autoplay]}
		>
			{brands?.length
				? brands?.map(({ img2 = "/images/brands/brand-1-light.webp" }, idx) => (
						<SwiperSlide key={idx} className="client-item">
							<div className="client-logo">
								<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={img2} alt="Brand" />
							</div>
						</SwiperSlide>
				  ))
				: ""}
		</Swiper>
	);
};

export default BrandSlider2;
