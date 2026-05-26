import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import Image from "next/image";


const BlogCard8 = ({ blog, idx }) => {
	const {
		title,
		desc,
		id,
		img = "/images/blog/blog-1.webp",
		category,
		date,
		day,
		month,
	} = blog || {};
	return (
		<div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} loading="lazy" src={img} alt="" />
				</Link>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="title-area">
					<div className="blog-meta">
						<span className="categories">
							<Link href={`/blogs?category=${makePath(category)}`}>
								{category}
							</Link>
						</span>
						<span>
							By <Link href={`/blogs/${id}`}>Dr Joy Killong</Link>
						</span>
					</div>
					<h3 className="title">
						<Link href={`/blogs/${id}`}>{title}.</Link>
					</h3>
				</div>
				<Link className="text-btn" href={`/blogs/${id}`}>
					<span className="btn-icon">
						<i className="tji-arrow-right-long"></i>
					</span>
					<span className="btn-text">
						<span>Read More</span>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default BlogCard8;
