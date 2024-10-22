import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types'
const Blogs = ({handleAddBookmark,handleReadTime}) => {
    let [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/public/Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <div className="md:flex justify-between">
                <div className="md:w-4/5">
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookmark={handleAddBookmark} handleReadTime={handleReadTime}></Blog>)
                    }
                </div>
            </div>
        </>
    );
};
Blogs.propTypes = {
    blogs: PropTypes.func.isRequired,
    handleAddBookmark:PropTypes.func,
    handleReadTime:PropTypes.func
}

export default Blogs;