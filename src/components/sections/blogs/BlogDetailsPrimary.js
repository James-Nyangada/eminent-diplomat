import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
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
					<div className="col-lg-8">
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
									<div className="cate-images">
										<Image
											src="/images/testimonial/client-2.webp"
											alt="Author"
											width={89}
											height={89}
										/>
									</div>
									<div className="cate-text">
										<span className="degination">Authored by</span>
										<h6 className="title">
											<Link href={`/blogs/${id}`}>{author || "Eminent Editorial"}</Link>
										</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Date Released</span>
										<h6 className="text">{date2 || date || "29 December, 2025"}</h6>
									</div>
								</div>
								<div className="category-item">
									<div className="cate-icons">
										<i className="tji-comment"></i>
									</div>
									<div className="cate-text">
										<span className="degination">Comments</span>
										<h6 className="text">{comments?.length ? `0${comments.length} Comments` : "0 Comments"}</h6>
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
									<div className="row">
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
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".5s"
											>
												<Image
													src={img2 || "/images/blog/blog-10.webp"}
													alt="Insight 2"
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
							<div className="tj-tags-post wow fadeInUp" data-wow-delay=".3s">
								<div className="tagcloud">
									<span>Tags:</span>
									{tags?.length
										? tags?.map((tag, idx) => (
												<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
													{tag}
												</Link>
										  ))
										: ""}
								</div>
								<div className="post-share">
									<ul>
										<li> Share:</li>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="tj-post__navigation  wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/blogs/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/blogs"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/blogs/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>

							<div className="tj-comments-container">
								<div className="tj-comments-wrap">
									<div className="comments-title">
										<h3 className="title">Top Comments</h3>
									</div>
									<div className="tj-latest-comments">
										<ul>
											<li className="tj-comment">
												<div className="comment-content">
													<div className="comment-avatar">
														<Image
															src="/images/blog/avatar-1.webp"
															alt="Image"
															width={64}
															height={64}
															style={{ height: "auto" }}
														/>
													</div>
													<div className="comments-header">
														<div className="avatar-name">
															<h6 className="title">
																<Link href={`/blogs/${id}`}>Great insights!</Link>
															</h6>
														</div>
														<div className="comment-text">
															<span className="date">
																June 18, 2024 at 06:00 pm
															</span>
															<Link className="reply" href={`/blogs/${id}`}>
																Reply
															</Link>
														</div>
														<div className="desc">
															<p>
																"I completely agree that embracing innovation
																and leveraging data are crucial for any organization
																looking to stay competitive in today's market.
																The focus on leadership and adaptability really
																resonated with me. Looking forward to
																implementing these strategies."
															</p>
														</div>
													</div>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="tj-comments__container">
									<div className="comment-respond">
										<h3 className="comment-reply-title">Leave a Comment</h3>
										<div className="row">
											<div className="col-lg-12">
												<div className="form-input">
													<textarea
														id="comment"
														name="message"
														placeholder="Write Your Comment *"
													></textarea>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="text"
														id="name"
														name="name"
														placeholder="Full Name *"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="email"
														id="emailOne"
														name="name"
														placeholder="Your Email *"
														required=""
													/>
												</div>
											</div>
											<div className="col-lg-4">
												<div className="form-input">
													<input
														type="text"
														id="website"
														name="name"
														placeholder="Website"
														required=""
													/>
												</div>
											</div>
											<div className="comments-btn">
												<ButtonPrimary text={"Submit Now"} type={"submit"} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogDetailsPrimary;
