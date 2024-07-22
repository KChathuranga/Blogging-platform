import { useEffect, useState } from 'react'

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
                    <p key={blogs._id}>{blogs.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home;