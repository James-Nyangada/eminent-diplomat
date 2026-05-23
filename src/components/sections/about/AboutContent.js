"use client";
import Image from "next/image";


const AboutContent = () => {
	return (
		<div className="about-content-wrapper">
			{/* SECTION 1: INTRODUCTION & MISSION */}
			<section className="tj-about-section-2 section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-12 text-center">
							<div className="sec-heading style-4 text-center" style={{ marginBottom: "calc(var(--heading-margin-bottom) - 10px)" }}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".2s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Geopolitical Envoy
								</span>
								<h2 className="sec-title title-highlight" style={{ fontSize: "2.8rem", marginBottom: "25px", color: "var(--tj-color-heading-primary)" }}>
									COMMERCIAL DIPLOMACY ASSETIZED.
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "1.3rem", lineHeight: "1.8", color: "#364e52", fontWeight: "500", marginBottom: "50px" }}>
									Eminent Diplomats is the geopolitical bridge for sovereign capital, operating at the critical intersection of high-stakes statecraft and international finance. We deliver absolute institutional execution.
								</p>
							</div>

							<div style={{ width: "100%", height: "380px", position: "relative", overflow: "hidden", borderRadius: "16px", marginBottom: "40px", border: "1px solid rgba(91, 146, 229, 0.15)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
								<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src="/images/operations/executive_portrait.png" alt="Eminent Diplomats Leadership" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
							</div>

							<div className="sec-heading style-4 text-center" style={{ marginTop: "var(--block-margin-top)", background: "rgba(91, 146, 229, 0.04)", padding: "var(--container-padding)", borderRadius: "16px" }}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".4s" style={{ justifyContent: "center", display: "inline-flex", background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5" }}>
									Our Mission
								</span>
								<h3 className="wow fadeInUp" data-wow-delay=".5s" style={{ fontSize: "2rem", fontWeight: "700", margin: "20px 0", color: "var(--tj-color-heading-primary)" }}>
									The Macroeconomic Imperative
								</h3>
								<p className="desc wow fadeInUp" data-wow-delay=".6s" style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--tj-color-text-body)", marginBottom: "20px" }}>
									The global economy operates exclusively on bankable economic realities; vague development aid is obsolete. Capital demands structural insulation.
								</p>
								<p className="desc wow fadeInUp" data-wow-delay=".7s" style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--tj-color-text-body)", marginBottom: "20px" }}>
									Our mission is to architecture bilateral investment corridors by de-risking sub-national assets, eliminating bureaucratic friction, and engineering secure economic corridors between regional executives and institutional investors.
								</p>
								<p className="desc wow fadeInUp" data-wow-delay=".8s" style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "var(--tj-color-text-body)", fontWeight: "600", color: "#5b92e5" }}>
									Eminent Diplomats serves as the absolute economic envoy to global industrial capitals, transitioning raw regional potential from cosmetic networking directly into structured capital deployment.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 2: THE ASYMMETRIC DIVIDE WE BRIDGE */}
			<section className="tj-choose-section section-gap section-gap-x" style={{ background: "var(--tj-color-theme-bg)", padding: "var(--section-padding-y) 0" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									The Asymmetric Divide We Bridge
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									Sovereign Capital Resolution
								</h2>
								<p className="desc" style={{ fontSize: "1.2rem", color: "#67787a", marginTop: "15px" }}>
									The global marketplace is highly asymmetric. We resolve the fundamental disconnects on both sides of the sovereign capital table:
								</p>
							</div>
						</div>
					</div>

					<div className="row row-gap-4">
						{/* Governor's Challenge */}
						<div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".4s">
							<div style={{ background: "var(--tj-color-common-white)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", border: "1px solid var(--tj-color-grey-1)" }}>
								<div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
									<span style={{ background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyCenter: "center", fontWeight: "700", fontSize: "1.1rem" }}>
										<span style={{ margin: "auto" }}>G</span>
									</span>
									<h4 style={{ fontSize: "1.4rem", fontWeight: "700", margin: "0", color: "var(--tj-color-heading-primary)" }}>The Governor’s Challenge</h4>
								</div>
								<p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
									Sub-national governments hold world-class natural, industrial, and human assets but lack the technical transaction frameworks to present them to elite markets. Raw regional potential is inherently unbankable without structural intervention.
								</p>
							</div>
						</div>

						{/* Investor's Challenge */}
						<div className="col-lg-6 col-12 wow fadeInUp" data-wow-delay=".4s">
							<div style={{ background: "var(--tj-color-common-white)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", border: "1px solid var(--tj-color-grey-1)" }}>
								<div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "20px" }}>
									<span style={{ background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", width: "40px", height: "40px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyCenter: "center", fontWeight: "700", fontSize: "1.1rem" }}>
										<span style={{ margin: "auto" }}>I</span>
									</span>
									<h4 style={{ fontSize: "1.4rem", fontWeight: "700", margin: "0", color: "var(--tj-color-heading-primary)" }}>The Investor’s Challenge</h4>
								</div>
								<p style={{ fontSize: "1.1rem", lineHeight: "1.7", color: "var(--tj-color-text-body)" }}>
									Global institutional funds hold trillions in liquidity but retreat from emerging markets due to regulatory opacity, political risk, and un-vetted project design. The primary deterrent to sub-national investment is ground-level execution friction; capital starves in the presence of bureaucratic arbitrage.
								</p>
							</div>
						</div>

						{/* Resolution Banner */}
						<div className="col-12 wow fadeInUp" data-wow-delay=".6s" style={{ marginTop: "var(--block-margin-y)" }}>
							<div className="lens-card" style={{
								background: "var(--tj-color-common-white)",
								
								borderRadius: "16px",
								padding: "var(--card-padding)",
								textAlign: "center",
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
									marginBottom: "20px"
								}}>
									The Bridge
								</span>
								<h3 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "20px", color: "var(--tj-color-heading-primary)" }}>
									Eminent Diplomats Bridges This Divide
								</h3>
								<p style={{ fontSize: "1.15rem", lineHeight: "1.7", maxWidth: "900px", margin: "0 auto", color: "var(--tj-color-text-body)" }}>
									We de-risk raw potential and eliminate central bureaucratic inertia, allowing institutional funds to secure direct, unhindered access to executive regional leadership. We present pre-vetted, legally insulated land, asset allocations, and localized fiscal incentives optimized for immediate execution.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 3: THE STRUCTURAL ECOSYSTEM */}
			<section className="tj-service-section-5 section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Process Flow
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									The Structural Ecosystem
								</h2>
								<p className="desc" style={{ fontSize: "1.2rem", color: "#67787a", marginTop: "15px" }}>
									We operate as the core mechanism translating raw sovereign mandates into high-yield realities. Our ecosystem flows seamlessly from origin to execution:
								</p>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
								{[
									{ step: "01", title: "Sub-National Assets", desc: "Capturing raw potential and mandates directly from source asset custodians." },
									{ step: "02", title: "Eminent Diplomats", desc: "Applying forensic de-risking, bureaucratic mitigation, and strategic legal insulation." },
									{ step: "03", title: "Bankable Inventories", desc: "Utilizing our proprietary financial intelligence product, The Sovereign Compendium, to bound and legally insulate instruments." },
									{ step: "04", title: "Global Mega-Capital", desc: "Deploying capital securely from Sovereign Wealth Funds (SWFs), State-Owned Enterprises (SOEs), and elite global conglomerates." }
								].map((item, idx) => (
									<div key={idx} className="wow fadeInUp" data-wow-delay={`${0.2 * idx}s`} style={{
										display: "flex",
										alignItems: "center",
										background: "rgba(91, 146, 229, 0.02)",
										border: "1px solid rgba(91, 146, 229, 0.12)",
										borderRadius: "12px",
										padding: "25px 30px",
										gap: "30px",
										flexWrap: "wrap"
									}}>
										<div style={{ fontSize: "2.2rem", fontWeight: "800", color: "#5b92e5", opacity: "0.8", minWidth: "60px" }}>
											{item.step}
										</div>
										<div style={{ flex: "1 1 300px" }}>
											<h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "5px" }}>
												{item.title}
											</h4>
											<p style={{ margin: "0", fontSize: "1.05rem", color: "var(--tj-color-text-body)", lineHeight: "1.6" }}>
												{item.desc}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 4: OUR THREE IRONCLAD DOCTRINES */}
			<section className="tj-testimonial-section section-gap section-gap-x" style={{ background: "var(--tj-color-theme-bg)", padding: "var(--section-padding-y) 0" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Sovereign Pillars
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									Our Three Ironclad Doctrines
								</h2>
								<p className="desc" style={{ fontSize: "1.2rem", color: "#67787a", marginTop: "15px" }}>
									Everything we execute is governed by three non-negotiable principles:
								</p>
							</div>
						</div>
					</div>

					<div className="row row-gap-4">
						{[
							{
								title: "Sovereign Asset De-Risking",
								desc: "Regional projects undergo intense forensic, legal, and operational vetting. The portfolio must withstand the absolute scrutiny of global sovereign wealth funds and state-owned enterprises.",
								img: "/images/doctrines/de_risking.png"
							},
							{
								title: "Arbitrage Elimination",
								desc: "Traditional bureaucratic bottlenecks are bypassed. International capital connects directly to localized executive decision-makers, guaranteeing execution speed.",
								img: "/images/doctrines/local_capture.png"
							},
							{
								title: "Sovereign Legacy Preservation",
								desc: "Deal architectures mathematically protect the host region. Incoming capital must build permanent local value, safeguard public assets, and fund institutional technical-talent pipelines and youth employment loops.",
								img: "/images/doctrines/intergenerational.png"
							}
						].map((doc, idx) => (
							<div key={idx} className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay={`${0.2 * idx}s`}>
								<div style={{
									background: "var(--tj-color-common-white)",
									borderRadius: "16px",
									padding: "var(--card-padding)",
									height: "100%",
									boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
									border: "1px solid var(--tj-color-grey-1)",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								}}>
									<div>
										<div style={{ width: "100%", height: "180px", position: "relative", overflow: "hidden", borderRadius: "12px", marginBottom: "20px" }}>
											<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={doc.img} alt={doc.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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

			{/* SECTION 5: GEOPOLITICAL FOOTPRINT & LIASON NETWORK */}
			<section className="section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Geopolitical Footprint
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									Diplomatic Liaison Network
								</h2>
								<p className="desc" style={{ fontSize: "1.2rem", color: "#67787a", marginTop: "15px" }}>
									Operating at the critical nodes of global capital, regional governance, and international consensus.
								</p>
							</div>
						</div>
					</div>

					<div className="row row-gap-4">
						{[
							{
								city: "Singapore Hub",
								role: "Corporate Secretariat & Capital Origin",
								desc: "Marina Bay Financial Centre. Strategically orchestrating capital channeling, sovereign de-risking architectures, and sub-national asset origin vectors across Asian and Global wealth corridors.",
								img: "/images/footprint/singapore_skyline.png",
								conferenceImg: "/images/hero/h4-hero-img.webp",
								conferenceLabel: "Executive Roundtable Active"
							},
							{
								city: "Brussels Liaison",
								role: "Geopolitical & European Union HQ",
								desc: "Rue de la Loi. Interfacing directly with European regulatory bodies, national ministries, and developmental agencies to coordinate state-level project consensus.",
								img: "/images/footprint/brussels_eu.png",
								conferenceImg: "/images/operations/headquarters.png",
								conferenceLabel: "EU Commission Advisory Active"
							},
							{
								city: "China Liaison",
								role: "Geopolitical & Capital Alignment",
								desc: "Shanghai Lujiazui Financial Hub. Vetting sovereign capital channels, high-stakes investment matching protocols, and strategic liaison lines with major Asian state enterprises.",
								img: "/images/footprint/china_skyline.jpg",
								conferenceImg: "/images/operations/executive_portrait.png",
								conferenceLabel: "Sovereign Matching Active"
							},
							{
								city: "New York Liaison",
								role: "Strategic Capital & UN HQ Liaison",
								desc: "One UN Plaza. Connecting international sovereign capital flows directly to high-yield developmental sectors and the strategic priorities of the United Nations.",
								img: "/images/footprint/newyork_un.png",
								conferenceImg: "/images/hero/h4-hero-img.webp",
								conferenceLabel: "UN Plaza Advisory Chamber"
							}
						].map((item, idx) => (
							<div key={idx} className="col-lg-3 col-md-6 col-12 wow fadeInUp" data-wow-delay={`${0.15 * idx}s`}>
								<div style={{
									background: "var(--tj-color-common-white)",
									borderRadius: "20px",
									padding: "var(--card-padding)",
									minHeight: "100%",
									boxShadow: "0 15px 45px rgba(0,0,0,0.04)",
									border: "1px solid rgba(91, 146, 229, 0.1)",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between"
								}}>
									<div>
										<div style={{ width: "100%", height: "180px", position: "relative", overflow: "hidden", borderRadius: "12px", marginBottom: "25px" }}>
											<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={item.img} alt={item.city} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
										</div>
										<span style={{
											display: "inline-flex",
											background: "rgba(91, 146, 229, 0.08)",
											color: "#5b92e5",
											padding: "8px 14px",
											borderRadius: "8px",
											fontSize: "0.75rem",
											fontWeight: "800",
											lineHeight: "1.4",
											textTransform: "uppercase",
											letterSpacing: "0.5px",
											marginBottom: "15px",
											textAlign: "left"
										}}>
											{item.role}
										</span>
										<h4 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "15px" }}>
											{item.city}
										</h4>
										<p style={{ fontSize: "1.05rem", lineHeight: "1.7", color: "var(--tj-color-text-body)", margin: "0" }}>
											{item.desc}
										</p>
									</div>

									<div style={{ display: "flex", gap: "12px", marginTop: "25px", borderTop: "1px solid rgba(0, 0, 0, 0.05)", paddingTop: "20px", alignItems: "center" }}>
										<div style={{ width: "50px", height: "50px", borderRadius: "10px", overflow: "hidden", flexShrink: 0, border: "1px solid rgba(91, 146, 229, 0.1)" }}>
											<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={item.conferenceImg} alt="Active Summit Venue" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
										</div>
										<div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
											<span style={{ fontSize: "0.72rem", fontWeight: "800", color: "#5b92e5", textTransform: "uppercase", display: "block", letterSpacing: "0.5px", marginBottom: "2px" }}>
												Active Summit Room
											</span>
											<span style={{ fontSize: "0.9rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", display: "block", lineHeight: "1.3" }}>
												{item.conferenceLabel}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutContent;
