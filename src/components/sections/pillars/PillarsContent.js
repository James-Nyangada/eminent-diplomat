"use client";
import React, { useState } from "react";
import Image from "next/image";


const PillarsContent = () => {
	const [activePriority, setActivePriority] = useState(0);

	const priorities = [
		{
			title: "Strategic Infrastructure",
			vector: "Vector 01",
			capitalMatched: "Sovereign Wealth Funds (SWFs) & State Concessions",
			structure: "PPP / Built-Operate-Transfer (BOT) Concessions",
			alignment: "98.5%",
			benefits: "Guaranteed long-term regional sovereignty protection and contractually mandated youth employment loops."
		},
		{
			title: "Agribusiness Industrialization",
			vector: "Vector 02",
			capitalMatched: "Global Agritech Conglomerates & Food Security Funds",
			structure: "Outgrower Joint Ventures & Smart Agro-Parks",
			alignment: "97.4%",
			benefits: "Transitioning raw sub-national yield into high-margin export commodities with local processing loops."
		},
		{
			title: "Healthcare Security",
			vector: "Vector 03",
			capitalMatched: "Development Finance Institutions (DFIs) & Sovereign Bonds",
			structure: "Special Purpose Vehicle (SPV) Social Infrastructure Finance",
			alignment: "96.8%",
			benefits: "Upgrading referral-level facilities and localizing pharmaceutical manufacturing to bypass import arbitrage."
		},
		{
			title: "Human Capital Accelerators",
			vector: "Vector 04",
			capitalMatched: "Global Tech Venture Capital & Multilateral TVET Funds",
			structure: "Sovereign Legacy Technical Training Alliances",
			alignment: "98.1%",
			benefits: "Direct integration of localized vocational academies inside SEZ logistics networks."
		},
		{
			title: "Renewable Energy Transitions",
			vector: "Vector 05",
			capitalMatched: "Sovereign Green Bonds & Institutional ESG Funds",
			structure: "Utility Power Purchase Agreements (PPAs)",
			alignment: "99.2%",
			benefits: "Carbon credit asset optimization and grid modernization ensuring sub-national energy resilience."
		}
	];

	return (
		<div className="pillars-content-wrapper">
			{/* SECTION 1: OVERVIEW */}
			<section className="tj-about-section-2 section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-12 text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".2s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Sovereign Mandates
								</span>
								<h2 className="sec-title title-highlight" style={{ fontSize: "2.8rem", marginBottom: "25px", color: "var(--tj-color-heading-primary)" }}>
									THE FIVE PILLARS OF STRUCTURAL GROWTH
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#364e52", fontWeight: "500", marginBottom: "20px" }}>
									Advisory and transaction pipelines are restricted exclusively to five interconnected, high-yield asset vectors.
								</p>
								<p className="desc wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "var(--tj-color-text-body)" }}>
									These sectors drive systemic national resilience and sub-national growth.
								</p>
							</div>
						</div>

						<div className="col-lg-10 col-12 mt-5 wow fadeInUp" data-wow-delay=".5s">
							<div className="image-box" style={{ borderRadius: "20px", overflow: "hidden", boxShadow: "0 15px 45px rgba(91, 146, 229, 0.15)", position: "relative", width: "100%", maxHeight: "600px" }}>
								<Image width={0} height={0} sizes="100vw" loading="lazy" src="/images/pillars/pillars_overview.png" alt="Structural Growth Pillars Overview" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 2: THE SECTORS */}
			<section className="tj-service-section-5 section-gap section-gap-x" style={{ background: "var(--tj-color-theme-bg)", padding: "var(--section-padding-y) 0" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Asset Vectors
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									The Five Interconnected Sectors
								</h2>
							</div>
						</div>
					</div>

					<div className="row row-gap-4">
						{/* Sector Vector 01 */}
						<div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".2s">
							<div className="sector-card" style={{ background: "var(--tj-color-common-white)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", transition: "all 0.3s ease-in-out" }}>
								<div style={{ width: "100%", height: "200px", position: "relative", overflow: "hidden", borderRadius: "12px", marginBottom: "25px" }}>
									<Image width={0} height={0} sizes="100vw" loading="lazy" src="/images/pillars/infrastructure.png" alt="Strategic Infrastructure" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
								</div>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
									<h4 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--tj-color-heading-primary)" }}>
										Strategic Infrastructure & Logistical Corridors
									</h4>
								</div>
								<p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
									Eminent Diplomats structures financing, joint ventures, and concessions for deep-water ports, dry-port hubs, special economic zones (SEZs), and cross-border transport linkages.
								</p>
							</div>
						</div>

						{/* Sector Vector 02 */}
						<div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".3s">
							<div className="sector-card" style={{ background: "var(--tj-color-common-white)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", transition: "all 0.3s ease-in-out" }}>
								<div style={{ width: "100%", height: "200px", position: "relative", overflow: "hidden", borderRadius: "12px", marginBottom: "25px" }}>
									<Image width={0} height={0} sizes="100vw" loading="lazy" src="/images/pillars/agribusiness.png" alt="Agribusiness Value-Addition" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
								</div>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
									<h4 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--tj-color-heading-primary)" }}>
										Agribusiness Value-Addition & Industrial Ecosystems
									</h4>
								</div>
								<p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
									Institutional capital finances localized processing plants, automated agricultural aggregation hubs, and smart industrial parks to transition raw yields into high-margin, export-ready finished goods.
								</p>
							</div>
						</div>

						{/* Sector Vector 03 */}
						<div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".4s">
							<div className="sector-card" style={{ background: "var(--tj-color-common-white)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", transition: "all 0.3s ease-in-out" }}>
								<div style={{ width: "100%", height: "200px", position: "relative", overflow: "hidden", borderRadius: "12px", marginBottom: "25px" }}>
									<Image width={0} height={0} sizes="100vw" loading="lazy" src="/images/pillars/healthcare.png" alt="Healthcare Infrastructure" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
								</div>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
									<h4 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--tj-color-heading-primary)" }}>
										Modernized Healthcare Infrastructure & Supply Chains
									</h4>
								</div>
								<p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
									Capital allocation modernizes regional referral hospitals, high-tier diagnostic centers, and bio-secure pharmaceutical distribution networks.
								</p>
							</div>
						</div>

						{/* Sector Vector 04 */}
						<div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".5s">
							<div className="sector-card" style={{ background: "var(--tj-color-common-white)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", transition: "all 0.3s ease-in-out" }}>
								<div style={{ width: "100%", height: "200px", position: "relative", overflow: "hidden", borderRadius: "12px", marginBottom: "25px" }}>
									<Image width={0} height={0} sizes="100vw" loading="lazy" src="/images/pillars/education.png" alt="Educational Transformation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
								</div>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
									<h4 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--tj-color-heading-primary)" }}>
										Educational Transformation & Human Capital Accelerators
									</h4>
								</div>
								<p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
									Global investment targets Technical and Vocational Education and Training (TVET) mega-institutes, digital-economy incubators, and localized research centers.
								</p>
							</div>
						</div>

						{/* Sector Vector 05 */}
						<div className="col-12 wow fadeInUp" data-wow-delay=".6s">
							<div className="sector-card" style={{ background: "var(--tj-color-common-white)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "16px", padding: "var(--card-padding)", transition: "all 0.3s ease-in-out" }}>
								<div style={{ width: "100%", height: "250px", position: "relative", overflow: "hidden", borderRadius: "12px", marginBottom: "25px" }}>
									<Image width={0} height={0} sizes="100vw" loading="lazy" src="/images/pillars/climate_action.png" alt="Climate Action" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
								</div>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
									<h4 style={{ fontSize: "1.35rem", fontWeight: "700", color: "var(--tj-color-heading-primary)" }}>
										Climate Action, Renewable Energy & Green Transitions
									</h4>
								</div>
								<p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
									Sub-national assets undergo grid modernization, utility-scale solar and hydro allocations, and carbon asset optimization to attract premium global green bonds.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 3: THE SOVEREIGN MATCH ENGINE INTERACTIVE FEATURE */}
			<section className="tj-testimonial-section section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Proprietary Correspondence
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									The Sovereign Match Engine
								</h2>
								<p className="desc" style={{ fontSize: "1.2rem", color: "#67787a", marginTop: "15px" }}>
									Dynamic cross-border capital allocations paired with fully de-risked sub-national priorities.
								</p>
							</div>
						</div>
					</div>

					<div className="row" style={{ background: "rgba(91, 146, 229, 0.02)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "24px", padding: "var(--card-padding)", boxShadow: "0 10px 40px rgba(91, 146, 229, 0.04)" }}>
						{/* Tab Selector on Left */}
						<div className="col-lg-4 col-12" style={{ borderRight: "1px solid rgba(91, 146, 229, 0.15)", paddingRight: "var(--card-padding)", marginBottom: "var(--block-margin-y)" }}>
							<h5 style={{ fontSize: "1.1rem", fontWeight: "700", textTransform: "uppercase", color: "#5b92e5", marginBottom: "25px", letterSpacing: "1px" }}>
								Select Regional Sector
							</h5>
							<div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
								{priorities.map((item, idx) => (
									<button
										key={idx}
										onClick={() => setActivePriority(idx)}
										style={{
											textAlign: "left",
											padding: "16px 20px",
											borderRadius: "12px",
											border: activePriority === idx ? "2px solid #5b92e5" : "1px solid rgba(0,0,0,0.06)",
											background: activePriority === idx ? "rgba(91, 146, 229, 0.08)" : "var(--tj-color-common-white)",
											color: activePriority === idx ? "#5b92e5" : "var(--tj-color-heading-primary)",
											fontWeight: "700",
											fontSize: "1.05rem",
											transition: "all 0.25s ease-in-out",
											cursor: "pointer"
										}}
									>
										{item.title}
									</button>
								))}
							</div>
						</div>

						{/* Match Display on Right */}
						<div className="col-lg-8 col-12" style={{ paddingLeft: "var(--card-padding)" }}>
							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "30px", flexWrap: "wrap", gap: "15px" }}>
								<div>
									<span style={{ fontSize: "0.85rem", fontWeight: "700", background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", padding: "5px 12px", borderRadius: "30px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
										Match Resolution Protocol Active
									</span>
									<h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginTop: "15px" }}>
										{priorities[activePriority].title} Match
									</h3>
								</div>
								<div style={{ background: "#5b92e5", color: "var(--tj-color-common-white)", padding: "12px 24px", borderRadius: "16px", textAlign: "center" }}>
									<div style={{ fontSize: "1.8rem", fontWeight: "800" }}>{priorities[activePriority].alignment}</div>
									<div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: "600" }}>Alignment Score</div>
								</div>
							</div>

							<div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
								<div style={{ background: "var(--tj-color-common-white)", padding: "20px 25px", borderRadius: "12px", borderLeft: "4px solid #5b92e5", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
									<h6 style={{ fontSize: "0.9rem", fontWeight: "700", textTransform: "uppercase", color: "#5b92e5", marginBottom: "6px" }}>
										Primary Capital Channel
									</h6>
									<p style={{ fontSize: "1.1rem", margin: "0", fontWeight: "600", color: "var(--tj-color-heading-primary)" }}>
										{priorities[activePriority].capitalMatched}
									</p>
								</div>

								<div style={{ background: "var(--tj-color-common-white)", padding: "20px 25px", borderRadius: "12px", borderLeft: "4px solid #5b92e5", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
									<h6 style={{ fontSize: "0.9rem", fontWeight: "700", textTransform: "uppercase", color: "#5b92e5", marginBottom: "6px" }}>
										Transaction Framework
									</h6>
									<p style={{ fontSize: "1.1rem", margin: "0", fontWeight: "600", color: "var(--tj-color-heading-primary)" }}>
										{priorities[activePriority].structure}
									</p>
								</div>

								<div style={{ background: "var(--tj-color-common-white)", padding: "20px 25px", borderRadius: "12px", borderLeft: "4px solid #5b92e5", boxShadow: "0 4px 15px rgba(0,0,0,0.01)" }}>
									<h6 style={{ fontSize: "0.9rem", fontWeight: "700", textTransform: "uppercase", color: "#5b92e5", marginBottom: "6px" }}>
										Sovereign Protection Guarantee
									</h6>
									<p style={{ fontSize: "1.1rem", margin: "0", color: "var(--tj-color-text-body)", lineHeight: "1.6" }}>
										{priorities[activePriority].benefits}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PillarsContent;
