import Footer4 from "@/components/layout/footer/Footer4";
import Header from "@/components/layout/header/Header";
import About4 from "@/components/sections/about/About4";
import DualLenses from "@/components/sections/duallenses/DualLenses";
import ManifestoContent from "@/components/sections/manifesto/ManifestoContent";
import Hero4 from "@/components/sections/hero/Hero4";
import GeopoliticalBridge from "@/components/sections/geopolitical/GeopoliticalBridge";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header headerType={4} />
			<Header headerType={4} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="space-for-header"></div>
						<Hero4 />
						<About4 />
						<DualLenses />
						<GeopoliticalBridge />
						<ManifestoContent />
					</main>
					<Footer4 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
