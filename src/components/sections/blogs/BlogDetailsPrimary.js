import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { 
		title, id, img, tags, author, date, date2, comments,
		desc, desc1, desc2, detailsImg, smallImg, img1, img2,
		paragraph1, paragraph2, quote, quoteAuthor, keyLessonsTitle,
		paragraph3, paragraph4, checkList, conclusionTitle,
		conclusionParagraph1, conclusionParagraph2, videoLink
	} = currentItem || {};

	return (
		<section className="tj-blog-section section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-12">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src={detailsImg || img || "/images/blog/blog-1.webp"}
									alt={title || "Blog Image"}
									width={870}
									height={450}
									style={{ height: "auto", objectFit: "cover" }}
								/>
							</div>
							<h2 className="title title-anim">{title}</h2>
							<div
								className="blog-category-two wow fadeInUp"
								data-wow-delay=".3s"
							>
								
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Date Released</span>
										<h6 className="text">{date2 || date || "29 December, 2025"}</h6>
									</div>
								</div>
								
							</div>
							<div className="blog-text">
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{paragraph1 || desc1 || desc || "In today’s competitive landscape, businesses must continuously adapt and innovate to thrive."}
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{paragraph2 || desc2 || "The curve. Whether you're looking to streamline operations, enhance customer experiences, or explore new market opportunities, our tailored solutions are designed to empower your business to achieve unparalleled success."}
								</p>
								
								{quote && (
									<blockquote className="wow fadeInUp" data-wow-delay=".3s">
										<p>{quote}</p>
										<cite>{quoteAuthor || "Eminent Insights"}</cite>
									</blockquote>
								)}

								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									{keyLessonsTitle || "Key Insights & Strategy"}
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{paragraph3 || "Unlocking your business potential requires more than just vision and ambition—it involves strategic thinking, adaptability, and an unwavering commitment to growth."}
								</p>
								<div className="images-wrap">
									<div className="">
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".3s"
											>
												<Image
													src={img1 || smallImg || "/images/blog/blog-9.webp"}
													alt="Insight 1"
													width={420}
													height={420}
													style={{ height: "auto", objectFit: "cover" }}
												/>
											</div>
										</div>
										
									</div>
								</div>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{paragraph4 || "Lastly, effective leadership that inspires and motivates stakeholders is essential in steering the initiatives toward achieving their full potential. By applying these lessons, new opportunities are unlocked."}
								</p>
								
								<ul className="wow fadeInUp" data-wow-delay=".3s">
									{checkList && checkList.length > 0 ? (
										checkList.map((item, idx) => (
											<li key={idx}>
												<span>
													<i className="tji-check"></i>
												</span>
												{item}
											</li>
										))
									) : (
										<>
											<li><span><i className="tji-check"></i></span>Embrace Innovation</li>
											<li><span><i className="tji-check"></i></span>Customer-Centric Approach</li>
											<li><span><i className="tji-check"></i></span>Effective Leadership</li>
											<li><span><i className="tji-check"></i></span>Operational Efficiency</li>
											<li><span><i className="tji-check"></i></span>Scalable Systems</li>
										</>
									)}
								</ul>
								
								{videoLink && (
									<div className="blog-video wow fadeInUp" data-wow-delay=".3s">
										<Image
											src="/images/blog/blog-video.webp"
											alt="Video"
											width={870}
											height={498}
											style={{ height: "auto", objectFit: "cover" }}
										/>
										<PopupVideo>
											<Link
												className="video-btn video-popup glightbox"
												href={videoLink}
											>
												<span>
													<i className="tji-play"></i>
												</span>
											</Link>
										</PopupVideo>
									</div>
								)}

								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									{conclusionTitle || "Conclusion"}
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{conclusionParagraph1 || "Unlocking potential is a journey that requires vision, innovation, and strategic execution."}
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{conclusionParagraph2 || "The ability to continuously learn, collaborate, and optimize operations will not only drive growth but ensure long-term sustainability."}
								</p>
							</div>
							
							

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
