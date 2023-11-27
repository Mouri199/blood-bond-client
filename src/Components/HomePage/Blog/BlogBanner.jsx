import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import { Typewriter } from 'react-simple-typewriter'

const BlogBanner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="hero lg:h-[700px] h-[200px]" style={{ backgroundImage: 'url(https://i.ibb.co/7NwvbwB/ezgif-com-webp-to-jpg-1.jpg)' }}>

                        <div className="">
                            <div className='lg:mx-0 mx-10'>
                                <h1 className="lg:text-xl text-lg text-redclr font-bold">Donate blood,save life!
                                </h1>
                                <p className="lg:my-3 lg:text-7xl text-2xl text-white font-semibold">
                                    <Typewriter
                                        words={['YOUR BLOOD', 'CAN BRING SMILE', 'IN OTHER PERSON']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    /></p>
                                <div className='flex gap-4'>
                                    <button className="lg:p-2 p-1 rounded-xl bg-redclr text-white hover:bg-hoverclr">Contact Us</button>
                                    <button className="lg:p-2 p-1 rounded-xl bg-redclr text-white hover:bg-hoverclr">Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero lg:h-[700px] h-[200px]" style={{ backgroundImage: 'url(https://i.ibb.co/Hgkv1dK/blood-donor-stock.jpg)' }}>

                        <div className="">
                            <div className='lg:mx-0 mx-10'>
                                <h1 className="lg:text-xl text-lg text-redclr font-bold">Donate blood,save life!
                                </h1>
                                <p className="lg:my-3 lg:text-7xl text-2xl text-white font-semibold">
                                    <Typewriter
                                        words={['YOUR BLOOD', 'CAN BRING SMILE', 'IN OTHER PERSON']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    /></p>
                                <div className='flex gap-4'>
                                    <button className="lg:p-2 p-1 rounded-xl bg-redclr text-white hover:bg-hoverclr">Contact Us</button>
                                    <button className="lg:p-2 p-1 rounded-xl bg-redclr text-white hover:bg-hoverclr">Donate</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default BlogBanner;