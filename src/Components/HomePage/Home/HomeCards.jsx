import img1 from '../../../assets/r1.jpg'
import img2 from '../../../assets/r2.jpg'
import img3 from '../../../assets/r3.jpg'

const HomeCards = () => {
    return (
        <div>


            <div className='lg:flex justify-center lg:space-y-0 space-y-8 lg:gap-10 md:flex-row lg:px-0 px-5 py-20 bg-[#E7E7E7] '>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                
                    <img src={img1} alt="" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Become a Donate</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give</p>
                 
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
                    <img src={img2} alt="" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Why give blood?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give</p>
                 
                </div>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             
                    <img src={img3} alt="" />
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">How Donations Help?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give</p>
                  
                </div>
            </div>

        </div>
    );
};

export default HomeCards;