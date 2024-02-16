import { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import Draft from './Draft';
import useBlog from '../../../Hook/useBlog';

const Drafts = () => {
    const [blog, refetch, isLoading] = useBlog()
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