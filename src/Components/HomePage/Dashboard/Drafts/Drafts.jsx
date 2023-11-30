import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import Draft from './Draft';

const Drafts = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {

        fetch('https://blood-bond-server.vercel.app/blogPublish')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div>
            <Helmet>
                <title>Blood Bond | Draft </title>
            </Helmet>



            <div className='grid my-16 lg:grid-cols-2 grid-cols-1 lg:mx-20 gap-10'>
                {
                    blog?.map(blogPublish => <Draft key={blogPublish._id} blogPublish={blogPublish}></Draft>)
                }
            </div>


        </div>
    );
};

export default Drafts