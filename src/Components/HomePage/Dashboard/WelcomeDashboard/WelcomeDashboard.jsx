import welcome from '../../../../assets/welcome.png'

const WelcomeDashboard = () => {
    return (
        <div>
            <img className='lg:h-[700px] lg:w-full max-w-[900px] mx-auto' src={welcome} alt="" />
        </div>
    );
};

export default WelcomeDashboard;