
import { Link } from 'react-router-dom';
const Blogs = ({ blogs }) => {
    const { title, img, content, _id } = blogs || {}


    console.log(blogs);


    return (
        <div>
            <div className="lg:w-[600px] lg:h-[700px] lg:mx-0 mx-5 bg-white border border-gray-200 rounded-lg shadow  ">
                <a href="#">
                    <img className="rounded-t-lg lg:h-[300px]  h-[200px] w-[600px] lg:w-[600px]" src={img} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 ">{content}</p>


                    <Link to={`/blogDetails/${_id}`} href="#" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none ">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Blogs;