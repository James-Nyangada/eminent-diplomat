import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const About4 = () => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10 col-12">
						<div
							className="about-content-area wow fadeInUp"
							data-wow-delay=".3s"
							style={{ textAlign: "center", margin: "0 auto" }}
						>
							<div className="sec-heading style-4 text-center">
								<div className="subtitle-text" style={{ display: "flex", justifyContent: "center" }}>
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										The Macroeconomic Imperative
									</span>
								</div>
								<h2 className="sec-title title-highlight" style={{ fontSize: "2.8rem", marginBottom: "2rem" }}>
									Capital demands structural insulation.
								</h2>
								<p className="desc" style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#364e52", marginBottom: "1.5rem" }}>
									We de-risk sub-national assets, eliminate bureaucratic friction, and engineer secure economic corridors between regional executives and institutional investors.
								</p>
								<p className="desc" style={{ fontSize: "1.25rem", fontWeight: "600", color: "var(--tj-color-theme-primary)", textTransform: "uppercase", letterSpacing: "1px" }}>
									Execution operates strictly within these two vectors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default About4;
