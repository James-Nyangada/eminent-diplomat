"use client";

import Link from "next/link";

const services = [
	{
		icon: (
			<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
				<rect x="3" y="3" width="18" height="18" rx="2"/>
				<path d="M3 9h18M9 21V9"/>
			</svg>
		),
		title: "Sovereign Compendium:",
		desc: "Gated intelligence for global mega-capital. Access pre-vetted, legally insulated sub-national assets.",
		link: "/compendium",
		cta: "Request Access Credentials",
	},
	{
		icon: (
			<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
				<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
			</svg>
		),
		title: "Deal Architecture:",
		desc: "Converting regional mandates into bankable realities. We structure FDI pipelines and secure local value capture.",
		link: "/contact",
		cta: "Consult our Deal Architects",
	},
	{
		icon: (
			<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
				<circle cx="12" cy="12" r="10"/>
				<path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
			</svg>
		),
		title: "Commercial Missions:",
		desc: "Bespoke, closed-door matchmaking between Governors and institutional funds. Guaranteed execution speed.",
		link: "/contact",
		cta: "Register Interest for a Mission",
	},
	{
		icon: (
			<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
				<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
				<polyline points="9 22 9 12 15 12 15 22"/>
			</svg>
		),
		title: "Project Execution:",
		desc: "Mandated ground-level execution. Project management, land acquisition, and localized fiscal strategy for deployed capital.",
		link: "/services",
		cta: "Explore Downstream Services",
	},
];

const GeopoliticalBridge = () => {
	return (
		<section style={{ background: "#09121c", position: "relative", overflow: "hidden" }}>

			{/* ── MAP HERO BLOCK ── */}
			<div style={{ position: "relative", width: "100%", minHeight: "480px" }}>

				{/* Full-bleed map image */}
				<img loading="lazy"
					src="/images/bg/geopolitical_map.png"
					alt="Geopolitical Connection Map"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center center",
						display: "block",
					}}
				/>

				{/* Left-side gradient so text remains readable */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						background: "linear-gradient(90deg, rgba(9,18,28,0.95) 0%, rgba(9,18,28,0.75) 50%, rgba(9,18,28,0.2) 100%)",
						zIndex: 1,
					}}
				/>

				{/* Bottom fade to merge into white cards section */}
				<div
					style={{
						position: "absolute",
						bottom: 0,
						left: 0,
						right: 0,
						height: "80px",
						background: "linear-gradient(to bottom, transparent, #09121c)",
						zIndex: 2,
					}}
				/>

				{/* Content */}
				<div
					className="container"
					style={{
						position: "relative",
						zIndex: 3,
						padding: "80px 15px 100px",
						minHeight: "480px",
						display: "flex",
						alignItems: "center",
					}}
				>
					<div className="row align-items-center w-100">
						<div className="col-lg-6 col-12">

							{/* ED badge */}
							<div
								className="wow fadeInUp"
								data-wow-delay=".1s"
								style={{
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									width: "54px",
									height: "54px",
									borderRadius: "50%",
									border: "1.5px solid rgba(91,146,229,0.8)",
									background: "rgba(91,146,229,0.12)",
									marginBottom: "24px",
								}}
							>
								<span style={{ color: "#5b92e5", fontWeight: "800", fontSize: "1rem", letterSpacing: "1px" }}>ED</span>
							</div>

							{/* Headline */}
							<h2
								className="wow fadeInUp"
								data-wow-delay=".2s"
								style={{
									fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
									fontWeight: "800",
									color: "#ffffff",
									lineHeight: "1.2",
									marginBottom: "16px",
									textTransform: "uppercase",
									letterSpacing: "0.3px",
								}}
							>
								The Geopolitical Bridge
								<br />
								<span style={{ color: "#5b92e5" }}>For Sovereign Capital</span>
							</h2>

							{/* Sub-headline */}
							<p
								className="wow fadeInUp"
								data-wow-delay=".35s"
								style={{
									color: "rgba(255,255,255,0.72)",
									fontSize: "1.05rem",
									fontWeight: "500",
									lineHeight: "1.65",
									marginBottom: "36px",
								}}
							>
								Monetizing High-Stakes Statecraft &amp; Bilateral Investment Corridors.
							</p>

							{/* CTA */}
							<div className="wow fadeInUp" data-wow-delay=".5s">
								<Link href="/compendium" className="tj-primary-btn btn-no-icon">
									<span className="btn-text">
										<span>Access the Compendium</span>
									</span>
								</Link>
							</div>
						</div>

						{/* City node labels — right side, visible on large screens */}
						<div className="col-lg-6 d-none d-lg-flex" style={{ justifyContent: "flex-end" }}>
							<div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-end" }}>
								{[
									{ city: "BRUSSELS", region: "Belgium, EU" },
									{ city: "BEIJING", region: "China" },
									{ city: "SINGAPORE", region: "Southeast Asia" },
									{ city: "NAIROBI", region: "Kenya, Africa" },
								].map(({ city, region }, i) => (
									<div
										key={city}
										className="wow fadeInRight"
										data-wow-delay={`${0.2 + i * 0.1}s`}
										style={{ display: "flex", alignItems: "center", gap: "12px" }}
									>
										<div style={{ textAlign: "right" }}>
											<div style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.78rem", fontWeight: "700", letterSpacing: "2px" }}>{city}</div>
											<div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem", letterSpacing: "1px" }}>{region}</div>
										</div>
										<span
											style={{
												width: "10px",
												height: "10px",
												borderRadius: "50%",
												background: "#5b92e5",
												boxShadow: "0 0 10px rgba(91,146,229,0.9), 0 0 20px rgba(91,146,229,0.5)",
												flexShrink: 0,
											}}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ── SERVICE CARDS ── */}
			<div style={{ background: "#fff", borderTop: "1px solid rgba(91,146,229,0.1)" }}>
				<div className="container-fluid px-0">
					<div className="row g-0">
						{services.map((svc, idx) => (
							<div
								key={idx}
								className="col-lg-3 col-md-6 col-12 wow fadeInUp"
								data-wow-delay={`${0.1 * idx}s`}
							>
								<div
									style={{
										padding: "40px 32px 36px",
										height: "100%",
										borderRight: "1px solid rgba(91,146,229,0.1)",
										borderBottom: "1px solid rgba(91,146,229,0.1)",
										borderTop: "3px solid transparent",
										transition: "border-top-color 0.3s ease, background 0.3s ease",
										display: "flex",
										flexDirection: "column",
										gap: "14px",
										background: "#fff",
									}}
									onMouseEnter={e => {
										e.currentTarget.style.borderTopColor = "#5b92e5";
										e.currentTarget.style.background = "rgba(91,146,229,0.03)";
									}}
									onMouseLeave={e => {
										e.currentTarget.style.borderTopColor = "transparent";
										e.currentTarget.style.background = "#fff";
									}}
								>
									{/* Icon */}
									<div style={{ color: "#5b92e5" }}>{svc.icon}</div>

									{/* Title */}
									<h4 style={{ fontSize: "1rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", margin: 0 }}>
										{svc.title}
									</h4>

									{/* Description */}
									<p style={{ fontSize: "0.92rem", lineHeight: "1.7", color: "var(--tj-color-text-body)", margin: 0, flex: 1 }}>
										{svc.desc}
									</p>

									{/* CTA */}
									<Link
										href={svc.link}
										style={{
											display: "inline-flex",
											alignItems: "center",
											gap: "6px",
											color: "#5b92e5",
											fontWeight: "700",
											fontSize: "0.78rem",
											textTransform: "uppercase",
											letterSpacing: "0.8px",
											textDecoration: "none",
											marginTop: "6px",
											transition: "gap 0.2s ease",
										}}
										onMouseEnter={e => { e.currentTarget.style.gap = "10px"; }}
										onMouseLeave={e => { e.currentTarget.style.gap = "6px"; }}
									>
										{svc.cta}
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
											<line x1="5" y1="12" x2="19" y2="12"/>
											<polyline points="12 5 19 12 12 19"/>
										</svg>
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* ── FOOTER TICKER BAR ── */}
			<div style={{ background: "#09121c", borderTop: "1px solid rgba(91,146,229,0.2)", padding: "13px 0" }}>
				<p style={{ margin: 0, textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", fontWeight: "600", letterSpacing: "1.2px", textTransform: "uppercase" }}>
					Nairobi, Kenya&nbsp;&nbsp;|&nbsp;&nbsp;Singapore&nbsp;&nbsp;|&nbsp;&nbsp;Brussels&nbsp;&nbsp;|&nbsp;&nbsp;Beijing, China&nbsp;&nbsp;|&nbsp;&nbsp;
					
				</p>
			</div>
		</section>
	);
};

export default GeopoliticalBridge;
