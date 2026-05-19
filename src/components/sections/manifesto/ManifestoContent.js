"use client";

const ManifestoContent = () => {
	return (
		<div className="manifesto-content-wrapper">
			{/* SECTION 1: OVERVIEW CONTENT */}
			<section className="tj-about-section-2 section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-12 text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".2s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Sovereign Protocol
								</span>
								<h2 className="sec-title title-highlight" style={{ fontSize: "2.8rem", marginBottom: "25px", color: "var(--tj-color-heading-primary)" }}>
									COMMERCIAL DIPLOMACY ASSETIZED.
								</h2>
								<div className="wow fadeInUp" data-wow-delay=".4s" style={{ background: "rgba(91, 146, 229, 0.03)", borderLeft: "4px solid #5b92e5", padding: "var(--card-padding)", borderRadius: "8px", margin: "var(--block-margin-y) 0", textAlign: "left" }}>
									<p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "var(--tj-color-heading-primary)", fontWeight: "600", marginBottom: "15px" }}>
										Eminent Diplomats Co. Ltd. operates at the critical intersection of high-stakes statecraft and international finance.
									</p>
									<p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "var(--tj-color-heading-primary)", fontWeight: "600", marginBottom: "15px" }}>
										The firm architectures bilateral investment corridors.
									</p>
									<p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "var(--tj-color-heading-primary)", fontWeight: "600", margin: "0" }}>
										The global economy operates exclusively on bankable economic realities, making vague development aid obsolete.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 2: THE STRUCTURAL ECOSYSTEM FLOW */}
			<section className="tj-choose-section section-gap section-gap-x" style={{ background: "var(--tj-color-theme-bg)", padding: "var(--section-padding-y) 0" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Process Architecture
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									The Structural Ecosystem
								</h2>
							</div>
						</div>
					</div>

					<div className="row row-gap-4 justify-content-center">
						{[
							{
								step: "01",
								title: "Sub-National Assets",
								subtitle: "Raw Potential & Mandates",
								desc: "Capturing primary regional potential and government mandates directly from local custodians."
							},
							{
								step: "02",
								title: "Eminent Diplomats Co. Ltd.",
								subtitle: "De-Risking & Legal Insulation",
								desc: "Applying intense forensic screening, structural insulation, and mitigation of regulatory bottlenecks."
							},
							{
								step: "03",
								title: "Bankable Inventories",
								subtitle: "The Sovereign Compendium",
								desc: "Utilizing our proprietary financial intelligence products to bound and fully package asset instruments."
							},
							{
								step: "04",
								title: "Global Mega-Capital",
								subtitle: "SWFs, SOEs, Conglomerates",
								desc: "Deploying secure cross-border capital directly from sovereign wealth funds and state enterprises."
							}
						].map((item, idx) => (
							<div key={idx} className="col-xl-3 col-md-6 col-12 wow fadeInUp" data-wow-delay={`${0.2 * idx}s`}>
								<div className="ecosystem-card" style={{
									background: "var(--tj-color-common-white)",
									borderRadius: "16px",
									padding: "var(--card-padding)",
									height: "100%",
									boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
									border: "1px solid rgba(91, 146, 229, 0.15)",
									textAlign: "center",
									position: "relative"
								}}>

									<h4 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "5px" }}>
										{item.title}
									</h4>
									<h6 style={{ fontSize: "0.9rem", fontWeight: "600", color: "#5b92e5", textTransform: "uppercase", marginBottom: "15px", letterSpacing: "0.5px" }}>
										{item.subtitle}
									</h6>
									<p style={{ fontSize: "0.95rem", color: "var(--tj-color-text-body)", lineHeight: "1.6", margin: "0" }}>
										{item.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* SECTION 3: THE THREE IRONCLAD DOCTRINES */}
			<section className="tj-testimonial-section section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Immutable Doctrines
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									The Three Ironclad Doctrines
								</h2>
							</div>
						</div>
					</div>

					<div className="row row-gap-4">
						{[
							{
								title: "Sovereign Asset De-Risking",
								desc: "Regional projects undergo intense forensic, legal, and operational vetting to ensure strict bankability.",
								img: "/images/doctrines/de_risking.png"
							},
							{
								title: "Arbitrage Elimination",
								desc: "Traditional bureaucratic bottlenecks are bypassed, connecting international capital directly to localized executive decision-makers to guarantee execution speed.",
								img: "/images/doctrines/local_capture.png"
							},
							{
								title: "Sovereign Legacy Preservation",
								desc: "Deal architectures protect the host region, ensuring incoming capital builds permanent local value, safeguards public assets, and funds institutional technical-talent pipelines.",
								img: "/images/doctrines/intergenerational.png"
							}
						].map((doc, idx) => (
							<div key={idx} className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay={`${0.2 * idx}s`}>
								<div style={{
									background: "rgba(91, 146, 229, 0.02)",
									borderRadius: "16px",
									padding: "var(--card-padding)",
									height: "100%",
									boxShadow: "0 10px 30px rgba(91, 146, 229, 0.02)",
									border: "1px solid rgba(91, 146, 229, 0.15)",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								}}>
									<div>
										<div style={{ width: "100%", height: "180px", position: "relative", overflow: "hidden", borderRadius: "12px", marginBottom: "20px" }}>
											<img src={doc.img} alt={doc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
										</div>
										<h4 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "20px" }}>
											{doc.title}
										</h4>
										<p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
											{doc.desc}
										</p>
									</div>
									{doc.title.includes("Legacy") && (
										<div style={{
											fontSize: "0.95rem",
											fontWeight: "700",
											color: "#5b92e5",
											borderTop: "1px dashed rgba(91, 146, 229, 0.25)",
											paddingTop: "12px",
											marginTop: "15px",
											textTransform: "uppercase"
										}}>
											Sovereignty is non-negotiable.
										</div>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ManifestoContent;
