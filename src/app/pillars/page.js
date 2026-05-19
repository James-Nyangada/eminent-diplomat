import Footer4 from "@/components/layout/footer/Footer4";
import Header from "@/components/layout/header/Header";
import PillarsContent from "@/components/sections/pillars/PillarsContent";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Pillars() {
	return (
		<div>
			<BackToTop />
			<Header headerType={4} />
			<Header headerType={4} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="space-for-header"></div>
						<HeroInner title={"THE FIVE PILLARS OF STRUCTURAL GROWTH"} text={"Commercial Diplomacy Assetized."} />
						<PillarsContent />
					</main>
					<Footer4 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
