"use client";

const CompendiumContent = () => {
	return (
		<div className="compendium-content-wrapper">
			{/* SECTION 1: OVERVIEW */}
			<section className="tj-about-section-2 section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-12 text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".2s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Risk Mitigation
								</span>
								<h2 className="sec-title title-highlight" style={{ fontSize: "2.8rem", marginBottom: "25px", color: "var(--tj-color-heading-primary)" }}>
									ELIMINATING PROJECT ATTRITION.
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "1.3rem", lineHeight: "1.8", color: "#364e52", fontWeight: "600", marginBottom: "40px" }}>
									Project attrition is a failure of preparation.
								</p>
								<div className="wow fadeInUp" data-wow-delay=".4s" style={{ background: "rgba(91, 146, 229, 0.03)", borderLeft: "4px solid #5b92e5", padding: "35px", borderRadius: "12px", textAlign: "left", margin: "40px 0" }}>
									<p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--tj-color-heading-primary)", marginBottom: "20px" }}>
										Capital retreats from vague concepts wrapped in political rhetoric, unresolved land disputes, and missing localized tax structures.
									</p>
									<p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--tj-color-heading-primary)", marginBottom: "20px" }}>
										The Sovereign Asset Compendium is the proprietary financial intelligence product developed by Eminent Diplomats
									</p>
									<p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#5b92e5", fontWeight: "700", margin: "0" }}>
										Portfolios presented to global capitals—Singapore, Beijing, Frankfurt, Dubai—are meticulously bound, legally insulated instruments.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 2: COMPARISON TABLE */}
			<section className="tj-choose-section section-gap section-gap-x" style={{ background: "var(--tj-color-theme-bg)", padding: "var(--section-padding-y) 0" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Direct Comparison
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									Traditional vs. Sovereign Compendium
								</h2>
							</div>
						</div>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-11 col-12">
							<div className="vs-comparison-wrapper" style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
								{[
									{ trad: "Unverified public land data and tenure disputes.", comp: "Locked-in, guaranteed conflict-free title insulation." },
									{ trad: "Centralized regulatory blindspots & approval delays.", comp: "Pre-cleared county-level fiscal waivers & tax credits." },
									{ trad: "Vague feasibility maps lacking fiscal frameworks.", comp: "Standardized joint-venture templates optimized for execution." },
									{ trad: "Asymmetric risk allocations pushing investors away.", comp: "Strict local value capture & youth employment mandates." }
								].map((row, idx) => (
									<div key={idx} className="vs-row wow fadeInUp" data-wow-delay={`${0.2 + idx * 0.1}s`} style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch", position: "relative", background: "var(--tj-color-common-white)", borderRadius: "24px", padding: "20px", boxShadow: "0 15px 45px rgba(0,0,0,0.04)", border: "1px solid rgba(91, 146, 229, 0.1)" }}>
										
										{/* VS Badge in the center */}
										<div className="d-none d-md-flex" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "45px", height: "45px", background: "#fff", border: "1px solid rgba(91, 146, 229, 0.2)", borderRadius: "50%", alignItems: "center", justifyContent: "center", zIndex: 10, color: "#5b92e5", fontWeight: "800", fontSize: "0.9rem", boxShadow: "0 5px 15px rgba(91, 146, 229, 0.15)" }}>
											VS
										</div>

										{/* Traditional Side */}
										<div className="col-md-6 col-12" style={{ padding: "0 10px 0 0" }}>
											<div style={{ height: "100%", padding: "30px", background: "rgba(224, 92, 92, 0.02)", borderRadius: "16px", border: "1px dashed rgba(224, 92, 92, 0.2)" }}>
												<div style={{ display: "flex", alignItems: "center", marginBottom: "15px", gap: "12px" }}>
													<div style={{ width: "35px", height: "35px", borderRadius: "10px", background: "rgba(224, 92, 92, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#e05c5c", fontSize: "1.1rem" }}>
														<i className="fa-solid fa-xmark"></i>
													</div>
													<h5 style={{ margin: 0, fontSize: "1.05rem", color: "#888", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>Traditional Pitch Decks</h5>
												</div>
												<p style={{ margin: 0, color: "#666", fontSize: "1.1rem", lineHeight: "1.7" }}>{row.trad}</p>
											</div>
										</div>

										{/* Compendium Side */}
										<div className="col-md-6 col-12 mt-4 mt-md-0" style={{ padding: "0 0 0 10px" }}>
											<div style={{ height: "100%", padding: "30px", background: "linear-gradient(135deg, #ffffff 0%, rgba(91, 146, 229, 0.08) 100%)", borderRadius: "16px", border: "1px solid rgba(91, 146, 229, 0.3)", boxShadow: "0 8px 25px rgba(91, 146, 229, 0.08)", position: "relative", overflow: "hidden" }}>
												{/* Glow effect */}
												<div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: "radial-gradient(circle, rgba(91, 146, 229, 0.15) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}></div>
												
												<div style={{ display: "flex", alignItems: "center", marginBottom: "15px", gap: "12px", position: "relative", zIndex: 2 }}>
													<div style={{ width: "35px", height: "35px", borderRadius: "10px", background: "#5b92e5", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.1rem" }}>
														<i className="fa-solid fa-check"></i>
													</div>
													<h5 style={{ margin: 0, fontSize: "1.05rem", color: "#5b92e5", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px" }}>The Sovereign Compendium</h5>
												</div>
												<p style={{ margin: 0, color: "var(--tj-color-heading-primary)", fontSize: "1.2rem", lineHeight: "1.7", fontWeight: "600", position: "relative", zIndex: 2 }}>{row.comp}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CompendiumContent;
