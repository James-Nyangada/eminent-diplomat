import Link from "next/link";
import Image from "next/image";


const Footer4 = () => {
	return (
		<footer className="tj-footer-section footer-4 section-gap-x site-footer">
			<div className="footer-main-area" style={{ paddingTop: "var(--section-padding-y)" }}>
				<div className="container">
					<div className="row justify-content-between">
						{/* COMPANY DESCRIPTION */}
						<div className="col-xl-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<h5 className="title">Our Company</h5>
								<div className="footer-text">
									<p style={{ lineHeight: "1.7", fontSize: "1rem" }}>
										Eminent Diplomats is the geopolitical bridge for sovereign capital, operating at the critical intersection of high-stakes statecraft and international finance. We deliver absolute institutional execution.
									</p>
								</div>
								<div className="award-logo-area" style={{ display: "none" }}>
									<div className="award-logo">
										<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src="/images/footer/award-logo-1.webp" alt="" />
									</div>
									<div className="award-logo">
										<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src="/images/footer/award-logo-2.webp" alt="" />
									</div>
								</div>
							</div>
						</div>

						{/* LIVE PAGES NAVIGATION */}
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Navigate</h5>
								<ul>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About</Link>
									</li>
									<li>
										<Link href="/blogs">Blog</Link>
									</li>
									<li>
										<Link href="/pillars">Pillars of Growth</Link>
									</li>
									<li>
										<Link href="/compendium">Sovereign Compendium</Link>
									</li>
									<li>
										<Link href="/intake">Protocol Intake</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* OPERATIONS & DIRECT LINES */}
						<div className="col-xl-4 col-md-6">
							<div
								className="footer-widget widget-contact style-2 wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Our Office</h5>
								<div className="footer-contact-info">
						
									<div className="contact-item">
										<span style={{ fontSize: "1rem", fontWeight: "700", color: "var(--tj-color-heading-primary)", display: "block", marginBottom: "4px" }}>Liaison Network</span>
										<span>Beijing Geneva Nairobi Singapore</span>
									</div>
									<div className="contact-item">
										<span style={{ fontSize: "1rem", fontWeight: "700", color: "#5b92e5", display: "block", marginBottom: "4px" }}>Secure Communications</span>
										<Link href="mailto:info@eminentdiplomats.org" style={{ wordBreak: "break-all", fontWeight: "700" }}>
											info@eminentdiplomats.org
										</Link>
										<Link href="tel:02002111133" style={{ wordBreak: "break-all", fontWeight: "700", marginTop: "10px" }}>
											020 02111133.
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* COPYRIGHT AREA */}
			<div className="tj-copyright-area-4" style={{ marginTop: "60px" }}>
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area" style={{ borderTop: "1px dashed rgba(0,0,0,0.1)", paddingTop: "30px" }}>
								<div className="copyright-text">
									<p>
										&copy; 2026 
										<span style={{ fontWeight: "900", fontSize: "1.1rem", color: "var(--tj-color-heading-primary)", letterSpacing: "1px" }}>
											EMINENT DIPLOMATS
										</span>{" "}
										All rights reserved.
									</p>
								</div>
								<div className="copyright-menu" style={{ display: "none" }}>
									<ul>
										<li>
											<Link href="/contact">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/terms-and-conditions">
												Terms & Condition
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer4;
