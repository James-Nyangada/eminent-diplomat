import BlogCategoriesWidget from "./widgets/BlogCategoriesWidget";
import BlogTagsWidget from "./widgets/BlogTagsWidget";
import RecentBlogWidget from "./widgets/RecentBlogWidget";

const BlogSidebar = ({ type }) => {
	return (
		<aside className={`tj-main-sidebar ${type == 2 ? "p-0" : ""}`}>
			{/* <!-- search --> */}
			
			{/* <!-- recent post --> */}
			<RecentBlogWidget />
			
		</aside>
	);
};

export default BlogSidebar;
