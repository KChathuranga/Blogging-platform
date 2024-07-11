import { useEffect, useState } from "react";

const Home = () => {
    
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch('https://localhost:4000/api/blogs')
            const json = await response.json();

            if(response.ok){
                setBlogs(json)
            }
        }

        fetchBlogs()
    }, [])

    return (
        <div className="home">
            <h2>Home Page</h2>
        </div>
    )
}

export default Home;