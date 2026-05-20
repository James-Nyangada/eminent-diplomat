import Footer from "@/components/layout/footer/Footer";
import Footer4 from "@/components/layout/footer/Footer4";
import Header from "@/components/layout/header/Header";
import Contact3 from "@/components/sections/contacts/Contact3";
import ContactTop from "@/components/sections/contacts/ContactTop";
import ProtocolIntake2 from "@/components/sections/contacts/ProtocolIntake2";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Contact() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Contact Us"} text={"Contact Us"} />
						<ContactTop />
						{/* <Contact3 /> */}
						<ProtocolIntake2 />
						{/* <Cta /> */}
					</main>
					<Footer4 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
