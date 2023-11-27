import { useEffect, useState } from 'react';

import Blogs from './Blogs';
import BlogBanner from './BlogBanner';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {

        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Blood Bond | Blog </title>
            </Helmet>

            <BlogBanner></BlogBanner>

            <div className='grid my-16 grid-cols-1 max-w-[600px] mx-auto gap-10'>
                {
                    blog?.map(blogs => <Blogs key={blogs.id} blogs={blogs}></Blogs>)
                }
            </div>


        </div>
    );
};

export default Blog;