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
										The Sovereign Asset Compendium is the proprietary financial intelligence product developed by Eminent Diplomats Co. Ltd.
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
						<div className="col-lg-10 col-12 wow fadeInUp" data-wow-delay=".4s">
							<div style={{ background: "var(--tj-color-common-white)", borderRadius: "20px", padding: "var(--card-padding)", boxShadow: "0 15px 45px rgba(0,0,0,0.03)", border: "1px solid rgba(91, 146, 229, 0.15)", overflowX: "auto" }}>
								<table className="table" style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 15px", margin: "0" }}>
									<thead>
										<tr>
											<th style={{ background: "rgba(91, 146, 229, 0.05)", color: "var(--tj-color-heading-primary)", border: "none", padding: "20px 25px", fontSize: "1.15rem", fontWeight: "800", borderRadius: "10px 0 0 10px", width: "50%" }}>
												Traditional Pitch Decks
											</th>
											<th style={{ background: "#5b92e5", color: "var(--tj-color-common-white)", border: "none", padding: "20px 25px", fontSize: "1.15rem", fontWeight: "800", borderRadius: "0 10px 10px 0", width: "50%" }}>
												The Sovereign Compendium
											</th>
										</tr>
									</thead>
									<tbody>
										{[
											{
												trad: "Unverified public land data and tenure disputes.",
												comp: "Locked-in, guaranteed conflict-free title insulation."
											},
											{
												trad: "Centralized regulatory blindspots & approval delays.",
												comp: "Pre-cleared county-level fiscal waivers & tax credits."
											},
											{
												trad: "Vague feasibility maps lacking fiscal frameworks.",
												comp: "Standardized joint-venture templates optimized for execution."
											},
											{
												trad: "Asymmetric risk allocations pushing investors away.",
												comp: "Strict local value capture & youth employment mandates."
											}
										].map((row, idx) => (
											<tr key={idx}>
												<td style={{ background: "rgba(0,0,0,0.01)", border: "1px solid rgba(0,0,0,0.05)", borderRadius: "10px 0 0 10px", padding: "22px 25px", fontSize: "1.05rem", color: "var(--tj-color-text-body)", lineHeight: "1.6" }}>
													<i className="fa-regular fa-circle-xmark" style={{ color: "#e05c5c", marginRight: "12px" }}></i>
													{row.trad}
												</td>
												<td style={{ background: "rgba(91, 146, 229, 0.04)", border: "1px solid rgba(91, 146, 229, 0.15)", borderLeft: "none", borderRadius: "0 10px 10px 0", padding: "22px 25px", fontSize: "1.05rem", color: "var(--tj-color-heading-primary)", fontWeight: "600", lineHeight: "1.6" }}>
													<i className="fa-regular fa-circle-check" style={{ color: "#5b92e5", marginRight: "12px" }}></i>
													{row.comp}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CompendiumContent;
