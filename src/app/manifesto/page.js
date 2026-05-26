import Footer4 from "@/components/layout/footer/Footer4";
import Header from "@/components/layout/header/Header";
import ManifestoContent from "@/components/sections/manifesto/ManifestoContent";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Manifesto() {
	return (
		<div>
			
			<Header headerType={4} />
			<Header headerType={4} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="space-for-header"></div>
						<HeroInner title={"THE INSTITUTIONAL MANIFESTO"} text={"Commercial Diplomacy Assetized."} />
						<ManifestoContent />
					</main>
					<Footer4 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
