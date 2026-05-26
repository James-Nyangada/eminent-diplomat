import blogs from "../../public/fakedata/blogs";

const makeSlug = (text) => {
  return text
    ?.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
};

const getBlogs = () => {
  return blogs.map(blog => ({
    ...blog,
    id: makeSlug(blog.title)
  }));
};

export default getBlogs;
