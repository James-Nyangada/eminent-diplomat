"use client";
import React from "react";

const ProtocolIntake2 = () => {
	return (
		<section className="protocol-intake-section" style={{ padding: "60px 0" }}>
			<div className="container">
				<div
					style={{
						background: "#fff",
						borderRadius: "16px",
						border: "1px solid #eaeaea",
						overflow: "hidden",
						boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
					}}
				>
					<div style={{ padding: "40px" }}>
						<h2
							style={{
								textAlign: "center",
								fontSize: "2rem",
								fontWeight: "700",
								marginBottom: "30px",
								color: "#1a1a1a",
							}}
						>
							Protocol Intake 2.0
						</h2>

						<div className="row">
							<div className="col-md-6 mb-4 mb-md-0" style={{ position: "relative" }}>
								<div
									style={{
										background: "#f0f2f5",
										borderRadius: "12px",
										padding: "30px",
										height: "100%",
										border: "1px solid #e0e0e0",
										position: "relative",
										zIndex: 2,
									}}
								>
									<h4
										style={{
											fontSize: "1.1rem",
											fontWeight: "700",
											marginBottom: "20px",
											color: "#1a1a1a",
											textTransform: "uppercase",
										}}
									>
										STEP 1: DEFINE YOUR MANDATE
									</h4>
									<label
										style={{
											display: "block",
											fontSize: "0.85rem",
											fontWeight: "700",
											marginBottom: "10px",
											color: "#333",
											textTransform: "uppercase",
										}}
									>
										ARE YOU A...
									</label>
									<select
										style={{
											width: "100%",
											padding: "15px",
											borderRadius: "8px",
											border: "1px solid #ccc",
											background: "#fff",
											fontSize: "1rem",
										}}
									>
										<option>Sovereign A...</option>
										<option>Sovereign Wealth Fund</option>
										<option>State-Owned Enterprise</option>
										<option>Regional Governor</option>
										<option>Private Equity</option>
										<option>Other Asset Custodian</option>
									</select>
								</div>
								{/* Arrow pointing right */}
								<div
									className="d-none d-md-block"
									style={{
										position: "absolute",
										right: "-15px",
										top: "50%",
										transform: "translateY(-50%)",
										width: "30px",
										height: "60px",
										background: "#f0f2f5",
										clipPath: "polygon(0 0, 100% 50%, 0 100%)",
										zIndex: 3,
									}}
								></div>
							</div>

							<div className="col-md-6">
								<div
									style={{
										background: "#f0f2f5",
										borderRadius: "12px",
										padding: "30px",
										height: "100%",
										border: "1px solid #e0e0e0",
									}}
								>
									<h4
										style={{
											fontSize: "1.1rem",
											fontWeight: "700",
											marginBottom: "20px",
											color: "#1a1a1a",
											textTransform: "uppercase",
										}}
									>
										STEP 2: SUBMIT CONTACT
									</h4>
									<textarea
										placeholder="CAPITAL ALLOCATION CAPACITY / REGIONAL ASSET VALUATION"
										style={{
											width: "100%",
											padding: "15px",
											borderRadius: "8px",
											border: "1px solid #ccc",
											background: "#fff",
											minHeight: "120px",
											marginBottom: "20px",
											fontSize: "0.9rem",
											resize: "none",
										}}
									></textarea>
									<button
										style={{
											width: "100%",
											background: "var(--tj-color-theme-primary)",
											color: "#1a1a1a",
											border: "none",
											padding: "15px",
											borderRadius: "8px",
											fontWeight: "700",
											fontSize: "1rem",
											textTransform: "uppercase",
											cursor: "pointer",
										}}
									>
										INITIALIZE PROTOCOL
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Footer Banner */}
					<div
						style={{
							background: "var(--tj-color-theme-primary)",
							padding: "15px 20px",
							textAlign: "center",
							color: "#fff",
						}}
					>
						<p
							style={{
								margin: "0 0 5px 0",
								fontSize: "0.9rem",
								fontWeight: "600",
								letterSpacing: "0.5px",
							}}
						>
							NAIROBI, KENYA | SINGAPORE | BRUSSELS | CHINA | Secure communications:{" "}
							<a
								href="mailto:OFFICIAL.INTAKE@EMINENTDIPLOMATS.COM"
								style={{ color: "#fff", textDecoration: "none" }}
							>
								OFFICIAL.INTAKE@EMINENTDIPLOMATS.COM
							</a>
						</p>
						<p style={{ margin: "0", fontSize: "0.8rem", opacity: "0.9" }}>
							© 2025 Eminent Diplomats Co. Ltd. - Execution Is Non Negotiable.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProtocolIntake2;
