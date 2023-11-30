
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';

const HomeTestimonial = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://blood-bond-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
      
        <div>
            <div className="my-24">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="mx-20 flex flex-col items-center my-5">
                          
                                <div className="lg:w-1/3 lg:mb-0 p-4">
                                    <div className="h-full text-center">
                                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={review.img} />
                                        <p className="leading-relaxed">{review.details}</p>
                                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                        <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">{review.name}</h2>
                                        
                                    </div>
                                </div>
                              
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default HomeTestimonial;