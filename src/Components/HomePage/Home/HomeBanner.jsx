import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import { Typewriter } from 'react-simple-typewriter'
import { FaArrowRightToBracket } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const HomeBanner = () => {
    return (
        <div>
            <div >
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className="hero lg:h-[700px] h-[200px]" style={{ backgroundImage: 'url(https://i.ibb.co/9VDzYWd/hm33.png)' }}>

                            <div className="">
                                <div className='lg:mx-0 mx-10'>
                                    <h1 className="lg:text-5xl text-2xl text-redclr font-bold">Donate Blood!
                                    </h1>
                                    <p className="my-3 lg:text-7xl text-3xl text-white font-semibold">
                                        <Typewriter
                                            words={['Donate Blood', 'And Inspire', 'Others.']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </p>

                                </div>
                                <div className='flex gap-4'>
                                    <Link to='/contactus'><button className="lg:p-2 p-1 rounded-xl bg-redclr text-white hover:bg-hoverclr">Contact Us</button></Link>
                                    <button className="lg:p-2 p-1 rounded-xl bg-redclr text-white hover:bg-hoverclr">Donate</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="hero lg:h-[700px] h-[200px]" style={{ backgroundImage: 'url(https://i.ibb.co/bv2kpqJ/r1.jpg)' }}>

                            <div className="">
                                <div className='lg:mx-0 mx-10'>
                                    <h1 className="lg:text-5xl text-2xl  text-redclr font-bold">Donate Blood!</h1>
                                    <p className="my-3 lg:text-7xl text-3xl text-white font-semibold">
                                        <Typewriter
                                            words={['Donate Blood', 'And Inspire', 'Others.']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}

                                        />
                                    </p>

                                </div>
                                <div className='flex gap-4'>
                                    <Link to='/contactus'><button className="lg:p-2 p-1 rounded-xl bg-redclr text-white hover:bg-hoverclr">Contact Us</button></Link>
                                    <button className="lg:p-2 p-1 rounded-xl bg-redclr text-white hover:bg-hoverclr">Donate</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='lg:flex justify-center bg-[#E7E7E7]'>
                <div className='bg-black p-5  lg:w-[500px] text-white'>
                    <h3 className='lg:text-4xl font-bold'>Join as a Donor</h3>
                    <div className='flex items-center'>
                        <p className='my-3'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain</p>
                        <button> <FaArrowRightToBracket className='w-20' /></button>
                    </div>
                </div>
                <div className='bg-redclr p-5 lg:w-[500px] text-white'>
                    <h3 className='lg:text-4xl font-bold'>Search Donors</h3>
                    <div className='flex items-center'>
                        <p className='my-3'>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain</p>
                        <button> <FaArrowRightToBracket className='w-20' /></button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomeBanner;