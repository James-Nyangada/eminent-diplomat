"use client";
import getFooterMarqueeItems from "@/libs/getFooterMarqueeItems";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";


const MarqueeSlider1 = () => {
	const items = getFooterMarqueeItems();
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={0}
			freeMode={true}
			centeredSlides={true}
			loop={true}
			speed={7000}
			allowTouchMove={false}
			autoplay={{
				delay: 0,
				disableOnInteraction: false,
			}}
			className="marquee-slider"
			modules={[Autoplay]}
		>
			{items?.length
				? items?.map(
						({ img = "/images/marquee/marquee-1.webp", title }, idx) => (
							<SwiperSlide key={idx} className="marquee-item">
								<h4 className="marquee-text">{title}</h4>
								<div className="marquee-img">
									<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={img} alt="" />
								</div>
							</SwiperSlide>
						)
				  )
				: ""}
		</Swiper>
	);
};

export default MarqueeSlider1;
