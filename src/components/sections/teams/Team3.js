import TeamMarqueeSlider from "@/components/shared/marquee/TeamMarqueeSlider";
import Image from "next/image";


const Team3 = () => {
	return (
		<section className="h7-team section-gap section-gap-x">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 style-7 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Meet Our Team
							</span>
							<h2 className="sec-title text-anim">
								The People Empowering Business Level.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h7-team-wrapper">
							<TeamMarqueeSlider />
							<TeamMarqueeSlider isRtl={true} />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-3">
				<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src="/images/shape/h7-testimonial-shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Team3;
