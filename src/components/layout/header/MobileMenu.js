import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import Image from "next/image";


const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
	const handleClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isMobileMenuOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`hamburger-area d-lg-none ${
					isMobileMenuOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', maxWidth: "80px" }} loading="lazy" src="/images/logos/logo-white.webp" alt="Logo" />
								</Link>
							</div>
							<div className="hamburger_close">
								<button className="hamburger_close_btn" onClick={handleClick}>
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<MobileNavbar />
						<div className="hamburger-infos">
							<h5 className="hamburger-title">Contact Info</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Phone</span>
									<Link className="contact-link" href="tel:02002111133">
										020 02111133
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link className="contact-link" href="mailto:info@eminentdiplomats.org">
										info@eminentdiplomats.org
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Location</span>
									<span className="contact-link">
										Beijing Geneva Nairobi Singapore
									</span>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
