"use client";
import React, { useState } from "react";

const IntakeContent = () => {
	const [formData, setFormData] = useState({
		name: "",
		title: "Governor",
		entity: "",
		email: "",
		mandate: "Closed-Door Briefing",
		details: ""
	});
	const [status, setStatus] = useState("idle"); // idle, sending, success
	const [txId, setTxId] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus("sending");
		setTimeout(() => {
			const randomId = "TX-EM-INTAKE-" + Math.floor(100000 + Math.random() * 900000);
			setTxId(randomId);
			setStatus("success");
		}, 1500);
	};

	return (
		<div className="intake-content-wrapper">
			{/* SECTION 1: OVERVIEW */}
			<section className="tj-about-section-2 section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10 col-12 text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".2s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Executive Admittance
								</span>
								<h2 className="sec-title title-highlight" style={{ fontSize: "2.8rem", marginBottom: "25px", color: "var(--tj-color-heading-primary)" }}>
									THE GLOBAL ECONOMIC CORRIDOR IS ACTIVE.
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "1.25rem", lineHeight: "1.8", color: "#364e52", fontWeight: "600", maxWidth: "800px", margin: "0 auto" }}>
									Admittance to the transactional pipeline is strictly reserved for accredited institutional investors, sovereign asset representatives, and executive state officials.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 2: PIPELINE SECTORS */}
			<section className="tj-choose-section section-gap section-gap-x" style={{ background: "var(--tj-color-theme-bg)", padding: "var(--section-padding-y) 0" }}>
				<div className="container">
					<div className="row justify-content-center text-center" style={{ marginBottom: "var(--heading-margin-bottom)" }}>
						<div className="col-lg-10 col-12">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ justifyContent: "center", display: "inline-flex" }}>
									Admission Vectors
								</span>
								<h2 className="sec-title title-anim" style={{ fontSize: "2.8rem", fontWeight: "700" }}>
									Transactional Pipeline Channels
								</h2>
							</div>
						</div>
					</div>

					<div className="row row-gap-4">
						{/* Briefings */}
						<div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
							<div style={{ background: "var(--tj-color-common-white)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", textAlign: "center" }}>
								<div style={{ display: "inline-flex", background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", width: "50px", height: "50px", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "20px" }}>
									<i className="fa-regular fa-folder-closed"></i>
								</div>
								<h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "15px" }}>
									Closed-Door Executive Briefings
								</h4>
								<p style={{ fontSize: "1.05rem", color: "var(--tj-color-text-body)", lineHeight: "1.6", margin: "0" }}>
									Immediate investment framework mapping for Governors and Sovereign Chiefs prior to bilateral deployments.
								</p>
							</div>
						</div>

						{/* Portfolios */}
						<div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".3s">
							<div style={{ background: "var(--tj-color-common-white)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", textAlign: "center" }}>
								<div style={{ display: "inline-flex", background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", width: "50px", height: "50px", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "20px" }}>
									<i className="fa-regular fa-handshake"></i>
								</div>
								<h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "15px" }}>
									Active Bilateral Portfolios
								</h4>
								<p style={{ fontSize: "1.05rem", color: "var(--tj-color-text-body)", lineHeight: "1.6", margin: "0" }}>
									Inclusion on high-level industrial deployments targeting APAC, GCC, and European capital hubs.
								</p>
							</div>
						</div>

						{/* Audits */}
						<div className="col-lg-4 col-md-12 col-12 wow fadeInUp" data-wow-delay=".4s">
							<div style={{ background: "var(--tj-color-common-white)", border: "1px solid rgba(91, 146, 229, 0.15)", borderRadius: "16px", padding: "var(--card-padding)", height: "100%", textAlign: "center" }}>
								<div style={{ display: "inline-flex", background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", width: "50px", height: "50px", borderRadius: "50%", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "20px" }}>
									<i className="fa-regular fa-file-lines"></i>
								</div>
								<h4 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "15px" }}>
									Compendium Audits
								</h4>
								<p style={{ fontSize: "1.05rem", color: "var(--tj-color-text-body)", lineHeight: "1.6", margin: "0" }}>
									Forensic bankability grading for regional public assets to identify sub-national capital corridors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SECTION 3: PROTOCOL INTAKE PORTAL & CONTACT */}
			<section className="tj-contact-section section-gap section-gap-x" style={{ padding: "var(--section-padding-y) 0", background: "var(--tj-color-common-white)" }}>
				<div className="container">
					<div className="row row-gap-5">
						{/* Operational Info on Left */}
						<div className="col-lg-5 col-12 wow fadeInUp" data-wow-delay=".3s">
							<div style={{ paddingRight: "20px" }}>
								<div style={{ width: "100%", height: "240px", position: "relative", overflow: "hidden", borderRadius: "16px", marginBottom: "35px", border: "1px solid rgba(91, 146, 229, 0.15)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
									<img loading="lazy" src="/images/operations/headquarters.png" alt="Eminent Diplomats Headquarters" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
								</div>

								<div className="sec-heading style-4">
									<span className="sub-title" style={{ display: "inline-flex" }}>
										Direct Lines
									</span>
									<h2 className="sec-title" style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "30px" }}>
										Corporate Operations
									</h2>
								</div>

								<div style={{ display: "flex", flexDirection: "column", gap: "25px", marginTop: "var(--block-margin-y)" }}>
									<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
										<div style={{ background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", width: "45px", height: "45px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
											<i className="fa-solid fa-map-location-dot"></i>
										</div>
										<div>
											<h5 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "6px" }}>
												Primary Corporate Location
											</h5>
											<p style={{ margin: "0", fontSize: "1rem", color: "var(--tj-color-text-body)" }}>
												Nairobi, Kenya
											</p>
										</div>
									</div>

									<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
										<div style={{ background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", width: "45px", height: "45px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
											<i className="fa-solid fa-globe"></i>
										</div>
										<div>
											<h5 style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "6px" }}>
												Liaison Network
											</h5>
											<p style={{ margin: "0", fontSize: "1rem", color: "var(--tj-color-text-body)" }}>
												Singapore, Brussels, China, Kenya
											</p>
										</div>
									</div>

									<div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
										<div style={{ background: "rgba(91, 146, 229, 0.1)", color: "#5b92e5", width: "45px", height: "45px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0 }}>
											<i className="fa-solid fa-shield-halved"></i>
										</div>
										<div>
											<h5 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#5b92e5", marginBottom: "6px", textTransform: "uppercase" }}>
												Secure Executive Communications
											</h5>
											<p style={{ margin: "0", fontSize: "1.1rem", fontWeight: "700", color: "var(--tj-color-heading-primary)" }}>
												info@eminentdiplomats.org
											</p>
										</div>
									</div>
								</div>

								<div style={{ marginTop: "var(--block-margin-top)", borderTop: "1px dashed rgba(0,0,0,0.1)", paddingTop: "25px" }}>
									<p style={{ fontSize: "0.9rem", color: "#8a9a9c", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: "0" }}>
										Legal Identity: EMINENT DIPLOMATS ALL RIGHTS RESERVED. 2026.
									</p>
								</div>
							</div>
						</div>

						{/* Form on Right */}
						<div className="col-lg-7 col-12 wow fadeInUp" data-wow-delay=".3s">
							<div style={{ background: "var(--tj-color-theme-bg)", borderRadius: "24px", padding: "var(--card-padding)", boxShadow: "0 10px 40px rgba(91, 146, 229, 0.04)", border: "1px solid rgba(91, 146, 229, 0.15)" }}>
								<h3 style={{ fontSize: "1.6rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "30px", borderBottom: "1px solid rgba(91, 146, 229, 0.15)", paddingBottom: "15px" }}>
									Sovereign Credentialing Intake
								</h3>

								{status === "success" ? (
									<div style={{ background: "rgba(91, 146, 229, 0.08)", border: "1px solid #5b92e5", borderRadius: "16px", padding: "35px", textAlign: "center" }}>
										<div style={{ fontSize: "2.5rem", color: "#5b92e5", marginBottom: "15px" }}>
											<i className="fa-regular fa-circle-check"></i>
										</div>
										<h4 style={{ fontSize: "1.4rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "10px" }}>
											Protocol Intake Received
										</h4>
										<p style={{ fontSize: "1.05rem", color: "var(--tj-color-text-body)", lineHeight: "1.6", marginBottom: "20px" }}>
											Proceeding with absolute institutional verification. Please monitor secure communications.
										</p>
										<div style={{ background: "var(--tj-color-common-white)", padding: "12px 20px", borderRadius: "8px", border: "1px dashed rgba(91, 146, 229, 0.3)", display: "inline-block", fontWeight: "700", color: "#5b92e5" }}>
											Ledger Entry: {txId}
										</div>
									</div>
								) : (
									<form onSubmit={handleSubmit}>
										<div className="row row-gap-3">
											<div className="col-md-6 col-12">
												<label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "8px" }}>
													Representative Name
												</label>
												<input
													type="text"
													required
													placeholder="Executive Name"
													value={formData.name}
													onChange={(e) => setFormData({ ...formData, name: e.target.value })}
													style={{ width: "100%", padding: "14px 18px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)", background: "var(--tj-color-common-white)", fontSize: "1rem" }}
												/>
											</div>

											<div className="col-md-6 col-12">
												<label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "8px" }}>
													Credentialed Title
												</label>
												<select
													value={formData.title}
													onChange={(e) => setFormData({ ...formData, title: e.target.value })}
													style={{ width: "100%", padding: "14px 18px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)", background: "var(--tj-color-common-white)", fontSize: "1rem", color: "var(--tj-color-heading-primary)", fontWeight: "600" }}
												>
													<option value="Governor">Governor / Regional Executive</option>
													<option value="Sovereign Chief">Sovereign Asset Chief</option>
													<option value="Institutional Investor">Accredited Institutional Investor</option>
													<option value="State Official">Executive State Official</option>
												</select>
											</div>

											<div className="col-md-6 col-12">
												<label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "8px" }}>
													Sovereign Entity / Corporate Fund
												</label>
												<input
													type="text"
													required
													placeholder="Government / Corporate Name"
													value={formData.entity}
													onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
													style={{ width: "100%", padding: "14px 18px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)", background: "var(--tj-color-common-white)", fontSize: "1rem" }}
												/>
											</div>

											<div className="col-md-6 col-12">
												<label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "8px" }}>
													Official Communication Channel
												</label>
												<input
													type="email"
													required
													placeholder="official@entity.gov / corporate.com"
													value={formData.email}
													onChange={(e) => setFormData({ ...formData, email: e.target.value })}
													style={{ width: "100%", padding: "14px 18px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)", background: "var(--tj-color-common-white)", fontSize: "1rem" }}
												/>
											</div>

											<div className="col-12">
												<label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "8px" }}>
													Area of Transactional Mandate
												</label>
												<select
													value={formData.mandate}
													onChange={(e) => setFormData({ ...formData, mandate: e.target.value })}
													style={{ width: "100%", padding: "14px 18px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)", background: "var(--tj-color-common-white)", fontSize: "1rem", color: "var(--tj-color-heading-primary)", fontWeight: "600" }}
												>
													<option value="Closed-Door Briefing">Closed-Door Briefing Framework</option>
													<option value="Compendium Audit">Sovereign Compendium Asset Audit</option>
													<option value="Bilateral Deployment">Active Bilateral Capital Deployment</option>
												</select>
											</div>

											<div className="col-12">
												<label style={{ display: "block", fontSize: "0.9rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", marginBottom: "8px" }}>
													Mandate Scope & Public Assets Description
												</label>
												<textarea
													required
													placeholder="Forensic bounding requirements, asset scale, or liquidity deployment vectors..."
													value={formData.details}
													onChange={(e) => setFormData({ ...formData, details: e.target.value })}
													style={{ width: "100%", padding: "14px 18px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.1)", background: "var(--tj-color-common-white)", fontSize: "1rem", minHeight: "120px", resize: "vertical" }}
												/>
											</div>

											<div className="col-12" style={{ marginTop: "15px" }}>
												<button
													type="submit"
													disabled={status === "sending"}
													style={{
														width: "100%",
														background: "#5b92e5",
														color: "var(--tj-color-common-white)",
														border: "none",
														padding: "16px 30px",
														borderRadius: "12px",
														fontWeight: "800",
														fontSize: "1.1rem",
														textTransform: "uppercase",
														letterSpacing: "1px",
														cursor: status === "sending" ? "not-allowed" : "pointer",
														boxShadow: "0 10px 25px rgba(91, 146, 229, 0.25)",
														transition: "all 0.3s ease-in-out"
													}}
												>
													{status === "sending" ? "INITIATING SECURE ADMITTANCE..." : "SUBMIT SECURE PROTOCOL INTAKE"}
												</button>
											</div>
										</div>
									</form>
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default IntakeContent;
