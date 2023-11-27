import { Helmet } from "react-helmet-async";
import HomeBanner from "./HomeBanner";
import HomeCOntact from "./HomeCOntact";
import HomeCards from "./HomeCards";
import HomeTestimonial from "./HomeTestimonial";
import HomeVolunteer from "./HomeVolunteer";
import HomeWelcome from "./HomeWelcome";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Blood Bond | Home </title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <HomeCards></HomeCards>
            <HomeWelcome></HomeWelcome>
            <div className='lg:mt-10 mb-16'>
                <div className="hero h-[200px] lg:h-[570px]" style={{ backgroundImage: `url(https://i.ibb.co/MVmWXyX/blood-gdb0beba2c-1920-1655173703202-1655173717185.webp)` }}>
                    <div className="lg:h-[334px] h-[170px] w-10/12 bg-white lg:w-[1096px] hero-content text-center text-black">
                        <div className=" ">
                            <h1 className="lg:mb-5 lg:text-5xl text-2xl font-cinzel">Blood Bond</h1>
                            <p className="mb-5 lg:text-lg text-sm">Blood donation is a voluntary procedure that can help save lives. There are several types of blood donation. Each type helps meet different medical needs.</p>

                        </div>
                    </div>
                </div>
            </div>
            <HomeCOntact></HomeCOntact>
            <HomeVolunteer></HomeVolunteer>
            <HomeTestimonial></HomeTestimonial>

        </div>
    );
};

export default Home;