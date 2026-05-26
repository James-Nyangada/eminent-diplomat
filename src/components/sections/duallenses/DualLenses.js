"use client";

import Image from "next/image";

const DualLenses = () => {
	return (
		<section id="dual-lenses" className="tj-service-section-5 section-gap section-gap-x" style={{ background: "var(--tj-color-theme-bg)", borderRadius: "12px", margin: "30px 15px", padding: "var(--section-padding-y) 0" }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-4 text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
								Split Section
							</span>
							<h2 className="sec-title title-anim" style={{ fontSize: "3rem", fontWeight: "700" }}>
								Dual Lenses
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{/* Reword to The Executive Mandate. */}
					<div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".4s">
						<div className="lens-card" style={{
							background: "var(--tj-color-common-white)",
							
							borderRadius: "16px",
							padding: "var(--card-padding)",
							height: "100%",
							boxShadow: "0 10px 30px rgba(91, 146, 229, 0.08)",
							transition: "all 0.4s ease-in-out"
						}}>
							<span style={{
								display: "inline-block",
								background: "rgba(91, 146, 229, 0.1)",
								color: "#5b92e5",
								padding: "6px 16px",
								borderRadius: "30px",
								fontSize: "0.85rem",
								fontWeight: "700",
								textTransform: "uppercase",
								letterSpacing: "1px",
								marginBottom: "25px"
							}}>
								Sovereignty Vector
							</span>
							<h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "25px", color: "var(--tj-color-heading-primary)" }}>
								Reward to The Executive Mandate.
							</h3>
							<div className="lens-image mb-4" style={{ borderRadius: "12px", overflow: "hidden" }}>
								<Image src="/images/project/sovereignty_vector.png" alt="Sovereignty Vector" width={600} height={350} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
							</div>
							<div style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
								<p style={{ marginBottom: "15px" }}>
									Eminent Diplomats serves as the absolute economic envoy to global industrial capitals for sub-national asset custodians.
								</p>
								<p style={{ marginBottom: "15px" }}>
									The pipeline transitions from cosmetic networking directly into structured capital deployment.
								</p>
								<p style={{ marginBottom: "15px" }}>
									Regional sovereignty remains mathematically protected.
								</p>
								<p style={{ marginBottom: "20px" }}>
									Every cross-border contract is legally insulated to mandate local value capture, youth employment loops, and permanent wealth creation.
								</p>
								<p style={{
									fontSize: "1.2rem",
									fontWeight: "700",
									color: "#5b92e5",
									borderTop: "1px dashed rgba(91, 146, 229, 0.25)",
									paddingTop: "15px",
									marginTop: "20px",
									textTransform: "uppercase",
									letterSpacing: "0.5px"
								}}>
									Sovereignty is non-negotiable.
								</p>
							</div>
						</div>
					</div>

					{/* THE INVESTOR'S LENS */}
					<div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".4s">
						<div className="lens-card" style={{
							background: "var(--tj-color-common-white)",
							
							borderRadius: "16px",
							padding: "var(--card-padding)",
							height: "100%",
							boxShadow: "0 10px 30px rgba(91, 146, 229, 0.08)",
							transition: "all 0.4s ease-in-out"
						}}>
							<span style={{
								display: "inline-block",
								background: "rgba(91, 146, 229, 0.1)",
								color: "#5b92e5",
								padding: "6px 16px",
								borderRadius: "30px",
								fontSize: "0.85rem",
								fontWeight: "700",
								textTransform: "uppercase",
								letterSpacing: "1px",
								marginBottom: "25px"
							}}>
								Capital Vector
							</span>
							<h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "25px", color: "var(--tj-color-heading-primary)" }}>
								THE INVESTOR'S LENS
							</h3>
							<div className="lens-image mb-4" style={{ borderRadius: "12px", overflow: "hidden" }}>
								<Image src="/images/project/capital_vector.png" alt="Capital Vector" width={600} height={350} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
							</div>
							<div style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
								<p style={{ marginBottom: "15px" }}>
									The primary deterrent to sub-national investment is ground-level execution friction for institutional capital allocators.
								</p>
								<p style={{ marginBottom: "15px" }}>
									Eminent Diplomats eliminates central bureaucratic inertia.
								</p>
								<p style={{ marginBottom: "15px" }}>
									Institutional funds secure direct, unhindered access to executive regional leadership.
								</p>
								<p style={{ marginBottom: "20px" }}>
									The firm presents pre-vetted, legally insulated land, asset allocations, and localized fiscal incentives optimized for immediate execution.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DualLenses;
