import { useEffect, useState } from 'react'

//Components
import BlogDetails from '../components/BlogDetails'

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('/api/blogs')
            const json = await response.json();

            if(response.ok){
                setBlogs(json)
            }
        }

        fetchBlogs()
    }, [])

    return (
        <div className="home">
            <div className="blogs">
                {blogs && blogs.map(() => (
                    <BlogDetails key={blogs._id}  blogs={blogs} />
                ))}
            </div>
        </div>
    )
}

export default Home;