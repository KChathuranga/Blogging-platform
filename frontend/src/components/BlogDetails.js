

const BlogDetails = ({ blogs }) => {
    return (
        <div className="blog-details">
            <h4>{blogs.title}</h4>
            <p><strong>Content</strong></p>
            <p><strong>Date</strong></p>
            <p><strong>{blogs.createdAt}</strong></p>
        </div>
    )
}

export default BlogDetails