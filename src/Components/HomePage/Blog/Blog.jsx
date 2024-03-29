import { useEffect, useState } from 'react';

import Blogs from './Blogs';
import BlogBanner from './BlogBanner';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {

        fetch('https://blood-bond-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Blood Bond | Blog </title>
            </Helmet>



            <div className='grid my-16 lg:grid-cols-2 grid-cols-1 lg:mx-20 gap-10'>
                {
                    blog?.map(blogs => <Blogs key={blogs._id} blogs={blogs}></Blogs>)
                }
            </div>


        </div>
    );
};

export default Blog;