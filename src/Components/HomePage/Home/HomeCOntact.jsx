import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
const HomeCOntact = () => {
    return (
        <div>

            <div className="hero lg:h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/YXxVnZn/call.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <p className="uppercase text-xl">Start donating</p>
                        <h1 className="my-3 lg:text-5xl text-2xl font-bold">Call Now: 333 555 9090</h1>
                        <div className="lg:flex lg:mx-0 mx-12 justify-between">
                            <div className="flex items-center">
                                <IoLocationSharp />
                                <p>
                                    House-32,Road-8,Block-D,Bashundhara
                                </p>
                            </div>
                            <div className="flex items-center">
                                <CgMail />
                                <p>
                                    mourichow206@gmail.com
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCOntact;