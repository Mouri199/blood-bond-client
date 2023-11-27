import img from '../../../assets/UVG5CCF.jpeg'
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import './Welcome.css'

const HomeWelcome = () => {
    return (
        <div>
            <div className="lg:flex items-center  justify-center py-20">
                <div>
                    <img className='lg:w-[400px] lg:mx-0 mx-16 w-[300px]' src={img} alt="" />
                </div>
                <div className='lg:ml-20 lg:mx-0 md:mx-10'>
                    <p className='lg:text-5xl dark:text-white lg:text-start text-center font-semibold'>About Us</p>
                    <p className='lg:text-3xl dark:text-white lg:text-start text-center  font-bold my-5'>Welcome to <span className='text-redclr'>Blood Bond Organization</span></p>
                    <div className='flex justify-between text-lg lg:mx-0 mx-10 dark:text-white gap-10'>
                        <div>
                            <div className='flex items-center gap-3'>
                                <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight> <p>Good Service</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight> <p className='my-4'> Help People</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p>Hugine Tools</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-3'>
                                <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p>24h Service</p>
                            </div>

                            <div className='flex items-center gap-3'>
                                <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p className='my-4'>Health Check</p>
                            </div>

                            <div className='flex items-center  gap-3'>
                                <MdKeyboardDoubleArrowRight className='text-redclr'></MdKeyboardDoubleArrowRight><p>Blood Bank</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:justify-start justify-center'>
                        <button className='btn my-4 bg-redclr text-white dark:bg-gray-800 hover:bg-slate-600'>About More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeWelcome;